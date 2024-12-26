import type { StaticImageData } from "next/image"

import avatarPic from "@images/avatar.jpg"
import defaultPreview from "@images/default-preview.jpg"

export type Article = {
  title: string
  slug: string
  date: Date

  blurb: string
  next?: string[]
  tags: string[]
}

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
    bluesky: "https://bsky.app/profile/vivshaw.bsky.social",
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
