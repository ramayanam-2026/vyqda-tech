# VYQDA SEO five-point audit

Date: 2026-10-22
Audit branch: `seo/five-point-content-audit`
Source baseline: `design/v2-from-scratch`
Canonical domain intended by source: https://vyqda.com/

This document separates source-backed findings from items that require live crawling, browser QA, Search Console, analytics, or external keyword research. It does not claim ranking outcomes.

## 1. Search intent

| URL | Primary intent | Page's distinct job | Overlap guardrail |
|---|---|---|---|
| / | VYQDA software company; business software and custom development | Establish credibility, route visitors to products or services | Do not make it compete with every product/service page for every keyword |
| /products/ | Business software products | Help visitors compare the product portfolio | Keep product descriptions concise and route to each detail page |
| /products/timenox/ | Employee attendance software | Explain attendance workflow and product fit | Do not imply continuous field tracking |
| /products/timenox-360/ | Field workforce operations software | Explain distributed-team workflow needs | Do not claim live tracking, route optimisation, offline support or integrations unless confirmed |
| /products/vyfoo/ | Restaurant POS and billing software | Help restaurant operators assess order-to-bill fit | Avoid unverified payment, hardware, kitchen or accounting compatibility claims |
| /products/retail/ | Retail billing software and inventory workflows | Explain store billing and stock-related requirements | Do not promise unverified tax, multi-store, or inventory features |
| /products/shyft-box-finder/ | Home and office box finder app | Explain searchable storage-box and item records | Do not describe it as parcel tracking |
| /services/ | Custom software development services | Qualify business project enquiries and explain delivery approach | Keep focus on scoped engineering engagements, not ready-made product features |
| /solutions/ | Business software solutions and workflows | Connect operational problems to solution areas/products | Keep as a use-case hub rather than a duplicate services page |
| /industries/ | Industry software use cases | Explain relevant workflow examples by sector | Do not imply unverified industry specialisation or customer experience |
| /about/ | About VYQDA Technologies | Explain operating principles and accountability | Add named proof only when supported by verifiable company facts |
| /faq/ | VYQDA product and project questions | Resolve objections and help users choose a next step | Keep answers consistent with current product facts and service scope |
| /contact/ | Contact a software company / project enquiry | Capture a qualified enquiry | Verify form delivery and server-side CAPTCHA validation |
| /tools/ | Free online business tools | Help users find a relevant utility | Verify every external tool destination and describe only current functionality |

## 2. Keyword targeting

These are intent-led target phrases, not volume-validated keyword recommendations. Validate them against Google Search Console, Keyword Planner or another reputable keyword dataset before treating them as final priorities.

| Page | Primary target phrase | Supporting concepts |
|---|---|---|
| / | software development company; business software | software products, custom software development, SaaS engineering |
| /products/ | business software products | workforce software, restaurant POS, retail billing, storage organisation |
| /products/timenox/ | employee attendance software | attendance management, QR attendance, attendance reports, shift scheduling |
| /products/timenox-360/ | field workforce management software | field operations, distributed teams, operational reporting |
| /products/vyfoo/ | restaurant POS software | restaurant billing, order management workflow, point of sale |
| /products/retail/ | retail billing software | retail POS, stock workflows, product catalogue, returns |
| /products/shyft-box-finder/ | box finder app; storage inventory app | label boxes, find stored items, home and office storage |
| /services/ | custom software development services | SaaS development, web applications, business automation, maintenance |
| /solutions/ | business software solutions | workforce workflows, field operations, retail and restaurant operations |
| /industries/ | industry-specific business software use cases | manufacturing workflows, retail operations, restaurant systems |
| /about/ | VYQDA Technologies | software product company, technology partner |
| /faq/ | VYQDA software and development FAQs | project scope, estimates, ongoing support, product selection |
| /contact/ | contact software development company | custom software enquiry, product enquiry |
| /tools/ | free online business tools | invoice generator, QR code generator, tax calculator, productivity tools |

Rules:
- One primary intent per indexable URL; use supporting terms naturally rather than repeating exact-match phrases.
- Do not create city/country landing pages or new keyword pages solely to multiply similar URLs without evidence of distinct demand and useful local substance.
- Do not infer search volume, difficulty, rankings, or conversion performance without data.
- Avoid keyword cannibalisation by preserving the roles defined in the search-intent table.

## 3. Content quality

Source review found a sensible, cautious tone and explicit guardrails against unsupported feature claims on the product pages. The next quality pass should focus on usefulness and substantiation, not word count.

Priority checks:
1. Confirm every capability statement is true for the current product version and matches the dedicated product site.
2. Replace generic claims with concrete workflow explanations, prerequisites, limitations, evaluation criteria, and decision guidance where the facts are known.
3. Keep Services, Solutions, Industries and product detail pages distinct; avoid copying generic benefits/FAQs across them.
4. Substantiate company history, customer quotes, certifications, uptime/support promises, quantified results and geographic claims before publishing them.
5. Use FAQ content to answer real buyer questions; do not add repetitive FAQs simply to target more phrases.
6. Ensure titles and descriptions are unique, readable, and aligned with each page's actual content.

No company metrics, clients, credentials, product features, or performance results are invented in this audit.

## 4. Conversion potential

Source-level improvements already present include prominent contact/product CTAs, product-specific next steps, and a project-enquiry form. These are not proof of successful conversion.

Priority checks:
- Make primary CTA language match page intent: product pages should support product evaluation; Services should invite a scoped project discussion; Contact should set expectations for the enquiry.
- Keep the enquiry form proportionate and explain which information is useful. Phone is optional in the current source.
- Verify successful form submission, failure feedback, webhook delivery, spam controls, and server-side hCaptcha verification before relying on lead capture.
- Confirm each CTA and internal link lands on the intended page/section.
- Instrument and verify qualified enquiry events only after privacy/consent requirements are checked.
- Use real customer evidence or case studies only when approved and substantiated; do not fabricate testimonials or logos.

## 5. Technical SEO

### Confirmed from source inspection
- Astro site config targets https://vyqda.com.
- Shared layout defines title, description, canonical, robots, Open Graph/Twitter metadata, and Organization/WebSite/WebPage/BreadcrumbList JSON-LD.
- Main product pages use distinct titles, descriptions, and H1s.
- Homepage is standalone HTML rather than using the shared layout; its metadata/schema therefore needs separate regression checks.
- The shared layout currently uses a Vercel Blob URL for the logo. Confirm it is a stable public asset and returns HTTP 200; prefer a repository-hosted stable asset if the URL is time-limited.
- Astro sitemap integration and robots.txt exist in source, but source presence does not establish live correctness.

### Not verified yet
- Clean `npm ci`, `npm run check`, `npm run build`, `npm run seo:audit`, and `npm run content:audit` in a reproducible execution environment.
- Generated sitemap contains only canonical, indexable, successful URLs.
- Production HTTP status, rendered metadata, exactly one H1 per route, headings, structured data validity, redirects, internal links and external tool destinations.
- Contact webhook delivery, server-side hCaptcha verification, and GA4 collection/consent behaviour.
- Mobile/tablet/desktop rendering, accessibility, image/font loading, Lighthouse/PageSpeed and field Core Web Vitals.
- Google Search Console indexing, query/page performance, and sitemap status.

## Release and evidence policy
- No URL changes without a redirect plan.
- No production deployment, promotion, DNS change, or claims of ranking guarantees.
- Mark a check complete only when there is source evidence or a recorded test result.
- Search Console and analytics data remain owner-side pending input; no performance conclusions are made without them.
