# posts

Blog posts live here!

## Creating new posts

`yarn new:post` will quickly generate a new post with the proper metadata using a Hygen template.

## Structure

Each post is a directory containing an MDX file, `post.mdx`. The name of the directory will be the slug for the published post. To link images, simply put them in the same directory and import them.

## Metadata

Post metadata is provided as YAML frontmatter. Currently, this metadata is supported:

```md
---
title: Title for the post (required)

blurb: A short 1-2 sentence describing the post (optional)
date: The date the post was initially published (required)
dateModified: The date the post was revised (optional)
next: An array of 1-2 posts that should be featured in the `Next posts` section (optional)
tags: An array of topic tags this post is about (optional)
---
```
