import type { MDXComponents } from "mdx/types"
import {
  Anchor,
  Blockquote,
  CodeBlock,
  Figcaption,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HorizontalRule,
  Image,
  OrderedList,
  Paragraph,
  Table,
  TableCell,
  TableHead,
  TableHeadCell,
  UnorderedList,
} from "@vivshaw/basalt-mdx"

const customComponents = {
  a: Anchor,
  blockquote: Blockquote,
  figcaption: Figcaption,
  img: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: HorizontalRule,
  ol: OrderedList,
  p: Paragraph,
  pre: CodeBlock,
  table: Table,
  td: TableCell,
  th: TableHeadCell,
  thead: TableHead,
  ul: UnorderedList,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  }
}
