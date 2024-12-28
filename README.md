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

- [ ] There's an error with `'` and `"` in Prism code blocks of unknown language
- [ ] Make `code` blocks more legible
- [ ] Nicer component for loading images in MDX?
- [ ] Line numbers in code blocks
- [ ] Code block highlights
- [ ] Code block styles for CLI
- [ ] Actually display/use the category tags
- [ ] Get "Next Post" working for real
- [ ] Type post meta, if possible. or swap to using frontmatter!
- [ ] Yarn PnP support? (Not compatible with Turborepo... yet!)
- [ ] Monorepo it? (Turborepo? NX?)
- [ ] Storybook & design system
- [ ] Fix janky width changing when scrollbar shows or hides, again. now it's on smaller screens?
- [ ] more accessible focus states
- [ ] change "More articles from vivshaw's" to something that reads better
- [ ] should I use an actual list for the blog list? not sure!
- [ ] stop using global transition variables, and standardize transitions more generally
- [ ] use a path alias that is more easily distinguishable from NPM packages
- [ ] sans is only used in tables, should I drop it?
- [ ] heading styles in MDX get broken alignment on small screens
- [ ] fix navbar appearance & alignment in mobile menu
- [ ] colors fade from light to dark on first page load. that should be fixed. probably this requires moving to global theming so I can style `html` and `body`
- [ ] image optimization for static exports?
- [ ] should TableHeadCell use <th>?
- [ ] update PWA library
- [ ] consistent footer spacing- `40px` maybe?
- [ ] obliterate `pageStyles` directory
- [ ] should simple components like `AboutList` and friends be components, or just CSS files?
- [ ] extract MDX components to a separate package?
- [ ] new icon. dark mode icon would be sick whilst I'm at it.
- [ ] set up Google verification, etc
- [ ] better branded theme color
- [ ] restyle so all pages can share `.centeringWrapper` etc.
- [ ] get structured schema.org metadata working again
