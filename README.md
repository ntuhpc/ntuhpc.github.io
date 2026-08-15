# NTU HPC/AI Website

This NTU HPC/AI website is a static website built with [Astro](https://astro.build/) and Tailwind CSS.

Most website content is stored in YAML or MDX files. You usually do not need to edit an Astro page or component to add a team member, event, news article, or blog post.

## Contents

- [General file rules](#general-file-rules)
- [Add a new team member](#add-a-new-team-member)
- [Personal competition experience](#personal-competition-experience-and-trophy-conventions)
- [Add a new event](#add-a-new-event)
- [Add a news article](#add-a-news-article)
- [Add a blog post](#add-a-blog-post)
- [Link an article to its authors](#link-an-article-to-its-authors)
- [Final checklist](#final-checklist)

## General file rules

- Use lowercase filenames with words separated by hyphens: `zi-hao-wee.yaml` or `introduction-to-linux.mdx`.
- Do not use spaces in filenames.
- Dates use `YYYY-MM-DD`. For example, `2026-08-21` means 21 August 2026.
- Keep `draft: true` while working. Change it to `draft: false` only when the content is ready to appear publicly.
- `featured: true` allows an event or article to appear on the homepage. A draft never appears, even when it is featured.
- Copy the relevant example file and rename the copy. Do not overwrite the example because future contributors also need it.

## Add a new team member

Team member profiles are YAML files in:

```text
src/data/team/
```

Profile pictures are stored separately in:

```text
assets/member-images/
```

### Step 1: Add the profile picture

Place the member's image inside `assets/member-images/`. Use a clear lowercase filename such as:

```text
assets/member-images/zi-hao-wee.jpg
```

Supported image formats are `.avif`, `.jpeg`, `.jpg`, `.png`, and `.webp`. A square photograph works best because the website displays profile pictures in a square or circular frame.

If the member does not have a profile picture, omit the `photo` field. The website will automatically use `default-avatar.png`.

### Step 2: Copy the member example

Copy:

```text
src/data/team/example-member.yaml
```

Rename the copy using the member's name. For example:

```text
src/data/team/zi-hao-wee.yaml
```

The filename without `.yaml` is the member's permanent content ID. In this example, the ID is `zi-hao-wee`. News and blog posts use this ID to link back to the member.

### Step 3: Fill in the member fields

```yaml
name: Zi Hao Wee
status: active
role: Member
photo: zi-hao-wee.jpg
about: I am a final-year Computer Engineering student interested in performance-focused systems.
course: Computer Engineering
year: Year 4
competitionExperience: ["🏆 ISC 2026 Onsite - 1st"]
linkedin: https://www.linkedin.com/in/wee-zi-hao/
memberSince: 2026
draft: false
```

| Field | Required? | What to enter |
| --- | --- | --- |
| `name` | Yes | The member's display name. |
| `status` | Yes | Exactly one of `active`, `inactive`, or `alumni`. Active members and alumni are displayed; inactive members remain in the repository but are hidden. |
| `role` | No | The member's club role, such as `President` or `Technical Lead`. Omit it if the member has no specific role. |
| `organisation` | No | For alumni, the current company, university, or organisation, such as `NSCC Singapore`. |
| `photo` | No | Only the image filename from `assets/member-images/`, such as `zi-hao-wee.jpg`. Do not enter the full folder path. |
| `about` | No | A short first-person or third-person biography. |
| `course` | No | The member's course, such as `Computer Engineering`. |
| `year` | No | The current academic year, such as `Year 2`. |
| `competitionExperience` | No | A YAML list of personal competition results. Follow the exact naming format documented below. Use `competitionExperience: []` when empty. |
| `linkedin` | No | The complete LinkedIn URL, including `https://`. |
| `email` | No | A valid, approved public email address. |
| `order` | No | A whole number that manually controls display priority. Lower numbers appear first. Omit this field if no manual priority is needed. |
| `memberSince` | Yes | The four-digit year the person joined NTU HPC/AI, such as `2025`. |
| `graduationYear` | Alumni only | The four-digit graduation year. It is displayed as `Class of 2025`. |
| `draft` | No | Use `true` to hide the profile or `false` to publish it. It defaults to `false` if omitted, so explicitly use `true` while preparing a profile. |

For an alumnus, use:

```yaml
status: alumni
memberSince: 2022
graduationYear: 2025
```

### Personal competition experience and trophy conventions

Add a member's personal achievements under `competitionExperience`. Write every entry in this format:

```text
<emoji> <contest name> <year> [Virtual/Onsite] - <placing or award>
```

For example:

```text
🏆 ISC 2026 Onsite - 1st
```

Use `Virtual` or `Onsite` consistently to identify the competition format. Do not include either label for HPC-AI competitions. Use these emoji and placing labels:

| Achievement | Emoji | Example |
| --- | --- | --- |
| First place | 🏆 | `🏆 ISC 2026 Onsite - 1st` |
| Second place | 🥈 | `🥈 ISC 2026 Virtual - 2nd` |
| Third place | 🥉 | `🥉 ISC 2024 Virtual - 3rd` |
| Special award | 🏅 | `🏅 ISC 2017 Onsite - Deep Learning Excellence Award` |

Put all achievements inside one YAML array. Separate multiple achievements with commas and place quotation marks around each one:

```yaml
competitionExperience: ["🏆 ISC 2026 Onsite - 1st", "🥈 ISC 2026 Virtual - 2nd", "🥉 ISC 2024 Virtual - 3rd", "🏅 ISC 2017 Onsite - Deep Learning Excellence Award"]
```

If the member has no competition experience to display, use:

```yaml
competitionExperience: []
```

## Add a new event

Events are YAML files in:

```text
src/data/events/
```

### Step 1: Copy and rename the event example

Copy:

```text
src/data/events/example-event.yaml
```

Rename it using a short description of the event:

```text
src/data/events/introduction-to-linux.yaml
```

The filename becomes the event URL:

```text
/events/introduction-to-linux/
```

### Step 2: Fill in the event fields

```yaml
title: Introduction to Linux
description: A beginner-friendly workshop covering the Linux command line and remote systems.
startDate: 2026-09-12
endDate: 2026-09-12
startTime: 6:30 PM
endTime: 8:30 PM
location: NTU North Spine, TR+1
type: Workshop
registrationUrl: https://example.com/registration
registrationDeadline: 2026-09-10
featured: true
status: Upcoming
draft: false
```

| Field | Required? | What to enter |
| --- | --- | --- |
| `title` | Yes | The public event name. |
| `description` | Yes | A clear summary of the event. For a long YAML description, use `description: |-` followed by indented lines. |
| `startDate` | Yes | Date in `YYYY-MM-DD` format. |
| `endDate` | No | Ending date in `YYYY-MM-DD` format. Omit it for a one-day event. |
| `startTime` | No | Display text such as `6:30 PM`. |
| `endTime` | No | Display text such as `8:30 PM`. |
| `location` | Yes | A room, venue, `Online`, or `To Be Confirmed`. |
| `onlineUrl` | No | Complete URL for an online session, including `https://`. |
| `type` | Yes | Exactly one of `Workshop`, `Competition`, `Weekly Meeting`, `Community Event`, or `Sharing Session`. |
| `registrationUrl` | No | Complete external registration form URL. The website does not host its own registration system. |
| `registrationDeadline` | No | Deadline in `YYYY-MM-DD` format. |
| `coverImage` | No | An optional image path. |
| `featured` | No | `true` to make it eligible for the homepage; otherwise `false`. Defaults to `false`. |
| `status` | Yes | Exactly one of `Upcoming`, `Ongoing`, `Completed`, or `Cancelled`. This status—not today's date—controls whether a featured event can appear on the homepage. |
| `draft` | No | `true` to hide the event everywhere or `false` to publish it. Defaults to `false`. |

The homepage only shows events where `featured: true`, `draft: false`, and the status is `Upcoming` or `Ongoing`.

## Add a news article

News articles are MDX files in:

```text
src/data/news/
```

News images belong in:

```text
src/data/news/news-images/
```

### Step 1: Add the images

Place the cover image and any article images in `src/data/news/news-images/`. For example:

```text
src/data/news/news-images/linux-workshop-team.jpg
```

Use descriptive filenames and compressed images where possible.

### Step 2: Copy and rename the news example

Copy:

```text
src/data/news/example-news.mdx
```

Rename it using the article title:

```text
src/data/news/linux-workshop-recap.mdx
```

The filename becomes the article URL:

```text
/news/linux-workshop-recap/
```

### Step 3: Fill in the frontmatter

Frontmatter is the YAML information between the two `---` lines at the top of an MDX file.

```mdx
---
title: NTU HPC/AI Hosts Introduction to Linux Workshop
description: Students learned the Linux command line and how to connect to remote computing systems.
publishedDate: 2026-09-12
updatedDate: 2026-09-14
coverImage: ./news-images/linux-workshop-team.jpg
authors:
  - zi-hao-wee
type: Event Recap
category: Workshops
tags:
  - Linux
  - Workshop
featured: true
draft: false
---
```

| Field | Required? | What to enter |
| --- | --- | --- |
| `title` | Yes | The article headline. |
| `description` | Yes | A short summary used on article cards and in page metadata. |
| `publishedDate` | Yes | Publication date in `YYYY-MM-DD` format. |
| `updatedDate` | No | Date of a significant update in `YYYY-MM-DD` format. |
| `coverImage` | No | Relative path from the MDX file, normally `./news-images/filename.jpg`. |
| `authors` | No | A YAML list of team member IDs. The ID must exactly match a filename in `src/data/team/` without `.yaml`. Multiple authors are supported. Use `authors: []` when there is no named author. |
| `type` | Yes | Exactly one of `News`, `Announcement`, `Event Recap`, or `Research Highlight`. |
| `category` | No | A broader grouping such as `Competitions` or `Workshops`. |
| `tags` | No | A YAML list of relevant topics. Use `tags: []` when empty. |
| `featured` | No | `true` to make the article eligible for the homepage; otherwise `false`. |
| `draft` | No | `true` to hide it or `false` to publish it. |

### Step 4: Write the article below the frontmatter

Use normal Markdown beneath the closing `---`:

```md
# Article heading

Write paragraphs normally.

## Section heading

- Bullet point one
- Bullet point two

[Link text](https://example.com)
```

To place an optimized image inside the article, import Astro's `Image` component and the image after the frontmatter:

```mdx
import { Image } from 'astro:assets';
import workshopImage from './news-images/linux-workshop-team.jpg';

<Image
  src={workshopImage}
  alt="NTU HPC/AI members leading an introductory Linux workshop."
/>
```

Every meaningful image needs accurate alternative text describing what is shown.

## Add a blog post

Blog posts follow almost the same process as news articles.

Blog MDX files are stored in:

```text
src/data/blog/
```

Blog images are stored in:

```text
src/data/blog/blog-images/
```

### Step 1: Add the images

Put the cover image and article images in `src/data/blog/blog-images/`:

```text
src/data/blog/blog-images/linux-filesystem-diagram.png
```

### Step 2: Copy and rename the blog example

Copy:

```text
src/data/blog/example-blog.mdx
```

Rename it:

```text
src/data/blog/introduction-to-linux.mdx
```

The filename becomes the blog URL:

```text
/blog/introduction-to-linux/
```

### Step 3: Fill in the blog frontmatter

```mdx
---
title: A Beginner's Introduction to Linux
description: Learn what Linux is and why it is widely used in high performance computing.
publishedDate: 2026-09-20
coverImage: ./blog-images/linux-filesystem-diagram.png
authors:
  - zi-hao-wee
category: Beginner Guides
tags:
  - Linux
  - Beginner's Guide
featured: true
draft: false
---
```

| Field | Required? | What to enter |
| --- | --- | --- |
| `title` | Yes | The blog post title. |
| `description` | Yes | A short summary used on cards and in page metadata. |
| `publishedDate` | Yes | Publication date in `YYYY-MM-DD` format. |
| `updatedDate` | No | Date of a significant update in `YYYY-MM-DD` format. |
| `coverImage` | No | Relative path from the MDX file, normally `./blog-images/filename.png`. |
| `authors` | No | Team member IDs matching filenames in `src/data/team/`, without `.yaml`. Multiple authors are supported. |
| `category` | No | A grouping such as `Beginner Guides`, `Linux`, or `Performance`. |
| `tags` | No | A YAML list of relevant topics. |
| `featured` | No | `true` to make the post eligible for the homepage; otherwise `false`. |
| `draft` | No | `true` to hide the post or `false` to publish it. |

Write the blog content below the closing `---` using Markdown. Images inside a blog work like images inside a news article:

```mdx
import { Image } from 'astro:assets';
import filesystemDiagram from './blog-images/linux-filesystem-diagram.png';

## Understanding the filesystem

Linux organises files beneath a single filesystem root.

<Image
  src={filesystemDiagram}
  alt="Diagram showing the main folders beneath the Linux filesystem root."
/>
```

## Link an article to its authors

The author value is based on the team YAML filename, not the spelling of the person's display name.

For this team member file:

```text
src/data/team/zi-hao-wee.yaml
```

Use this in a news article or blog post:

```yaml
authors:
  - zi-hao-wee
```

For multiple authors:

```yaml
authors:
  - zi-hao-wee
  - another-member-id
```

Published article pages display a “Written by” section using each linked member's name, profile picture, role, and biography. Clicking an author opens that member's profile on the Team page.

## Final checklist

Before committing or opening a pull request:

1. Confirm the information is accurate.
2. Change `draft` to `false` only when the content is ready.
3. Check that image paths and author IDs exactly match their filenames.
4. After committing, check the repository's **Actions** tab and confirm that the GitHub Pages deployment succeeded.

If the deployment fails, open the failed GitHub Actions run and read its error logs. The most likely cause is an invalid field, format, image path, or author reference in a YAML or MDX file.

For other bugs or further help, contact [27July](https://github.com/27July).
