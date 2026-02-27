import rss from '@astrojs/rss';
import { getPublishedPosts, getPostUrl } from '../lib/content';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Anton Yevans Blog',
    description: 'Engineering notes, product thinking, and writing.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getPostUrl(post),
    })),
  });
}
