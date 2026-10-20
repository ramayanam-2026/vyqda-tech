// ============================================================
// VYQDA SITE CONTENT DATA
// All TODO fields must be reviewed before going live.
// Never publish fabricated numbers, testimonials, or logos.
// ============================================================

export const COMPANY = {
  name: 'VYQDA Technologies Pvt. Ltd.',
  shortName: 'VYQDA',
  tagline: 'Enterprise SaaS for the Modern Workforce',
  description: 'VYQDA Technologies builds enterprise-grade SaaS products that power workforce operations, retail management, and business productivity at scale.',
  founded: 'TODO: founding year',
  hq: 'TODO: headquarters city, state, India',
  email: {
    general: 'hello@vyqda.com',       // TODO: verify
    sales: 'sales@vyqda.com',          // TODO: verify
    support: 'support@vyqda.com',      // TODO: verify
    legal: 'legal@vyqda.com',          // TODO: verify
  },
  social: {
    linkedin: 'TODO: linkedin.com/company/vyqda-technologies',
    twitter: 'TODO: twitter.com/vyqdatech',
    github: 'TODO: github.com/vyqda-technologies',
  },
};

// ── Products ────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  slug: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  features: { title: string; body: string; icon: string }[];
  useCases: string[];
  audiences: string[];
  cta: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'timenox',
    name: 'Timenox',
    slug: 'timenox',
    eyebrow: 'Employee Attendance Software',
    headline: 'Attendance that works the way your teams do',
    subhead: 'QR-based check-ins, GPS verification, and real-time hybrid workforce visibility — from a single platform that scales with your organisation.',
    description: 'Timenox is an enterprise employee attendance management platform built for the complexity of modern work. Whether your teams operate in the office, on the field, or across hybrid arrangements, Timenox delivers accurate, tamper-resistant attendance records without friction.',
    primaryColor: 'var(--teal-600)',
    accentColor: 'var(--teal-400)',
    features: [
      {
        title: 'QR Check-In',
        body: 'Generate unique, time-bound QR codes for each shift. Employees scan on arrival; records land in the dashboard instantly.',
        icon: 'qr',
      },
      {
        title: 'GPS Verification',
        body: 'Confirm employee location at check-in without invasive tracking. Geo-fence rules prevent buddy-punching across sites.',
        icon: 'pin',
      },
      {
        title: 'Hybrid Workforce Management',
        body: 'Track office, remote, and field employees under one view. Flexible policies adapt to role, department, or site.',
        icon: 'users',
      },
      {
        title: 'Real-Time Dashboard',
        body: 'Live attendance feed, shift coverage gaps, and exception alerts. Managers act on data, not end-of-day reports.',
        icon: 'chart',
      },
      {
        title: 'Payroll-Ready Exports',
        body: 'Accurate hour totals, overtime flags, and leave balances — formatted for your payroll or HRMS. TODO: confirm supported integrations.',
        icon: 'export',
      },
      {
        title: 'Multi-Site Administration',
        body: 'Manage dozens of locations from a single admin console. Role-based access ensures site managers see only their teams.',
        icon: 'building',
      },
    ],
    useCases: [
      'Enterprises managing distributed workforces',
      'Organisations transitioning to hybrid work models',
      'Operations teams replacing paper registers or legacy systems',
      'TODO: additional validated use cases',
    ],
    audiences: ['HR Directors', 'Operations Managers', 'IT Administrators', 'CFOs'],
    cta: 'See Timenox in Action',
  },
  {
    id: 'vyfoo',
    name: 'Vyfoo',
    slug: 'vyfoo',
    eyebrow: 'TODO: Vyfoo product category',
    headline: 'TODO: Vyfoo headline (concrete, benefit-first)',
    subhead: 'TODO: Vyfoo subheadline (1–2 sentences, specific)',
    description: 'TODO: 2–3 paragraph product description for Vyfoo. Confirm all capabilities before publishing.',
    primaryColor: 'var(--blue-500)',
    accentColor: '#5B8FF9',
    features: [
      { title: 'TODO: Feature 1', body: 'TODO: Feature description', icon: 'star' },
      { title: 'TODO: Feature 2', body: 'TODO: Feature description', icon: 'star' },
      { title: 'TODO: Feature 3', body: 'TODO: Feature description', icon: 'star' },
    ],
    useCases: ['TODO: use case 1', 'TODO: use case 2'],
    audiences: ['TODO: audience 1', 'TODO: audience 2'],
    cta: 'Request a Demo',
  },
  {
    id: 'vyqda-retail',
    name: 'Vyqda Retail',
    slug: 'vyqda-retail',
    eyebrow: 'TODO: Vyqda Retail product category',
    headline: 'TODO: Vyqda Retail headline',
    subhead: 'TODO: Vyqda Retail subheadline',
    description: 'TODO: Product description for Vyqda Retail. Confirm all capabilities before publishing.',
    primaryColor: 'var(--teal-600)',
    accentColor: 'var(--teal-400)',
    features: [
      { title: 'TODO: Feature 1', body: 'TODO: Feature description', icon: 'star' },
      { title: 'TODO: Feature 2', body: 'TODO: Feature description', icon: 'star' },
      { title: 'TODO: Feature 3', body: 'TODO: Feature description', icon: 'star' },
    ],
    useCases: ['TODO: use case 1', 'TODO: use case 2'],
    audiences: ['TODO: audience 1', 'TODO: audience 2'],
    cta: 'Request a Demo',
  },
  {
    id: 'shyft',
    name: 'SHYFT',
    slug: 'shyft',
    eyebrow: 'TODO: SHYFT product category',
    headline: 'TODO: SHYFT headline',
    subhead: 'TODO: SHYFT subheadline',
    description: 'TODO: Product description for SHYFT. Confirm all capabilities before publishing.',
    primaryColor: 'var(--blue-500)',
    accentColor: '#5B8FF9',
    features: [
      { title: 'TODO: Feature 1', body: 'TODO: Feature description', icon: 'star' },
      { title: 'TODO: Feature 2', body: 'TODO: Feature description', icon: 'star' },
      { title: 'TODO: Feature 3', body: 'TODO: Feature description', icon: 'star' },
    ],
    useCases: ['TODO: use case 1', 'TODO: use case 2'],
    audiences: ['TODO: audience 1', 'TODO: audience 2'],
    cta: 'Request a Demo',
  },
];

