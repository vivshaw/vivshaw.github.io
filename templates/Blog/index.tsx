import { Layout } from "@components/Layout"
import { Seo } from "@components/SEO"
import type { Article } from "@data"
import { centeringWrapper, mainpageContent } from "@pageStyles/main.css"
import { BlogList } from "./Blog.List"

type BlogTemplateProps = {
  articles: Article[]
}

/**
 * Template for a list of blog posts. Currently just used for the index page.
 * In future, will be used for the tags pages.
 */
export function BlogTemplate({ articles }: BlogTemplateProps) {
  return (
    <Layout>
      <Seo
        data={{
          type: "other",
          title: "Blog",
          description: "vivshaw's blog",
        }}
      />
      <div className={centeringWrapper}>
        <div className={mainpageContent}>
          <BlogList articles={articles} />
        </div>
      </div>
    </Layout>
  )
}
