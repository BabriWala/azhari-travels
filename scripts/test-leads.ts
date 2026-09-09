import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { readFileSync, mkdirSync, unlinkSync } from "node:fs";
import { resolve } from "node:path";
import { randomUUID } from "node:crypto";
import ExcelJS from "exceljs";
import { NextRequest } from "next/server";
import { mapRows, parseCsv, readLeadFile } from "../src/app/lib/leadImport";

async function main() {
    mkdirSync(".data", { recursive: true });
    const path = resolve(`.data/leads-test-${randomUUID()}.db`);
    const db = new DatabaseSync(path);
    for (const migration of ["000001_init", "000002_lead_workspace"]) db.exec(readFileSync(`prisma/migrations/${migration}/migration.sql`, "utf8"));
    db.close();
    process.env.DATABASE_URL = `file:${path.replaceAll("\\", "/")}`;
    process.env.ADMIN_API_TOKEN = "lead-test-token";
    const { prisma } = await import("../src/app/lib/db");
    const leadsApi = await import("../src/app/api/admin/leads/route");
    const importApi = await import("../src/app/api/admin/leads/import/route");
    const messagesApi = await import("../src/app/api/admin/leads/[id]/messages/route");
    const audioApi = await import("../src/app/api/admin/leads/audio/[id]/route");
    const request = (method: string, body?: BodyInit, auth = true) => new NextRequest("http://localhost/api/admin/leads", { method, body, headers: auth ? { Authorization: "Bearer lead-test-token" } : {} });
    try {
        assert.deepEqual(parseCsv('\uFEFFName,Notes\r\n"বাংলা, Name","a\nline and ""quote"""'), [["Name", "Notes"], ["বাংলা, Name", 'a\nline and "quote"']]);
        assert.throws(() => parseCsv('Name\n"broken'), /unclosed/);
        assert.throws(() => mapRows([["Other"], ["x"]]), /Name/);
        assert.throws(() => mapRows([["Name", "Name"], ["x", "y"]]), /unique/);
        assert.equal(mapRows([["Name", "Phone"], ["", "1"], ["OK", "+8800123"]]).warnings.length, 1);
        const workbook = new ExcelJS.Workbook(); const sheet = workbook.addWorksheet("Leads");
        sheet.addRows([["Name", "Phone", "Owner", "Stage"], ["বাংলা Excel", "+880012345", "Test Owner", "Office visit"]]);
        const xlsx = await workbook.xlsx.writeBuffer();
        const excel = await readLeadFile(new File([new Uint8Array(xlsx)], "sample.xlsx"));
        assert.equal(excel.leads[0].phone, "+880012345"); assert.equal(excel.leads[0].name, "বাংলা Excel");
        if (process.argv[2]) {
            const sample = await readLeadFile(new File([readFileSync(process.argv[2])], "sample.csv"));
            assert.ok(sample.leads.length > 0); assert.ok(sample.mapped.some(m => m.field === "secondaryPhone"));
            console.log(`User CSV parsed: ${sample.leads.length} leads; ${sample.mapped.length} columns matched (read-only).`);
        }
        assert.equal((await leadsApi.GET(request("GET", undefined, false))).status, 401);
        const csv = "Created,Name,Phone,Owner,Stage,Custom\n09/05/2026 10:11pm,বাংলা Test,+880012345,Test Owner,Qualified,Preserved\n09/05/2026,Duplicate,+880012345,Test Owner,Qualified,Duplicate\n09/05/2026,Second,+88009999,Unassigned,New,Other";
        const upload = (commit: boolean) => { const form = new FormData(); form.set("file", new File([csv], "leads.csv")); form.set("commit", String(commit)); return request("POST", form); };
        const preview = await (await importApi.POST(upload(false))).json();
        assert.equal(preview.imported, 2); assert.equal(preview.duplicates, 1); assert.equal(await prisma.lead.count(), 0);
        assert.equal((await (await importApi.POST(upload(true))).json()).imported, 2);
        assert.equal((await (await importApi.POST(upload(true))).json()).imported, 0);
        assert.equal(await prisma.lead.count(), 2);
        const list = await (await leadsApi.GET(request("GET"))).json();
        const lead = list.leads.find((l: { name: string }) => l.name === "বাংলা Test");
        assert.equal(JSON.parse(lead.extraFields).Custom, "Preserved");
        assert.ok(list.people.some((p: { name: string }) => p.name === "Test Owner"));
        assert.equal((await leadsApi.POST(request("POST", JSON.stringify({ kind: "stage", name: "Office follow-up" })))).status, 200);
        assert.equal((await leadsApi.POST(request("POST", JSON.stringify({ kind: "person", name: "Second Agent" })))).status, 200);
        const ids = list.leads.map((l: { id: string }) => l.id);
        assert.equal((await leadsApi.PATCH(request("PATCH", JSON.stringify({ ids, field: "owner", value: "Second Agent" })))).status, 200);
        assert.equal((await leadsApi.PATCH(request("PATCH", JSON.stringify({ ids: [lead.id], field: "status", value: "Office follow-up" })))).status, 200);
        assert.equal((await leadsApi.PATCH(request("PATCH", JSON.stringify({ ids, field: "owner", value: "Unknown" })))).status, 422);
        const context = { params: Promise.resolve({ id: lead.id }) };
        const form = new FormData(); form.set("party", "customer"); form.set("author", "Customer"); form.set("text", "I will visit the office.");
        // Valid minimal PCM WAV, including the required container signature.
        const wav = Buffer.alloc(46); wav.write("RIFF"); wav.writeUInt32LE(38, 4); wav.write("WAVEfmt ", 8); wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(1, 22); wav.writeUInt32LE(8000, 24); wav.writeUInt32LE(16000, 28); wav.writeUInt16LE(2, 32); wav.writeUInt16LE(16, 34); wav.write("data", 36); wav.writeUInt32LE(2, 40);
        form.set("audio", new File([wav], "voice.wav", { type: "audio/wav" }));
        assert.equal((await messagesApi.POST(request("POST", form), context)).status, 200);
        const staff = new FormData(); staff.set("party", "staff"); staff.set("author", "Second Agent"); staff.set("text", "Office visit confirmed.");
        assert.equal((await messagesApi.POST(request("POST", staff), context)).status, 200);
        const history = await (await messagesApi.GET(request("GET"), context)).json();
        assert.equal(history.messages.length, 4); assert.equal(history.messages[0].party, "system");
        const voice = history.messages.find((m: { audioType: string }) => m.audioType);
        const voiceContext = { params: Promise.resolve({ id: voice.id }) };
        assert.equal((await audioApi.GET(request("GET", undefined, false), voiceContext)).status, 401);
        const response = await audioApi.GET(request("GET"), voiceContext);
        assert.equal(response.headers.get("Content-Type"), "audio/wav"); assert.deepEqual(Buffer.from(await response.arrayBuffer()), wav);
        const invalid = new FormData(); invalid.set("party", "customer"); invalid.set("author", "Customer"); invalid.set("audio", new File(["<script>bad</script>"], "bad.mp3", { type: "audio/mpeg" }));
        assert.equal((await messagesApi.POST(request("POST", invalid), context)).status, 422);
        await prisma.$disconnect();
        assert.equal(await prisma.lead.count(), 2); // Verify persistence after reconnecting.
        console.log("PASS: CSV/XLSX parsing, preview, deduplication, metadata, bulk assignment, custom stages, both-party history, protected audio, validation and database persistence.");
    } finally {
        await prisma.$disconnect(); unlinkSync(path);
    }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
