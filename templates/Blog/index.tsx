import styled from "@emotion/styled"
import { useRouter } from "next/router"

import Layout from "@components/Layout"
import { SEO } from "@components/SEO"
import type { TArticle } from "@data"
import mediaqueries from "@styles/media"
import BlogList from "./Blog.List"

const CenteringWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  /* avoid layout shift when there's a scrollbar */
  padding-left: calc(100vw - 100%);
`

const MainpageContent = styled.div`
  /**
  --padding-right: calc(env(safe-area-inset-right) + 80px);
  --padding-left: calc(env(safe-area-inset-left) + 80px);
  **/

  width: 100%;
  max-width: 1440px;
  padding-right: calc(env(safe-area-inset-right) + 80px);
  padding-left: calc(env(safe-area-inset-right) + 80px);
  padding-bottom: 50px;
  padding-top: 80px;

  ${mediaqueries.tablet`
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 32px;
  `}
`

/**
 * Template for a list of blog posts. Currently just used for the index page.
 * In future, will be used for the tags pages.
 */
const ArticlesPage = ({ articles }: { articles: TArticle[] }) => {
  const router = useRouter()

  return (
    <Layout>
      <SEO
        data={{
          type: "other",
          title: "Blog",
          description: "vivshaw's blog",
        }}
        pathname={router.pathname}
      />
      <CenteringWrapper>
        <MainpageContent>
          <BlogList articles={articles} />
        </MainpageContent>
      </CenteringWrapper>
    </Layout>
  )
}

export default ArticlesPage
