import { NextRequest } from "next/server";
import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { fail } from "./api";
import { prisma } from "./db";
export type AdminActor = { id: string; name: string; email: string; role: "superadmin" | "subadmin" };
const derive = promisify(scrypt);
export const configuredEmail = () => (process.env.ADMIN_EMAIL ?? "admin@gmail.com").trim().toLowerCase();
export const rootActor = (): AdminActor => ({ id: "configured-superadmin", name: "Azhari Admin", email: configuredEmail(), role: "superadmin" });
export const tokenHash = (token: string) => createHash("sha256").update(token).digest("hex");
export function requestToken(request: NextRequest) { const header = request.headers.get("authorization") || ""; return header.startsWith("Bearer ") ? header.slice(7) : ""; }
export async function hashPassword(password: string) { const salt = randomBytes(16).toString("hex"); const hash = await derive(password, salt, 64) as Buffer; return salt + ":" + hash.toString("hex"); }
export async function verifyPassword(password: string, saved: string) { const [salt, hex] = saved.split(":"); if (!salt || !hex || hex.length !== 128) return false; const hash = await derive(password, salt, 64) as Buffer; return timingSafeEqual(hash, Buffer.from(hex, "hex")); }
export async function issueSession(userId: string) { const token = randomBytes(32).toString("hex"); await prisma.adminSession.create({ data: { userId, tokenHash: tokenHash(token), expiresAt: new Date(Date.now() + 7 * 86400000) } }); return token; }
const actors = new WeakMap<NextRequest, Promise<AdminActor | null>>();
export function getAdminActor(request: NextRequest): Promise<AdminActor | null> {
    let actor = actors.get(request);
    if (!actor) { actor = (async () => {
        const token = requestToken(request); if (!token) return null;
        if (token === (process.env.ADMIN_API_TOKEN ?? "demo-admin-token")) return rootActor();
        const session = await prisma.adminSession.findUnique({ where: { tokenHash: tokenHash(token) }, include: { user: true } });
        if (!session || session.expiresAt <= new Date() || !session.user.active || !["superadmin", "subadmin"].includes(session.user.role)) return null;
        const { id, name, email, role } = session.user; return { id, name, email, role } as AdminActor;
    })(); actors.set(request, actor); }
    return actor;
}
export async function requireAdmin(request: NextRequest, allowSubadmin = false) { const actor = await getAdminActor(request); if (!actor) return fail("Please sign in again.", 401); if (!allowSubadmin && actor.role !== "superadmin") return fail("Only a superadmin can do this.", 403); return null; }
