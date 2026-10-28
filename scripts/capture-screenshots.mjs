/**
 * Captures live previews of every project in src/data/projects.js and writes
 * optimized WebP images to public/projects/<slug>-{600,1200}.webp.
 *
 *   npm run screenshots                 # all projects
 *   npm run screenshots -- myrqvist     # only the given slugs
 *
 * Uses a locally installed Chrome/Edge (override with CHROME_PATH).
 */
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'projects');
const { projects } = await import(pathToFileURL(join(root, 'src/data/projects.js')).href);

const VIEWPORT = { width: 1440, height: 900 };
const CAPTURE_HEIGHT = 2400;
const SIZES = [600, 1200];

const browserCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const executablePath = browserCandidates.find((p) => existsSync(p));
if (!executablePath) {
  console.error('No Chrome/Edge found. Set CHROME_PATH to a Chromium-based browser.');
  process.exit(1);
}

// Overlays that commonly cover a storefront on first visit.
const HIDE_CSS = `
  [id^="klaviyo"], .klaviyo-form, [class*="kl-private-reset"],
  #shopify-pc__banner, #onetrust-consent-sdk, #CybotCookiebotDialog, .cc-window,
  [class*="cookie-banner"], [id*="cookie-banner"], [class*="cookie-consent"],
  .cky-consent-container, .cky-overlay, .cky-btn-revisit-wrapper, #cookie-law-info-bar,
  .cmplz-cookiebanner, #moove_gdpr_cookie_info_bar, #cookie-notice, .cookie-notice-container,
  [id^="privy"], .privy-popup-container, #attentive_overlay, #attentive_creative,
  [class*="newsletter-popup"], [id*="newsletter-popup"], [class*="age-verification"],
  #gorgias-chat-container, #tidio-chat, .intercom-lightweight-app, #shopify-chat,
  inbox-online-store-chat, [id*="omnisend"], [class*="omnisend-form"], #smile-ui-container,
  #smile-ui-lite-container, iframe[title*="chat" i], [class*="chat-widget"]
  { display: none !important; }
  html, body { overflow: visible !important; }
`;

/** Hides large fixed overlays (modals) and small fixed corner widgets (chat bubbles). */
function hideFixedOverlays() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  for (const el of document.querySelectorAll('body *')) {
    const style = getComputedStyle(el);
    if (style.position !== 'fixed' || style.display === 'none') continue;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    const coversScreen = (r.width * r.height) / (vw * vh) > 0.25;
    const cornerWidget = r.top > vh * 0.5 && r.width < 420 && r.height < 420;
    const bottomBar = r.top > vh * 0.6 && r.height < 200;
    if (coversScreen || cornerWidget || bottomBar) el.style.setProperty('display', 'none', 'important');
  }
  document.documentElement.style.setProperty('overflow', 'visible', 'important');
  document.body.style.setProperty('overflow', 'visible', 'important');
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function capture(browser, project) {
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'
  );
  try {
    await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 60000 }).catch(async (err) => {
      if (!String(err.message).includes('timeout')) throw err;
    });
    await page.addStyleTag({ content: HIDE_CSS });
    await wait(5000);
    await page.keyboard.press('Escape');
    await page.evaluate(hideFixedOverlays);

    // Scroll through the captured area so lazy-loaded images render.
    for (let y = 0; y <= CAPTURE_HEIGHT; y += 450) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await wait(350);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await wait(4000);
    await page.evaluate(hideFixedOverlays);

    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const height = Math.min(CAPTURE_HEIGHT, Math.max(pageHeight, VIEWPORT.height));
    const png = await page.screenshot({
      clip: { x: 0, y: 0, width: VIEWPORT.width, height },
      captureBeyondViewport: true,
    });

    for (const width of SIZES) {
      const file = join(outDir, `${project.slug}-${width}.webp`);
      await sharp(png)
        .resize({ width, height: Math.round((width / VIEWPORT.width) * CAPTURE_HEIGHT), fit: 'cover', position: 'top' })
        .webp({ quality: 68, effort: 5 })
        .toFile(file);
    }
    console.log(`✓ ${project.slug}`);
  } catch (err) {
    console.warn(`✗ ${project.slug}: ${err.message}`);
  } finally {
    await page.close();
  }
}

mkdirSync(outDir, { recursive: true });
const only = process.argv.slice(2);
const queue = projects.filter(
  (p) => p.screenshot !== false && (only.length === 0 || only.includes(p.slug))
);

const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
for (const project of queue) await capture(browser, project);
await browser.close();
