import { prisma } from "../../lib/db";
import { ok, fail } from "../../lib/api";
import { ensureStudentGallery, galleryOrder, studentGalleryCategory } from "../../lib/studentGallery";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        await ensureStudentGallery();
        const photos = await prisma.mediaAsset.findMany({
            where: { category: studentGalleryCategory, visible: true, deletedAt: null },
            select: { id: true, url: true, alt: true },
            orderBy: galleryOrder,
        });
        return ok(photos, { headers: { "Cache-Control": "no-store" } });
    } catch {
        return fail("Could not load uploaded gallery photos", 503);
    }
}
