import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.date(),
    title_ko: z.string(),
    title_en: z.string(),
    summary_en: z.string().optional(),
    link: z.string().optional(),
    link_label_ko: z.string().optional(),
    draft: z.boolean().optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt_ko: z.string(),
          alt_en: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { news };
