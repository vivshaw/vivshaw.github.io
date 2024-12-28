import Link from "next/link"

import { Layout } from "@components/Layout"
import { Seo } from "@components/SEO"
import {
  centeringWrapper,
  mainpageContent,
  mainpageHeading,
  mainpageLink,
} from "@pageStyles/main.css"

/**
 * The home page for the site.
 */
export default function Home() {
  return (
    <Layout>
      <Seo
        data={{
          type: "home",
        }}
      />
      <div className={centeringWrapper}>
        <div className={mainpageContent}>
          <div className={mainpageHeading}>
            I'm{" "}
            <Link className={mainpageLink} href="/about">
              Hannah Vivian Shaw
            </Link>
            . I build comfortable worlds for engineers.
          </div>
          <div className={mainpageHeading}>
            {/* TODO: These should be distinct internal and external links! */}
            To see what I do, visit{" "}
            <em>
              <a className={mainpageLink} href="https://github.com/vivshaw">
                my GitHub
              </a>
            </em>{" "}
            for code, or{" "}
            <em>
              <Link className={mainpageLink} href="/blog">
                my blog
              </Link>
            </em>{" "}
            for words. To read my less-filtered thoughts on subjects ranging
            from engineering to philosophy, see{" "}
            <em>
              <a className={mainpageLink} href="https://zettel.vivsha.ws">
                my digital garden
              </a>
            </em>
            .
          </div>
        </div>
      </div>
    </Layout>
  )
}
