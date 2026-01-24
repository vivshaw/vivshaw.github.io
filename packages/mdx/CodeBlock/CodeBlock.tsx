import clsx from "clsx"
import { PropsWithChildren } from "react"

import { CODE_BLOCK_CLASS } from "./CodeBlock.css"

type CodeBlockProps = {
  className?: string
}

/**
 * a styled `<pre>` code block for use with Shiki syntax highlighting in MDX.
 * Shiki outputs `<pre class="shiki ...">` elements, so this component adds
 * the necessary class for styling.
 *
 * caveats:
 * - this component assumes that _all_ `<pre>` blocks are code blocks.
 * - the styles are applied via globals in `CodeBlock.css.ts` and `mdx.css.ts`.
 */
export function CodeBlock(props: PropsWithChildren<CodeBlockProps>) {
  return (
    <pre {...props} className={clsx(CODE_BLOCK_CLASS, props.className)}>
      {props.children}
    </pre>
  )
}
