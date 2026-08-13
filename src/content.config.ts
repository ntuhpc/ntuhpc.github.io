import { defineCollection, reference } from 'astro:content';
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
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(reference('team')).default([]),
    type: z.enum(['News', 'Announcement', 'Event Recap', 'Research Highlight']),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: image().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(reference('team')).default([]),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: image().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/data/team' }),
  schema: z.object({
    name: z.string(),
    status: z.enum(['active', 'inactive', 'alumni']),
    role: z.string().optional(),
    organisation: z.string().optional(),
    photo: z.string().default('default-avatar.png'),
    about: z.string().optional(),
    course: z.string().optional(),
    year: z.string().optional(),
    competitionExperience: z.array(z.string()).default([]),
    linkedin: z.string().url().optional(),
    email: z.string().email().optional(),
    order: z.number().int().optional(),
    memberSince: z.coerce.number().int().min(1900).max(2100),
    graduationYear: z.coerce.number().int().min(1900).max(2100).optional(),
    draft: z.boolean().default(false),
  }),
});

const social = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/data/social' }),
  schema: z.object({
    platform: z.enum(['Instagram', 'LinkedIn', 'X', 'YouTube', 'Facebook', 'Other']),
    handle: z.string().optional(),
    publishedDate: z.coerce.date(),
    text: z.string(),
    image: z.string().optional(),
    externalUrl: z.string().url(),
    embedUrl: z.string().url().optional(),
    embedHeight: z.coerce.number().int().positive().max(1200).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const achievements = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/data/achievements' }),
  schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      // Set when the source confirms a year but not an exact event date.
      yearOnly: z.boolean().default(false),
      competition: z.string(),
    results: z.array(z.object({
      placement: z.enum(['first', 'second', 'third', 'special']),
      label: z.string(),
    })).min(1),
    summary: z.string(),
    category: z.string().optional(),
    location: z.string().optional(),
    competitionLogo: z.string().optional(),
    coverImage: z.string().optional(),
    galleryFolder: z.string().regex(/^[a-z0-9][a-z0-9-]*$/).optional(),
    about: z.string().optional(),
    teamMembers: z.array(reference('team')).default([]),
    externalUrl: z.string().url().optional(),
    relatedArticle: z.string().startsWith('/').optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { events, news, blog, social, team, achievements };
