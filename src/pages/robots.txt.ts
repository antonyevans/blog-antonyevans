import { allowedBots, indexingEnabled, privatePaths, toAbsoluteUrl } from '../lib/site';

export const prerender = true;

export function GET() {
  const lines = ['User-agent: *'];

  if (indexingEnabled) {
    lines.push('Allow: /');
  } else {
    lines.push('Disallow: /');
  }

  for (const path of privatePaths) {
    lines.push(`Disallow: ${path}`);
  }

  lines.push('');

  for (const bot of allowedBots) {
    lines.push(`User-agent: ${bot}`);
    lines.push('Allow: /');
    for (const path of privatePaths) {
      lines.push(`Disallow: ${path}`);
    }
    lines.push('');
  }

  lines.push(`Sitemap: ${toAbsoluteUrl('/sitemap.xml')}`);

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}

