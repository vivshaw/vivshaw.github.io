import { clsx } from "clsx"

import styles from "./OrderedList.module.css"

/**
 * a styled `<ol>` element, for use in MDX.
 */
export function OrderedList({
  className,
  ...restProps
}: React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol {...restProps} className={clsx(styles.orderedList, className)} />
}
