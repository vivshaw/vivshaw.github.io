import styled from "@emotion/styled"
import { useRouter } from "next/router"

import { Layout } from "@components/Layout"
import { SEO } from "@components/SEO"
import mediaqueries from "@styles/media"
import Link from "next/link"

const CenteringWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

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

const MainpageA = styled.a`
  color: ${(p) => p.theme.colors.accent};
  opacity: 0.7;
  transition:
    border-color 0.1s ease-in,
    opacity 0.1s ease-in;

  text-decoration: underline;
  text-decoration-color: ${(p) => p.theme.colors.accent};
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;

  &:hover {
    opacity: 1;
  }
`

const MainpageLink = styled(Link)`
  color: ${(p) => p.theme.colors.accent};
  opacity: 0.7;
  transition:
    border-color 0.1s ease-in,
    opacity 0.1s ease-in;

  text-decoration: underline;
  text-decoration-color: ${(p) => p.theme.colors.accent};
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;

  &:hover {
    opacity: 1;
  }
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
      <CenteringWrapper>
        <MainpageContent>
          <MainpageHeading>
            I'm <MainpageA href="/about">Hannah Vivian Shaw</MainpageA>. I build
            comfortable worlds for engineers.
          </MainpageHeading>
          <MainpageHeading>
            {/* TODO: These should be distinct internal and external links! */}
            To see what I do, visit{" "}
            <em>
              <MainpageA href="https://github.com/vivshaw">my GitHub</MainpageA>
            </em>{" "}
            for code, or{" "}
            <em>
              <MainpageLink href="/blog">my blog</MainpageLink>
            </em>{" "}
            for words. To read my less-filtered thoughts on subjects ranging
            from engineering to philosophy, see{" "}
            <em>
              <MainpageA href="https://zettel.vivsha.ws">
                my digital garden
              </MainpageA>
            </em>
            .
          </MainpageHeading>
        </MainpageContent>
      </CenteringWrapper>
    </Layout>
  )
}
