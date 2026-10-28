/**
 * Shopify apps.
 *
 * `appUrl`   — TODO: set to the Shopify App Store listing once it's live.
 *              While it's empty the button shows "App Store link coming soon".
 * `image`    — optional real screenshot (e.g. '/images/restorely.webp').
 *              While it's empty, an illustrative dashboard mockup is shown.
 */
export const featuredApp = {
  name: 'Restorely Backup & Rollback',
  shortName: 'Restorely',
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
};
