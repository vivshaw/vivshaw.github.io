# Example app with MDX

This example shows using [MDX](https://github.com/mdx-js/mdx) as top level pages for your next.js app.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-mdx)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mdx&project-name=with-mdx&repository-name=with-mdx)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-mdx with-mdx-app
```

```bash
yarn create next-app --example with-mdx with-mdx-app
```

```bash
pnpm create next-app --example with-mdx with-mdx-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## TODO

[ ] There's an error with `'` and `"` in Prism code blocks of unknown language
[ ] Make `code` blocks more legible
[ ] Figure out what the heck is controlling scrolling in fenced code blocks
[ ] Nicer component for loading images in MDX?
[ ] Actual dev env support for MDX
[ ] Rip out Emotion / ThemeUI in favor of Vanilla Extract
[ ] Tighten up types in general
[ ] Line numbers in code blocks
[ ] Highlights
[ ] CLI styles
[ ] Fix socials icons on phone screens
[ ] Actually display/use the category tags
[ ] Get "Next Article" working for real
[ ] type meta, if possible
[ ] Yarn PnP support? (Not compatible with Turborepo... yet!)
[ ] Monorepo it? (Turborepo? NX?)
[ ] Storybook
[ ] tidy MDX components generally
[ ] figure out why `srcset` isn't working right, then use it, and fix any other image perf issues
[ ] Shoud social tags have a published _time_ as well as date?
[ ] Prevent the layout shift when there's a scrollbar
