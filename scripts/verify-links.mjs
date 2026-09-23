import fs from 'node:fs';
import path from 'node:path';

function getHtmlFiles(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getHtmlFiles(fullPath));
    } else if (item.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const htmlFiles = getHtmlFiles(distDir);
const siteUrl = 'https://codigosroblox.org';
let hrefErrors = [];
let assetErrors = [];
let schemaErrors = [];
let anchorErrors = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(distDir, file);

  // 1. Check href="..."
  const hrefRegex = /href="([^"]+)"/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    let url = match[1];
    if (url.startsWith('http://') || url.startsWith('https://')) {
      if (url.startsWith(siteUrl)) {
        url = url.replace(siteUrl, '');
      } else {
        continue; // external link
      }
    }
    if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:')) continue;
    if (url.startsWith('#')) continue;
    
    const cleanUrl = url.split('#')[0].split('?')[0];
    if (!cleanUrl) continue;

    let targetPath;
    if (cleanUrl.endsWith('/')) {
      targetPath = path.join(distDir, cleanUrl, 'index.html');
    } else {
      const direct = path.join(distDir, cleanUrl);
      const asIndex = path.join(distDir, cleanUrl, 'index.html');
      if (fs.existsSync(direct) && !fs.statSync(direct).isDirectory()) {
        targetPath = direct;
      } else if (fs.existsSync(asIndex)) {
        targetPath = asIndex;
      } else {
        targetPath = direct;
      }
    }

    if (!fs.existsSync(targetPath)) {
      hrefErrors.push({ from: relFile, link: match[1], cleanUrl, targetPath });
    }
  }

  // 2. Check src="..."
  const srcRegex = /src="([^"]+)"/g;
  let m;
  while ((m = srcRegex.exec(content)) !== null) {
    let src = m[1];
    if (src.startsWith('http://') || src.startsWith('https://')) {
      if (src.startsWith(siteUrl)) {
        src = src.replace(siteUrl, '');
      } else {
        continue;
      }
    }
    if (src.startsWith('data:')) continue;
    const cleanSrc = src.split('?')[0];
    const assetPath = path.join(distDir, cleanSrc);
    if (!fs.existsSync(assetPath)) {
      assetErrors.push({ file: relFile, src });
    }
  }

  // 3. Check JSON-LD URLs
  const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  while ((m = jsonLdRegex.exec(content)) !== null) {
    try {
      const data = JSON.parse(m[1]);
      const checkUrls = (obj) => {
        if (!obj || typeof obj !== 'object') return;
        for (const [k, v] of Object.entries(obj)) {
          if (typeof v === 'string' && (k === 'url' || k === 'item')) {
            if (v.startsWith(siteUrl)) {
              const urlPath = v.replace(siteUrl, '').split('#')[0].split('?')[0];
              if (urlPath) {
                const target = urlPath.endsWith('/')
                  ? path.join(distDir, urlPath, 'index.html')
                  : path.join(distDir, urlPath);
                const targetIndex = path.join(distDir, urlPath, 'index.html');
                if (!fs.existsSync(target) && !fs.existsSync(targetIndex)) {
                  schemaErrors.push({ file: relFile, url: v, target });
                }
              }
            }
          } else if (typeof v === 'object') {
            checkUrls(v);
          }
        }
      };
      checkUrls(data);
    } catch (e) {}
  }

  // 4. Check within-page anchors
  const aRegex = /href="(#[^"]+)"/g;
  while ((m = aRegex.exec(content)) !== null) {
    const anchor = m[1].substring(1);
    if (anchor === 'top') continue;
    if (!content.includes(`id="${anchor}"`) && !content.includes(`name="${anchor}"`)) {
      anchorErrors.push({ file: relFile, anchor });
    }
  }
}

console.log('--- LINK AUDIT REPORT ---');
console.log(`Audited HTML Pages: ${htmlFiles.length}`);
console.log(`Href errors: ${hrefErrors.length}`);
console.log(`Asset errors: ${assetErrors.length}`);
console.log(`Schema errors: ${schemaErrors.length}`);
console.log(`Anchor errors: ${anchorErrors.length}`);

if (hrefErrors.length === 0 && assetErrors.length === 0 && schemaErrors.length === 0 && anchorErrors.length === 0) {
  console.log('✅ ALL CHECKS PASSED: ZERO BROKEN LINKS DETECTED!');
  process.exit(0);
} else {
  console.error('❌ FAIL: Found broken links!');
  if (hrefErrors.length > 0) console.error('Href Errors:', hrefErrors);
  if (assetErrors.length > 0) console.error('Asset Errors:', assetErrors);
  if (schemaErrors.length > 0) console.error('Schema Errors:', schemaErrors);
  if (anchorErrors.length > 0) console.error('Anchor Errors:', anchorErrors);
  process.exit(1);
}
