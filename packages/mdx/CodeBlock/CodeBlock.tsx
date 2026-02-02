import clsx from "clsx"
import { PropsWithChildren } from "react"

import styles from "./CodeBlock.module.css"

type CodeBlockProps = {
  className?: string
  "data-language"?: string
}

/**
 * a styled `<pre>` code block for use with Shiki syntax highlighting in MDX.
 *
 * caveats:
 * - this component assumes that _all_ `<pre>` blocks are code blocks.
 */
export function CodeBlock(props: PropsWithChildren<CodeBlockProps>) {
  const { "data-language": dataLanguage, ...rest } = props

  return (
    <div className={styles.container} data-language={dataLanguage}>
      <pre {...rest} className={clsx(styles.codeBlock, props.className)}>
        {props.children}
      </pre>
    </div>
  )
}
