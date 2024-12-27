import type { Article } from "@data"
import { prettyPrintDate } from "@utils"
import {
  header,
  articleHeroTitle,
  articleHeroSubtitle,
} from "./articleHero.css"

interface ArticleHeroProps {
  article: Article
}

/**
 * Displays the Hero section for a given Article, including title, author, and image.
 */
export function ArticleHero({ article }: ArticleHeroProps) {
  const prettyDate = prettyPrintDate(article.date)

  return (
    <div>
      <header className={header}>
        <h1 className={articleHeroTitle}>{article.title}</h1>
        <div className={articleHeroSubtitle}>{prettyDate}</div>
      </header>
    </div>
  )
}
