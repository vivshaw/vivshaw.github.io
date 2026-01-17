import type { Metadata } from "next"

import { author } from "#data"
import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import {
  centeringWrapper,
  mainpageContent,
  mainpageHeading,
  mainpageLink,
  mainpageList,
} from "#pageStyles/main.css"

export const metadata: Metadata = metadataHelper({
  type: "topLevel",
  description: "Who exactly is vivshaw?",
  slug: "about",
  title: "About Me",
})

/**
 * the about page for the site.
 */
export default function About() {
  const jsonLdSchema = schemaHelper({
    type: "topLevel",
    description: "Who exactly is vivshaw?",
    slug: "about",
    title: "About Me",
  })

  return (
    <>
      <div className={centeringWrapper}>
        <div className={mainpageContent}>
          <div className={mainpageHeading}>
            I'm a human with an inexhaustible curiosity about the intersection
            of technology and human life. Currently, I'm an engineering manager
            at{" "}
            <a
              className={mainpageLink}
              href="https://mercury.com"
              target="_blank"
            >
              Mercury
            </a>
            , where I work on our frontend platform team.
          </div>

          <div className={mainpageHeading}>
            My professional interests are in:
            <ul className={mainpageList}>
              <li>
                <em>human-computer interaction</em>, especially in the context
                of <em>developer tooling</em> or{" "}
                <em>frontend web applications</em>.
              </li>
              <li>
                <em>platform engineering</em> (or <em>DevOps</em>, or{" "}
                <em>infrastructure engineering</em>, or whichever is the
                buzzword du jour).
              </li>
              <li>
                <em>machine learning</em>, especially insofar as it intersects
                with the above.
              </li>
            </ul>
          </div>

          <div className={mainpageHeading}>
            (My amateur interests are many and cryptic. Ask me about heraldry
            sometime!)
          </div>

          <div className={mainpageHeading}>
            I'm an alumna of the University of Vermont, with a B.A. in Economics
            and Philosophy. When I'm not hacking on stuff, you'll generally find
            me reading weird fiction or philosophy, stir-frying things, watching
            Cronenberg films, or DJing techno sets.{" "}
            <a
              className={mainpageLink}
              href="https://github.com/vivshaw/three-wise-monkeys"
            >
              Obfuscated code
            </a>{" "}
            is a side hobby of mine.
          </div>

          <div className={mainpageHeading}>
            You can reach me at{" "}
            <a className={mainpageLink} href={author.mailto}>
              hey@vivsha.ws
            </a>
            . I can sometimes be spotted in various other corners of the
            internet:{" "}
            <a className={mainpageLink} href={author.socials.mastodon}>
              the fediverse
            </a>
            ,{" "}
            <a className={mainpageLink} href={author.socials.bluesky}>
              Bluesky
            </a>
            , and wherever else you might see on{" "}
            <a className={mainpageLink} href={author.keybase}>
              my Keybase
            </a>
            .
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}
