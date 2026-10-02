const fs = require('fs');
const html = fs.readFileSync('/tmp/cbdusal_home.html', 'utf8');

const regex = /https:\/\/produccioncientifica\.usal\.es\/(investigadores\/\d+\/detalle|area\/\d+\/detalle)/g;
let match;
const seen = new Set();
while ((match = regex.exec(html)) !== null) {
  const url = match[0];
  if (!seen.has(url)) {
    seen.add(url);
    const idx = match.index;
    const before = html.substring(Math.max(0, idx - 150), idx).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const after = html.substring(idx + url.length, Math.min(html.length, idx + url.length + 150)).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    console.log(`URL: ${url}`);
    console.log(`  Context: ${before} === [LINK] === ${after}\n`);
  }
}
