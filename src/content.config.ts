import { defineCollection, z } from 'astro:content';

export const BLOG_CATEGORIES = ['engineering', 'product', 'writing', 'notes', 'operator-insights'] as const;

const blog = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(BLOG_CATEGORIES),
    tags: z.array(z.string().min(1)).min(1),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
