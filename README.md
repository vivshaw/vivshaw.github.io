# [`vivsha.ws`](https://vivsha.ws)

this is my website. it's a static site built with React. i use it for personal details and blogging.

## up and running

```sh
yarn
yarn dev
```

## repo structure

the code is split into several packages using Yarn workspaces:

- [`./apps/vivsha.ws`](./apps/vivsha.ws) — the Next.js app for the site
- [`./packages/basalt`](./packages/basalt) — the Basalt design system (components, tokens, CSS reset)
- [`./packages/basalt-mdx`](./packages/basalt-mdx) — prebuilt MDX components styled with Basalt

content lives outside the code in separate top-level folders, for a distraction-free writing environment:

- [`./posts`](./posts) — blog posts (one directory per post, each with a `post.mdx`)
- [`./pages`](./pages) — standalone pages like about and colophon

## scripts

these scripts should be run from the monorepo root:

| command           | what it does                       |
| ----------------- | ---------------------------------- |
| `yarn dev`        | start the Next.js dev server       |
| `yarn build`      | build the static site              |
| `yarn typecheck`  | typecheck all packages             |
| `yarn format:all` | format everything with Prettier    |
| `yarn new:post`   | scaffold a new blog post via hygen |

see the individual packages for package-level commands.

## deployment

`vivsha.ws` is a fully static app. it's deployed [via this GitHub Action](./.github/workflows/publish.yml) to GitHub Pages.

## why `vivsha.ws`?

i wanted `vivsh.aw` but that proved annoying, so i settled for `vivsha.ws`. read it like: "vivshaw's", as in "vivshaw's webbed sight".

## if it lives at `vivsha.ws`, why does it live in a repo called `vivshaw.github.io`?

a few reasons, both related to the requirements for [GitHub user pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)

- i used to host my blog at that URL, and i would like it to continue working, with a redirect to my new URL.
- i'd prefer _all_ my GitHub Pages to live under `vivsha.ws`.

the easiest way to accomplish these things is by setting a custom domain for my user site.
