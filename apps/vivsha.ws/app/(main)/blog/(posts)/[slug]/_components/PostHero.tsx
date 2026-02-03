import { PostMetadata } from "#data"
import { Heading } from "@vivshaw/basalt"

import styles from "./PostHero.module.css"

interface PostHeroProps {
  post: PostMetadata
}

/**
 * displays the hero section for a given post.
 */
export function PostHero({ post }: PostHeroProps) {
  return (
    <header className={styles.root}>
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
