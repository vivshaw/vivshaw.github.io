import { IArticle } from "@types";
import fs from "fs/promises";
import path from "path";

/** The dates have to get munged to and from string to be serialized for `getStaticProps` 😔 */
type TArticleDateless = Omit<IArticle, "date"> & { date: string };

/**
 * Fetches all the blog posts that currently exist.
 * Is run in `getStaticProps` to generate the article list.
 */
export const getAllBlogPosts = async (): Promise<TArticleDateless[]> => {
  const root = path.join(process.cwd(), "pages/blog");

  const listing = await fs.readdir(root);

  const items = listing
    .map((item) => {
      // TODO: Make this more typesafe... Zod it? Types in MDX files?
      const blog = require(`@pages/blog/${item}/index.mdx`);
      const meta = blog.meta;
      return { slug: item, ...meta };
    })
    .sort((a, b) => b.date - a.date)
    .map((item) => {
      // TODO: This munging to and from string is awkward!
      const date = item.date.toString();
      return { ...item, date };
    });

  return items;
};
