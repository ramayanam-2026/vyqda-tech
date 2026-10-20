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
| `/` | VYQDA software company, products and custom development | [x] Present | [x] Source-level intent review; render review pending | [ ] |
| `/products/` | Business software products | [x] Present | [x] SHYFT copy corrected to box-finder intent; render review pending | [ ] |
| `/products/timenox/` | Employee attendance software | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/timenox-360/` | Field workforce operations | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/vyfoo/` | Restaurant POS software | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/retail/` | Retail billing / inventory software | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/products/shyft-box-finder/` | Home and office box finder app | [x] Present | [x] Source content revised; render review pending | [ ] |
| `/services/` | Custom software development services | [x] Present | [x] Scope-oriented content present; overlap review recorded | [ ] |
| `/solutions/` | Business software solutions and workflows | [x] Present | [x] Use-case hub; SHYFT storage wording corrected | [ ] |
| `/industries/` | Industry use cases | [x] Present | [x] General use-case framing; substantiation review still required | [ ] |
| `/about/` | Company information and engineering approach | [x] Present | [~] Distinct intent; proof points and company facts require substantiation | [ ] |
| `/faq/` | Answers about products, projects and support | [x] Present | [x] Source-level intent checked; schema and rendered content validation pending | [ ] |
| `/contact/` | Contact / project enquiry | [x] Present | [x] Form added; webhook and CAPTCHA verification pending | [ ] |
| `/tools/` | Free online business and productivity tools | [x] Present | [~] Utility intent distinct; tool destinations and functionality need live verification | [ ] |

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


## Stage 4 — SEO audit findings and source fixes (2026-10-21)

### Source-level fixes applied
- Added GA4 `G-EX2ZX46SND` to the homepage's standalone HTML head. The homepage does not use `SiteLayout.astro`, so the shared-layout tag alone did not cover it.
- Fixed the homepage Contact Us CTA from `#contact` to `/contact/`; the homepage has no matching `id="contact"` section.
- Removed parcel-finding wording from SHYFT's homepage product description and aligned the product index and Solutions page to home/office box and stored-item finding. This better matches the known product positioning.
- Simplified `public/robots.txt` to allow crawling and reference the sitemap. The former `/privacy/` and `/terms/` exclusions did not match the existing legal route naming convention (e.g. `/privacy-policy/`, `/terms-of-service/`) and were not useful exclusions.
- Removed stale legal-path exclusions from the Astro sitemap integration. The standard sitemap integration now includes generated pages unless otherwise excluded by Astro itself.

### Audit findings requiring attention
- **High — production/live verification is still absent:** source review does not prove deployed HTML, HTTP status, sitemap accessibility, GA4 collection, form delivery, or search indexing. Verify after the branch is deployed to the intended environment.
- **High — logo asset URL may be time-limited:** the shared layout and homepage embed a signed Vercel Blob URL containing an expiry timestamp. Replace it with a stable public asset or a repository-hosted logo, then confirm it returns HTTP 200. Do not rely on a signed URL for a critical site-wide brand asset.
- **High — unsupported or risky claims exist on the currently indexed legacy public domain:** public search snapshots show claims such as quantified results, uptime guarantees, response-time guarantees, years of experience, and customer quotes. These must be supported by internal evidence or removed; they are not validated by this source audit and may not correspond to this branch.
- **Medium — content overlap risk:** Services is the custom-development service page; Solutions is the operational-use-case hub; Industries is a broad use-case directory; product pages are product-fit pages. Preserve these distinct jobs. Do not expand all pages with the same generic benefits/FAQ text. Industry pages should be expanded only when VYQDA has specific, accurate workflows and useful details to contribute.
- **Medium — product structured data:** the five individual product pages have unique title/description/H1 and product-specific copy, but do not currently emit Product schema. Add only if the product facts, offers, pricing, brand and URLs can be represented accurately; schema is not a ranking shortcut.
- **Medium — homepage metadata/schema architecture differs:** homepage is standalone HTML while other pages use `SiteLayout.astro`. It now has its own GA4 tag, but duplicated metadata/schema must be kept aligned manually. Consider refactoring only after visual and build regression checks.
- **Medium — legal pages and sitemap inventory:** verify whether privacy policy and terms pages are part of the deployed Astro project or served elsewhere. Sitemap should include real, canonical, indexable 200 URLs; robots.txt should not be used to hide URLs from indexing.
- **Medium — contact form:** verify webhook receipt, error handling and server-side hCaptcha verification before treating lead capture/spam protection as complete.
- **Medium — internal and external links:** crawl every page and verify all internal anchors, product-domain links, and all 13 Free Tools destinations. Source presence is not proof of a successful destination.
- **Medium — accessibility/performance:** test responsive rendering, keyboard focus, reduced motion, image sizing, font loading, PageSpeed and field Core Web Vitals. No scores were fabricated.

