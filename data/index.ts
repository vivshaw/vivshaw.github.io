import type { StaticImageData } from "next/image"

import avatarPic from "@images/avatar.jpg"
import defaultPreview from "@images/default-preview.jpg"

export type TArticle = {
  title: string
  slug: string
  date: Date

  blurb: string
  next?: string[]
  tags: string[]
}

export type SocialSite = "linkedin" | "twitter" | "github"

export type Author = {
  id: string
  /** Profile picture and alt text */
  avatar: {
    alt: string
    image: StaticImageData
  }
  /** Short bio */
  bio: string
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
  name: "Hannah Vivian Shaw",
  mailto: "mailto:hey@vivsha.ws",
  socials: {
    github: "https://github.com/vivshaw",
    twitter: "https://twitter.com/vvvivshaw",
    linkedin: "https://www.linkedin.com/in/hvivianshaw/",
  },
}

export const site = {
  defaultPreview: defaultPreview,
  description: "Hannah Vivian Shaw's personal website & blog",
  name: "vivshaw's webbed sight",
  shortName: "vivshaw's",
  url: "https://vivsha.ws",
}
