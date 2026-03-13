import rss from '@astrojs/rss';
import { getPublishedPosts, getPostUrl } from '../lib/content';
import { SITE_DESCRIPTION, SITE_NAME, toAbsoluteUrl } from '../lib/site';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${SITE_NAME} Blog`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getPostUrl(post),
    })),
    customData: `<atom:link href="${toAbsoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml" />`,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}
