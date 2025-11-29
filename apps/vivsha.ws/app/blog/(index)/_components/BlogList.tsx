import Link from "next/link"

import { Box, Heading, Text } from "@vivshaw/viriditas/components"

import { prettyPrintDate } from "#lib"
import { PostMetadata } from "#data"

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
  const hasBlurb = post.blurb

  return (
    <Box
      as={Link}
      href={`/blog/${post.slug}`}
      sx={{ display: "block", focusRing: "default", mb: "12" }}
    >
      <Heading level="2" sx={{ marginBottom: "1" }}>
        {post.title}
      </Heading>
      {hasBlurb && (
        <Text size="normal" sx={{ color: "grey", mb: "2" }}>
          {post.blurb}
        </Text>
      )}
      <Text size="small" sx={{ color: "grey" }}>
        {prettyDate}
      </Text>
    </Box>
  )
}
