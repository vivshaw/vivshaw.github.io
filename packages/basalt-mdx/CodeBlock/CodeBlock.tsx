import clsx from "clsx"

import styles from "./CodeBlock.module.css"

export type CodeBlockProps = React.HTMLAttributes<HTMLPreElement> & {
  "data-language"?: string
}

/**
 * a styled `<pre>` code block for use with Shiki syntax highlighting in MDX.
 *
 * caveats:
 * - this component assumes that _all_ `<pre>` blocks are code blocks.
 */
export function CodeBlock(props: CodeBlockProps) {
  const { "data-language": dataLanguage, ...rest } = props

  return (
    <div className={styles.container} data-language={dataLanguage}>
      <pre {...rest} className={clsx(styles.codeBlock, props.className)}>
        {props.children}
      </pre>
    </div>
  )
}
