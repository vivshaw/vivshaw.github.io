import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBluesky,
  faGithub,
  faGoodreads,
  faLinkedin,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faLink,
  faMountainCity,
  faZ,
} from "@fortawesome/free-solid-svg-icons"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import Image from "next/image"
import { Link } from "@vivshaw/basalt/components"

import { author } from "#data"
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
  socialIcon,
  socialLinks,
  socialPill,
} from "./page.css"

const socialItems: { href: string; icon: IconDefinition; label: string }[] = [
  {
    href: author.socials.github,
    icon: faGithub,
    label: "vivshaw",
  },
  {
    href: author.socials.bluesky,
    icon: faBluesky,
    label: "@vivsha.ws",
  },
  {
    href: author.socials.mastodon,
    icon: faMastodon,
    label: "@vivshaw",
  },
  {
    href: "https://www.goodreads.com/vivshaw",
    icon: faGoodreads,
    label: "vivshaw",
  },
  {
    href: author.socials.linkedin,
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: author.socials.zotero,
    icon: faZ,
    label: "vivshaw",
  },
  {
    href: author.zettelkasten,
    icon: faLink,
    label: "zettelkasten",
  },
  {
    href: author.mailto,
    icon: faEnvelope,
    label: "email",
  },
]

/**
 * the home page for the site.
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
                <FontAwesomeIcon icon={faMountainCity} width={14} height={14} />
                Burlington, Vermont
              </h2>
            </figcaption>
          </figure>

          <ul className={socialLinks}>
            {socialItems.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className={socialPill}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} className={socialIcon} />
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
            <Link href={author.zettelkasten} target="_blank">
              {author.zettelkasten}
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
