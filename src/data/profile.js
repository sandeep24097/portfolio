/**
 * Personal details used across the site.
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
  // `phone` is shown as-is; `phoneHref` is the dialable international number.
  phone: '+91 99147 65754',
  phoneHref: '+919914765754',
  linkedin: 'https://www.linkedin.com/in/sandeep-paswan-93b346194/',
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

  /**
   * Web3Forms access key (free, fast). Get one at https://web3forms.com by
   * entering your email — the key arrives by email. When set, the form uses
   * Web3Forms instead of `contactFormEndpoint`. The key is safe to publish.
   */
  web3formsKey: 'bf49a2ea-9d5f-40f7-996a-deb135465718',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'app', label: 'App' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];
