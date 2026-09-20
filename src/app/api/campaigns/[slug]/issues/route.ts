import { createHash } from "node:crypto";
import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/db";
import { fail, ok } from "../../../../lib/api";
import { CampaignConfig } from "../../../../lib/campaigns";
import { recordCampaignIssue } from "../../../../lib/campaignIssues";

export async function POST(request: NextRequest, context: { params: Promise<{ slug: string }> }) {
    const protocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim() === "https" ? "https:" : request.nextUrl.protocol;
    if (request.headers.get("origin") !== `${protocol}//${request.headers.get("host") || request.nextUrl.host}`) return fail("Invalid origin.", 403);
    if (Number(request.headers.get("content-length")) > 2000) return fail("Request too large.", 413);
    const raw = await request.text(); if (raw.length > 2000) return fail("Request too large.", 413);
    let body; try { body = JSON.parse(raw); } catch { return fail("Invalid issue.", 422); }
    const messages: Record<string, string> = { required: "A required answer was missing.", invalid: "An answer did not match the required format or choices.", network: "The browser could not reach the server while saving. The visitor was asked to retry.", rejected: "The server rejected a save. The visitor was shown recovery instructions." };
    if (!body || typeof body.code !== "string" || !Object.hasOwn(messages, body.code) || !Number.isInteger(body.step) || typeof body.questionId !== "string" || body.questionId.length > 60) return fail("Invalid issue.", 422);
    const { slug } = await context.params;
    const campaign = await prisma.campaign.findUnique({ where: { slug } });
    if (!campaign?.published || campaign.deletedAt) return fail("Campaign unavailable.", 404);
    const token = request.cookies.get(`az_assessment_${slug}`)?.value;
    const saved = token ? await prisma.campaignResponse.findFirst({ where: { campaignId: campaign.id, tokenHash: createHash("sha256").update(token).digest("hex") } }) : null;
    const config: CampaignConfig = JSON.parse(saved?.snapshot || campaign.config);
    if (body.step < 0 || body.step >= config.steps.length) return fail("Invalid step.", 422);
    const question = config.questions.find(q => q.id === body.questionId && q.step === body.step);
    if (body.questionId && !question) return fail("Invalid question.", 422);
    const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const hour = Math.floor(Date.now() / 3600000), id = createHash("sha256").update(`issues:${ip}:${hour}`).digest("hex");
    const rate = await prisma.campaignRateLimit.upsert({ where: { id }, create: { id, expiresAt: new Date((hour + 1) * 3600000) }, update: { count: { increment: 1 } } });
    if (rate.count > 60) return fail("Too many reports.", 429);
    await prisma.campaignRateLimit.deleteMany({ where: { expiresAt: { lt: new Date(Date.now() - 86400000) } } });
    await recordCampaignIssue(campaign.id, body.step, body.questionId, body.code, `${question ? question.label + ": " : ""}${messages[body.code]}`);
    return ok({ recorded: true });
}
