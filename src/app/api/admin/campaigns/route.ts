import { NextRequest } from "next/server";
import { prisma } from "../../../lib/db";
import { requireAdmin, getAdminActor } from "../../../lib/adminAuth";
import { ok, fail } from "../../../lib/api";
import { validateConfig } from "../../../lib/campaigns";

export async function GET(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    const [campaigns, people, user] = await Promise.all([prisma.campaign.findMany({ orderBy: { createdAt: "desc" } }), prisma.leadPerson.findMany({ orderBy: { name: "asc" } }), getAdminActor(request)]);
    return ok({ campaigns: campaigns.map(c => ({ ...c, config: JSON.parse(c.config) })), people, user }, { headers: { "Cache-Control": "no-store" } });
}
export async function POST(request: NextRequest) {
    const denied = await requireAdmin(request); if (denied) return denied;
    if (Number(request.headers.get("content-length")) > 150000) return fail("Campaign is too large.", 413);
    const body = await request.json().catch(() => null);
    try {
        if (!body || typeof body !== "object") throw new Error("Campaign details are missing. Reopen the editor and try saving again.");
        if (typeof body.title !== "string" || !body.title.trim() || body.title.length > 200) throw new Error("Campaign title is missing or too long. Enter a title of 1–200 characters in Campaign.");
        if (typeof body.slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.slug) || body.slug.length > 80) throw new Error("The landing page URL is invalid. Use up to 80 lowercase letters, numbers and hyphens, for example study-in-egypt.");
        if (typeof body.service !== "string" || body.service.length > 200) throw new Error("Service text is too long. Use up to 200 characters or leave it empty.");
        if (typeof body.published !== "boolean") throw new Error("Publication status is invalid. Use the Published checkbox to select draft or live.");
        if (!Number.isFinite(body.spend) || body.spend < 0 || body.spend > 1e12) throw new Error("Campaign spend must be a number between 0 and 1,000,000,000,000. Enter 0 when no spend has been recorded.");
        if (!/^[A-Z]{3}$/.test(body.currency)) throw new Error("Currency needs three uppercase letters, for example BDT or USD.");
        if (typeof body.defaultOwner !== "string") throw new Error("Choose an assigned team member or Unassigned from the dropdown.");
        const config = validateConfig(body.config);
        if (body.defaultOwner !== "Unassigned" && !await prisma.leadPerson.findUnique({ where: { name: body.defaultOwner } })) throw new Error("The selected team member is unavailable. Choose a current team member or Unassigned, then save again.");
        const data = { title: body.title.trim(), slug: body.slug, service: body.service, published: body.published, config: JSON.stringify(config), spend: body.spend, currency: body.currency, defaultOwner: body.defaultOwner };
        const campaign = await prisma.$transaction(async tx => {
            if (body.id) {
                const previous = await tx.campaign.findUnique({ where: { id: body.id } });
                if (!previous) throw new Error("Campaign not found.");
                if (previous.deletedAt) throw new Error("Restore this campaign before editing it.");
                if (previous.slug !== body.slug) throw new Error("The campaign URL cannot change after creation. Create another campaign for a new URL.");
            }
            const saved = body.id ? await tx.campaign.update({ where: { id: body.id }, data }) : await tx.campaign.create({ data });
            await tx.activityLog.create({ data: { entity: "campaign", entityId: saved.id, action: body.id ? "update" : "create", message: `${(await getAdminActor(request))!.name}: ${saved.title}` } });
            return saved;
        });
        return ok({ ...campaign, config: JSON.parse(campaign.config) });
    } catch (error) { return fail((error as { code?: string }).code === "P2002" ? "That campaign URL is already in use. Choose a different URL slug, such as study-in-egypt-2026." : (error as { code?: string }).code ? "The server could not save this campaign. Your editor changes remain here; retry shortly or ask the administrator to check database availability." : error instanceof Error ? error.message : "Could not save campaign. Retry shortly; keep the editor open to retain your changes.", 422); }
}

export async function DELETE(request: NextRequest) {
    const denied = await requireAdmin(request); if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || typeof body.id !== "string" || typeof body.confirmation !== "string") return fail("Confirm the campaign URL to delete it.", 422);
    const campaign = await prisma.campaign.findUnique({ where: { id: body.id } });
    if (!campaign) return fail("Campaign not found.", 404);
    if (body.confirmation !== campaign.slug) return fail("The confirmation must match the campaign URL slug.", 422);
    await prisma.$transaction([
        prisma.campaign.update({ where: { id: campaign.id }, data: { deletedAt: new Date(), published: false } }),
        prisma.activityLog.create({ data: { action: "delete", entity: "campaign", entityId: campaign.id, message: `${(await getAdminActor(request))!.name} removed ${campaign.title}; lead history retained.` } }),
    ]);
    return ok({ deleted: true });
}
export async function PATCH(request: NextRequest) {
    const denied = await requireAdmin(request); if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || typeof body.id !== "string" || body.action !== "restore") return fail("Choose a campaign to restore.", 422);
    const campaign = await prisma.campaign.findUnique({ where: { id: body.id } });
    if (!campaign) return fail("Campaign not found.", 404);
    await prisma.$transaction([
        prisma.campaign.update({ where: { id: campaign.id }, data: { deletedAt: null, published: false } }),
        prisma.activityLog.create({ data: { action: "restore", entity: "campaign", entityId: campaign.id, message: `${(await getAdminActor(request))!.name} restored ${campaign.title} as a draft.` } }),
    ]);
    return ok({ restored: true });
}
