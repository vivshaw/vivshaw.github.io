# posts

blog posts live here!

## creating new posts

`yarn new:post` will quickly generate a new post with the proper metadata using a Hygen template.

## structure

each post is a directory containing an MDX file, `post.mdx`. the name of the directory will be the slug for the published post. to link images, simply put them in the same directory and import them.

## formatting

posts are formatted using ordinary Markdown. MDX is supported, so it's possible to inline React components if and when needed.

a few caveats:

- the title is rendered by the post template, so put it in the metadata, not the markdown.
- start all headings at level 2! the post template already uses an `<h1>` for the post title

## metadata

post metadata is provided as YAML frontmatter. currently, this metadata is supported:

```md
---
title: Title for the post (required)

blurb: a short 1-2 sentence describing the post (optional)
date: the date the post was initially published (required)
dateModified: the date the post was most recently revised (optional)
next: an array of 1-2 posts that should be featured in the `Next posts` section (optional)
tags: an array of topic tags this post is about (optional)
---
```