// ── Stats — ALL are placeholders until verified ──────────────
// TODO: Replace every stat with a real, verified figure before launch.
export const STATS = [
  { value: 'TODO', suffix: '', label: 'Enterprises Served', verified: false },
  { value: 'TODO', suffix: '', label: 'Employees Tracked', verified: false },
  { value: 'TODO', suffix: '', label: 'Uptime SLA', verified: false },
  { value: 'TODO', suffix: '', label: 'Countries', verified: false },
];

// ── Credibility strip — all placeholders ────────────────────
// TODO: Replace with real partner/customer logos (SVG only, with permission)
export const CREDIBILITY_LOGOS: { name: string; placeholder: true }[] = [
  { name: 'Partner / Customer 1', placeholder: true },
  { name: 'Partner / Customer 2', placeholder: true },
  { name: 'Partner / Customer 3', placeholder: true },
  { name: 'Partner / Customer 4', placeholder: true },
  { name: 'Partner / Customer 5', placeholder: true },
];

// ── Platform pillars ─────────────────────────────────────────
export const PILLARS = [
  {
    icon: 'shield',
    title: 'Enterprise Security',
    body: 'Role-based access control, audit logs, and data residency controls built into every product. TODO: add verified certifications (ISO 27001, SOC 2, etc.) once confirmed.',
  },
  {
    icon: 'puzzle',
    title: 'Integration-Ready',
    body: 'REST APIs and webhooks designed for enterprise integration. TODO: confirm specific HRMS/ERP integrations supported.',
  },
  {
    icon: 'scale',
    title: 'Built to Scale',
    body: 'Multi-tenant architecture handles enterprise data volumes. TODO: add verified infrastructure and uptime details.',
  },
  {
    icon: 'support',
    title: 'Dedicated Support',
    body: 'Enterprise implementations include onboarding, training, and named support contacts. TODO: confirm SLA tiers and response times.',
  },
];

// ── Solutions / Industries — placeholders ───────────────────
// TODO: Confirm the industries and team personas VYQDA actively serves
export const SOLUTIONS = [
  {
    slug: 'enterprise',
    title: 'Large Enterprise',
    eyebrow: 'For Enterprise',
    body: 'TODO: Describe how VYQDA serves large enterprise customers (1000+ employees).',
    icon: 'building',
  },
  {
    slug: 'mid-market',
    title: 'Mid-Market',
    eyebrow: 'For Mid-Market',
    body: 'TODO: Describe VYQDA mid-market use cases.',
    icon: 'users',
  },
  {
    slug: 'retail',
    title: 'Retail & Distribution',
    eyebrow: 'For Retail',
    body: 'TODO: Describe retail-specific VYQDA capabilities and outcomes.',
    icon: 'store',
  },
  {
    slug: 'field-ops',
    title: 'Field Operations',
    eyebrow: 'For Field Teams',
    body: 'TODO: Describe how GPS and mobile features serve field-based teams.',
    icon: 'map',
  },
];

// ── Navigation ───────────────────────────────────────────────
export const NAV = {
  products: [
    { name: 'Timenox', href: '/products/timenox/', desc: 'Employee Attendance Software' },
    { name: 'Vyfoo', href: '/products/vyfoo/', desc: 'TODO: short descriptor' },
    { name: 'Vyqda Retail', href: '/products/vyqda-retail/', desc: 'TODO: short descriptor' },
    { name: 'SHYFT', href: '/products/shyft/', desc: 'TODO: short descriptor' },
    { name: 'All Products', href: '/products/', desc: 'Full product ecosystem' },
  ],
  solutions: [
    { name: 'By Industry', href: '/solutions/', desc: 'TODO: industry names' },
    { name: 'For HR Teams', href: '/solutions/#hr', desc: 'Attendance & workforce' },
    { name: 'For Operations', href: '/solutions/#ops', desc: 'Real-time visibility' },
    { name: 'For IT', href: '/solutions/#it', desc: 'Security & integration' },
  ],
  resources: [
    { name: 'Resource Hub', href: '/resources/', desc: 'Guides & tools' },
    { name: 'TODO: Guide title', href: '/resources/#guides', desc: 'TODO' },
  ],
  company: [
    { name: 'About', href: '/company/', desc: 'Mission & principles' },
    { name: 'Security', href: '/security/', desc: 'Trust & compliance' },
    { name: 'Contact', href: '/contact/', desc: 'Talk to sales' },
  ],
};
