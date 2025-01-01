import { prettyPrintDate } from "#lib"
import { PostMetadata } from "#data"
import { root, title, date } from "./PostHero.css"

interface PostHeroProps {
  post: PostMetadata
}

/**
 * Displays the Hero section for a given Post.
 */
export function PostHero({ post }: PostHeroProps) {
  const prettyDate = prettyPrintDate(post.date)

  return (
    <header className={root}>
      <h1 className={title}>{post.title}</h1>
      <div className={date}>{prettyDate}</div>
    </header>
  )
}
