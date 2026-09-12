import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, getAdminActor } from "../../../../lib/adminAuth";
import { prisma } from "../../../../lib/db";
import { readLeadFile, readLeadRows, mapRows } from "../../../../lib/leadImport";
import { planLeadImport } from "../../../../lib/leadImportMerge";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    try {
        if (Number(request.headers.get("content-length")) > 11 * 1024 * 1024) throw new Error("File is too large.");
        const data = await request.formData(), file = data.get("file");
        if (!(file instanceof File)) throw new Error("Choose a CSV or XLSX file.");
        const rawName=data.get("name");
        if(rawName!==null && (typeof rawName!=="string"||rawName.length>120))throw new Error("Upload name must be at most 120 characters.");
        const name=typeof rawName==="string"?rawName.trim():"";
        const rawOptions=data.get("options");
        const options=rawOptions?JSON.parse(String(rawOptions)):{};
        if(!options||typeof options!=="object"||Array.isArray(options))throw new Error("Invalid import settings.");
        if(options.mapping && (typeof options.mapping!=="object"||Array.isArray(options.mapping)))throw new Error("Invalid column mapping.");
        if(data.get("inspect")==="true") {
            const raw=await readLeadRows(file,options);
            const inspected=mapRows(raw.rows.length>1?raw.rows:[raw.rows[0],raw.rows[0].map(()=>"")],{flexible:true});
            return NextResponse.json({headers:inspected.headers,sheets:raw.sheets,sheet:raw.sheet,mapped:inspected.mapped});
        }
        const parsed = await readLeadFile(file,{...options,flexible:true});
        const result = await prisma.$transaction(async tx => {
            const existing = await tx.lead.findMany();
            const plan = planLeadImport(existing, parsed.leads);
            const fresh = plan.creates;
            const commit = data.get("commit") === "true";
            if (commit) {
                for (const name of new Set(fresh.map(l => l.status))) await tx.leadStage.upsert({ where: { name }, update: {}, create: { name, sortOrder: await tx.leadStage.count() } });
                for (const name of new Set(fresh.map(l => l.owner).filter(n => n !== "Unassigned"))) await tx.leadPerson.upsert({ where: { name }, update: {}, create: { name } });
                const created = fresh.map(lead=>({...lead,id:randomUUID()}));
                await tx.lead.createMany({data:created});
                await tx.leadUpload.create({data:{name:name||file.name.slice(0,120),filename:file.name.slice(0,255),author:(await getAdminActor(request))!.name,leads:{connect:[...plan.matchedIds,...created.map(l=>l.id)].map(id=>({id}))}}});
                for (const update of plan.updates) await tx.lead.update({ where: { id: update.id }, data: update.data });
            }
            return { matched:plan.matchedIds.length, committed: commit, imported: fresh.length, updated: plan.updates.length, duplicates: plan.duplicates, warnings: [...parsed.warnings, ...plan.warnings], mapped: parsed.mapped,
                preview: [...fresh.slice(0, 3).map(lead => ({ ...lead, action: "New lead" })), ...plan.updates.slice(0, 3).map(update => ({ ...update.lead, action: "Update responses" }))] };
        }, { timeout: 60000 });
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error && !error.message.includes("prisma") ? error.message : "Import failed. Check the file and database connection, then retry." }, { status: 422 });
    }
}
