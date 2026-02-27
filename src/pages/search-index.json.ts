import { getPublishedPosts, getPostUrl, slugify } from '../lib/content';

export const prerender = true;

export async function GET() {
  const posts = await getPublishedPosts();
  const payload = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    tags: post.data.tags,
    tagSlugs: post.data.tags.map((tag) => slugify(tag)),
    pubDate: post.data.pubDate,
    url: getPostUrl(post),
  }));

  return new Response(JSON.stringify(payload), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=600',
    },
  });
}
