import type { StaticImageData } from "next/image"
import { z } from "zod"

import avatarPic from "#images/avatar.jpg"
import defaultPreview from "#images/default-preview.jpg"

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
  next: z.optional(z.array(z.string())),
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
  next: z.optional(z.array(z.string())),
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

type Author = {
  id: string

  /** Profile picture and alt text */
  avatar: {
    alt: string
    image: StaticImageData
  }

  /** Short bio */
  bio: string

  /** Keybase profile */
  keybase: string

  /** Email address */
  mailto: string

  /** Full name */
  name: string

  /** Social links */
  socials: Record<SocialSite, string>
}

export const author: Author = {
  avatar: {
    image: avatarPic,
    alt: "A photo of Hannah in a Smithsonian display of a giant salt molecule",
  },
  bio: "function enthusiast, JavaScript wrangler, browser whisperer, code obfuscator, machine enlightener",
  id: "vivshaw",
  keybase: "https://keybase.io/vivshaw",
  mailto: "mailto:hey@vivsha.ws",
  name: "Hannah Vivian Shaw",
  socials: {
    bluesky: "https://bsky.app/profile/vivsha.ws",
    github: "https://github.com/vivshaw",
    linkedin: "https://www.linkedin.com/in/hvivianshaw/",
    mastodon: "https://mastodon.social/@vivshaw",
    twitter: "https://twitter.com/vvvivshaw",
  },
}

export const site = {
  defaultPreview: defaultPreview,
  description: "Hannah Vivian Shaw's personal website & blog",
  name: "vivshaw's webbed sight",
  shortName: "vivshaw's",
  url: "https://vivsha.ws",
}
