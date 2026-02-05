import clsx from "clsx"

import styles from "./MdxBody.module.css"

type MdxBodyProps = {
  className?: string
  children: React.ReactNode
  /** Style the leading words of the first paragraph as small caps. */
  leadingSmallCaps?: boolean
}

/*
 * a component that renders MDX content using the appropriate styles from the MDX package.
 */
export function MdxBody({
  className,
  children,
  leadingSmallCaps,
}: MdxBodyProps) {
  return (
    <article
      className={clsx(
        styles.body,
        leadingSmallCaps && styles.leadingSmallCaps,
        className,
      )}
    >
      {children}
    </article>
  )
}
