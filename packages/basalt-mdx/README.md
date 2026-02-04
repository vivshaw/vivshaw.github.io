# @vivshaw/basalt-mdx

this package is a library of prebuilt MDX components, styled with [Basalt](../basalt/). think of it as a Basalt expansion pack for Markdown docs. it is fully static and uses no runtime stylesheets or client React, so it's appropriate for use in server components.

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

| plugin                              | what it does                                                                        | what depends on it                                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `@shikijs/rehype`                   | syntax highlighting for code blocks (dual-theme CSS variables mode)                 | `CodeBlock`, with the `transformerNotationHighlight`, `transformerNotationDiff`, and `transformerLanguageLabel` Shiki transformers |
| `remark-gfm`                        | GFM tables, footnotes, and other extensions                                         | `Table`, `TableHead`, `TableCell`, `TableHeadCell`, and footnote styles in `mdx.module.css`                                        |
| `remark-github-blockquote-alert`    | GitHub-style alert/callout blockquotes                                              | alert styles in `mdx.module.css`                                                                                                   |
| `rehype-mdx-import-media`           | resolves image imports so MDX can use relative paths                                | `Image`                                                                                                                            |
| `rehype-sidenotes` (custom)         | transforms GFM footnotes into Tufte-style margin sidenotes                          | sidenote styles in `mdx.module.css`                                                                                                |
| `rehype-first-three-words` (custom) | wraps the first three words of the first paragraph in a span for small-caps styling | styled in the app's `page.module.css`                                                                                              |
