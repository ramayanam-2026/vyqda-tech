import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
if (!fs.existsSync(root)) {
  console.error('Content audit: dist/ does not exist. Run npm run build first.');
  process.exit(2);
}

const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);

const pages = [];
const paragraphOwners = new Map();
const warnings = [];

function cleanText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<(?:header|footer|nav)\b[\s\S]*?<\/(?:header|footer|nav)>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(root, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || rel;
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]
    || html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]
    || html;
  const text = cleanText(main);
  const words = text.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu) || [];
  const paragraphs = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(match => cleanText(match[1]))
    .filter(value => value.length >= 90);
  pages.push({ rel, title, wordCount: words.length, paragraphCount: paragraphs.length });

  for (const paragraph of paragraphs) {
    const key = paragraph.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    const previous = paragraphOwners.get(key);
    if (previous && previous !== rel) {
      warnings.push('Repeated substantial paragraph on ' + previous + ' and ' + rel + ': "' + paragraph.slice(0, 115) + '…"');
    } else {
      paragraphOwners.set(key, rel);
    }
  }
}

for (const page of pages) {
  if (page.wordCount < 250) warnings.push('Low visible-content word count (' + page.wordCount + '): ' + page.rel + ' — review usefulness manually; this is not a ranking threshold.');
  if (page.paragraphCount < 3) warnings.push('Few substantial paragraphs (' + page.paragraphCount + '): ' + page.rel);
}

console.log('Content audit: inspected ' + pages.length + ' generated HTML pages.');
console.log('\nPage content estimates:');
for (const page of pages.sort((a, b) => a.rel.localeCompare(b.rel))) {
  console.log(String(page.wordCount).padStart(5) + ' words | ' + String(page.paragraphCount).padStart(2) + ' substantial paragraphs | ' + page.rel + ' | ' + page.title);
}
console.log('\nWarnings: ' + warnings.length);
for (const warning of warnings) console.warn('WARN:', warning);
console.log('\nImportant: word count is diagnostic only. Manually assess intent, evidence, specificity, helpfulness and conversion fit; longer copy is not automatically better.');
