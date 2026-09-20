import { createHash } from "node:crypto";
import { prisma } from "./db";

// Group identical problems per campaign/day. Never store answers, tokens or raw exceptions.
export async function recordCampaignIssue(campaignId: string, step: number, questionId: string, code: string, message: string) {
    const id = createHash("sha256").update(JSON.stringify([campaignId, step, questionId, code, new Date().toISOString().slice(0, 10)])).digest("hex");
    try {
        await prisma.campaignFormIssue.upsert({ where: { id }, create: { id, campaignId, step, questionId, code, message }, update: { occurrences: { increment: 1 }, resolvedAt: null, message } });
    } catch { console.error("Unable to record campaign form issue", { campaignId, code }); }
}
