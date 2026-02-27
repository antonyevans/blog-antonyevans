import { getCollection, type CollectionEntry } from 'astro:content';

export const POSTS_PER_PAGE = 12;

export type BlogPost = CollectionEntry<'blog'>;

export function getPostUrl(post: BlogPost): string {
  return `/blog/${post.data.category}/${post.slug}/`;
}

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === category);
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const normalizedTag = slugify(tag);
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.tags.some((item) => slugify(item) === normalizedTag));
}

export async function getTagMap(): Promise<Map<string, { label: string; count: number }>> {
  const posts = await getPublishedPosts();
  const map = new Map<string, { label: string; count: number }>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const key = slugify(tag);
      const existing = map.get(key);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(key, { label: tag, count: 1 });
      }
    }
  }

  return map;
}

export function paginateArray<T>(items: T[], page: number, perPage = POSTS_PER_PAGE): { items: T[]; totalPages: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(page, 1), totalPages);
  const start = (current - 1) * perPage;
  const end = start + perPage;

  return {
    items: items.slice(start, end),
    totalPages,
  };
}

export function pageNumbers(totalPages: number): number[] {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}
