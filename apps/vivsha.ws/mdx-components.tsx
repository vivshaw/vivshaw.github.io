import type { MDXComponents } from "mdx/types"
import { Anchor } from "@vivshaw/mdx/Anchor/Anchor"
import { Blockquote } from "@vivshaw/mdx/Blockquote/Blockquote"
import { CodeBlock } from "@vivshaw/mdx/CodeBlock/CodeBlock"
import { headings } from "@vivshaw/mdx/Headings/Headings"
import { Figcaption } from "@vivshaw/mdx/Figcaption/Figcaption"
import { HorizontalRule } from "@vivshaw/mdx/HorizontalRule/HorizontalRule"
import { Image } from "@vivshaw/mdx/Image/Image"
import { ListItem } from "@vivshaw/mdx/ListItem/ListItem"
import { OrderedList } from "@vivshaw/mdx/OrderedList/OrderedList"
import { Paragraph } from "@vivshaw/mdx/Paragraph/Paragraph"
import { Table } from "@vivshaw/mdx/Table/Table"
import { TableCell } from "@vivshaw/mdx/TableCell/TableCell"
import { TableHead } from "@vivshaw/mdx/TableHead/TableHead"
import { TableHeadCell } from "@vivshaw/mdx/TableHeadCell/TableHeadCell"
import { UnorderedList } from "@vivshaw/mdx/UnorderedList/UnorderedList"

const customComponents = {
  a: Anchor,
  blockquote: Blockquote,
  figcaption: Figcaption,
  img: Image,
  h1: headings.h1,
  h2: headings.h2,
  h3: headings.h3,
  h4: headings.h4,
  h5: headings.h5,
  h6: headings.h6,
  hr: HorizontalRule,
  li: ListItem,
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
