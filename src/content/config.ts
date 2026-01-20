import { defineCollection, z } from 'astro:content';

const essaysCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    version: z.string(),
    category: z.enum(['BREACH', 'CAUSATION', 'VINDICATION', 'PROCEDURAL']),
    status: z.string(),
    critical: z.boolean().default(false),
    keyFindings: z.array(z.string()),
    summary: z.string(),
    keyArguments: z.array(z.string()),
  }),
});

export const collections = {
  essays: essaysCollection,
};
