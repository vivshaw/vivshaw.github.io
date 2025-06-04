import { PostMetadata } from "#data"
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
      <h1 className={title}>{post.title}</h1>
      <h2 className={subtitle}>{post.blurb}</h2>
    </header>
  )
}
