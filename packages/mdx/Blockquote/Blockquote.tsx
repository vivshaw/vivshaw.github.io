import { clsx } from "clsx"

import styles from "./Blockquote.module.css"

/**
 * a styled `<blockquote>` element, for use in MDX.
 */
export function Blockquote({
  className,
  ...restProps
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className={clsx(styles.blockquote, className)} {...restProps} />
  )
}
