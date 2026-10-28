# Sandeep Paswan — Shopify Developer Portfolio

Personal portfolio for a Senior Shopify Developer & Shopify App Developer, built with **React 18 + Vite** and CSS Modules. Includes dark and light themes, a responsive layout, scroll animations and real screenshots of each live project.

## Getting started

```bash
npm install
npm run dev       # local dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Updating content

All content lives in `src/data/`. You shouldn't need to touch the components to update the site.

| File | What it controls |
| --- | --- |
| `profile.js` | Name, role, photo, email, LinkedIn, GitHub, availability, contact-form endpoint |
| `projects.js` | Portfolio projects (name, URL, category, description) |
| `skills.js` | Skill groups for the bento grid |
| `services.js` | Service cards and the 4-step process |
| `apps.js` | The Restorely app (description, features, App Store link, screenshot) |

### Before going live

- [ ] `profile.js` → set `email` (currently `hello@example.com`)
- [ ] `profile.js` → set `linkedin` (currently a placeholder URL)
- [ ] `apps.js` → set `appUrl` once the Shopify App Store listing is live (the card switches to a "View on Shopify App Store" button automatically)
- [ ] `apps.js` → optionally set `image` to a real Restorely screenshot (e.g. `/images/restorely.webp`) to replace the illustrative mockup
- [ ] `projects.js` → review the FitTrack description; the site was unreachable when this was built
- [ ] `index.html` → once deployed, change `og:image` / `twitter:image` to absolute URLs (`https://your-domain.com/og-image.png`) and add `<link rel="canonical" href="https://your-domain.com/" />`

### Adding a project

1. Add an entry to `src/data/projects.js` with a unique `slug`.
2. Run `npm run screenshots -- <slug>` to capture its preview (uses your installed Chrome or Edge; set `CHROME_PATH` to override).
3. The script writes `public/projects/<slug>-600.webp` and `-1200.webp`. Check them, since a popup can occasionally slip through. If a site can't be captured, set `screenshot: false` to show a branded placeholder instead.

Run `npm run screenshots` with no arguments to refresh every preview.

### Adding a skill or service icon

Icons come from [lucide](https://lucide.dev/icons). Use the icon's name in the data file, then import it in `src/components/ui/Icon.jsx` and add it to the `icons` map. Icons are imported one by one to keep the bundle small.

### Profile photo and share image

- Replace `public/images/profile.webp` (and `profile.jpg`, used for the Apple touch icon and structured data). Use a square image, at least 400×400.
- Run `npm run og` to regenerate `public/og-image.png`, the 1200×630 preview shown when the site is shared on LinkedIn, X, Slack or WhatsApp.

## Contact form

By default the form opens the visitor's email app with the message pre-filled, so no backend is needed.

To receive messages directly instead, create a free form at [Formspree](https://formspree.io) and set its endpoint in `profile.js`:

```js
contactFormEndpoint: 'https://formspree.io/f/xxxxxxx',
```

The form then posts JSON and shows inline success and error states. A hidden honeypot field filters out basic spam bots.

## Deployment

The output in `dist/` is a static site, so any static host works:

- **Vercel / Netlify:** import the GitHub repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base: '/portfolio/'` in `vite.config.js` (the repo name), build, then publish `dist/`.

## Project structure

```
src/
  data/           ← all editable content
  components/
    layout/       Navbar, Footer
    sections/     Hero, About, Skills, Projects, AppShowcase, Services, Contact…
    ui/           Button, Reveal, SectionHeading, Icon, ThemeToggle, BrandIcons
  hooks/          useTheme, useInView, useActiveSection
  styles/         global.css (design tokens for both themes, base styles)
scripts/
  capture-screenshots.mjs   live-site previews → WebP
  generate-og-image.mjs     social share image
```
