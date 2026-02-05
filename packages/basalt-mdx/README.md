# @vivshaw/basalt-mdx

this package is a library of prebuilt MDX components, styled with [Basalt](../basalt/). think of it as a Basalt expansion pack for Markdown docs. it is fully static and uses no runtime stylesheets or client React, so it's appropriate for use in server components.

## scripts

all scripts should be run from the monorepo root.

| command                                              | what it does                   |
| ---------------------------------------------------- | ------------------------------ |
| `yarn workspace @vivshaw/basalt-mdx storybook`       | launch Storybook on port 6007  |
| `yarn workspace @vivshaw/basalt-mdx build-storybook` | build Storybook for deployment |

## CSS cascade layers

all component CSS Modules in this package are wrapped in `@layer basalt-mdx { ... }`. the consuming app is responsible for declaring the layer order.

## components

this package provides components to cover the following roles:

| component        | overrides                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| `Anchor`         | `<a>`                                                                                                       |
| `Blockquote`     | `<blockquote>`                                                                                              |
| `CodeBlock`      | `<pre>`                                                                                                     |
| `Figcaption`     | `<figcaption>`                                                                                              |
| `Headings`       | `<h1>`–`<h6>` (but only has visual styles for `<h1>`-`<h3>`! try not to need more than 3 levels of heading) |
| `HorizontalRule` | `<hr>`                                                                                                      |
| `Image`          | `<img>`                                                                                                     |
| `OrderedList`    | `<ol>`                                                                                                      |
| `Paragraph`      | `<p>`                                                                                                       |
| `Table`          | `<table>`                                                                                                   |
| `TableCell`      | `<td>`                                                                                                      |
| `TableHead`      | `<thead>`                                                                                                   |
| `TableHeadCell`  | `<th>`                                                                                                      |
| `UnorderedList`  | `<ul>`                                                                                                      |

## usage

### setup

- import `<MdxBody>` and use it in your layout to wrap the MDX content.
- wire up the components as MDX overrides in the app's `mdx-components.tsx` via `useMDXComponents`.

### MDX plugins

ensure these remark/rehype plugins are configured in the MDX pipeline:

| plugin                           | what it does                                                        | what depends on it                                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `@shikijs/rehype`                | syntax highlighting for code blocks (dual-theme CSS variables mode) | `CodeBlock`, with the `transformerNotationHighlight`, `transformerNotationDiff`, and `transformerLanguageLabel` Shiki transformers |
| `remark-gfm`                     | GFM tables, footnotes, and other extensions                         | `Table`, `TableHead`, `TableCell`, `TableHeadCell`, and footnote styles in `MdxBody.module.css`                                    |
| `remark-github-blockquote-alert` | GitHub-style alert/callout blockquotes                              | alert styles in `MdxBody.module.css`                                                                                               |
| `@vivshaw/rehype-sidenotes`      | transforms GFM footnotes into Tufte-style margin sidenotes          | sidenote styles in `MdxBody.module.css`                                                                                            |
| `@vivshaw/rehype-smallcap-words` | wraps leading words of first paragraph for small-caps styling       | `MdxBody` with `leadingSmallCaps` prop                                                                                             |
