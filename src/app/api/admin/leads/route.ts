import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../lib/adminAuth";
import { prisma } from "../../../lib/db";

export const runtime = "nodejs";
export async function DELETE(request: NextRequest) {
    const denied = requireAdmin(request); if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || !Array.isArray(body.ids) || !body.ids.length || body.ids.length > 5000 || !body.ids.every((id: unknown) => typeof id === "string" && id.length > 0) || new Set(body.ids).size !== body.ids.length || body.confirmations !== 3 || body.confirmation !== `DELETE ${body.ids.length}`) {
        return NextResponse.json({ error: "Complete all three deletion confirmations for the selected leads." }, { status: 422 });
    }
    const deleted = await prisma.$transaction(async tx => {
        // Keep the operation atomic, including private audio and conversation history.
        await tx.leadConversation.deleteMany({ where: { leadId: { in: body.ids } } });
        return tx.lead.deleteMany({ where: { id: { in: body.ids } } });
    });
    return NextResponse.json({ deleted: deleted.count });
}
export async function GET(request: NextRequest) {
    const denied = requireAdmin(request); if (denied) return denied;
    const [leads, stages, people] = await Promise.all([
        prisma.lead.findMany({ orderBy: { updatedAt: "desc" }, include: { _count: { select: { conversations: true } } } }),
        prisma.leadStage.findMany({ orderBy: { sortOrder: "asc" } }), prisma.leadPerson.findMany({ orderBy: { name: "asc" } }),
    ]);
    return NextResponse.json({ leads, stages, people }, { headers: { "Cache-Control": "no-store" } });
}
export async function POST(request: NextRequest) {
    const denied = requireAdmin(request); if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || !["stage", "person"].includes(body.kind) || typeof body.name !== "string" || !body.name.trim() || body.name.length > 100)
        return NextResponse.json({ error: "Enter a name of 1–100 characters." }, { status: 422 });
    const name = body.name.trim();
    const item = body.kind === "stage"
        ? await prisma.leadStage.upsert({ where: { name }, update: {}, create: { name, sortOrder: await prisma.leadStage.count() } })
        : await prisma.leadPerson.upsert({ where: { name }, update: {}, create: { name } });
    return NextResponse.json(item);
}
export async function PATCH(request: NextRequest) {
    const denied = requireAdmin(request); if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || !Array.isArray(body.ids) || !body.ids.length || body.ids.length > 5000 || !body.ids.every((id: unknown) => typeof id === "string") || !["owner", "status"].includes(body.field) || typeof body.value !== "string")
        return NextResponse.json({ error: "Invalid lead update." }, { status: 422 });
    const exists = body.field === "status" ? await prisma.leadStage.findUnique({ where: { name: body.value } })
        : body.value === "Unassigned" || await prisma.leadPerson.findUnique({ where: { name: body.value } });
    if (!exists) return NextResponse.json({ error: "Choose an existing stage or team member." }, { status: 422 });
    await prisma.$transaction(async tx => {
        const leads = await tx.lead.findMany({ where: { id: { in: body.ids } } });
        for (const lead of leads) {
            if (lead[body.field as "owner" | "status"] === body.value) continue;
            await tx.lead.update({ where: { id: lead.id }, data: { [body.field]: body.value } });
            await tx.leadConversation.create({ data: { leadId: lead.id, party: "system", author: "Activity", text: `${body.field === "owner" ? "Assigned to" : "Stage changed to"} ${body.value}` } });
        }
    }, { timeout: 30000 });
    return NextResponse.json({ success: true });
}
