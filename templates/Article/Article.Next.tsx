import Link from "next/link"

import type { Article } from "@data"
import { prettyPrintDate } from "@utils"
import {
  articleNextExcerpt,
  articleNextGrid,
  articleNextItem,
  articleNextLink,
  articleNextMetaData,
  articleNextTitle,
} from "./articleNext.css"

interface ArticlesNextProps {
  /**
   * Articles to display in the Next Articles block.
   * If the list is empty, we won't display this block at all!
   */
  articles: Article[]
}

/**
 * Sits at the bottom of our Article page. Shows the next 2 on desktop and the
 * next 1 on mobile!
 *
 *  [..............], [.........]
 *  [.....LONG.....], [..SHORT..]
 *  [..............], [.........]
 *
 * This does NOT use Article.List because there's a special case of only have 1 article
 * as the next one suggested article, which requires special styling we didn't want to
 * mix into the generic list component.
 */
export function ArticleNext({ articles }: ArticlesNextProps) {
  const numberOfArticles = articles.length

  if (numberOfArticles < 1) {
    return null
  }

  const showTwoArticles = numberOfArticles > 1

  return (
    <div className={articleNextGrid({ multipleArticles: showTwoArticles })}>
      <GridItem article={articles[0]} />
      {showTwoArticles && <GridItem article={articles[1]} />}
    </div>
  )
}

interface GridItemProps {
  /**
   * The Article to display in this grid item.
   */
  article: Article
}

function GridItem({ article }: GridItemProps) {
  const prettyDate = prettyPrintDate(article.date)

  return (
    <Link className={articleNextLink} href={article.slug}>
      <div className={articleNextItem}>
        <h3 className={articleNextTitle}>{article.title}</h3>
        <p className={articleNextExcerpt}>{article.blurb}</p>
        <div className={articleNextMetaData}>{prettyDate}</div>
      </div>
    </Link>
  )
}
