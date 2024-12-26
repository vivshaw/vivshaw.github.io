import styled from "@emotion/styled"
import { useRouter } from "next/router"

import { Layout } from "@components/Layout"
import { SEO } from "@components/SEO"
import { mediaqueries } from "@styles/media"
import Link from "next/link"
import { centeringWrapper, mainpageLink } from "@pageStyles/home.css"

const MainpageContent = styled.div`
  /**
  --padding-right: calc(env(safe-area-inset-right) + 80px);
  --padding-left: calc(env(safe-area-inset-left) + 80px);
  **/

  max-width: 1440px;
  padding-right: calc(env(safe-area-inset-right) + 80px);
  padding-left: calc(env(safe-area-inset-right) + 80px);
  padding-bottom: 50px;
  padding-top: 80px;

  ${mediaqueries.tablet`
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 0px;
  `}
`

const MainpageHeading = styled.div`
  font-family: "orpheuspro", serif;
  font-weight: 400;
  line-height: 1.4;
  font-size: 62px;
  color: ${(p) => p.theme.colors.primary};
  margin-block-start: calc(0.83em + 32px);

  ${mediaqueries.tablet`
    font-size: 36px;
  `}
`

/**
 * The index page for the blog. Lists all the articles.
 */
export default function Index() {
  const router = useRouter()

  return (
    <Layout>
      <SEO
        data={{
          type: "home",
        }}
        pathname={router.pathname}
      />
      <div className={centeringWrapper}>
        <MainpageContent>
          <MainpageHeading>
            I'm{" "}
            <Link className={mainpageLink} href="/about">
              Hannah Vivian Shaw
            </Link>
            . I build comfortable worlds for engineers.
          </MainpageHeading>
          <MainpageHeading>
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
          </MainpageHeading>
        </MainpageContent>
      </div>
    </Layout>
  )
}
