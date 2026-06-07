import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextRequest } from "next/server";
import { fail, ok } from "../../../lib/api";
import { requireAdmin } from "../../../lib/adminAuth";
import { prisma } from "../../../lib/db";

const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const maxSize = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
    const unauthorized = requireAdmin(request);
    if (unauthorized) return unauthorized;

    const formData = await request.formData();
    const file = formData.get("file");
    const category = String(formData.get("category") ?? "general");
    const alt = String(formData.get("alt") ?? "");

    if (!(file instanceof File)) {
        return fail("A file field is required", 422);
    }

    if (!allowedTypes.includes(file.type)) {
        return fail("Only JPG, PNG, WEBP and GIF images are allowed", 422);
    }

    if (file.size > maxSize) {
        return fail("File size must be 5MB or less", 422);
    }

    const extension = path.extname(file.name) || ".webp";
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}${extension}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", category);
    const diskPath = path.join(uploadDir, safeName);
    const publicUrl = `/uploads/${category}/${safeName}`;

    try {
        await mkdir(uploadDir, { recursive: true });
        await writeFile(diskPath, Buffer.from(await file.arrayBuffer()));

        const asset = await prisma.mediaAsset.create({
            data: {
                url: publicUrl,
                filename: file.name,
                mimeType: file.type,
                size: file.size,
                alt,
                category,
            },
        });

        return ok(asset, { status: 201 });
    } catch (error) {
        return fail(error instanceof Error ? error.message : "Image upload failed", 500);
    }
}
