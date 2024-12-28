import Link from "next/link"

import type { Article } from "@data"
import { prettyPrintDate } from "@lib"
import {
  blogList,
  postBlurb,
  postDate,
  postLink,
  postTitle,
} from "./BlogList.css"

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
    <Link className={postLink} href={`/blog/${article.slug}`}>
      <h2 className={postTitle}>{article.title}</h2>
      {hasBlurb && <p className={postBlurb}>{article.blurb}</p>}
      <div className={postDate}>{prettyDate}</div>
    </Link>
  )
}
