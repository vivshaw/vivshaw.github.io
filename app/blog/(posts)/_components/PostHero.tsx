import type { Article } from "@data"
import { prettyPrintDate } from "@lib"
import { header, title, subtitle } from "./PostHero.css"

interface ArticleHeroProps {
  article: Article
}

/**
 * Displays the Hero section for a given Article.
 */
export function PostHero({ article }: ArticleHeroProps) {
  const prettyDate = prettyPrintDate(article.date)

  return (
    <header className={header}>
      <h1 className={title}>{article.title}</h1>
      <div className={subtitle}>{prettyDate}</div>
    </header>
  )
}
