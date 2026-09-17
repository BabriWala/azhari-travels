import sharp from "sharp";

const formats: Record<string, { extension: string; mimeType: string }> = {
    jpeg: { extension: ".jpg", mimeType: "image/jpeg" },
    png: { extension: ".png", mimeType: "image/png" },
    webp: { extension: ".webp", mimeType: "image/webp" },
    gif: { extension: ".gif", mimeType: "image/gif" },
};

export async function compressImage(input: Buffer) {
    const image = sharp(input, { animated: true, limitInputPixels: 40_000_000 });
    const metadata = await image.metadata();
    const original = formats[metadata.format || ""];
    if (!original) throw new Error("Unsupported image format");
    const output = await image.rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 }).toBuffer();
    // Avoid making already-small images larger by re-encoding them.
    if (output.length >= input.length && (metadata.width || 0) <= 1600 && (metadata.pageHeight || metadata.height || 0) <= 1600) {
        return { bytes: input, ...original };
    }
    return { bytes: output, extension: ".webp", mimeType: "image/webp" };
}
