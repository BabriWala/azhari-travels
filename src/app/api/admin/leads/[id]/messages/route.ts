import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../../../lib/adminAuth";
import { prisma } from "../../../../../lib/db";

export const runtime = "nodejs";
type Context = { params: Promise<{ id: string }> };
export async function GET(request: NextRequest, context: Context) {
    const denied = requireAdmin(request); if (denied) return denied;
    const { id } = await context.params;
    const messages = await prisma.leadConversation.findMany({ where: { leadId: id }, orderBy: { createdAt: "asc" }, select: { id: true, party: true, author: true, text: true, audioType: true, audioName: true, createdAt: true } });
    return NextResponse.json({ messages }, { headers: { "Cache-Control": "no-store" } });
}
export async function POST(request: NextRequest, context: Context) {
    const denied = requireAdmin(request); if (denied) return denied;
    const { id } = await context.params;
    if (!await prisma.lead.findUnique({ where: { id } })) return NextResponse.json({ error: "Lead not found." }, { status: 404 });
    if (Number(request.headers.get("content-length")) > 11 * 1024 * 1024) return NextResponse.json({ error: "Audio must be under 10 MB." }, { status: 413 });
    const form = await request.formData();
    const text = String(form.get("text") || "").trim(), party = String(form.get("party")), author = String(form.get("author") || "Team").trim();
    const file = form.get("audio");
    if (!["staff", "customer"].includes(party) || text.length > 10000 || !author || author.length > 100 || (!text && !(file instanceof File && file.size)))
        return NextResponse.json({ error: "Add a message or audio and choose who said it." }, { status: 422 });
    let audio: Uint8Array<ArrayBuffer> | undefined, audioType: string | undefined;
    if (file instanceof File && file.size) {
        if (file.size > 10 * 1024 * 1024) return NextResponse.json({ error: "Audio must be under 10 MB." }, { status: 422 });
        const b = Buffer.from(await file.arrayBuffer());
        // Serve only recognized media containers, never a caller-supplied content type.
        if (b.toString("ascii", 0, 4) === "OggS") audioType = "audio/ogg";
        else if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WAVE") audioType = "audio/wav";
        else if (b.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]))) audioType = "audio/webm";
        else if (b.toString("ascii", 4, 8) === "ftyp") audioType = "audio/mp4";
        else if (b.toString("ascii", 0, 3) === "ID3" || b[0] === 0xff && (b[1] & 0xe0) === 0xe0) audioType = "audio/mpeg";
        else return NextResponse.json({ error: "Use MP3, M4A, WAV, OGG or WebM audio." }, { status: 422 });
        audio = new Uint8Array(b);
    }
    await prisma.$transaction([
        prisma.leadConversation.create({ data: { leadId: id, party, author, text, audio, audioType, audioName: audio && file instanceof File ? file.name.slice(0, 200) : undefined } }),
        prisma.lead.update({ where: { id }, data: { updatedAt: new Date() } }),
    ]);
    return NextResponse.json({ success: true });
}
