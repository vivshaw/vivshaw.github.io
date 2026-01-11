import { PostMetadata } from "#data"
import { Heading } from "@vivshaw/basalt/components"
import { root } from "./PostHero.css"

interface PostHeroProps {
  post: PostMetadata
}

/**
 * Displays the Hero section for a given Post.
 */
export function PostHero({ post }: PostHeroProps) {
  return (
    <header className={root}>
      <Heading level="1">
        {post.title}
        {post.blurb && (
          <>
            <br />
            <em>{post.blurb}</em>
          </>
        )}
      </Heading>
    </header>
  )
}
