import { defineCollection, z } from 'astro:content';

export const BLOG_CATEGORIES = ['engineering', 'product', 'writing', 'notes', 'operator-insights', 'ai-tech-operator', 'ai-tech-operator', 'ai-tech-operator', 'ai-tech-operator', 'ai-tech-operator', 'ai-tech-operator', 'the-search-grounded'] as const;

const blog = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    dek: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(BLOG_CATEGORIES),
    tags: z.array(z.string().min(1)).min(1),
    draft: z.boolean().default(false),
    private: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    url: z.string().url(),
    status: z.enum(['Live', 'Prototype', 'In progress', 'Archived']),
    category: z.string().min(1),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative().default(999),
    launchedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    repoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
