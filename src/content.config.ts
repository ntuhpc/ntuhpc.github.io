import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const events = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/data/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    location: z.string(),
    onlineUrl: z.string().url().optional(),
    type: z.enum(['Workshop', 'Competition', 'Weekly Meeting', 'Community Event', 'Sharing Session']),
    registrationUrl: z.string().url().optional(),
    registrationDeadline: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['Upcoming', 'Ongoing', 'Completed', 'Cancelled']),
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).default([]),
    type: z.enum(['News', 'Announcement', 'Event Recap', 'Research Highlight']),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).default([]),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const social = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/data/social' }),
  schema: z.object({
    platform: z.enum(['Instagram', 'LinkedIn', 'X', 'YouTube', 'Facebook', 'Other']),
    author: z.string(),
    handle: z.string().optional(),
    publishedDate: z.coerce.date(),
    text: z.string(),
    image: z.string().optional(),
    externalUrl: z.string().url(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { events, news, blog, social };
