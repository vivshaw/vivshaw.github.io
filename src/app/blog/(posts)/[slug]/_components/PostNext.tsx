import Link from "next/link"

import type { Post } from "#data"
import { prettyPrintDate } from "#lib"
import {
  postExcerpt,
  root,
  postLink,
  postDate,
  postTitle,
} from "./PostNext.css"

interface PostNextProps {
  /**
   * Posts to display in the Next Posts block.
   * If the list is empty, we won't display this block at all!
   */
  posts: Post[]
}

/**
 * Sits at the bottom of the Blog page. Shows the next 2 on desktop and the
 * next 1 on mobile!
 */
export function PostNext({ posts }: PostNextProps) {
  const numberOfPosts = posts.length

  if (numberOfPosts < 1) {
    return null
  }

  const showTwoPosts = numberOfPosts > 1

  return (
    <div className={root({ multiplePosts: showTwoPosts })}>
      <GridItem post={posts[0]} />
      {showTwoPosts && <GridItem post={posts[1]} />}
    </div>
  )
}

interface GridItemProps {
  /**
   * The Post to display in this grid item.
   */
  post: Post
}

function GridItem({ post }: GridItemProps) {
  const prettyDate = prettyPrintDate(post.date)

  return (
    <Link className={postLink} href={post.slug}>
      <h3 className={postTitle}>{post.title}</h3>
      <p className={postExcerpt}>{post.blurb}</p>
      <div className={postDate}>{prettyDate}</div>
    </Link>
  )
}
