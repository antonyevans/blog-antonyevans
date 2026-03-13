import { INDEXNOW_KEY } from '../lib/site';

export const prerender = true;

export function getStaticPaths() {
  if (!INDEXNOW_KEY) {
    return [];
  }

  return [{ params: { key: INDEXNOW_KEY } }];
}

export function GET({ params }) {
  return new Response(`${params.key}`, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
