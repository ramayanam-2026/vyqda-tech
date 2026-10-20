# VYQDA SEO implementation checklist

Baseline date: 2026-10-21
Repository: `ramayanam-2026/vyqda-tech`
Branch: `design/v2-from-scratch`
Production domain intended by Astro config: `https://vyqda.com`

Status key:
- [x] Verified in source or confirmed by an available test.
- [ ] Not yet verified or requires further work.
- [~] Partially checked; further validation required.

## Stage 1 — Baseline inventory

- [x] Confirm repository, branch, Astro framework, build scripts and sitemap integration from source.
- [x] Inventory homepage, product index, five product pages, services, solutions, industries, About, FAQ, Contact and Free Tools.
- [x] Confirm shared layout emits title, description, canonical, robots, OG/Twitter metadata and JSON-LD.
- [x] Confirm `public/robots.txt` exists and references `https://vyqda.com/sitemap-index.xml`.
- [x] Record that user confirmed the latest Vercel build and Free Tools page work.
- [ ] Run an independent clean production build and Astro type/content check in an execution environment.
- [ ] Inspect generated sitemap-index and sitemap files from the actual build.
- [ ] Crawl production URLs and verify HTTP status, canonical, robots and rendered metadata.
- [ ] Obtain Google Search Console page/query exports and analytics conversion data.
- [ ] Verify the actual production deployment and domain configuration.

## Page-by-page content and metadata

| Page / URL | Primary intent to validate | Source-level metadata | Content/intent audit | Live/mobile verification |
|---|---|---|---|---|
| `/` | VYQDA software company, products and custom development | [x] Present | [ ] | [ ] |
| `/products/` | Business software products | [x] Present | [ ] | [ ] |
| `/products/timenox/` | Employee attendance software | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/timenox-360/` | Field workforce operations | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/vyfoo/` | Restaurant POS software | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/retail/` | Retail billing / inventory software | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/shyft-box-finder/` | Home and office box finder app | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/services/` | Custom software development services | [x] Present | [ ] | [ ] |
| `/solutions/` | Business software solutions and workflows | [x] Present | [ ] | [ ] |
| `/industries/` | Industry use cases | [x] Present | [ ] | [ ] |
| `/about/` | Company information and engineering approach | [x] Present | [ ] | [ ] |
| `/faq/` | Answers about products, projects and support | [x] Present | [ ] | [ ] |
| `/contact/` | Contact / project enquiry | [x] Present | [x] Form added; webhook and CAPTCHA verification pending | [ ] |
| `/tools/` | Free online business and productivity tools | [x] Present | [ ] | [ ] |

## Critical technical SEO requirements

- [x] Astro canonical domain configured as `https://vyqda.com`.
- [x] Shared layout contains canonical and index/follow robots meta tags.
- [x] Shared layout generates Organization, WebSite, WebPage and BreadcrumbList JSON-LD.
- [~] Homepage has its own metadata and structured data implementation separate from the shared layout; consistency and duplication require review.
- [~] Sitemap integration is configured; generated sitemap contents and production reachability remain unverified.
- [~] Robots.txt exists; live response and alignment with legacy URLs require verification.
- [ ] Verify every route has exactly one H1 and a sensible H2/H3 hierarchy from rendered HTML.
- [ ] Verify every indexable route has a unique title and meta description.
- [ ] Validate JSON-LD syntax and visible-content alignment with Google's Rich Results Test / Schema Markup Validator.
- [ ] Check all internal links, external tool destinations, anchor fragments and redirects.
- [ ] Check 404/soft-404 responses, redirect chains, canonical consistency and accidental noindex.
- [ ] Confirm sitemap contains only intended canonical, indexable 200 URLs.
- [ ] Measure mobile usability and Core Web Vitals using field data and/or PageSpeed Insights.
- [ ] Verify font/logo assets return successfully and do not rely on expired URLs.
- [ ] Verify privacy/terms URLs and ensure robots/sitemap behavior matches the intended site architecture.
- [ ] Check accessibility basics: alt text, landmarks, labels, keyboard navigation and reduced-motion behavior.
- [ ] Check security/mixed content and HTTPS resource loading.
- [ ] Review hreflang only if distinct regional/language pages are actually implemented.

