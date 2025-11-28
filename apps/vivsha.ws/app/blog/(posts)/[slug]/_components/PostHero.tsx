import { PostMetadata } from "#data"
import { Box } from "@vivshaw/viriditas/components"
import { root, subtitle, title } from "./PostHero.css"

interface PostHeroProps {
  post: PostMetadata
}

/**
 * Displays the Hero section for a given Post.
 */
export function PostHero({ post }: PostHeroProps) {
  return (
    <header className={root}>
      <Box
        as="h1"
        className={title}
        sx={{
          color: "primary",
          font: "serif",
          fontWeight: "normal",
          text: "heading1",
        }}
      >
        {post.title}
      </Box>
      <Box
        as="h2"
        className={subtitle}
        sx={{
          color: "primary",
          font: "serif",
          fontWeight: "normal",
          text: "heading2",
        }}
      >
        {post.blurb}
      </Box>
    </header>
  )
}
