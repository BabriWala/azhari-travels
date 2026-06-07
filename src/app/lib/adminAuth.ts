import { NextRequest } from "next/server";
import { fail } from "./api";

export function requireAdmin(request: NextRequest) {
    const configuredToken = process.env.ADMIN_API_TOKEN ?? "demo-admin-token";

    if (!configuredToken) {
        return fail("Admin API token is not configured", 503);
    }

    const header = request.headers.get("authorization") ?? "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";

    if (token !== configuredToken) {
        return fail("Unauthorized admin request", 401);
    }

    return null;
}
