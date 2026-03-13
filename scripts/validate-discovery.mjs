import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://antonyevans.com';
const requiredFiles = ['robots.txt', 'sitemap.xml', 'rss.xml', 'llms.txt'];

async function walkHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const resolved = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return walkHtmlFiles(resolved);
      }

      return resolved.endsWith('.html') ? [resolved] : [];
    }),
  );

  return files.flat();
}

async function assertRequiredFiles() {
  await Promise.all(
    requiredFiles.map(async (file) => {
      await readFile(path.join(distDir, file), 'utf8');
    }),
  );
}

async function assertRobots() {
  const robots = await readFile(path.join(distDir, 'robots.txt'), 'utf8');
  const requiredAgents = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'GPTBot', 'ClaudeBot', 'CCBot'];
  for (const agent of requiredAgents) {
    if (!robots.includes(`User-agent: ${agent}`)) {
      throw new Error(`robots.txt missing agent rule for ${agent}`);
    }
  }

  if (!robots.includes(`Sitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml`)) {
    throw new Error('robots.txt missing sitemap directive');
  }

  const forbiddenDisallows = ['Disallow: /sitemap.xml', 'Disallow: /rss.xml', 'Disallow: /blog/', 'Disallow: /blog/category/'];
  for (const value of forbiddenDisallows) {
    if (robots.includes(value)) {
      throw new Error(`robots.txt blocks a required public path: ${value}`);
    }
  }
}

async function assertSitemap() {
  const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
  const requiredUrls = ['/', '/blog/', '/about/', '/search/'].map((page) => `${siteUrl.replace(/\/$/, '')}${page}`);
  for (const url of requiredUrls) {
    if (!sitemap.includes(`<loc>${url}</loc>`)) {
      throw new Error(`sitemap.xml missing ${url}`);
    }
  }
}

async function assertPublicHtml() {
  const htmlFiles = await walkHtmlFiles(distDir);
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const relative = path.relative(distDir, file);
    const isPrivate = relative.startsWith('drafts/') || relative.startsWith('private/') || relative.startsWith('admin/');
    const segments = relative.split(path.sep);
    const isPostPage = segments[0] === 'blog' && segments.length === 4 && segments[3] === 'index.html';

    if (!html.includes('<link rel="canonical"')) {
      throw new Error(`Missing canonical tag in ${relative}`);
    }

    if (isPostPage && !html.includes('application/ld+json')) {
      throw new Error(`Missing JSON-LD in ${relative}`);
    }

    if (!isPrivate && html.includes('noindex, nofollow')) {
      throw new Error(`Unexpected noindex tag in public page ${relative}`);
    }
  }
}

async function main() {
  await assertRequiredFiles();
  await assertRobots();
  await assertSitemap();
  await assertPublicHtml();
  process.stdout.write('Discovery validation passed.\n');
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
