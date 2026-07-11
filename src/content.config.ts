import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Optional structured metadata for technical/explainer posts.
    author: z.string().optional(),
    difficulty: z.string().optional(),
    category: z.string().optional(),
    domains: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    citations: z
      .array(z.object({ title: z.string(), url: z.string() }))
      .default([]),
  }),
});

export const collections = { posts };
