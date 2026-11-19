// Build-time image variants for files under public/ (the Tina media root).
//
// Astro's <Image> does not process public/ files, and gallery photos are
// uploaded there through Tina at whatever size the camera produced. This
// module resizes them with sharp into small WebP copies under public/_img/
// (gitignored, regenerated on demand) and returns the URL of the copy.
//
//   img('/media/gallery/a.jpg', 'sq480')  ->  '/_img/a-3f9c1d2e7b-sq480.webp'
//
// Anything it cannot handle (remote URL, missing file, SVG/GIF) is returned
// unchanged, so callers can use the result as a plain src either way.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const OUT_DIR = path.join(PUBLIC_DIR, '_img');
const OUT_URL = '/_img';
const RASTER = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff']);

/**
 * sq*   square centre crop, for grid tiles
 * w640  640px wide, original aspect ratio, for small cutouts
 * full  longest edge capped at 1600px, for the lightbox
 * @type {Record<string, { size: number, square: boolean, quality: number }>}
 */
export const VARIANTS = {
  sq240: { size: 240, square: true, quality: 68 },
  sq480: { size: 480, square: true, quality: 68 },
  sq720: { size: 720, square: true, quality: 68 },
  w640: { size: 640, square: false, quality: 72 },
  full: { size: 1600, square: false, quality: 80 },
};

/** @typedef {keyof typeof VARIANTS} Variant */

/** Dedupes concurrent requests for the same output file. @type {Map<string, Promise<void>>} */
const inFlight = new Map();

/**
 * @param {string | null | undefined} src  public-root path, e.g. "/media/gallery/a.jpg"
 * @param {Variant} variant
 * @returns {Promise<string | null>} URL of the resized copy, or `src` if it cannot be processed
 */
export async function img(src, variant) {
  if (!src) return null;
  const spec = VARIANTS[variant];
  if (!spec || !src.startsWith('/') || src.startsWith('//')) return src;

  const rel = decodeURIComponent(src.split(/[?#]/)[0]).replace(/^\/+/, '');
  const file = path.join(PUBLIC_DIR, rel);
  const ext = path.extname(file).toLowerCase();
  if (!file.startsWith(PUBLIC_DIR + path.sep) || !RASTER.has(ext)) return src;

  let stat;
  try {
    stat = fs.statSync(file);
  } catch {
    return src;
  }

  // Path + byte size in the name: replacing a photo yields a new URL, so
  // neither this cache nor the browser's can serve a stale copy.
  const hash = crypto.createHash('sha1').update(`${rel}:${stat.size}`).digest('hex').slice(0, 10);
  const base = path.basename(rel, path.extname(rel)).replace(/[^a-zA-Z0-9_-]+/g, '-');
  const name = `${base}-${hash}-${variant}.webp`;
  const out = path.join(OUT_DIR, name);
  const url = `${OUT_URL}/${name}`;

  if (fs.existsSync(out)) return url;

  let job = inFlight.get(out);
  if (!job) {
    job = render(file, out, spec).finally(() => inFlight.delete(out));
    inFlight.set(out, job);
  }
  try {
    await job;
    return url;
  } catch (err) {
    console.warn(`[img] could not resize ${src} (${variant}): ${err instanceof Error ? err.message : err}`);
    return src;
  }
}

/**
 * @param {string} file
 * @param {string} out
 * @param {{ size: number, square: boolean, quality: number }} spec
 */
async function render(file, out, spec) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const resize = spec.square
    ? { width: spec.size, height: spec.size, fit: /** @type {const} */ ('cover') }
    : { width: spec.size, height: spec.size, fit: /** @type {const} */ ('inside') };
  // Write to a temp name first so an interrupted run never leaves a
  // truncated file that later passes the existsSync check.
  const tmp = `${out}.${process.pid}.tmp`;
  await sharp(file)
    .rotate() // apply EXIF orientation before the metadata is dropped
    .resize({ ...resize, withoutEnlargement: true })
    .webp({ quality: spec.quality })
    .toFile(tmp);
  fs.renameSync(tmp, out);
}

/**
 * Generates every gallery variant up front. Run before `astro build` copies
 * public/ into dist/, so the files rendered pages point at are already there.
 * @param {Variant[]} variants
 */
export async function prebuildGallery(variants) {
  const dir = path.resolve('src/content/gallery');
  if (!fs.existsSync(dir)) return 0;
  /** @type {string[]} */
  const sources = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.json')) continue;
    try {
      const { image } = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (typeof image === 'string' && image) sources.push(image);
    } catch {
      // malformed entry: the content collection reports it with a better error
    }
  }
  // Small batches: the camera originals are 10MB+ and decode to ~50MB each.
  const BATCH = 6;
  for (let i = 0; i < sources.length; i += BATCH) {
    await Promise.all(
      sources.slice(i, i + BATCH).flatMap((src) => variants.map((v) => img(src, v))),
    );
  }
  return sources.length;
}
