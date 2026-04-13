import { getCollection, type CollectionEntry } from 'astro:content';

export const POSTS_PER_PAGE = 12;

export type BlogPost = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;

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
  const posts = await getCollection('blog', ({ data }) => !data.draft && !data.private);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getPublishedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  return projects.sort((a, b) => {
    if (a.data.featured !== b.data.featured) {
      return a.data.featured ? -1 : 1;
    }

    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }

    return (b.data.launchedDate?.getTime() || 0) - (a.data.launchedDate?.getTime() || 0);
  });
}

export function getPostLastmod(post: BlogPost): Date {
  return post.data.updatedDate || post.data.pubDate;
}

export function getProjectLastmod(project: Project): Date | undefined {
  return project.data.launchedDate;
}

export function getRelatedPosts(post: BlogPost, posts: BlogPost[], limit = 3): BlogPost[] {
  return posts
    .filter((candidate) => candidate.id !== post.id)
    .map((candidate) => {
      const sharedTags = candidate.data.tags.filter((tag) => post.data.tags.some((item) => slugify(item) === slugify(tag))).length;
      const sameCategory = candidate.data.category === post.data.category ? 1 : 0;

      return {
        post: candidate,
        score: sharedTags * 10 + sameCategory * 3 + candidate.data.pubDate.getTime() / 1_000_000_000_000,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post: relatedPost }) => relatedPost);
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
