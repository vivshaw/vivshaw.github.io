import Blog from "@templates/Blog"
import { getAllBlogPosts } from "@utils/server"

/**
 * The index page for the blog. Lists all the articles.
 */
export default function Index({ articlesDateless }) {
  const articles = articlesDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }))

  return <Blog articles={articles} />
}

export async function getStaticProps() {
  const articlesDateless = await getAllBlogPosts()

  return { props: { articlesDateless } }
}
