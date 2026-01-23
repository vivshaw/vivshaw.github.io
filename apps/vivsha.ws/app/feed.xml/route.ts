import { Feed } from "feed"

import { author, site } from "#data"
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers"

export async function GET() {
  const postSlugs = await listAllBlogSlugs()
  const posts = await Promise.all(postSlugs.map((post) => importBlogPost(post)))

  // sort posts by date, newest first
  const sortedPosts = posts.sort(
    (a, b) => b.meta.date.getTime() - a.meta.date.getTime(),
  )

  const feed = new Feed({
    author: {
      email: author.mailto.replace("mailto:", ""),
      link: site.url,
      name: author.name,
    },
    copyright: `all rights reversed ${new Date().getFullYear()}, ${author.name}`,
    description: site.description,
    favicon: `${site.url}/favicon.ico`,
    feedLinks: {
      rss2: `${site.url}/feed.xml`,
    },
    id: site.url,
    language: "en",
    link: site.url,
    title: site.name,
  })

  for (const post of sortedPosts) {
    const postUrl = `${site.url}/blog/${post.meta.slug}`

    feed.addItem({
      author: [
        {
          email: author.mailto.replace("mailto:", ""),
          link: site.url,
          name: author.name,
        },
      ],
      date: post.meta.date,
      description: post.meta.blurb,
      id: postUrl,
      link: postUrl,
      title: post.meta.title,
    })
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}

export const dynamic = "force-static"
