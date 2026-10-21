# VYQDA SEO keyword map, competitor review and content roadmap

**Prepared:** 22 October 2026  
**Repository baseline:** `design/v2-from-scratch`, user-confirmed recent commit `b528e1caf5adea59a5656e05b00a6bf64ec40e4d`  
**Target domain:** https://vyqda.com/

## Scope and evidence limits

This is an intent-led keyword map based on the current site source, VYQDA's stated products and services, and a sample of publicly visible search results. It is **not** a measured keyword-volume, difficulty, ranking, or backlink report. No Google Search Console export, GA4 landing-page report, Keyword Planner export, or paid SEO-platform dataset was available in the connected workspace. Do not interpret the priority levels below as search-volume estimates.

Public SERP examples reviewed:
- Clutch's India software-developer directory: https://clutch.co/in/developers
- Levitation's custom-software-company buyer guide: https://levitation.in/top-custom-software-development-companies-in-india
- Kanhasoft's software-product-development-company guide: https://kanhasoft.com/blog/software-product-development-companies-in-india/

The sample indicates that commercial buyers compare service scope, delivery approach, project fit, technical capabilities, and credible proof. Directory/listicle visibility is not a reliable measure of which competitor is best for VYQDA. The actionable lesson is to explain the buying decision clearly and show verifiable evidence rather than imitate unsupported claims.

## Keyword-to-page map

| Priority | Canonical page | Primary search intent / target phrase | Supporting language and questions | Content boundary |
|---|---|---|---|---|
| P1 | `/` | Software development company; business software products | software products, custom software, SaaS engineering, business automation, ongoing support | Introduce VYQDA's dual role as a product company and engineering partner. Do not try to rank the homepage for every product keyword. |
| P1 | `/services/` | Software development services; custom software development services | SaaS product development, web application development, automation, maintenance and support | Service overview and engagement selection. Detailed service routes own specific service intents. |
| P1 | `/services/custom-software-development/` | Custom software development company / services | bespoke business application, requirements, integrations, maintenance, cost-estimate preparation | Commercial service page; explain fit, process, constraints and ownership. No guaranteed price or delivery promise. |
| P1 | `/services/saas-product-development/` | SaaS product development | MVP planning, product engineering, roadmap, iteration, maintenance | Product lifecycle intent; distinguish from generic app development. |
| P1 | `/services/web-mobile-applications/` | Web and mobile application development | user journeys, responsive web apps, application integrations, accessibility | Application-specific intent. Do not imply native/mobile capabilities for every project without scoping. |
| P1 | `/services/business-process-automation/` | Business process automation services | workflow automation, approvals, system integration, repetitive admin | Explain when to automate and when process clarification/configuration is better. |
| P1 | `/services/maintenance-support/` | Software maintenance and support services | bug fixes, dependency updates, legacy application support, enhancements | Ongoing ownership intent. Avoid unsupported SLA/24x7 claims. |
| P1 | `/products/timenox/` | Employee attendance software | QR attendance, check-in/check-out, shifts, GPS/photo verification | Attendance product fit; clearly describe browser/device requirements and verified features. |
| P1 | `/products/timenox-360/` | Field workforce / field operations software | distributed teams, field workflows, location requirements, reporting | Do not imply continuous tracking or features not verified for the product. |
| P1 | `/products/vyfoo/` | Restaurant POS / restaurant billing software | order-to-bill flow, service model, hardware/payment compatibility | Explain evaluation questions and supported workflow; no unsupported integrations. |
| P1 | `/products/retail/` | Retail billing software | POS, catalogue, stock, returns, reporting, hardware | Distinguish from restaurant POS and generic billing. |
| P2 | `/products/shyft-box-finder/` | Box finder app / home and office storage inventory | label boxes, find stored items, moving and office storage | Keep distinct from parcel tracking, warehouse WMS and retail inventory. |
| P2 | `/solutions/workforce-management/` | Workforce management solutions | attendance, shifts, multi-location workflows | Use-case page connecting needs to Timenox and custom options. |
| P2 | `/solutions/field-operations/` | Field operations software | field staff coordination, site visits, operational visibility | Avoid implying unverified GPS or live tracking behaviours. |
| P2 | `/solutions/restaurant-technology/` | Restaurant technology / POS workflows | order management, billing, hardware, reporting | Link to Vyfoo and service/contact paths. |
| P2 | `/solutions/retail-software/` | Retail software / billing and inventory | point of sale, stock handling, store operations | Link to VYQDA Retail and relevant custom-development option. |
| P2 | `/industries/` | Business software by industry | manufacturing, retail, restaurants, field services, offices | Keep as a concise directory of use cases. Do not create thin near-duplicate pages for every industry without real specifics. |
| P2 | `/about/` | VYQDA Technologies | software company, engineering approach, product company, ongoing support | Trust and accountability; add only verifiable company facts and evidence. |
| P2 | `/faq/` | VYQDA software and development FAQs | cost estimates, starting a project, existing codebases, post-launch support | Answers must match actual service practice and structured data. |
| P3 | `/tools/` | Free online tools | specific tool names and task-based intents | Treat each tool as its own intent only if the destination works, has useful unique content, and is maintained. |

