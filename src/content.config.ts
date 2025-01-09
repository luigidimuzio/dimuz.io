// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
    schema: z.object({
        title: z.string(),
        // pubDate: z.coerce.date(),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts };