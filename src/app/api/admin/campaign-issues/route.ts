import { NextRequest } from "next/server";
import { prisma } from "../../../lib/db";
import { requireAdmin } from "../../../lib/adminAuth";
import { fail, ok } from "../../../lib/api";

export async function GET(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    const [issues, count, campaigns] = await Promise.all([
        prisma.campaignFormIssue.findMany({ where: request.nextUrl.searchParams.get("resolved") === "true" ? { resolvedAt: { not: null } } : { resolvedAt: null }, orderBy: { updatedAt: "desc" }, take: 100 }),
        prisma.campaignFormIssue.count({ where: { resolvedAt: null } }),
        prisma.campaign.findMany({ select: { id: true, title: true, slug: true } }),
    ]);
    return ok({ issues: issues.map(i => ({ ...i, campaign: campaigns.find(c => c.id === i.campaignId) })), count }, { headers: { "Cache-Control": "no-store" } });
}
export async function PATCH(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || typeof body.id !== "string") return fail("Choose an issue.", 422);
    const result = await prisma.campaignFormIssue.updateMany({ where: { id: body.id }, data: { resolvedAt: new Date() } });
    return result.count ? ok({ resolved: true }) : fail("Issue not found.", 404);
}
