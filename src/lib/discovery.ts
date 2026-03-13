import type { CollectionEntry } from 'astro:content';
import {
  getPublishedPosts,
  getPostUrl,
  getPostsByCategory,
  getPostsByTag,
  getTagMap,
  pageNumbers,
  paginateArray,
} from './content';
import { getCanonicalPath, toAbsoluteUrl } from './site';

export interface PublicPage {
  path: string;
  absoluteUrl: string;
  lastmod?: Date;
}

function latestDate(dates: Date[]): Date | undefined {
  if (dates.length === 0) {
    return undefined;
  }

  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

function postLastmod(post: CollectionEntry<'blog'>): Date {
  return post.data.updatedDate || post.data.pubDate;
}

export async function getPublicPages(): Promise<PublicPage[]> {
  const posts = await getPublishedPosts();
  const pages: PublicPage[] = [];
  const latestPostDate = latestDate(posts.map(postLastmod));

  pages.push({
    path: '/',
    absoluteUrl: toAbsoluteUrl('/'),
    lastmod: latestPostDate,
  });
  pages.push({ path: '/about/', absoluteUrl: toAbsoluteUrl('/about/') });
  pages.push({
    path: '/blog/',
    absoluteUrl: toAbsoluteUrl('/blog/'),
    lastmod: latestPostDate,
  });
  pages.push({
    path: '/search/',
    absoluteUrl: toAbsoluteUrl('/search/'),
    lastmod: latestPostDate,
  });

  const { totalPages } = paginateArray(posts, 1);
  for (const page of pageNumbers(totalPages).filter((value) => value > 1)) {
    pages.push({
      path: `/blog/${page}/`,
      absoluteUrl: toAbsoluteUrl(`/blog/${page}/`),
      lastmod: latestPostDate,
    });
  }

  for (const post of posts) {
    const path = getPostUrl(post);
    pages.push({
      path,
      absoluteUrl: toAbsoluteUrl(path),
      lastmod: postLastmod(post),
    });
  }

  const categories = Array.from(new Set(posts.map((post) => post.data.category)));
  for (const category of categories) {
    const categoryPosts = await getPostsByCategory(category);
    const { totalPages: categoryPages } = paginateArray(categoryPosts, 1);
    const categoryLastmod = latestDate(categoryPosts.map(postLastmod));

    for (const page of pageNumbers(categoryPages)) {
      const path = getCanonicalPath(`/blog/category/${category}/${page}/`);
      pages.push({
        path,
        absoluteUrl: toAbsoluteUrl(path),
        lastmod: categoryLastmod,
      });
    }
  }

  const tags = await getTagMap();
  for (const [tag] of tags) {
    const taggedPosts = await getPostsByTag(tag);
    const { totalPages: tagPages } = paginateArray(taggedPosts, 1);
    const tagLastmod = latestDate(taggedPosts.map(postLastmod));

    for (const page of pageNumbers(tagPages)) {
      const path = getCanonicalPath(`/blog/tag/${tag}/${page}/`);
      pages.push({
        path,
        absoluteUrl: toAbsoluteUrl(path),
        lastmod: tagLastmod,
      });
    }
  }

  return pages;
}

export function formatSitemapDate(date?: Date): string | undefined {
  return date?.toISOString();
}

