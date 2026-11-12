import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');
const publicDir = path.join(rootDir, 'public');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, '&quot;');
}

function escapeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function replaceOrThrow(source, pattern, replacementFn, label) {
  if (!pattern.test(source)) {
    throw new Error(`Template is missing expected marker for: ${label}`);
  }
  return source.replace(pattern, replacementFn);
}

function buildPageHtml(template, routeHtml, seo) {
  let out = template;

  out = replaceOrThrow(
    out,
    /<title>[\s\S]*?<\/title>/,
    () => `<title>${escapeHtml(seo.title)}</title>`,
    '<title>'
  );

  out = replaceOrThrow(
    out,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    () => `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    'meta[name="description"]'
  );

  out = replaceOrThrow(
    out,
    /[ \t]*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    () =>
      seo.canonicalUrl
        ? `    <link rel="canonical" href="${escapeAttr(seo.canonicalUrl)}" />`
        : '',
    'link[rel="canonical"]'
  );

  out = replaceOrThrow(
    out,
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    () => `<meta name="robots" content="${escapeAttr(seo.robots)}" />`,
    'meta[name="robots"]'
  );

  out = replaceOrThrow(
    out,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
    'meta[property="og:title"]'
  );

  out = replaceOrThrow(
    out,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
    'meta[property="og:description"]'
  );

  out = replaceOrThrow(
    out,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:url" content="${escapeAttr(seo.url)}" />`,
    'meta[property="og:url"]'
  );

  out = replaceOrThrow(
    out,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    () => `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`,
    'meta[name="twitter:title"]'
  );

  out = replaceOrThrow(
    out,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    () => `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`,
    'meta[name="twitter:description"]'
  );

  const extraHeadTags = [];
  if (seo.ogImage) {
    extraHeadTags.push(
      `    <meta property="og:image" content="${escapeAttr(seo.ogImage)}" />`
    );
    extraHeadTags.push(
      `    <meta name="twitter:image" content="${escapeAttr(seo.ogImage)}" />`
    );
  }
  if (seo.jsonLd) {
    extraHeadTags.push(
      `    <script id="page-jsonld" type="application/ld+json">${escapeJsonLd(seo.jsonLd)}</script>`
    );
  }

  if (extraHeadTags.length > 0) {
    out = replaceOrThrow(
      out,
      /<\/head>/,
      () => `${extraHeadTags.join('\n')}\n  </head>`,
      '</head>'
    );
  }

  out = replaceOrThrow(
    out,
    /<div\s+id="root"\s*><\/div>/,
    () => `<div id="root">${routeHtml}</div>`,
    '<div id="root"></div>'
  );

  return out;
}

function resolveSsrEntry() {
  for (const name of ['entry-server.js', 'entry-server.mjs']) {
    const candidate = path.join(ssrDir, name);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  throw new Error(`Could not find SSR bundle in ${ssrDir}`);
}

function buildSitemapXml(siteUrl, routes, lastmod) {
  const urlEntries = routes.map((route) => {
    const loc = `${siteUrl}${route === '/' ? '/' : route}`;
    return `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlEntries,
    '</urlset>',
    '',
  ].join('\n');
}

async function main() {
  try {
    const templatePath = path.join(distDir, 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const ssrEntryPath = resolveSsrEntry();
    const { render, getIndexableRoutes, siteUrl } = await import(
      pathToFileURL(ssrEntryPath).href
    );

    const indexableRoutes = getIndexableRoutes();
    const allRoutesToRender = [...indexableRoutes, '/404'];
    const seenTitles = new Set();

    for (const route of allRoutesToRender) {
      const { html, seo } = render(route);
      if (!html || !seo) {
        throw new Error(`SSR produced empty html or seo metadata for route: ${route}`);
      }
      if (!/<h1[\s>]/i.test(html)) {
        throw new Error(`Missing <h1> in pre-rendered HTML for route: ${route}`);
      }

      if (route === '/404') {
        if (seo.canonicalUrl !== null) {
          throw new Error(`404 page must not emit a canonical URL`);
        }
        if (!seo.robots.includes('noindex')) {
          throw new Error(`404 page must have noindex robots meta`);
        }
      } else {
        const expectedCanonical = `${siteUrl}${route === '/' ? '/' : route}`;
        if (seo.canonicalUrl !== expectedCanonical) {
          throw new Error(
            `Canonical mismatch on ${route}: expected ${expectedCanonical}, got ${seo.canonicalUrl}`
          );
        }
        if (seo.robots.includes('noindex')) {
          throw new Error(`Indexable route ${route} unexpectedly marked noindex`);
        }
        if (seenTitles.has(seo.title)) {
          throw new Error(`Duplicate <title> detected on ${route}: ${seo.title}`);
        }
        seenTitles.add(seo.title);
      }

      const finalHtml = buildPageHtml(template, html, seo);
      const outPath =
        route === '/'
          ? path.join(distDir, 'index.html')
          : path.join(distDir, `${route.slice(1)}.html`);

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, finalHtml, 'utf-8');
    }

    const lastmod = new Date().toISOString().slice(0, 10);
    const sitemapXml = buildSitemapXml(siteUrl, indexableRoutes, lastmod);
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

    console.log(
      `Pre-rendered ${indexableRoutes.length} indexable routes + /404 (${seenTitles.size} unique titles) and generated sitemap.xml (${indexableRoutes.length} URLs, lastmod ${lastmod}).`
    );
  } finally {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

