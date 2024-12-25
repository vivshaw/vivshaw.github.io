import styled from "@emotion/styled"
import { useRouter } from "next/router"

import Layout from "@components/Layout"
import { MDXBody } from "@components/MDX/MDX"
import Section from "@components/Section"
import SEO from "@components/SEO"
import type { TArticle } from "@data"
import mediaqueries from "@styles/media"
import { prettyPrintDate } from "@utils"
import ArticleHero from "./Article.Hero"
import ArticlesNext from "./Article.Next"

// TODO: Remove these after `next` actually works!!
const fakeNextMetas: TArticle[] = [
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

/**
 * Template for a single blog post.
 */
const Article = ({
  children,
  meta,
}: {
  children: React.ReactNode
  meta: TArticle
}) => {
  const next = fakeNextMetas.filter((article) => article.slug !== meta.slug)

  const router = useRouter()

  const prettyDate = prettyPrintDate(meta.date)

  return (
    <Layout>
      <SEO
        data={{
          type: "article",
          datePublished: prettyDate,
          description: meta.blurb,
          title: meta.title,
        }}
        pathname={router.pathname}
      />
      <ArticleHero article={meta} />

      <ArticleBody>
        <MDXBody>{children}</MDXBody>
      </ArticleBody>

      {next.length > 0 && (
        <NextArticle narrow>
          <FooterNext>More articles from vivshaw's</FooterNext>
          <ArticlesNext articles={next} />
          <FooterSpacer />
        </NextArticle>
      )}
    </Layout>
  )
}

export default Article

const ArticleBody = styled.article`
  position: relative;
  padding: 0 0 35px;
  transition: background 0.2s linear;
  max-width: 744px;
  margin: 0 auto;

  ${mediaqueries.desktop`
    padding-left: 53px;
  `}

  ${mediaqueries.tablet`
    max-width: 100%;
    padding: 70px 20px 80px;
  `}

  ${mediaqueries.phablet`
    padding: 60px 0;
  `}
`

const NextArticle = styled(Section)`
  display: block;
`

const FooterNext = styled.h3`
  position: relative;
  opacity: 0.25;
  margin-bottom: 30px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};

  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 4px;

  &::after {
    content: "";
    position: absolute;
    background: ${(p) => p.theme.colors.grey};
    width: ${(750 / 1140) * 100}%;
    height: 1px;
    right: 0;
    top: 11px;

    ${mediaqueries.tablet`
      width: ${(600 / 1140) * 100}%;
    `}

    ${mediaqueries.phablet`
      width: ${(400 / 1140) * 100}%;
    `}

    ${mediaqueries.phone`
      width: 90px
    `}
  }
`

const FooterSpacer = styled.div`
  margin-bottom: 65px;
`
