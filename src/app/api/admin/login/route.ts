import { NextRequest } from "next/server";
import { fail, ok, readJson, requiredString } from "../../../lib/api";
import { configuredEmail, issueSession, rootActor, verifyPassword } from "../../../lib/adminAuth";
import { prisma } from "../../../lib/db";
export async function POST(request: NextRequest) {
 const body = await readJson(request);
 if (!body || !requiredString(body.email) || !requiredString(body.password) || String(body.password).length > 200) return fail("Email and password are required", 422);
 const email = String(body.email).trim().toLowerCase(), password = String(body.password);
 if (email === configuredEmail() && password === (process.env.ADMIN_PASSWORD ?? "admin123456")) return ok({token: process.env.ADMIN_API_TOKEN ?? "demo-admin-token", user: rootActor()});
 const user = await prisma.adminUser.findUnique({where: {email}});
 if (!user || !user.active || !["superadmin", "subadmin"].includes(user.role) || !await verifyPassword(password, user.passwordHash)) return fail("Invalid email or password",401);
 return ok({ token: await issueSession(user.id), user: {id:user.id, name:user.name, email:user.email, role:user.role} });
}
