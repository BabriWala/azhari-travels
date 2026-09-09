import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../../../lib/adminAuth";
import { prisma } from "../../../../../lib/db";
export const runtime = "nodejs";
export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    const denied = requireAdmin(request); if (denied) return denied;
    const { id } = await context.params;
    const message = await prisma.leadConversation.findUnique({ where: { id }, select: { audio: true, audioType: true } });
    if (!message?.audio) return NextResponse.json({ error: "Audio not found." }, { status: 404 });
    return new Response(new Uint8Array(message.audio), { headers: { "Content-Type": message.audioType || "audio/mpeg", "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" } });
}
