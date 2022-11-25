import ArticlesPage from "@templates/articles.template";
import { getAllBlogPosts } from "@utils/server";

/**
 * The index page for the blog. Lists all the articles.
 */
export default function Index({ articlesDateless }) {
  const articles = articlesDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));

  return <ArticlesPage articles={articles} />;
}

export async function getStaticProps() {
  const articlesDateless = await getAllBlogPosts();

  return { props: { articlesDateless } };
}
