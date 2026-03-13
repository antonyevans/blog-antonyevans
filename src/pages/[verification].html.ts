import { GOOGLE_SITE_VERIFICATION } from '../lib/site';

export const prerender = true;

export function getStaticPaths() {
  if (!GOOGLE_SITE_VERIFICATION) {
    return [];
  }

  return [{ params: { verification: `google${GOOGLE_SITE_VERIFICATION}` } }];
}

export function GET({ params }) {
  const filename = `${params.verification}.html`;

  return new Response(`google-site-verification: ${filename}`, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}

