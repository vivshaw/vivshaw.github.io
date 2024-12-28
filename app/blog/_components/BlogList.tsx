import Link from "next/link"

import type { Article } from "@data"
import { prettyPrintDate } from "@lib"
import {
  blogList,
  blogListItemBlurb,
  blogListItemDate,
  blogListItemLink,
  blogListItemTitle,
} from "./blogList.css"

interface BlogListProps {
  articles: Article[]
}

export function BlogList({ articles }: BlogListProps) {
  return (
    <div className={blogList}>
      {articles.map((article, idx) => (
        <BlogListItem key={idx} article={article} />
      ))}
    </div>
  )
}

interface BlogListItemProps {
  article: Article
}

function BlogListItem({ article }: BlogListItemProps) {
  const prettyDate = prettyPrintDate(article.date)
  const hasBlurb = article.blurb

  return (
    <Link className={blogListItemLink} href={`/blog/${article.slug}`}>
      <h2 className={blogListItemTitle}>{article.title}</h2>
      {hasBlurb && <p className={blogListItemBlurb}>{article.blurb}</p>}
      <div className={blogListItemDate}>{prettyDate}</div>
    </Link>
  )
}
