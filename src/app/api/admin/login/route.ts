import { NextRequest } from "next/server";
import { fail, ok, readJson, requiredString } from "../../../lib/api";

const demoEmail = "admin@gmail.com";
const demoPassword = "admin123456";

export async function POST(request: NextRequest) {
    const body = await readJson(request);

    if (!body || !requiredString(body.email) || !requiredString(body.password)) {
        return fail("Email and password are required", 422);
    }

    const configuredEmail = process.env.ADMIN_EMAIL ?? demoEmail;
    const configuredPassword = process.env.ADMIN_PASSWORD ?? demoPassword;

    if (String(body.email).trim().toLowerCase() !== configuredEmail || String(body.password) !== configuredPassword) {
        return fail("Invalid email or password", 401);
    }

    return ok({
        token: process.env.ADMIN_API_TOKEN ?? "demo-admin-token",
        user: {
            email: configuredEmail,
            name: "Azhari Admin",
            role: "Admin",
        },
    });
}
