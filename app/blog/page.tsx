import { BlogTemplate } from "./_components/BlogTemplate"
import { getAllBlogPosts } from "./_lib/getAllBlogPosts"

/**
 * The index page for the blog. Lists all the articles.
 */
export default async function Blog() {
  const articlesDateless = await getAllBlogPosts()

  const articles = articlesDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }))

  return <BlogTemplate articles={articles} />
}
