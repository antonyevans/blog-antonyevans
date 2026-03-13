import { BING_SITE_VERIFICATION } from '../lib/site';

export const prerender = true;

export function getStaticPaths() {
  if (!BING_SITE_VERIFICATION) {
    return [];
  }

  return [{ params: { verification: 'BingSiteAuth' } }];
}

export function GET() {
  const body = `<?xml version="1.0"?>\n<users>\n  <user>${BING_SITE_VERIFICATION}</user>\n</users>`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}

