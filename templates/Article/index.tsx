import { PropsWithChildren } from "react"

import { Layout } from "@components/Layout"
import { MDXBody } from "@components/MDX"
import { Seo } from "@components/SEO"
import type { Article } from "@data"
import { prettyPrintDate } from "@utils"
import { ArticleHero } from "./Article.Hero"
import { ArticleNext } from "./Article.Next"
import { articleBody, footerNext, footerSpacer, section } from "./article.css"
// TODO: Remove these after `next` actually works!!
const fakeNextMetas: Article[] = [
  {
    title: "Build a Frankenstein Robot Brain, Teach It to Read Numbers",
    blurb: "Exploring computer vision with a from-scratch neural net in Scala",
    date: new Date("2017-02-04"),
    next: ["electric-pentameter", "build-you-a-tweetbot"],
    slug: "robot-brain-scala",
    tags: ["scala", "ml", "neural networks", "MNIST", "computer vision"],
  },
  {
    title: "Do Robots Dream of Electric Pentameter?",
    blurb: "Generative poetry with LSTM neural networks",
    date: new Date("2017-02-10"),
    next: ["robot-brain-scala", "build-you-a-tweetbot"],
    slug: "electric-pentameter",
    tags: ["python", "ml", "LSTM", "neural networks", "keras"],
  },
]

type ArticleProps = {
  meta: Article
}

/**
 * Template for a single blog post.
 */
export function ArticleTemplate({
  meta,
  children,
}: PropsWithChildren<ArticleProps>) {
  const next = fakeNextMetas.filter((article) => article.slug !== meta.slug)

  const prettyDate = prettyPrintDate(meta.date)

  return (
    <Layout>
      <Seo
        data={{
          type: "article",
          datePublished: prettyDate,
          description: meta.blurb,
          title: meta.title,
        }}
      />

      <ArticleHero article={meta} />

      <article className={articleBody}>
        <MDXBody>{children}</MDXBody>
      </article>

      {next.length > 0 && (
        <section className={section}>
          <h3 className={footerNext}>More articles from vivshaw's</h3>
          <ArticleNext articles={next} />
          <div className={footerSpacer} />
        </section>
      )}
    </Layout>
  )
}
