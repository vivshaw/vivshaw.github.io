import mdxStyles from "@vivshaw/mdx/mdx.module.css"
import clsx from "clsx"

import styles from "./MdxBody.module.css"

type MdxBodyProps = {
  className?: string
  children: React.ReactNode
}

/*
 * a component that renders MDX content using the appropriate styles from the MDX package.
 */
export function MdxBody({ className, children }: MdxBodyProps) {
  return (
    <article className={clsx(styles.body, mdxStyles.mdxRoot, className)}>
      {children}
    </article>
  )
}
