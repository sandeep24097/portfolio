/**
 * Shopify apps. The first app is shown as the large featured panel; the rest
 * appear as cards beneath it.
 *
 * `appUrl` — TODO: set to the Shopify App Store listing once it's live.
 *            While it's empty the app shows "App Store listing coming soon".
 * `image`  — optional real screenshot for the featured app
 *            (e.g. '/images/restorely.webp'). While it's empty, an
 *            illustrative dashboard mockup is shown.
 * `icon` / feature `icon` — lucide-react icon names (see ui/Icon.jsx).
 */
export const apps = [
  {
    name: 'Restorely Backup & Rollback',
    shortName: 'Restorely',
    icon: 'History',
    tagline: 'Backup & recovery for Shopify merchants',
    description:
      'A Shopify backup and recovery application that helps merchants protect their store data and restore important resources — so a bad edit, bulk import or app mistake doesn’t have to become a lasting problem.',
    appUrl: '',
    image: '',
    features: [
      {
        title: 'Shopify App Development',
        text: 'Designed and developed as a Shopify app for merchants.',
        icon: 'Blocks',
      },
      {
        title: 'Backup & Restore Functionality',
        text: 'Capture store resources and roll them back when something goes wrong.',
        icon: 'History',
      },
      {
        title: 'Store Data Protection',
        text: 'Keep a safe copy of the data merchants rely on every day.',
        icon: 'ShieldCheck',
      },
      {
        title: 'App Dashboard Development',
        text: 'A clear admin dashboard for managing backups and restores.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Shopify API Integration',
        text: 'Built on the Shopify Admin API to read and restore store resources.',
        icon: 'Webhook',
      },
    ],
  },
  {
    name: 'StockShield',
    shortName: 'StockShield',
    icon: 'PackageCheck',
    tagline: 'Inventory & low-stock alerts',
    description:
      'A Shopify app that keeps an eye on inventory and alerts merchants when products run low, so best-sellers can be restocked before they sell out.',
    appUrl: '',
    features: [
      { title: 'Low-stock alerts', icon: 'BellRing' },
      { title: 'Inventory tracking', icon: 'PackageCheck' },
      { title: 'Shopify API integration', icon: 'Webhook' },
    ],
  },
  {
    name: 'PartMatch YMM',
    shortName: 'PartMatch',
    icon: 'Car',
    tagline: 'Year / Make / Model fitment search',
    description:
      'Adds a Year / Make / Model vehicle fitment search to Shopify auto-parts stores, so shoppers only see parts that fit their vehicle.',
    appUrl: '',
    features: [
      { title: 'Year / Make / Model search', icon: 'Search' },
      { title: 'Vehicle fitment filtering', icon: 'Car' },
      { title: 'Built for auto-parts stores', icon: 'Store' },
    ],
  },
];
