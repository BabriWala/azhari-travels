import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { prisma } from "../../../../lib/db";
import { readLeadFile } from "../../../../lib/leadImport";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
    const denied = requireAdmin(request); if (denied) return denied;
    try {
        if (Number(request.headers.get("content-length")) > 11 * 1024 * 1024) throw new Error("File is too large.");
        const data = await request.formData(), file = data.get("file");
        if (!(file instanceof File)) throw new Error("Choose a CSV or XLSX file.");
        const parsed = await readLeadFile(file);
        const result = await prisma.$transaction(async tx => {
            const existing = await tx.lead.findMany({ select: { importKey: true, phone: true, email: true } });
            const keys = new Set(existing.map(l => l.importKey));
            const phones = new Set(existing.map(l => l.phone.replace(/\D/g, "")).filter(Boolean));
            const emails = new Set(existing.map(l => l.email?.toLowerCase()).filter(Boolean));
            const fresh = parsed.leads.filter(l => {
                const phone = l.phone.replace(/\D/g, ""), email = l.email?.toLowerCase();
                if (keys.has(l.importKey) || phone && phones.has(phone) || email && emails.has(email)) return false;
                keys.add(l.importKey); if (phone) phones.add(phone); if (email) emails.add(email); return true;
            });
            const commit = data.get("commit") === "true";
            if (commit) {
                for (const name of new Set(fresh.map(l => l.status))) await tx.leadStage.upsert({ where: { name }, update: {}, create: { name, sortOrder: await tx.leadStage.count() } });
                for (const name of new Set(fresh.map(l => l.owner).filter(n => n !== "Unassigned"))) await tx.leadPerson.upsert({ where: { name }, update: {}, create: { name } });
                await tx.lead.createMany({ data: fresh });
            }
            return { committed: commit, imported: fresh.length, duplicates: parsed.leads.length - fresh.length, warnings: parsed.warnings, mapped: parsed.mapped, preview: fresh.slice(0, 5) };
        }, { timeout: 60000 });
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error && !error.message.includes("prisma") ? error.message : "Import failed. Check the file and database connection, then retry." }, { status: 422 });
    }
}
