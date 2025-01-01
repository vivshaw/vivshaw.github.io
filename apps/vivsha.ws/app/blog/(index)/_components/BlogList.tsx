import Link from "next/link"

import { prettyPrintDate } from "#lib"
import { PostMetadata } from "#data"
import { root, postBlurb, postDate, postLink, postTitle } from "./BlogList.css"

interface BlogListProps {
  posts: PostMetadata[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className={root}>
      {posts.map((post, idx) => (
        <BlogListItem key={idx} post={post} />
      ))}
    </div>
  )
}

interface BlogListItemProps {
  post: PostMetadata
}

function BlogListItem({ post }: BlogListItemProps) {
  const prettyDate = prettyPrintDate(post.date)
  const hasBlurb = post.blurb

  return (
    <Link className={postLink} href={`/blog/${post.slug}`}>
      <h2 className={postTitle}>{post.title}</h2>
      {hasBlurb && <p className={postBlurb}>{post.blurb}</p>}
      <div className={postDate}>{prettyDate}</div>
    </Link>
  )
}
