import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }) =>
      entry.replace(/\/index\.(md|mdx)$/, "").replace(/\.(md|mdx)$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      tags: z.array(z.string()).min(1),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      category: z.string().default("Engineering"),
      highlight: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      canonicalUrl: z.url().optional(),
    }),
});

export const collections = { blog };
