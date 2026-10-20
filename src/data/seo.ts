// ============================================================
// VYQDA SEO DATA — keyword map, per-page metadata
// Review and approve keywords before publishing.
// ============================================================

export interface PageSEO {
  title: string;            // ≤60 chars
  description: string;      // ≤155 chars
  canonical: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
}

export const SEO: Record<string, PageSEO> = {
  home: {
    title: 'VYQDA Technologies — Enterprise SaaS Platform',
    description: 'VYQDA Technologies builds enterprise-grade SaaS products including Timenox attendance software, Vyfoo, SHYFT, and Vyqda Retail — powering modern workforce operations.',
    canonical: 'https://vyqda.com/',
    primaryKeyword: 'enterprise SaaS platform',
    secondaryKeywords: ['workforce management software', 'multi-product SaaS', 'VYQDA Technologies'],
  },
  products: {
    title: 'Products — VYQDA Technologies SaaS Ecosystem',
    description: 'Explore the VYQDA product suite: Timenox, Vyfoo, SHYFT, and Vyqda Retail. Purpose-built SaaS solutions for enterprise workforce and operations management.',
    canonical: 'https://vyqda.com/products/',
    primaryKeyword: 'VYQDA SaaS products',
    secondaryKeywords: ['workforce SaaS suite', 'enterprise software products', 'VYQDA ecosystem'],
  },
  timenox: {
    title: 'Timenox — Employee Attendance Software | VYQDA',
    description: 'Timenox is enterprise employee attendance software with QR check-ins, GPS verification, and hybrid workforce management. Accurate, real-time, and built for scale.',
    canonical: 'https://vyqda.com/products/timenox/',
    primaryKeyword: 'Employee Attendance Software',
    secondaryKeywords: ['QR attendance system', 'GPS workforce tracking', 'hybrid workforce management'],
  },
  vyfoo: {
    title: 'Vyfoo — [TODO: Product tagline] | VYQDA',
    // TODO: Confirm Vyfoo's primary keyword and value proposition
    description: 'Vyfoo by VYQDA Technologies — [TODO: product description ≤155 chars].',
    canonical: 'https://vyqda.com/products/vyfoo/',
    primaryKeyword: 'TODO: primary keyword for Vyfoo',
    secondaryKeywords: ['TODO: keyword 2', 'TODO: keyword 3'],
  },
  vyqdaRetail: {
    title: 'Vyqda Retail — [TODO: Product tagline] | VYQDA',
    // TODO: Confirm Vyqda Retail's primary keyword
    description: 'Vyqda Retail by VYQDA Technologies — [TODO: product description ≤155 chars].',
    canonical: 'https://vyqda.com/products/vyqda-retail/',
    primaryKeyword: 'TODO: primary keyword for Vyqda Retail',
    secondaryKeywords: ['TODO: keyword 2', 'TODO: keyword 3'],
  },
  shyft: {
    title: 'SHYFT — [TODO: Product tagline] | VYQDA',
    // TODO: Confirm SHYFT's primary keyword and value proposition
    description: 'SHYFT by VYQDA Technologies — [TODO: product description ≤155 chars].',
    canonical: 'https://vyqda.com/products/shyft/',
    primaryKeyword: 'TODO: primary keyword for SHYFT',
    secondaryKeywords: ['TODO: keyword 2', 'TODO: keyword 3'],
  },
  solutions: {
    title: 'Solutions — Workforce & Operations | VYQDA',
    description: 'VYQDA solutions for enterprise HR, operations, and IT teams. Purpose-built for industries including [TODO: confirm industries].',
    canonical: 'https://vyqda.com/solutions/',
    primaryKeyword: 'enterprise workforce solutions',
    secondaryKeywords: ['HR software solutions', 'operations management platform', 'VYQDA solutions'],
  },
  resources: {
    title: 'Resources — Guides, Tools & Insights | VYQDA',
    description: 'Free guides, calculators, and resources for HR and operations professionals from VYQDA Technologies.',
    canonical: 'https://vyqda.com/resources/',
    primaryKeyword: 'HR operations resources',
    secondaryKeywords: ['workforce management guides', 'attendance ROI calculator', 'VYQDA resources'],
  },
  company: {
    title: 'Company — About VYQDA Technologies',
    description: 'VYQDA Technologies is a SaaS company building enterprise-grade workforce and operations products. Learn about our mission, principles, and team.',
    canonical: 'https://vyqda.com/company/',
    primaryKeyword: 'VYQDA Technologies company',
    secondaryKeywords: ['about VYQDA', 'SaaS company India', 'enterprise software company'],
  },
  contact: {
    title: 'Request a Demo — Contact VYQDA Technologies',
    description: 'Schedule a product demo or contact the VYQDA sales team. See how Timenox and the VYQDA platform can transform your workforce operations.',
    canonical: 'https://vyqda.com/contact/',
    primaryKeyword: 'VYQDA demo request',
    secondaryKeywords: ['contact VYQDA', 'employee attendance demo', 'workforce software demo'],
  },
  security: {
    title: 'Security & Trust — VYQDA Technologies',
    description: 'VYQDA\'s approach to security, data privacy, and enterprise trust. [TODO: add verified certifications and compliance details].',
    canonical: 'https://vyqda.com/security/',
    primaryKeyword: 'VYQDA security',
    secondaryKeywords: ['enterprise SaaS security', 'data privacy workforce software'],
  },
  privacy: {
    title: 'Privacy Policy — VYQDA Technologies',
    description: 'Privacy policy for VYQDA Technologies products and services.',
    canonical: 'https://vyqda.com/privacy/',
    primaryKeyword: 'VYQDA privacy policy',
    secondaryKeywords: [],
    noindex: true,
  },
  terms: {
    title: 'Terms of Service — VYQDA Technologies',
    description: 'Terms of service for VYQDA Technologies products and services.',
    canonical: 'https://vyqda.com/terms/',
    primaryKeyword: 'VYQDA terms of service',
    secondaryKeywords: [],
    noindex: true,
  },
  notFound: {
    title: '404 — Page Not Found | VYQDA Technologies',
    description: 'The page you\'re looking for doesn\'t exist. Return to VYQDA Technologies.',
    canonical: 'https://vyqda.com/404/',
    primaryKeyword: '404',
    secondaryKeywords: [],
    noindex: true,
  },
};