### Current audit status
- [x] Source-level metadata, canonical, robots and schema inventory completed for the 14 main routes.
- [x] Primary intent reviewed for homepage, product index, five product pages, services, solutions, industries, About, FAQ, Contact and Free Tools.
- [x] Obvious source issues fixed: homepage GA4 omission, broken homepage contact anchor, SHYFT parcel wording, stale robots exclusions and stale sitemap filter.
- [ ] Clean Astro check/build and generated HTML inspection.
- [ ] Full URL crawl with status/canonical/meta/schema/internal-link checks.
- [ ] Live logo/asset validation.
- [ ] Search Console indexation and query data review after deployment.
- [ ] PageSpeed/Core Web Vitals and mobile review.
- [ ] Contact submission, CAPTCHA verification and GA4 event receipt.



## Stage 5 — Verification pass against latest user baseline (2026-10-21)

Baseline requested: commit `452954ac100ccb7d75502edcf0b6f6cad1645b73` (phone placeholder update). This section records checks attempted against that baseline and clearly separates completed checks from environment-blocked checks.

### Results

| Requested check | Result | Evidence / next action |
|---|---|---|
| 1. Independent Astro check and production build | **Blocked — not run** | The runtime could not resolve `github.com`, so the branch could not be cloned into an isolated build environment. No build success is claimed. Vercel reports a failed status linking to `https://vercel.com/vyfoos-projects?upgradeToPro=build-rate-limit`, indicating a deployment/build-rate-limit issue that needs resolution in the Vercel account. |
| 2. Crawl all deployed routes and validate rendered HTML | **Blocked for the preview** | `https://vyqda-tech.vercel.app/contact` was not accessible to the available web retrieval tool. The public `https://vyqda.com/` is crawlable, but its rendered content is an older/different corporate site and must not be treated as proof of the `design/v2-from-scratch` deployment. A full route crawl of the intended build cannot be honestly reported until the preview is reachable. |
| 3. Verify sitemap, canonicals, structured data and redirects | **Source review only; live verification blocked** | Source contains Astro sitemap integration and canonical/JSON-LD handling, but the preview `robots.txt` and `sitemap-index.xml` endpoints were inaccessible to the retrieval tool. HTTP status, sitemap URL inventory, redirect chain, and rendered schema validity remain unverified. After deployment, crawl every generated URL and validate canonicals, schema, and redirect destinations. |
| 4. Verify logo asset and contact form | **Partially reviewed; live test blocked** | Prior source audit identified a potentially expiring signed Vercel Blob logo URL. It remains an open issue until replaced/verified. Contact form source includes a phone field, async webhook submission and thank-you state; live webhook delivery, browser CORS behaviour, HTTP response handling, hCaptcha server-side verification and CRM mapping were not tested. |
| 5. Review Google Search Console indexing and performance | **Blocked — no GSC data access** | No Search Console connector/data was available in this session. No indexing counts, queries, impressions, CTR or ranking changes are asserted. Review URL Inspection and Performance after the intended build is deployed and the property is accessible. |
| 6. Test page speed and mobile experience | **Blocked — no reachable target build** | No Lighthouse/PageSpeed run or mobile browser test could be executed against the preview. Do not report fabricated scores or Core Web Vitals. Run PageSpeed Insights for the deployed canonical URL and test representative mobile viewport widths after preview/deployment access is restored. |

### Critical live-domain observation

The crawlable public homepage `https://vyqda.com/` contains substantial claims that need evidence or removal before that page is treated as trustworthy SEO content. Examples include quantified improvements (e.g. 60% billing-time reduction, 45% faster order processing), 24/7 support, 15+ countries, customer-style quotations, and broad compliance/enterprise assertions. These appeared in the public rendered page retrieved during this pass. They were not validated by repository evidence and may belong to a different/older deployment. Audit the actual production release before changing or carrying any such claims forward.

### Release gate

Do not call this six-part verification complete yet. The immediate blocker is a reachable, successful deployment of the intended commit. Resolve the Vercel build-rate-limit failure, ensure the correct branch/project is connected, and provide access to the deployed preview. Then repeat checks 1–4 and 6. Connect/provide Google Search Console access for check 5. Preserve this evidence log and mark each item complete only after its result is captured.
