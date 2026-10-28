/**
 * Generates public/og-image.png (1200×630), the preview shown when the site
 * is shared on LinkedIn, X, Slack, WhatsApp, etc.
 *
 *   npm run og
 */
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { profile } = await import(pathToFileURL(join(root, 'src/data/profile.js')).href);

const W = 1200;
const H = 630;
const PHOTO = 300;
const font = "Segoe UI, Helvetica Neue, Arial, sans-serif";
const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const tags = ['Shopify Liquid', 'Theme Development', 'App Development', 'Speed Optimization'];
let x = 72;
const tagSvg = tags
  .map((tag) => {
    const w = tag.length * 10.2 + 36;
    const svg = `<rect x="${x}" y="470" width="${w}" height="44" rx="22" fill="#34d399" fill-opacity=".1" stroke="#34d399" stroke-opacity=".35"/>
      <text x="${x + w / 2}" y="498" text-anchor="middle" font-family="${font}" font-size="18" font-weight="600" fill="#6ee7b7">${escape(tag)}</text>`;
    x += w + 12;
    return svg;
  })
  .join('');

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="g1" cx="0.1" cy="0" r="0.8"><stop offset="0" stop-color="#34d399" stop-opacity=".28"/><stop offset="1" stop-color="#34d399" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="1" cy="1" r="0.7"><stop offset="0" stop-color="#22d3ee" stop-opacity=".22"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient>
    <linearGradient id="txt" x1="0" x2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern>
  </defs>
  <rect width="100%" height="100%" fill="#07090d"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <rect width="100%" height="100%" fill="url(#g2)"/>

  <rect x="72" y="72" width="52" height="52" rx="14" fill="url(#txt)"/>
  <text x="98" y="106" text-anchor="middle" font-family="${font}" font-size="22" font-weight="800" fill="#03140d">${escape(profile.initials)}</text>
  <text x="140" y="106" font-family="${font}" font-size="22" font-weight="600" fill="#9aa5b5">${escape(profile.availability)}</text>

  <text x="72" y="250" font-family="${font}" font-size="72" font-weight="800" fill="#eef2f6" letter-spacing="-2">${escape(profile.name)}</text>
  <text x="72" y="330" font-family="${font}" font-size="44" font-weight="700" fill="url(#txt)" letter-spacing="-1">${escape(profile.role)}</text>
  <text x="72" y="400" font-family="${font}" font-size="26" fill="#9aa5b5">${escape(profile.experience)} years building Shopify stores &amp; apps</text>
  ${tagSvg}

  <rect x="${W - 72 - PHOTO - 3}" y="${(H - PHOTO) / 2 - 3}" width="${PHOTO + 6}" height="${PHOTO + 6}" rx="44" fill="url(#txt)"/>
</svg>`);

const roundedMask = Buffer.from(
  `<svg width="${PHOTO}" height="${PHOTO}"><rect width="${PHOTO}" height="${PHOTO}" rx="42" fill="#fff"/></svg>`
);
const photo = await sharp(join(root, 'public', profile.photo))
  .resize(PHOTO, PHOTO, { fit: 'cover', position: 'top' })
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp(background)
  .composite([{ input: photo, left: W - 72 - PHOTO, top: (H - PHOTO) / 2 }])
  .png({ compressionLevel: 9 })
  .toFile(join(root, 'public', 'og-image.png'));

console.log('✓ public/og-image.png');
