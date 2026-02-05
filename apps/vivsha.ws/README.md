# @vivshaw/vivsha.ws

this package contains the Next.js app that powers [`vivsha.ws`](https://vivsha.ws). it uses the App Router with static export, [Basalt](../../packages/basalt/) for styling, and [Basalt MDX](../../packages/basalt-mdx/) for rendered Markdown content.

## scripts

all scripts should be run from the monorepo root.

| command      | what it does                       |
| ------------ | ---------------------------------- |
| `yarn dev`   | start the Next.js dev server       |
| `yarn build` | build the static site              |
| `yarn start` | serve the production build locally |

## routes

| route          | what it is                                              |
| -------------- | ------------------------------------------------------- |
| `/`            | home page — profile card with bio, avatar, social links |
| `/blog`        | blog index — all posts sorted by date                   |
| `/blog/[slug]` | individual blog post                                    |
| `/[slug]`      | standalone MDX pages (about, colophon, etc.)            |
| `/feed.xml`    | RSS feed (route handler)                                |
| `/sitemap.xml` | dynamically generated sitemap                           |

the app also has a custom 404 page.

## content

blog posts live in `../../posts/[slug]/post.mdx` and standalone pages live in `../../pages/[slug]/page.mdx` — both outside the app directory, so the MDX files can stay pure Markdown without any Next.js boilerplate.

posts and pages are imported dynamically at build time via helpers in `lib/postHelpers.ts`. frontmatter is extracted with `remark-mdx-frontmatter` and validated with Zod schemas defined in `data/index.ts`.

### MDX pipeline

the MDX pipeline is configured in `next.config.mjs` with the following plugins:

| plugin                                          | what it does                                                      |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| `remark-frontmatter` + `remark-mdx-frontmatter` | extract YAML frontmatter as an export                             |
| `remark-gfm`                                    | GFM tables, footnotes, strikethrough, etc.                        |
| `remark-github-blockquote-alert`                | GitHub-style callout blockquotes                                  |
| `rehype-mdx-import-media`                       | resolve relative image paths                                      |
| `@shikijs/rehype`                               | syntax highlighting (dual-theme: vitesse-light / kanagawa-dragon) |
| `@vivshaw/rehype-sidenotes`                     | transform GFM footnotes into Tufte-style margin sidenotes         |
| `@vivshaw/rehype-smallcap-words`                | wrap the leading words in a span for small-caps styling           |

## shared code

| directory          | what's in it                                                                      |
| ------------------ | --------------------------------------------------------------------------------- |
| `app/_components/` | shared UI — `LayoutWrapper`, `Navbar`, `SlideoutPanel`, `ThemeSwitcher`           |
| `data/`            | site metadata, author info, Zod schemas for frontmatter                           |
| `lib/`             | helpers — date formatting, post/page importing, SEO metadata & JSON-LD generation |
