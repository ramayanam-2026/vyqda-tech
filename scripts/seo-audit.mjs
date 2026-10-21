import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const errors = [];
const warnings = [];
const htmlFiles = [];

if (!fs.existsSync(root)) {
  console.error('SEO audit: dist/ does not exist. Run npm run build first.');
  process.exit(2);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);

if (!htmlFiles.length) errors.push('No generated HTML files found in dist/.');

const titleMap = new Map();
const descriptionMap = new Map();
const canonicalMap = new Map();
const routeSet = new Set(htmlFiles.map(file => '/' + path.relative(root, file).replace(/\\\\/g, '/').replace(/index\\.html$/, '')));
let checkedLinks = 0;
let brokenLinks = 0;

function recordDuplicate(map, value, file, label) {
  if (!value) return;
  const previous = map.get(value);
  if (previous) warnings.push(`Duplicate ${label}: "${value}" in ${path.relative(root, previous)} and ${path.relative(root, file)}`);
  else map.set(value, file);
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  const title = html.match(/<title[^>]*>([\\s\\S]*?)<\\/title>/i)?.[1]?.trim().replace(/\\s+/g, ' ');
  const description = html.match(/<meta\\s+name=["']description["']\\s+content=["']([^"']*)["'][^>]*>/i)?.[1]?.trim();
  const canonical = html.match(/<link\\s+rel=["']canonical["']\\s+href=["']([^"']+)["'][^>]*>/i)?.[1];
  const h1Count = (html.match(/<h1(?:\\s|>)/gi) || []).length;

  if (!title) errors.push(`Missing title: ${rel}`);
  else recordDuplicate(titleMap, title, file, 'title');
  if (!description) errors.push(`Missing meta description: ${rel}`);
  else recordDuplicate(descriptionMap, description, file, 'meta description');
  if (!canonical) errors.push(`Missing canonical: ${rel}`);
  else recordDuplicate(canonicalMap, canonical, file, 'canonical URL');
  if (h1Count === 0) warnings.push(`No H1 found: ${rel}`);
  if (h1Count > 1) warnings.push(`Multiple H1 elements (${h1Count}): ${rel}`);

  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\\/ld\\+json["'][^>]*>([\\s\\S]*?)<\\/script>/gi)];
  for (const match of jsonLd) {
    try { JSON.parse(match[1]); }
    catch { errors.push(`Invalid JSON-LD syntax: ${rel}`); }
  }

  for (const match of html.matchAll(/\\b(?:href|src)=["']([^"']+)["']/gi)) {
    const target = match[1].trim();
    if (!target || target.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:|\\/\\/)/i.test(target)) continue;
    const pathname = target.split(/[?#]/)[0];
    if (!pathname) continue;
    const resolved = path.resolve(path.dirname(file), pathname);
    const candidates = pathname.endsWith('/')
      ? [path.join(resolved, 'index.html')]
      : [resolved, resolved + '.html', path.join(resolved, 'index.html')];
    checkedLinks++;
    if (!candidates.some(candidate => candidate.startsWith(root + path.sep) && fs.existsSync(candidate))) {
      brokenLinks++;
      warnings.push(`Unresolved local link/asset "${target}" in ${rel}`);
    }
  }
}

const sitemapFiles = ['sitemap-index.xml', 'sitemap.xml'].filter(name => fs.existsSync(path.join(root, name)));
if (!sitemapFiles.length) warnings.push('No sitemap.xml or sitemap-index.xml found in dist/.');

console.log(`SEO audit: scanned ${htmlFiles.length} HTML files; checked ${checkedLinks} local links/assets.`);
console.log(`Errors: ${errors.length}; warnings: ${warnings.length}; unresolved local links/assets: ${brokenLinks}.`);
for (const item of errors) console.error('ERROR:', item);
for (const item of warnings) console.warn('WARN:', item);
if (errors.length) process.exitCode = 1;
