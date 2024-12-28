import type { MDXComponents } from "mdx/types"

import { CodeBlock } from "#components/MDX/CodeBlock/CodeBlock"
import { Figcaption } from "#components/MDX/Figcaption"
import { headings } from "#components/MDX/Headings"
import { Anchor } from "#components/MDX/Anchor"
import { Blockquote } from "#components/MDX/Blockquote"
import { HorizontalRule } from "#components/MDX/HorizontalRule"
import { ListItem } from "#components/MDX/Lists/ListItem"
import { OrderedList } from "#components/MDX/Lists/OrderedList"
import { Paragraph } from "#components/MDX/Paragraph"
import { Table } from "#components/MDX/Tables/Table"
import { TableCell } from "#components/MDX/Tables/TableCell"
import { TableHead } from "#components/MDX/Tables/TableHead"
import { TableHeadCell } from "#components/MDX/Tables/TableHeadCell"
import { UnorderedList } from "#components/MDX/Lists/UnorderedList"

const customComponents = {
  a: Anchor,
  blockquote: Blockquote,
  figcaption: Figcaption,
  h1: headings.h2, // h1 reserved for blog post title
  h2: headings.h2,
  h3: headings.h3,
  h4: headings.h4,
  h5: headings.h5,
  h6: headings.h6,
  hr: HorizontalRule,
  li: ListItem,
  ul: UnorderedList,
  ol: OrderedList,
  p: Paragraph,
  pre: CodeBlock,
  table: Table,
  th: TableHeadCell,
  thead: TableHead,
  td: TableCell,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  }
}
