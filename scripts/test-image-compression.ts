import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import sharp from "sharp";
import { compressImage } from "../src/app/lib/compressImage";

async function main() {
    const source = await readFile("public/client-gallery/client-gallery-01.webp");
    const large = await sharp(source).resize(2400, 1800, { fit: "fill" }).png().toBuffer();
    const compressed = await compressImage(large);
    const dimensions = await sharp(compressed.bytes).metadata();
    assert.equal(compressed.mimeType, "image/webp");
    assert.equal(dimensions.width, 1600);
    assert.equal(dimensions.height, 1200);
    assert.ok(compressed.bytes.length < large.length);

    const transparent = await sharp({ create: { width: 200, height: 100, channels: 4, background: { r: 20, g: 30, b: 40, alpha: 0.5 } } }).png().toBuffer();
    const small = await compressImage(transparent);
    const metadata = await sharp(small.bytes).metadata();
    assert.equal(metadata.width, 200);
    assert.equal(metadata.height, 100);
    assert.ok(metadata.hasAlpha);
    assert.ok(small.bytes.length <= transparent.length);
    const frames = Buffer.concat([Buffer.alloc(100 * 100 * 3, 20), Buffer.alloc(100 * 100 * 3, 220)]);
    const animation = await sharp(frames, { raw: { width: 100, height: 200, channels: 3, pageHeight: 100 } }).gif({ delay: [100, 200], loop: 0 }).toBuffer();
    const animated = await compressImage(animation);
    const animatedMetadata = await sharp(animated.bytes, { animated: true }).metadata();
    assert.equal(animatedMetadata.pages, 2);
    assert.deepEqual(animatedMetadata.delay, [100, 200]);
    await assert.rejects(() => compressImage(Buffer.from("not an image")));
    console.log(`PASS: photo reduced from ${large.length} to ${compressed.bytes.length} bytes; dimensions, transparency, small images and invalid files checked.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
