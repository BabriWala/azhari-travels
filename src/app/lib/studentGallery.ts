import { prisma } from "./db";

export const studentGalleryCategory = "al-azhar-students";
export const galleryOrder = [{ sortOrder: "asc" as const }, { createdAt: "desc" as const }, { id: "asc" as const }];

// Stable IDs register existing assets without overwriting an administrator's edits.
export async function ensureStudentGallery() {
    const ids = Array.from({ length: 23 }, (_, index) => `al-azhar-local-${index + 1}`);
    const existing = await prisma.mediaAsset.findMany({ where: { id: { in: ids } }, select: { id: true } });
    const registered = new Set(existing.map(photo => photo.id));
    const missing = ids.map((id, index) => ({ id, index })).filter(photo => !registered.has(photo.id));
    if (!missing.length) return;
    await prisma.$transaction(missing.map(({ index }) => {
        const filename = `client-gallery-${String(index + 1).padStart(2, "0")}.webp`;
        return prisma.mediaAsset.upsert({
            where: { id: `al-azhar-local-${index + 1}` }, update: {},
            create: { id: `al-azhar-local-${index + 1}`, filename, url: `/client-gallery/${filename}`,
                mimeType: "image/webp", size: 0, category: studentGalleryCategory,
                alt: `শিক্ষার্থীদের স্মরণীয় মুহূর্ত — ছবি ${index + 1}`, sortOrder: 1000 + index, isLocal: true },
        });
    }));
}
