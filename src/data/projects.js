/**
 * Portfolio projects.
 *
 * To add a project: append an entry, then run `npm run screenshots` to
 * capture its preview into /public/projects/<slug>-{600,1200}.webp.
 * Set `screenshot: false` for a site that can't be captured — the card then
 * shows a branded placeholder instead.
 */
export const projects = [
  {
    slug: 'lmc-utilities',
    name: 'LMC Utilities',
    url: 'https://lmcutilities.co.uk/',
    category: 'Infrastructure',
    description:
      'Website for a UK-wide, NERS-accredited power infrastructure civils contractor delivering substation builds, HV cable routes and DNO works.',
  },
  {
    slug: 'kingston-bear',
    name: 'Kingston Bear',
    url: 'https://kingstonbear.com/',
    category: 'Executive Search',
    description:
      'Website for a leadership-hiring firm placing senior talent across manufacturing, engineering, ERP, eCommerce and SaaS businesses.',
  },
  {
    slug: 'anneloes-fit-coaching',
    name: 'Anneloes Fit Coaching',
    url: 'https://anneloesfitcoaching.com/',
    category: 'Fitness Coaching',
    description:
      'Online Hyrox and strength coaching for women — structured programming, real-food nutrition and a shop, built around booking a coaching spot.',
  },
  {
    slug: 'fittrack',
    name: 'FitTrack',
    url: 'https://tryfittrack.com/',
    category: 'Health & Fitness',
    description: 'Shopify storefront for the FitTrack health and fitness brand.',
    // The live site was unreachable (TLS error) when previews were captured.
    screenshot: false,
  },
  {
    slug: 'honorvets365',
    name: 'Honorvets365',
    url: 'https://www.honorvets365.com/',
    category: 'Apparel',
    description:
      'Fashion store offering a wide range of women’s and men’s apparel and accessories, with deal-driven merchandising and fast shipping.',
  },
  {
    slug: 'rosegold-paris',
    name: 'ROSEGOLD Paris',
    url: 'https://www.rosegoldparis.com/en',
    category: 'Beauty',
    description:
      'Multilingual store for a French beauty brand’s range of natural growth serums for lashes, brows, lips, hair, nails and dark circles.',
  },
  {
    slug: 'petsworld',
    name: 'PetsWorld',
    url: 'https://petpads.net',
    category: 'Pet Supplies',
    description:
      'Direct-to-consumer store for ultra-absorbent dog pee pads, with large sizes, bulk deals and a focus on leak protection and odour control.',
  },
  {
    slug: 'instock-motorsports',
    name: 'In Stock Motorsports',
    url: 'https://instockmotorsports.com',
    category: 'Automotive',
    description:
      'Automotive tools and supplies store with a deep category catalogue — air tools, paints, diagnostics and more — selling across the US, Canada and Mexico.',
  },
  {
    slug: 'myrqvist',
    name: 'Myrqvist',
    url: 'https://myrqvist.com',
    category: 'Footwear',
    description:
      'Premium store for a Scandinavian men’s footwear brand, handcrafting classic shoes from some of the world’s finest leathers.',
  },
  {
    slug: 'wildwood-guitars',
    name: 'Wildwood Guitars',
    url: 'http://wildwoodguitars.com/',
    category: 'Musical Instruments',
    description:
      'Store for premium electric, acoustic and custom guitars, built for musicians of every style and level who care about craftsmanship and tone.',
  },
  {
    slug: 'hello-nancy',
    name: 'Hello Nancy',
    url: 'https://hellonancy.com/',
    category: 'Wellness',
    description:
      'Direct-to-consumer wellness brand for women, home of the viral lemon-shaped “Lem” and a playful, approachable product line.',
  },
  {
    slug: 'tenperformance',
    name: 'tenPerformance',
    url: 'https://www.tenperformance.com/',
    category: 'Supplements',
    description:
      'Supplement store offering clean, high-quality products for every goal — from muscle and energy to sleep and longevity.',
  },
];
