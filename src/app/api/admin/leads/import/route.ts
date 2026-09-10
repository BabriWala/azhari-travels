import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { prisma } from "../../../../lib/db";
import { readLeadFile } from "../../../../lib/leadImport";
import { planLeadImport } from "../../../../lib/leadImportMerge";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    try {
        if (Number(request.headers.get("content-length")) > 11 * 1024 * 1024) throw new Error("File is too large.");
        const data = await request.formData(), file = data.get("file");
        if (!(file instanceof File)) throw new Error("Choose a CSV or XLSX file.");
        const parsed = await readLeadFile(file);
        const result = await prisma.$transaction(async tx => {
            const existing = await tx.lead.findMany();
            const plan = planLeadImport(existing, parsed.leads);
            const fresh = plan.creates;
            const commit = data.get("commit") === "true";
            if (commit) {
                for (const name of new Set(fresh.map(l => l.status))) await tx.leadStage.upsert({ where: { name }, update: {}, create: { name, sortOrder: await tx.leadStage.count() } });
                for (const name of new Set(fresh.map(l => l.owner).filter(n => n !== "Unassigned"))) await tx.leadPerson.upsert({ where: { name }, update: {}, create: { name } });
                await tx.lead.createMany({ data: fresh });
                for (const update of plan.updates) await tx.lead.update({ where: { id: update.id }, data: update.data });
            }
            return { committed: commit, imported: fresh.length, updated: plan.updates.length, duplicates: plan.duplicates, warnings: [...parsed.warnings, ...plan.warnings], mapped: parsed.mapped,
                preview: [...fresh.slice(0, 3).map(lead => ({ ...lead, action: "New lead" })), ...plan.updates.slice(0, 3).map(update => ({ ...update.lead, action: "Update responses" }))] };
        }, { timeout: 60000 });
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error && !error.message.includes("prisma") ? error.message : "Import failed. Check the file and database connection, then retry." }, { status: 422 });
    }
}