## Search research and measurement gaps

- [x] Public search results surfaced VYQDA homepage, services/products and tools pages.
- [x] Initial public competitor examples reviewed for Indian software development searches (directory/listing pages and a custom-development company page).
- [ ] Search Console data: query/page clicks, impressions, CTR, position, country and device.
- [ ] Search Console indexing report and sitemap status.
- [ ] Analytics: organic landing pages and qualified lead conversion events.
- [ ] Keyword Planner / Trends / reputable SEO platform volumes and difficulty, where available.
- [ ] SERP-by-SERP competitor review for the most valuable keyword clusters.
- [ ] Backlink/referring-domain data from Search Console or a reputable backlink provider.

## Implementation log

### 2026-10-21 — Stage 1 baseline
- Confirmed source inventory and common metadata/schema implementation.
- Found homepage Open Graph title differed from its HTML title and Twitter title.
- Fixed homepage Open Graph title to match the page title.
- Build verification for this specific commit: [ ] pending.
- Live rendered HTML verification for this change: [ ] pending.

## Guardrails
- Do not change established URLs without a migration/redirect plan.
- Do not invent keyword volumes, rankings, client proof, performance metrics or product capabilities.
- Do not mark a check complete without source or test evidence.
- Do not deploy/promote production or change DNS without explicit approval.


### 2026-10-21 — Stage 2: Service-page conversion content
- Added a practical project-brief section to `src/pages/services/index.astro` covering business outcomes, users/workflows, systems/data and scope/constraints.
- Intent: improve usefulness for commercial visitors and help qualify enquiries without unsupported performance claims or keyword stuffing.
- Competitor research reviewed: custom software service pages commonly describe capabilities, process, scope and support; VYQDA should differentiate through clear project planning and accountable delivery rather than unverified client counts or certifications.
- Source-level placement check: [x] section inserted before existing Service JSON-LD; [ ] Astro build and rendered-layout check pending.
- Google Search Console and analytics data: not available for this new site; no historical-performance conclusions made.


### 2026-10-21 — Stage 3: Product intent, measurement and enquiry capture
- Reworked all five product detail pages to make their search intent and evaluation content more distinct:
  - Timenox: browser-based attendance, check-in/check-out, shifts, verification options and attendance records.
  - Timenox 360: field-team and distributed operations, with explicit cautions not to assume continuous tracking or unconfirmed integrations.
  - Vyfoo: restaurant point-of-sale, order-to-bill workflow and restaurant-specific hardware/payment evaluation.
  - VYQDA Retail: retail billing and inventory-related workflows, product catalogue, stock, returns, devices and reporting.
  - SHYFT: home/office box and stored-item finding; explicitly not positioned as parcel tracking.
- Added internal comparison links between Timenox and Timenox 360 and linked the two products to their separate product websites where applicable. Corporate pages are positioned for product discovery and evaluation, not as replacements for the dedicated product websites.
- Added GA4 tag ID `G-EX2ZX46SND` to the shared layout. Source-level insertion checked; live analytics receipt and consent/privacy requirements still need verification.
- Replaced the contact page's email-only prompt with a form posting to the supplied automation webhook and added the supplied hCaptcha site key.
- Important contact-form dependency: a site key only renders the CAPTCHA challenge. The receiving webhook/workflow must verify the submitted `h-captcha-response` server-side with hCaptcha before processing enquiries. This could not be verified from the website repository; do not consider spam protection complete until that validation is confirmed.
- Source updates committed individually. Astro build, generated HTML, mobile rendering, live GA4 event receipt, webhook delivery, CORS/response behaviour and server-side CAPTCHA validation remain unverified.
- Search Console performance data is not available for this new site; no rankings, keyword volumes or performance claims inferred.
