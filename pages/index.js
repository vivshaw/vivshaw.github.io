import fs from "fs/promises";
import path from "path";
import ArticlesPage from "../templates/articles.template";

export default function Index({ items }) {
  const articles = items.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));

  return <ArticlesPage articles={articles} />;
}

export async function getStaticProps() {
  const root = path.join(process.cwd(), "pages/blog");

  const listing = await fs.readdir(root);

  const items = listing
    .filter((item) => item.endsWith(".mdx"))
    .map((item) => {
      console.log(item);
      const blog = require(`./blog/${item}`);
      const meta = blog.meta;
      console.log(meta);
      console.log(blog.default);
      const slug = item.replace(/\.mdx/, "");

      return { slug, ...meta };
    })
    .sort((a, b) => b.date - a.date)
    .map((item) => {
      const date = item.toString();
      return { ...item, date };
    });

  return { props: { items } };
}
