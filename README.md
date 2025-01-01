# [`vivsha.ws`](https://vivsha.ws)

This is my website. It's a static site built with React. I use it for personal details and blogging.

## Up and running

```sh
yarn
yarn dev
```

## Deployment

`vivsha.ws` is a fully static app. It's deployed [via this GitHub Action](./.github/workflows/publish.yml) to GitHub Pages.

## Repo structure

[`./posts`](./posts) contains the posts themselves. I prefer for them to live outside the code in a separate top-level folder, and to be as close to standard markdown as possible, for a distraction-free writing environment.

As for the JavaScript, the code is split into several packages using Yarn workspaces.

- [`./apps/vivsha.ws`](./apps/vivsha.ws) contains the Next.js app for the site.
- [`./packages/viriditas`](./packages/viriditas) contains (the bones of) Viriditas, the design system I am assembling to structure this site.
- [`./packages/mdx`](./packages/mdx) contains a small library of prebuilt MDX components using the Viriditas styles.

## Why `vivsha.ws`?

I wanted `vivsh.aw` but that proved annoying, so I settled for `vivsha.ws`. Read it like: "vivshaw's", as in "vivshaw's webbed sight".

## If it lives at `vivsha.ws`, why does it live in a repo called `vivshaw.github.io`?

A few reasons, both related to the requirements for [GitHub user pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)

- I used to host my blog at that URL, and I would like it to continue working, with a redirect to my new URL.
- I'd prefer _all_ my GitHub Pages to live under `vivsha.ws`.

The easiest way to accomplish these things is by setting a custom domain for my user site.
