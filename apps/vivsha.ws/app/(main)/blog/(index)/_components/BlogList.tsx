import Link from "next/link"

import { Heading, Text } from "@vivshaw/basalt/components"

import { prettyPrintDate } from "#lib"
import { PostMetadata } from "#data"
import styles from "./BlogList.module.css"

interface BlogListProps {
  posts: PostMetadata[]
}

/**
 * a list of links to blog posts.
 */
export function BlogList({ posts }: BlogListProps) {
  return (
    <>
      {posts.map((post, idx) => (
        <BlogListItem key={idx} post={post} />
      ))}
    </>
  )
}

interface BlogListItemProps {
  post: PostMetadata
}

/**
 * a single link to a blog post in the list.
 */
function BlogListItem({ post }: BlogListItemProps) {
  const prettyDate = prettyPrintDate(post.date)

  return (
    <Link href={`/blog/${post.slug}`} className={styles.link}>
      <Heading level="2" className={styles.heading}>
        {post.title}
        {post.blurb && (
          <>
            <br />
            <em>{post.blurb}</em>
          </>
        )}
      </Heading>
      <Text size="small" color="muted">
        {prettyDate}
      </Text>
    </Link>
  )
}
