import { getPublishedPosts, getPostUrl } from '../lib/content';
import { SITE_DESCRIPTION, SITE_NAME, SITE_SUMMARY, toAbsoluteUrl } from '../lib/site';

export const prerender = true;

export async function GET() {
  const posts = await getPublishedPosts();
  const latest = posts.slice(0, 10);
  const lines = [
    `# ${SITE_NAME}`,
    '',
    SITE_SUMMARY,
    '',
    '## Discovery',
    `- Home: ${toAbsoluteUrl('/')}`,
    `- Blog: ${toAbsoluteUrl('/blog/')}`,
    `- About: ${toAbsoluteUrl('/about/')}`,
    `- Sitemap: ${toAbsoluteUrl('/sitemap.xml')}`,
    `- RSS: ${toAbsoluteUrl('/rss.xml')}`,
    '',
    '## Latest posts',
    ...latest.map((post) => `- ${post.data.title}: ${toAbsoluteUrl(getPostUrl(post))}`),
    '',
    '## Notes',
    `- Description: ${SITE_DESCRIPTION}`,
    '- Canonical URLs are published in HTML and sitemap entries.',
    '- This file is additive and not a substitute for standard crawl/index signals.',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}

