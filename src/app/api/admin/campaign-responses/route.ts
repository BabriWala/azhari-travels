import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/db";
import { requireAdmin, getAdminActor } from "../../../lib/adminAuth";
import { ok, fail } from "../../../lib/api";
import { CampaignConfig, mappedAnswers, qualificationStatuses } from "../../../lib/campaigns";

export async function GET(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    const query = request.nextUrl.searchParams;
    const records = await prisma.campaignResponse.findMany({ where: { ...(query.get("campaign") ? { campaignId: query.get("campaign")! } : {}), leadId: query.get("lead") || { not: null } }, orderBy: { createdAt: "desc" }, include: { campaign: true, lead: { include: { reminders: true, _count: { select: { conversations: true } } } } } });
    const rows = records.map(({ tokenHash: _secret, campaign, lead, snapshot, answers: json, tracking: source, ...r }) => {
        const config = JSON.parse(snapshot) as CampaignConfig, answers = JSON.parse(json), tracking = JSON.parse(source);
        return { ...r, campaign: campaign.title, campaignSlug: campaign.slug, service: campaign.service, name: lead!.name, phone: lead!.phone, email: lead!.email, owner: lead!.owner, status: lead!.status, source: tracking.utm_source || lead!.source, mapped: mappedAnswers(config, answers), answers: config.questions.filter(q => answers[q.id] !== undefined).map(q => ({ question: q.label, answer: answers[q.id] })), tracking, steps: config.steps.length, stepName: config.steps[r.step], pending: lead!.reminders.filter(x => x.status === "pending").length, overdue: lead!.reminders.some(x => x.status === "pending" && x.dueAt <= new Date()), activity: lead!._count.conversations };
    });
    const needle = (query.get("q") || "").toLowerCase();
    const filtered = rows.filter(r => {
        for (const key of ["qualification", "owner", "service", "status", "source"] as const) if (query.get(key) && r[key] !== query.get(key)) return false;
        for (const key of ["passport", "budget", "location", "education", "experience"] as const) if (query.get(key) && !(r.mapped[key] || "").toLowerCase().includes(query.get(key)!.toLowerCase())) return false;
        if (needle && !JSON.stringify([r.name, r.phone, r.email, r.answers, r.tracking]).toLowerCase().includes(needle)) return false;
        if (query.get("minScore") && r.score < Number(query.get("minScore")) || query.get("maxScore") && r.score > Number(query.get("maxScore"))) return false;
        const day = r.createdAt.toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" });
        if (query.get("from") && day < query.get("from")! || query.get("to") && day > query.get("to")!) return false;
        if (query.get("followup") === "pending" && !r.pending || query.get("followup") === "overdue" && !r.overdue || query.get("followup") === "none" && r.pending) return false;
        return true;
    });
    if (query.get("sort") === "score") filtered.sort((a, b) => b.score - a.score);
    if (query.get("sort") === "oldest") filtered.reverse();
    const unique = (items: typeof rows) => new Set(items.map(r => r.leadId)).size;
    const total = unique(rows), qualified = unique(rows.filter(r => ["Qualified", "Hot", "Converted"].includes(r.qualification))), converted = unique(rows.filter(r => r.qualification === "Converted"));
    const campaign = query.get("campaign") ? await prisma.campaign.findUnique({ where: { id: query.get("campaign")! } }) : null;
    const summary = { leads: total, assessments: rows.length, partial: rows.filter(r => !r.completedAt).length, qualified, converted, conversionRate: total ? converted / total * 100 : 0, spend: campaign?.spend ?? null, currency: campaign?.currency ?? null, costPerLead: campaign && total ? campaign.spend / total : null, costPerQualifiedLead: campaign && qualified ? campaign.spend / qualified : null };
    const team = [...new Set(rows.map(r => r.owner))].map(owner => {
        const assigned = rows.filter(r => r.owner === owner), leads = [...new Map(assigned.map(r => [r.leadId, r])).values()];
        return { owner, leads: leads.length, pending: leads.reduce((s, r) => s + r.pending, 0), activity: leads.reduce((s, r) => s + r.activity, 0), converted: unique(assigned.filter(r => r.qualification === "Converted")) };
    });
    const ads = [...new Set(rows.map(r => `${r.tracking.campaign_id || r.tracking.utm_campaign || r.campaign} / ${r.tracking.adset_id || "—"} / ${r.tracking.ad_id || r.tracking.utm_content || "—"}`))].map(ad => {
        const items = rows.filter(r => `${r.tracking.campaign_id || r.tracking.utm_campaign || r.campaign} / ${r.tracking.adset_id || "—"} / ${r.tracking.ad_id || r.tracking.utm_content || "—"}` === ad);
        return { ad, leads: unique(items), qualified: unique(items.filter(r => ["Qualified", "Hot", "Converted"].includes(r.qualification))) };
    }).sort((a, b) => b.qualified - a.qualified);
    if (query.get("export") === "csv") {
        const escape = (v: unknown) => { let s = String(v ?? ""); if (/^[\s]*[=+@-]/.test(s)) s = "'" + s; return '"' + s.replace(/"/g, '""') + '"'; };
        const columns = ["name", "phone", "email", "campaign", "service", "owner", "status", "qualification", "score", "stepName", "source", "createdAt", "answers", "tracking"] as const;
        const csv = [columns.join(","), ...filtered.map(r => columns.map(k => escape(typeof r[k] === "object" ? JSON.stringify(r[k]) : r[k])).join(","))].join("\r\n");
        return new NextResponse("\uFEFF" + csv, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="campaign-leads.csv"', "Cache-Control": "no-store" } });
    }
    const page = Math.max(1, Number(query.get("page")) || 1), limit = 25;
    return ok({ rows: filtered.slice((page - 1) * limit, page * limit), total: filtered.length, page, limit, summary, team, ads, options: { owners: [...new Set(rows.map(r => r.owner))], services: [...new Set(rows.map(r => r.service))], statuses: [...new Set(rows.map(r => r.status))], sources: [...new Set(rows.map(r => r.source))] } }, { headers: { "Cache-Control": "no-store" } });
}
export async function PATCH(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || typeof body.id !== "string" || !qualificationStatuses.includes(body.qualification)) return fail("Choose a qualification status.", 422);
    const response = await prisma.campaignResponse.findUnique({ where: { id: body.id } });
    if (!response?.leadId) return fail("Assessment not found.", 404);
    await prisma.$transaction(async tx => {
        await tx.campaignResponse.update({ where: { id: response.id }, data: { qualification: body.qualification, manualQualification: true } });
        await tx.leadConversation.create({ data: { leadId: response.leadId!, party: "system", author: (await getAdminActor(request))!.name, text: `Assessment qualification changed from ${response.qualification} to ${body.qualification}.` } });
    });
    return ok({ saved: true });
}
