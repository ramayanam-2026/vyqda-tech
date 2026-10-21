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
let checkedLinks = 0;
let brokenLinks = 0;
let missingImageAlt = 0;

function recordDuplicate(map, value, file, label) {
  if (!value) return;
  const previous = map.get(value);
  if (previous) warnings.push('Duplicate ' + label + ': "' + value + '" in ' + path.relative(root, previous) + ' and ' + path.relative(root, file));
  else map.set(value, file);
}

function localCandidates(target, file) {
  const clean = target.split(/[?#]/)[0];
  if (!clean || clean === '/') return [path.join(root, 'index.html')];
  let pathname;
  try {
    pathname = decodeURIComponent(clean);
  } catch {
    pathname = clean;
  }
  const resolved = pathname.startsWith('/')
    ? path.resolve(root, '.' + pathname)
    : path.resolve(path.dirname(file), pathname);
  if (!resolved.startsWith(root + path.sep) && resolved !== root) return [];
  return pathname.endsWith('/')
    ? [path.join(resolved, 'index.html')]
    : [resolved, resolved + '.html', path.join(resolved, 'index.html')];
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(root, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim().replace(/\s+/g, ' ');
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i)?.[1]?.trim();
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;

  if (!title) errors.push('Missing title: ' + rel);
  else {
    recordDuplicate(titleMap, title, file, 'title');
    if (title.length < 25 || title.length > 65) warnings.push('Title length is ' + title.length + ' characters (review, not a hard ranking limit): ' + rel);
  }
  if (!description) errors.push('Missing meta description: ' + rel);
  else {
    recordDuplicate(descriptionMap, description, file, 'meta description');
    if (description.length < 70 || description.length > 170) warnings.push('Meta description length is ' + description.length + ' characters (review for clarity and truncation): ' + rel);
  }
  if (!canonical) errors.push('Missing canonical: ' + rel);
  else {
    recordDuplicate(canonicalMap, canonical, file, 'canonical URL');
    if (!canonical.startsWith('https://vyqda.com/')) warnings.push('Canonical is outside the intended production domain: ' + canonical + ' (' + rel + ')');
  }
  if (h1Count === 0) warnings.push('No H1 found: ' + rel);
  if (h1Count > 1) warnings.push('Multiple H1 elements (' + h1Count + '): ' + rel);

  const robots = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i)?.[1] || '';
  if (/noindex/i.test(robots)) warnings.push('Page is marked noindex: ' + rel);

  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const match of jsonLd) {
    const jsonText = match[1].trim();
    try {
      JSON.parse(jsonText);
    } catch (error) {
      const preview = jsonText.slice(0, 100).replace(/\s+/g, ' ');
      const detail = error instanceof Error ? error.message : String(error);
      errors.push('Invalid JSON-LD syntax: ' + rel + ' (starts with "' + preview + '"; ' + detail + ')');
    }
  }

  for (const img of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=/i.test(img[0])) {
      missingImageAlt++;
      warnings.push('Image missing alt attribute: ' + rel + ' — ' + img[0].slice(0, 100));
    }
  }

  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const target = match[1].trim();
    if (!target || target.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(target)) continue;
    const candidates = localCandidates(target, file);
    if (!candidates.length) continue;
    checkedLinks++;
    if (!candidates.some(candidate => candidate.startsWith(root + path.sep) && fs.existsSync(candidate))) {
      brokenLinks++;
      warnings.push('Unresolved local link/asset "' + target + '" in ' + rel);
    }
  }
}

const sitemapFiles = ['sitemap-index.xml', 'sitemap.xml'].filter(name => fs.existsSync(path.join(root, name)));
if (!sitemapFiles.length) errors.push('No sitemap.xml or sitemap-index.xml found in dist/.');
else {
  for (const name of sitemapFiles) {
    const xml = fs.readFileSync(path.join(root, name), 'utf8');
    if (!xml.includes('https://vyqda.com')) warnings.push(name + ' contains no canonical production-domain URL.');
  }
}

console.log('SEO audit: scanned ' + htmlFiles.length + ' HTML files; checked ' + checkedLinks + ' local links/assets; found ' + missingImageAlt + ' images without alt attributes.');
console.log('Errors: ' + errors.length + '; warnings: ' + warnings.length + '; unresolved local links/assets: ' + brokenLinks + '.');
for (const item of errors) console.error('ERROR:', item);
for (const item of warnings) console.warn('WARN:', item);
if (errors.length) process.exitCode = 1;
