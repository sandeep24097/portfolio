/**
 * Resolves a /public file path against Vite's base URL, so assets still load
 * when the site is hosted under a sub-path (e.g. GitHub Pages: /portfolio/).
 */
export const asset = (path) => (path ? `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}` : path);
