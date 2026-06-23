// @ts-check
/**
 * Image optimization build step.
 *
 * Reads the original, full-resolution photos from `source-images/` and writes
 * optimized, web-ready variants into `public/images/`:
 *
 *   <name>.avif / .webp / .jpg          -> "full" version (lightbox / hero), max 1920px wide
 *   <name>-thumb.avif / .webp / .jpg    -> "thumbnail" version (gallery grid), max 600px wide
 *
 * The originals are NEVER deployed (they live outside `public/`), so the heavy
 * source files no longer cost Netlify bandwidth. Run with: `npm run optimize:images`.
 */
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, parse } from 'node:path';

const SOURCE_DIR = 'source-images';
const OUTPUT_DIR = join('public', 'images');

// Widths (in CSS pixels) for each variant. We never upscale beyond the source.
const FULL_WIDTH = 1920;
const THUMB_WIDTH = 600;

// Per-format quality. AVIF is the most efficient; JPEG is the universal fallback.
const QUALITY = { avif: 50, webp: 78, jpeg: 80 };

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

/** @param {number} bytes */
const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

/**
 * Produce avif/webp/jpg renditions of `input` at the given width.
 * @param {string} input absolute/relative path to the source image
 * @param {string} outBase output path without extension, e.g. public/images/gallery-1
 * @param {number} width target width in pixels
 */
async function renderVariant(input, outBase, width) {
  const pipeline = sharp(input).rotate().resize({
    width,
    withoutEnlargement: true,
  });

  const targets = [
    { ext: 'avif', run: () => pipeline.clone().avif({ quality: QUALITY.avif }).toFile(`${outBase}.avif`) },
    { ext: 'webp', run: () => pipeline.clone().webp({ quality: QUALITY.webp }).toFile(`${outBase}.webp`) },
    { ext: 'jpg', run: () => pipeline.clone().jpeg({ quality: QUALITY.jpeg, mozjpeg: true }).toFile(`${outBase}.jpg`) },
  ];

  let total = 0;
  for (const t of targets) {
    const info = await t.run();
    total += info.size;
  }
  return total;
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`\n  Source folder "${SOURCE_DIR}/" not found.`);
    console.error('  Put your original, full-resolution photos there and run again.\n');
    process.exit(1);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await readdir(SOURCE_DIR)).filter((f) =>
    IMAGE_EXTENSIONS.has(parse(f).ext.toLowerCase())
  );

  if (files.length === 0) {
    console.warn(`\n  No images found in "${SOURCE_DIR}/". Nothing to do.\n`);
    return;
  }

  console.log(`\n  Optimizing ${files.length} image(s) from "${SOURCE_DIR}/" -> "${OUTPUT_DIR}/"\n`);

  let sourceTotal = 0;
  let outputTotal = 0;

  for (const file of files) {
    const input = join(SOURCE_DIR, file);
    const { name } = parse(file);
    const srcSize = (await stat(input)).size;
    sourceTotal += srcSize;

    const fullBytes = await renderVariant(input, join(OUTPUT_DIR, name), FULL_WIDTH);
    const thumbBytes = await renderVariant(input, join(OUTPUT_DIR, `${name}-thumb`), THUMB_WIDTH);
    outputTotal += fullBytes + thumbBytes;

    console.log(
      `  ${file.padEnd(20)} ${kb(srcSize).padStart(9)}  ->  full ${kb(fullBytes / 3).padStart(7)}/fmt, thumb ${kb(
        thumbBytes / 3
      ).padStart(6)}/fmt`
    );
  }

  const saved = sourceTotal - outputTotal;
  console.log(`\n  Source total:    ${kb(sourceTotal)}`);
  console.log(`  Optimized total: ${kb(outputTotal)}  (all formats combined)`);
  console.log(
    `  Per-visitor payload drops dramatically since browsers download only ONE format and thumbnails first.`
  );
  console.log(`  Removed from deploy weight: ~${kb(saved)}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
