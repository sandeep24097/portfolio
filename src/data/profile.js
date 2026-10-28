/**
 * Personal details used across the site.
 * Anything marked TODO is a placeholder — replace it before going live.
 */
export const profile = {
  name: 'Sandeep Paswan',
  initials: 'SP',
  role: 'Senior Shopify Developer',
  roles: ['Senior Shopify Developer', 'Shopify App Developer'],
  experience: '5+',
  location: 'Mohali, India',
  availability: 'Available for new projects',

  // Leave `photo` empty to fall back to the initials monogram.
  photo: '/images/profile.webp',

  intro:
    'I design and build fast, polished Shopify stores and apps for brands that care about how their store looks, performs and converts.',

  // TODO: replace with your public contact email.
  email: 'hello@example.com',
  // TODO: replace with your LinkedIn profile URL.
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/sandeep24097',
  sourceRepo: 'https://github.com/sandeep24097/portfolio',

  /**
   * Optional form backend (e.g. a Formspree endpoint like
   * https://formspree.io/f/xxxxxxx). When empty, the contact form opens the
   * visitor's email client with the message pre-filled instead.
   */
  contactFormEndpoint: '',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'app', label: 'App' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];
