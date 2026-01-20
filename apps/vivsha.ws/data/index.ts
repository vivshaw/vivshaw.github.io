import type { StaticImageData } from "next/image"
import { z } from "zod"

import avatarPic from "#images/avatar.jpg"

/**
 * The key in `localStorage`used to store the app's color mode
 */
export const COLOR_MODE_STORAGE_KEY = "color-theme"

/**
 * The type of the raw Markdown frontmatter included in each blog post.
 *
 * This differs a bit from the complete metadata- it lacks the slug, and the dates are strings.
 */
export const BlogFrontmatter = z.object({
  blurb: z.optional(z.string()),
  date: z.string().date(),
  dateModified: z.optional(z.string().date()),
  tags: z.array(z.string()),
  title: z.string(),
})

/**
 * The type of the complete metadata for a blog post.
 */
export const PostMeta = z.object({
  blurb: z.optional(z.string()),
  date: z.date(),
  dateModified: z.optional(z.date()),
  slug: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
})

export type PostMetadata = z.infer<typeof PostMeta>

export type SocialSite =
  | "linkedin"
  | "twitter"
  | "github"
  | "mastodon"
  | "bluesky"
  | "zotero"

type Author = {
  /** educational background */
  alumniOf: string

  /** profile picture and alt text */
  avatar: {
    alt: string
    image: StaticImageData
  }

  /** short bio */
  bio: string

  /** gender */
  gender: string

  id: string

  /** keybase profile */
  keybase: string

  /** areas of expertise */
  knowsAbout: string

  /** email address */
  mailto: string

  /** full name */
  name: string

  /** social links */
  socials: Record<SocialSite, string>

  /** current employer */
  worksFor: string

  /** zettelkasten */
  zettelkasten: string
}

export const author: Author = {
  alumniOf: "University of Vermont, University of Colorado Boulder",
  avatar: {
    image: avatarPic,
    alt: "A photo of Hannah in a Smithsonian display of a giant salt molecule",
  },
  bio: "function enthusiast, JavaScript wrangler, browser whisperer, code obfuscator, machine enlightener",
  gender: "female",
  id: "vivshaw",
  keybase: "https://keybase.io/vivshaw",
  knowsAbout:
    "frontend, machine learning, Python, TypeScript, developer tooling, engineering management, philosophy",
  mailto: "mailto:hey@vivsha.ws",
  name: "Hannah Vivian Shaw",
  socials: {
    bluesky: "https://bsky.app/profile/vivsha.ws",
    github: "https://github.com/vivshaw",
    linkedin: "https://www.linkedin.com/in/hvivianshaw/",
    mastodon: "https://mastodon.social/@vivshaw",
    twitter: "https://twitter.com/vvvivshaw",
    zotero: "https://www.zotero.org/vivshaw",
  },
  worksFor: "Mercury",
  zettelkasten: "https://zettel.vivsha.ws",
}

type Site = {
  /** default preview image */
  defaultPreview: {
    src: string
    width: number
    height: number
  }

  /** site description */
  description: string

  /** site name */
  name: string

  /** site short name */
  shortName: string

  /** site URL */
  url: string
}

export const site: Site = {
  defaultPreview: {
    src: "/home-bg-dark-optimized.jpg",
    width: 1920,
    height: 1200,
  },
  description: "Hannah Vivian Shaw's personal website & blog",
  name: "vivshaw's webbed sight",
  shortName: "vivshaw's",
  url: "https://vivsha.ws",
}
