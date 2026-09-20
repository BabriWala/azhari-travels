import { randomBytes, createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/db";
import { fail } from "../../../lib/api";
import { CampaignConfig, publicConfig, validateAnswers, evaluate, mappedAnswers, nextStep } from "../../../lib/campaigns";
import { normalizeLeadPhone } from "../../../lib/leadImport";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const hash = (s: string) => createHash("sha256").update(s).digest("hex");
type Context = { params: Promise<{ slug: string }> };
const cookieName = (slug: string) => `az_assessment_${slug}`;
async function load(request: NextRequest, slug: string) {
    const campaign = await prisma.campaign.findUnique({ where: { slug } });
    if (!campaign?.published || campaign.deletedAt) return null;
    const token = request.cookies.get(cookieName(slug))?.value;
    const saved = token ? await prisma.campaignResponse.findFirst({ where: { campaignId: campaign.id, tokenHash: hash(token), leadId: { not: null } } }) : null;
    return { campaign, saved, token, config: JSON.parse(saved?.snapshot || campaign.config) as CampaignConfig };
}
export async function GET(request: NextRequest, context: Context) {
    const { slug } = await context.params;
    const data = await load(request, slug); if (!data) return fail("This campaign is not available.", 404);
    return NextResponse.json({ title: data.campaign.title, service: data.campaign.service, config: publicConfig(data.config), saved: data.saved ? { answers: JSON.parse(data.saved.answers), step: data.saved.step, version: data.saved.version, completed: !!data.saved.completedAt } : null }, { headers: { "Cache-Control": "private, no-store" } });
}
export async function POST(request: NextRequest, context: Context) {
    const origin = request.headers.get("origin");
    // Next's internal origin can be localhost behind the production HTTPS proxy.
    const protocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim() === "https" ? "https:" : request.nextUrl.protocol;
    const publicOrigin = `${protocol}//${request.headers.get("host") || request.nextUrl.host}`;
    if (!origin || origin !== publicOrigin) return fail("Please submit from this website.", 403);
    if (Number(request.headers.get("content-length")) > 100000) return fail("Response is too large.", 413);
    const { slug } = await context.params;
    const data = await load(request, slug); if (!data) return fail("This campaign is not available.", 404);
    const body = await request.json().catch(() => null);
    if (!body || body.website || typeof body.complete !== "boolean" || !Number.isInteger(body.step) || body.step < 0 || body.step >= data.config.steps.length || !Number.isInteger(body.version)) return fail("Invalid form submission.", 422);
    if (data.saved?.completedAt) return NextResponse.json({ completed: true, version: data.saved.version });
    if (body.version !== (data.saved?.version ?? 0)) return fail("This form was updated in another tab. Reload to continue safely.", 409);
    // Keep write bursts bounded; hashed IP buckets expire and contain no answers.
    const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const window = Math.floor(Date.now() / 3600000);
    const bucket = await prisma.campaignRateLimit.upsert({ where: { id: hash(`${ip}:${window}`) }, create: { id: hash(`${ip}:${window}`), expiresAt: new Date((window + 1) * 3600000) }, update: { count: { increment: 1 } } });
    if (bucket.count > 300) return fail("Too many requests. Please try again later.", 429);
    await prisma.campaignRateLimit.deleteMany({ where: { expiresAt: { lt: new Date(Date.now() - 86400000) } } });
    try {
        const answers = validateAnswers(data.config, body.answers, body.step, body.complete);
        const mapped = mappedAnswers(data.config, answers);
        const rating = evaluate(data.config, answers, body.complete);
        const token = data.token && data.saved ? data.token : randomBytes(32).toString("hex");
        const tracking: Record<string, string> = {};
        for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "campaign_id", "adset_id", "ad_id", "referrer", "landing_page"]) if (typeof body.tracking?.[key] === "string") tracking[key] = body.tracking[key].slice(0, 1000);
        const result = await prisma.$transaction(async tx => {
            if (!await tx.campaign.findFirst({ where: { id: data.campaign.id, published: true, deletedAt: null } })) throw new Error("This campaign is no longer accepting responses.");
            const current = data.saved ? await tx.campaignResponse.findUnique({ where: { id: data.saved.id } }) : null;
            if (current && current.version !== body.version) throw new Error("This form changed in another tab. Reload before continuing.");
            if (current?.completedAt) return current;
            if (current?.manualQualification) rating.qualification = current.qualification;
            const previousLead = current?.leadId ? await tx.lead.findUnique({ where: { id: current.leadId } }) : null;
            const phones = [mapped.phone, mapped.whatsapp].filter(Boolean).map(normalizeLeadPhone);
            const email = mapped.email?.toLowerCase();
            const contacts = phones.length || email ? await tx.lead.findMany({ select: { id: true, phone: true, whatsapp: true, secondaryPhone: true, email: true } }) : [];
            const matches = contacts.filter(l => l.id !== previousLead?.id && (phones.some(p => [l.phone, l.whatsapp, l.secondaryPhone].some(v => normalizeLeadPhone(v) === p)) || email && l.email?.trim().toLowerCase() === email));
            // Ambiguous identities stay separate for review; never merge different people's history.
            let lead = previousLead;
            const ownedDraft = lead?.importKey === `assessment:${current?.id}`;
            if ((!lead || ownedDraft) && matches.length === 1) lead = await tx.lead.findUnique({ where: { id: matches[0].id } });
            const values = { name: mapped.name || "Partial website enquiry", phone: mapped.phone || mapped.whatsapp || "", email: email || null, whatsapp: mapped.whatsapp || "", service: mapped.service || data.campaign.service };
            const extras = Object.fromEntries(data.config.questions.filter(q => answers[q.id] !== undefined).map(q => [q.label, Array.isArray(answers[q.id]) ? (answers[q.id] as string[]).join(", ") : String(answers[q.id])]));
            if (!lead) lead = await tx.lead.create({ data: { ...values, message: "", source: tracking.utm_source || (tracking.fbclid ? "facebook" : "website"), form: data.campaign.title, owner: data.campaign.defaultOwner, status: "New", extraFields: JSON.stringify(extras) } });
            else if (ownedDraft && lead.id === previousLead?.id) lead = await tx.lead.update({ where: { id: lead.id }, data: { ...values, extraFields: JSON.stringify(extras) } });
            const saved = current ? await tx.campaignResponse.update({ where: { id: current.id }, data: { answers: JSON.stringify(answers), step: body.step, ...rating, completedAt: body.complete ? new Date() : null, leadId: lead.id, version: { increment: 1 } } })
                : await tx.campaignResponse.create({ data: { campaignId: data.campaign.id, leadId: lead.id, tokenHash: hash(token), snapshot: JSON.stringify(data.config), answers: JSON.stringify(answers), tracking: JSON.stringify(tracking), step: body.step, version: 1, ...rating, completedAt: body.complete ? new Date() : null } });
            if (!previousLead && !matches.length) await tx.lead.update({ where: { id: lead.id }, data: { importKey: `assessment:${saved.id}` } });
            if (ownedDraft && previousLead && previousLead.id !== lead.id) {
                await tx.leadConversation.updateMany({ where: { leadId: previousLead.id }, data: { leadId: lead.id } });
                await tx.leadReminder.updateMany({ where: { leadId: previousLead.id }, data: { leadId: lead.id } });
                // Keep any staff-managed record intact; only remove an untouched draft shell.
                if (previousLead.owner === data.campaign.defaultOwner && previousLead.status === "New" && !await tx.leadDailyWork.count({ where: { leadId: previousLead.id } })) await tx.lead.delete({ where: { id: previousLead.id } });
            }
            await tx.leadConversation.create({ data: { leadId: lead.id, party: "system", author: "Campaign assessment", text: `${data.campaign.title}: ${body.complete ? "completed" : `saved step ${body.step + 1}`} · ${rating.qualification} · score ${rating.score}/100${matches.length > 1 ? " · Contact matches multiple records; review needed" : ""}` } });
            return saved;
        }, { timeout: 15000 });
        const response = NextResponse.json({ version: result.version, completed: !!result.completedAt, answers: JSON.parse(result.answers), nextStep: nextStep(data.config, JSON.parse(result.answers), body.step) });
        response.headers.set("Cache-Control", "private, no-store");
        response.cookies.set(cookieName(slug), token, { httpOnly: true, secure: protocol === "https:", sameSite: "lax", path: `/api/campaigns/${slug}`, maxAge: 30 * 86400 });
        return response;
    } catch (error) {
        if ((error as { code?: string }).code) return fail("Could not save your progress. Please retry.", 503);
        return fail(error instanceof Error ? error.message : "Could not save your progress. Please retry.", 422);
    }
}