## Cannibalisation and architecture rules

1. The homepage targets the company and broad portfolio. It should not duplicate the full service detail pages.
2. `/services/` is the service selector. Each `/services/[service]/` route owns its specific commercial service topic.
3. `/solutions/` and its child routes explain business workflows and decision contexts, not repeat service copy word-for-word.
4. `/industries/` is a cross-industry overview. Only create a dedicated industry landing page when VYQDA can provide real industry-specific workflows, constraints, product fit and useful FAQs.
5. Product pages target product evaluation. Dedicated product domains should own deep product documentation, pricing and product-specific support where applicable; the corporate site should link clearly rather than duplicate everything.
6. Country pages must not be mass-produced doorway pages. Keep them indexable only when they provide genuinely useful market-specific context, and substantiate any local capability, presence, legal or data-residency statement.
7. Do not add city pages, exact-match keyword variants, or blogs solely to multiply URLs.

## On-page and conversion checklist

For every indexable page, verify the **rendered** output, not just the source:
- Unique, descriptive title and meta description that match the page's actual job.
- One clear H1; logical H2/H3 hierarchy.
- A useful opening that names the user's problem and page purpose without awkward repetition.
- Specific details that help a buyer make a decision: scope, process, fit, constraints, evaluation questions and next step.
- Contextual links to the closest related service, solution, product or contact page.
- A relevant CTA that does not overpromise.
- Canonical points to the preferred HTTPS URL; page returns 200 and is indexable.
- Structured data is valid and matches visible content. Do not add ratings, reviews, offers, product claims or FAQ answers that are not visibly supported.
- Images/assets load, images have appropriate alt text, and the page works on mobile and keyboard.
- No unsupported client names, testimonials, project results, certifications, uptime guarantees or service-level claims.

## Trust and proof backlog

High impact, but requires real company evidence before publication:
1. Publish a small number of approved case studies with the business context, VYQDA's role, solution scope, and outcomes that can be substantiated. Obtain client permission.
2. Add named testimonials only with explicit permission and verifiable attribution. Otherwise omit them.
3. Add a clear delivery/engagement outline and explain what is decided at discovery, build, acceptance, launch and support.
4. Clarify how code ownership, documentation, access, deployment and ongoing maintenance are agreed contractually. Do not imply one standard arrangement if it varies.
5. Verify the About page's legal entity, location and contact details against current company records before publishing them in structured data.
6. Remove any inherited public claims about client quotes, percentages, years of experience, guaranteed uptime or response times unless internal evidence supports them.

## Measurement required to finalise priorities

Export from Google Search Console for the last 3 months and 12 months:
- Queries and pages with clicks, impressions, CTR and average position.
- Country and device breakdown.
- Indexing status and sitemap processing errors.
- Search appearance where available.

From GA4, report organic landing pages and qualified enquiry events, and confirm the tag is actually receiving data. Define a qualified enquiry consistently; a form submission alone is not automatically a qualified lead.

With these first-party datasets, prioritise pages with relevant impressions but weak CTR, high-intent queries ranking just outside page one, and organic landing pages that fail to generate useful enquiries. Do not make up volume or ranking data when those exports are absent.

## Content roadmap

### First: protect and finish the commercial pages
1. Verify production routes, canonical URLs, sitemap, robots, redirects, title/description uniqueness and JSON-LD.
2. Review every service detail page for page-specific proof, examples, boundaries, and a next step.
3. Improve product-fit explanations and link each product page to its most relevant solution and contact route.
4. Strengthen About and delivery-process content using approved facts; no generic trust badges or invented case studies.
5. Verify every tool destination and noindex/retire pages that are broken, redundant or too thin.

### Next: create evidence-led resources
Proposed resources, subject to keyword and customer-question validation:
- Custom software vs off-the-shelf software: a decision framework.
- How to prepare a useful custom software development brief.
- What determines a software project estimate.
- SaaS MVP scope: how to prioritise the first end-to-end workflow.
- Software maintenance checklist for an existing application.
- Employee attendance software evaluation checklist.
- Field workforce software: questions to ask about location and privacy.
- Restaurant POS evaluation: order flow, hardware, payments and reporting.
- Retail billing software evaluation: catalogue, stock, returns and end-of-day process.

Each resource must answer a real buyer question, add original practical detail, link to one best-fit commercial page, and be reviewed for overlap before publication. Avoid publishing all topics at once without demand validation.

## Status of the six SEO workstreams

- **Page-by-page on-page review:** source-level review completed for core routes; production-rendered crawl and mobile verification remain pending because the current execution environment cannot confirm all live responses.
- **Keyword and competitor research:** directional SERP/competitor review and intent map documented; keyword volumes/difficulty and ranking opportunities remain unverified without a keyword dataset and Search Console.
- **Content gaps:** priorities and overlap boundaries documented; service/product pages should be enhanced where real examples or proof are available.
- **Trust and conversion:** the site already explains process and project briefing; case studies, named proof, legal facts and contractual details require company-approved evidence.
- **Indexing and performance:** not complete without Search Console/GA4 access and production crawl results. A source-code build audit is not a substitute.
- **Content strategy:** initial roadmap documented; final ordering must be revisited using first-party search and qualified-lead data.
