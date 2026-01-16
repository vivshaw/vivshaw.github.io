import Link from "next/link"

import { Heading, Text } from "@vivshaw/basalt/components"

import { prettyPrintDate } from "#lib"
import { PostMetadata } from "#data"
import {
  blogListItemLink,
  blogListItemHeading,
  blogListItemDate,
} from "./BlogList.css"

interface BlogListProps {
  posts: PostMetadata[]
}

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

function BlogListItem({ post }: BlogListItemProps) {
  const prettyDate = prettyPrintDate(post.date)

  return (
    <Link href={`/blog/${post.slug}`} className={blogListItemLink}>
      <Heading level="2" className={blogListItemHeading}>
        {post.title}
        {post.blurb && (
          <>
            <br />
            <em>{post.blurb}</em>
          </>
        )}
      </Heading>
      <Text size="small" className={blogListItemDate}>
        {prettyDate}
      </Text>
    </Link>
  )
}
