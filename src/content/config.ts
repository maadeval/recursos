import { defineCollection, z } from 'astro:content';

const recursos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string(),
    category: z.string(),
    preview: z.string().optional()
  }),
});

export const collections = {
  recursos,
};
