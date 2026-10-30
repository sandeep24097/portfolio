/**
 * Portfolio projects, shown in this order (Shopify, then WordPress, then MERN).
 *
 * To add a project: append an entry, then run `npm run screenshots -- <slug>`
 * to capture its preview into /public/projects/<slug>-{600,1200}.webp.
 * Set `screenshot: false` for a site that can't be captured — the card then
 * shows a branded placeholder instead.
 *
 * `platform` drives the filter tabs; add a new value (e.g. 'Webflow') and a
 * tab appears for it automatically.
 */
export const projects = [
  // ---------------------------------------------------------------- Shopify
  {
    slug: 'ilia-beauty',
    name: 'ILIA Beauty',
    url: 'https://iliabeauty.com/',
    platform: 'Shopify',
    category: 'Clean Beauty',
    description:
      'Store for a clean beauty brand’s makeup, cosmetics and skincare — from mascara and foundation to everyday skin essentials.',
  },
  {
    slug: 'liquid-iv',
    name: 'Liquid I.V.',
    url: 'https://www.liquid-iv.com/',
    platform: 'Shopify',
    category: 'Hydration',
    description:
      'Store for the electrolyte drink mix brand, offering great-tasting everyday hydration across a wide range of flavours.',
  },
  {
    slug: 'myrqvist',
    name: 'Myrqvist',
    url: 'https://myrqvist.com',
    platform: 'Shopify',
    category: 'Footwear',
    description:
      'Premium store for a Scandinavian men’s footwear brand, handcrafting classic shoes from some of the world’s finest leathers.',
  },
  {
    slug: 'rosegold-paris',
    name: 'ROSEGOLD Paris',
    url: 'https://www.rosegoldparis.com/en',
    platform: 'Shopify',
    category: 'Beauty',
    description:
      'Multilingual store for a French beauty brand’s range of natural growth serums for lashes, brows, lips, hair, nails and dark circles.',
  },
  {
    slug: 'umzu',
    name: 'UMZU',
    url: 'https://www.umzu.com/',
    platform: 'Shopify',
    category: 'Supplements',
    description:
      'Natural, research-backed supplements focused on total health and hormone optimization, with shop-by-benefit navigation.',
  },
  {
    slug: 'tenperformance',
    name: 'tenPerformance',
    url: 'https://www.tenperformance.com/',
    platform: 'Shopify',
    category: 'Supplements',
    description:
      'Supplement store offering clean, high-quality products for every goal — from muscle and energy to sleep and longevity.',
  },
  {
    slug: 'hello-nancy',
    name: 'Hello Nancy',
    url: 'https://hellonancy.com/',
    platform: 'Shopify',
    category: 'Wellness',
    description:
      'Direct-to-consumer wellness brand for women, home of the viral lemon-shaped “Lem” and a playful, approachable product line.',
  },
  {
    slug: 'picky-bars',
    name: 'Picky Bars',
    url: 'https://pickybars.com/',
    platform: 'Shopify',
    category: 'Food & Nutrition',
    description:
      'Real-food energy bars, performance oatmeal and granola created by professional athletes, with a subscription box for regular delivery.',
  },
  {
    slug: 'jope',
    name: 'Jope',
    url: 'https://petjope.com/',
    platform: 'Shopify',
    category: 'Pet Health',
    description:
      'Veterinarian-founded brand selling organic, veterinary-grade hip and joint chews and other supplements for dogs.',
  },
  {
    slug: 'pataaree',
    name: 'Pataaree',
    url: 'https://pataaree.com/',
    platform: 'Shopify',
    category: 'Wedding & Gifting',
    description:
      'Store for handcrafted Indian wedding ceremony essentials for NRI families — trousseau trunks, shagun gifts and haldi sets — shipping to the USA, UK, Canada and 20+ countries.',
  },
  {
    slug: 'kiddimoto',
    name: 'Kiddimoto',
    url: 'https://kiddimoto.co.uk/',
    platform: 'Shopify',
    category: 'Kids & Toys',
    description:
      'UK store for sustainably sourced wooden balance bikes for children aged 2–6, including designs officially licensed by Ducati and Triumph.',
  },
  {
    slug: 'wildwood-guitars',
    name: 'Wildwood Guitars',
    url: 'http://wildwoodguitars.com/',
    platform: 'Shopify',
    category: 'Musical Instruments',
    description:
      'Store for premium electric, acoustic and custom guitars, built for musicians of every style and level who care about craftsmanship and tone.',
  },
  {
    slug: 'instock-motorsports',
    name: 'In Stock Motorsports',
    url: 'https://instockmotorsports.com',
    platform: 'Shopify',
    category: 'Automotive',
    description:
      'Automotive tools and supplies store with a deep category catalogue — air tools, paints, diagnostics and more — selling across the US, Canada and Mexico.',
  },
  {
    slug: 'petsworld',
    name: 'PetsWorld',
    url: 'https://petpads.net',
    platform: 'Shopify',
    category: 'Pet Supplies',
    description:
      'Direct-to-consumer store for ultra-absorbent dog pee pads, with large sizes, bulk deals and a focus on leak protection and odour control.',
  },
  {
    slug: 'honorvets365',
    name: 'Honorvets365',
    url: 'https://www.honorvets365.com/',
    platform: 'Shopify',
    category: 'Apparel',
    description:
      'Fashion store offering a wide range of women’s and men’s apparel and accessories, with deal-driven merchandising and fast shipping.',
  },
  {
    slug: 'jess-beauty',
    name: 'Jess Beauty',
    url: 'https://jessbeauty.com/',
    platform: 'Shopify',
    category: 'Skincare',
    description:
      'Skincare and beauty store built around ingredient-led ranges such as green tea, niacinamide and centella asiatica.',
  },
  {
    slug: 'anneloes-fit-coaching',
    name: 'Anneloes Fit Coaching',
    url: 'https://anneloesfitcoaching.com/',
    platform: 'Shopify',
    category: 'Fitness Coaching',
    description:
      'Online Hyrox and strength coaching for women — structured programming, real-food nutrition and a shop, built around booking a coaching spot.',
  },
  {
    slug: 'facsimile-photo',
    name: 'Facsimile Photo',
    url: 'https://www.facsimilephoto.com/',
    platform: 'Shopify',
    category: 'Photo Services',
    description:
      'Store for professional photo restoration, colorization and digitizing services, plus photography prints and archive consulting.',
  },

  // -------------------------------------------------------------- WordPress
  {
    slug: 'lmc-utilities',
    name: 'LMC Utilities',
    url: 'https://lmcutilities.co.uk/',
    platform: 'WordPress',
    category: 'Infrastructure',
    description:
      'Website for a UK-wide, NERS-accredited power infrastructure civils contractor delivering substation builds, HV cable routes and DNO works.',
  },
  {
    slug: 'kingston-bear',
    name: 'Kingston Bear',
    url: 'https://kingstonbear.com/',
    platform: 'WordPress',
    category: 'Executive Search',
    description:
      'Website for a leadership-hiring firm placing senior talent across manufacturing, engineering, ERP, eCommerce and SaaS businesses.',
  },
  {
    slug: 'buildon',
    name: 'buildOn',
    url: 'https://buildon.org/',
    platform: 'WordPress',
    category: 'Non-profit',
    description:
      'Website for a non-profit that mobilizes communities to build schools in low-income countries and runs youth service programs across the US.',
  },
  {
    slug: 'royal-dental-centre',
    name: 'Royal Bank Plaza Dental Centre',
    url: 'https://royaldentalcentre.com/',
    platform: 'WordPress',
    category: 'Dental Clinic',
    description:
      'Website for a downtown Toronto dental clinic offering routine care, cosmetic dentistry, dental implants and Invisalign.',
  },
  {
    slug: 'control-my-fate',
    name: 'Control My Fate',
    url: 'https://controlmyfate.com/',
    platform: 'WordPress',
    category: 'Astrology',
    description:
      'Astrology content site with daily zodiac horoscopes, star-sign traits and compatibility insights.',
  },

  // ------------------------------------------------------------------- MERN
  {
    slug: 'skyline-scenes',
    name: 'Skyline Scenes',
    url: 'https://skylinescenes.com/',
    platform: 'MERN',
    category: 'Wall Art',
    description:
      'Store for city skyline photography — canvas, metal, acrylic and fine art prints, wall murals, and stock image licensing for commercial use.',
  },
];
