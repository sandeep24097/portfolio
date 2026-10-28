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

  email: 'sandeepkumar509780@gmail.com',
  // TODO: replace with your LinkedIn profile URL.
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/sandeep24097',
  sourceRepo: 'https://github.com/sandeep24097/portfolio',

  /**
   * Where the contact form sends messages. FormSubmit.co (free, no account)
   * forwards every submission to the email in the URL; the very first
   * submission sends an "Activate Form" email that must be clicked once.
   * A Formspree endpoint (https://formspree.io/f/xxxxxxx) also works here.
   * When empty, the form opens the visitor's email app instead.
   */
  contactFormEndpoint: 'https://formsubmit.co/ajax/sandeepkumar509780@gmail.com',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'app', label: 'App' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];
