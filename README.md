# [`vivsha.ws`](https://vivsha.ws)

this is my website. it's a static site built with React. i use it for personal details and blogging.

## up and running

```sh
yarn
yarn dev
```

## deployment

`vivsha.ws` is a fully static app. it's deployed [via this GitHub Action](./.github/workflows/publish.yml) to GitHub Pages.

## repo structure

[`./posts`](./posts) contains the posts themselves. i prefer for them to live outside the code in a separate top-level folder, and to be as close to standard markdown as possible, for a distraction-free writing environment.

as for the JavaScript, the code is split into several packages using Yarn workspaces.

- [`./apps/vivsha.ws`](./apps/vivsha.ws) contains the Next.js app for the site.
- [`./packages/basalt`](./packages/basalt) contains (the bones of) Basalt, the design system i am assembling to structure this site.
- [`./packages/mdx`](./packages/mdx) contains a small library of prebuilt MDX components using the Basalt styles.

## why `vivsha.ws`?

i wanted `vivsh.aw` but that proved annoying, so I settled for `vivsha.ws`. read it like: "vivshaw's", as in "vivshaw's webbed sight".

## if it lives at `vivsha.ws`, why does it live in a repo called `vivshaw.github.io`?

a few reasons, both related to the requirements for [GitHub user pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)

- i used to host my blog at that URL, and i would like it to continue working, with a redirect to my new URL.
- i'd prefer _all_ my GitHub Pages to live under `vivsha.ws`.

the easiest way to accomplish these things is by setting a custom domain for my user site.
