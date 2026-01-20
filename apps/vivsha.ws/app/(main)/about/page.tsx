import type { Metadata } from "next"

import { Heading, Link, Text } from "@vivshaw/basalt/components"

import { author } from "#data"
import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import {
  aboutWrapper,
  aboutHeading,
  aboutParagraph,
  aboutList,
} from "./page.css"

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
      <div className={aboutWrapper}>
        <Heading level="1" className={aboutHeading}>
          About Me
        </Heading>

        <Text size="normal" className={aboutParagraph}>
          I'm a human with an inexhaustible curiosity about the intersection of
          technology and human life. Currently, I'm an engineering manager at{" "}
          <Link href="https://mercury.com" target="_blank">
            Mercury
          </Link>
          , where I lead a frontend platform team.
        </Text>

        <Text size="normal" className={aboutParagraph}>
          My professional interests are in:
        </Text>
        <ul className={aboutList}>
          <li>
            <Text size="normal">
              <em>human-computer interaction</em>, especially in the context of{" "}
              <em>developer tooling</em> or <em>user interfaces</em>.
            </Text>
          </li>
          <li>
            <Text size="normal">
              <em>platform engineering</em> (or <em>DevOps</em>, or{" "}
              <em>infrastructure engineering</em>, or whichever is the buzzword
              du jour).
            </Text>
          </li>
          <li>
            <Text size="normal">
              <em>machine learning</em>, especially insofar as it intersects
              with the above.
            </Text>
          </li>
        </ul>

        <Text size="normal" className={aboutParagraph}>
          My amateur interests are many and cryptic. Ask me about{" "}
          <Link href={`${author.zettelkasten}/#/page/heraldry`} target="_blank">
            heraldry
          </Link>{" "}
          or{" "}
          <Link
            href={`${author.zettelkasten}/#/page/illumination`}
            target="_blank"
          >
            illumination
          </Link>{" "}
          sometime!
        </Text>

        <Text size="normal" className={aboutParagraph}>
          I'm an alumna of the University of Vermont, with a B.A. in Economics
          and Philosophy, and of University of Colorado Boulder, with an M.Eng.
          When I'm not hacking on stuff, you'll generally find me reading weird
          fiction or philosophy, stir-frying things, or DJing techno sets.{" "}
          <Link
            href="https://github.com/vivshaw/three-wise-monkeys"
            target="_blank"
          >
            Obfuscated code
          </Link>{" "}
          is a side hobby of mine, as is{" "}
          <Link href="https://github.com/vivshaw/homelab" target="_blank">
            maintaining my homelab
          </Link>
          .
        </Text>

        <Text size="normal" className={aboutParagraph}>
          You can reach me at <Link href={author.mailto}>hey@vivsha.ws</Link>.
          You can find a more complete list of my online presence in{" "}
          <Link href="/">the profile card on the main page</Link>.
        </Text>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}
