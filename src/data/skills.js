/**
 * Skills, grouped for the bento grid. `icon` is any lucide-react icon name
 * (https://lucide.dev/icons). The first group is rendered as the large card.
 */
export const skillGroups = [
  {
    id: 'shopify',
    title: 'Shopify Platform',
    icon: 'ShoppingBag',
    description:
      'End-to-end Shopify work — from Liquid themes and Plus storefronts to custom apps built on the Admin API.',
    skills: [
      { name: 'Shopify & Shopify Plus', note: 'Store setup, Plus storefronts, checkout-ready builds', icon: 'Store' },
      { name: 'Shopify Liquid', note: 'Sections, snippets, metafields & templates', icon: 'Braces' },
      { name: 'Theme Development', note: 'Custom Online Store 2.0 themes', icon: 'Paintbrush' },
      { name: 'App Development', note: 'Custom apps, dashboards & integrations', icon: 'Blocks' },
      { name: 'Shopify Admin API', note: 'Products, orders & store data integrations', icon: 'Webhook' },
      { name: 'Store Optimization', note: 'Speed, Core Web Vitals & UX fixes', icon: 'Gauge' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'PanelsTopLeft',
    description: 'Responsive, accessible interfaces with clean, maintainable code.',
    skills: [
      { name: 'JavaScript & jQuery', icon: 'FileCode' },
      { name: 'React.js', icon: 'Atom' },
      { name: 'HTML5 & CSS3', icon: 'CodeXml' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Tooling',
    icon: 'Server',
    description: 'APIs, server logic and the workflow behind reliable releases.',
    skills: [
      { name: 'Node.js & Express.js', icon: 'Server' },
      { name: 'PHP', icon: 'SquareCode' },
      { name: 'REST APIs', icon: 'Plug' },
      { name: 'Git & GitHub', icon: 'GitBranch' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: 'Database',
    description: 'SQL and NoSQL storage for apps, integrations and dashboards.',
    skills: [
      { name: 'MySQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Leaf' },
      { name: 'SQLite', icon: 'Feather' },
    ],
  },
];
