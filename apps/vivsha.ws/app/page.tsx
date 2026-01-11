import Image from "next/image"
import { Link } from "@vivshaw/basalt/components"

import { author } from "#data"
import { BlueskyIcon } from "#icons/social/Bluesky"
import { GithubIcon } from "#icons/social/Github"
import { LinkedInIcon } from "#icons/social/LinkedIn"
import { MailtoIcon } from "#icons/social/Mailto"
import { MastodonIcon } from "#icons/social/Mastodon"
import { GoodreadsIcon } from "#icons/social/Goodreads"
import { UrlIcon } from "#icons/social/Url"
import { ZoteroIcon } from "#icons/social/Zotero"
import { MountainsIcon } from "#icons/ui/Mountains"
import { schemaHelper } from "#lib/metadataHelpers"

import {
  avatar,
  calloutCard,
  figCap,
  fig,
  homeWrapper,
  location,
  name,
  profileCard,
  socialLinks,
  socialPill,
} from "./page.css"

const socialItems = [
  {
    href: author.socials.github,
    icon: GithubIcon,
    label: "vivshaw",
  },
  {
    href: author.socials.bluesky,
    icon: BlueskyIcon,
    label: "vivsha.ws",
  },
  {
    href: author.socials.mastodon,
    icon: MastodonIcon,
    label: "@vivshaw",
  },
  {
    href: "https://www.goodreads.com/vivshaw",
    icon: GoodreadsIcon,
    label: "vivshaw",
  },
  {
    href: author.socials.linkedin,
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: author.socials.zotero,
    icon: ZoteroIcon,
    label: "vivshaw",
  },
  {
    href: "https://zettel.vivsha.ws",
    icon: UrlIcon,
    label: "zettelkasten",
  },
  {
    href: author.mailto,
    icon: MailtoIcon,
    label: "Email",
  },
]

/**
 * The home page for the site.
 */
export default function Home() {
  const jsonLdSchema = schemaHelper({ type: "home" })

  return (
    <>
      <div className={homeWrapper}>
        <div className={profileCard}>
          <figure className={fig}>
            <Image
              src={author.avatar.image}
              alt={author.avatar.alt}
              className={avatar}
              priority
            />
            <figcaption className={figCap}>
              <h1 className={name}>{author.name}</h1>
              <h2 className={location}>
                <MountainsIcon fill="currentColor" />
                Vermont
              </h2>
            </figcaption>
          </figure>

          <ul className={socialLinks}>
            {socialItems.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className={socialPill}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon fill="currentColor" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className={calloutCard}>
          <strong>What&apos;s New</strong>
          <p>
            Check out my digital garden at{" "}
            <Link href="https://zettel.vivsha.ws" target="_blank">
              zettel.vivsha.ws
            </Link>{" "}
            for daily updates.
          </p>
        </aside>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}
