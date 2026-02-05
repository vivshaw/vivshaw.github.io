import { type IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faBluesky,
  faGithub,
  faGoodreads,
  faLinkedin,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faKey,
  faLink,
  faMountainCity,
  faZ,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Pill } from "@vivshaw/basalt"
import Image from "next/image"

import { author } from "#data"
import { schemaHelper } from "#lib/metadataHelpers"
import styles from "./page.module.css"

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
    label: "linkedin",
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
  {
    href: "/pgp-key.asc",
    icon: faKey,
    label: "pgp key",
  },
]

/**
 * the home page for the site.
 */
export default function Home() {
  const jsonLdSchema = schemaHelper({ type: "home" })

  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.profileCard}>
          <figure className={styles.fig}>
            <Image
              src={author.avatar.src}
              alt={author.avatar.alt}
              width={80}
              height={80}
              className={styles.avatar}
              priority
            />
            <figcaption className={styles.figCap}>
              <h1 className={styles.name}>{author.name}</h1>
              <h2 className={styles.location}>
                <FontAwesomeIcon icon={faMountainCity} width={14} height={14} />
                Burlington, Vermont
              </h2>
            </figcaption>
          </figure>

          <ul className={styles.socialLinks}>
            {socialItems.map(({ href, icon, label }) => (
              <li key={label}>
                <Pill
                  as="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} className={styles.socialIcon} />
                  {label}
                </Pill>
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.calloutCard}>
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
