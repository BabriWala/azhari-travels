import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contentTypes: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
};

export async function GET(_request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
    const { path: segments } = await context.params;
    if (segments.length !== 2) return new Response(null, { status: 404 });
    const [category, filename] = segments;
    const contentType = contentTypes[path.extname(filename).toLowerCase()];
    if (!/^[a-z0-9-]{1,60}$/.test(category) || !/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(filename) || !contentType) {
        return new Response(null, { status: 404 });
    }
    try {
        const bytes = await readFile(path.join(process.cwd(), "public", "uploads", category, filename));
        return new Response(new Uint8Array(bytes), {
            headers: {
                "Content-Type": contentType,
                "Content-Length": String(bytes.length),
                "Cache-Control": "public, max-age=31536000, immutable",
                "X-Content-Type-Options": "nosniff",
            },
        });
    } catch (error) {
        const code = (error as NodeJS.ErrnoException).code;
        return new Response(null, { status: code === "ENOENT" || code === "ENOTDIR" ? 404 : 500 });
    }
}
