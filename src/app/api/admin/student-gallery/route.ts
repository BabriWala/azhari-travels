import { NextRequest } from "next/server";
import { requireAdmin } from "../../../lib/adminAuth";
import { prisma } from "../../../lib/db";
import { fail, ok } from "../../../lib/api";
import { ensureStudentGallery, galleryOrder, studentGalleryCategory } from "../../../lib/studentGallery";

export async function GET(request: NextRequest) {
    const unauthorized = await requireAdmin(request);
    if (unauthorized) return unauthorized;
    try {
        await ensureStudentGallery();
        return ok(await prisma.mediaAsset.findMany({ where: { category: studentGalleryCategory }, orderBy: galleryOrder }), { headers: { "Cache-Control": "no-store" } });
    } catch { return fail("Could not load the student gallery", 500); }
}

export async function PATCH(request: NextRequest) {
    const unauthorized = await requireAdmin(request);
    if (unauthorized) return unauthorized;
    const body = await request.json().catch(() => null);
    if (!body || typeof body.id !== "string" || !["save", "earlier", "later", "trash", "restore"].includes(body.action)) return fail("Choose a photo and a valid action", 422);
    if (body.action === "save" && (typeof body.alt !== "string" || body.alt.length > 300 || typeof body.visible !== "boolean")) return fail("Provide a description up to 300 characters and visibility", 422);
    try {
        const result = await prisma.$transaction(async tx => {
            const photo = await tx.mediaAsset.findFirst({ where: { id: body.id, category: studentGalleryCategory } });
            if (!photo) return false;
            if (["earlier", "later"].includes(body.action)) {
                const photos = await tx.mediaAsset.findMany({ where: { category: studentGalleryCategory, deletedAt: null }, orderBy: galleryOrder });
                const index = photos.findIndex(item => item.id === photo.id);
                const next = index + (body.action === "earlier" ? -1 : 1);
                if (index < 0 || next < 0 || next >= photos.length) return true;
                [photos[index], photos[next]] = [photos[next], photos[index]];
                for (const [position, item] of photos.entries()) await tx.mediaAsset.update({ where: { id: item.id }, data: { sortOrder: position + 1 } });
            } else {
                await tx.mediaAsset.update({ where: { id: photo.id }, data: body.action === "trash" ? { deletedAt: new Date() }
                    : body.action === "restore" ? { deletedAt: null }
                    : { alt: body.alt.trim(), visible: body.visible } });
            }
            return true;
        });
        return result ? ok({ saved: true }) : fail("Student gallery photo not found", 404);
    } catch { return fail("Could not save this change. Refresh and try again.", 500); }
}
