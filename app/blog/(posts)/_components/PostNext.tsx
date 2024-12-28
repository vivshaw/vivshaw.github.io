import Link from "next/link"

import type { Article } from "@data"
import { prettyPrintDate } from "@lib"
import {
  postExcerpt,
  container,
  postLink,
  postDate,
  postTitle,
} from "./PostNext.css"

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
export function PostNext({ articles }: ArticlesNextProps) {
  const numberOfArticles = articles.length

  if (numberOfArticles < 1) {
    return null
  }

  const showTwoArticles = numberOfArticles > 1

  return (
    <div className={container({ multipleArticles: showTwoArticles })}>
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
    <Link className={postLink} href={article.slug}>
      <h3 className={postTitle}>{article.title}</h3>
      <p className={postExcerpt}>{article.blurb}</p>
      <div className={postDate}>{prettyDate}</div>
    </Link>
  )
}
