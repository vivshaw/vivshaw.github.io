import { clsx } from "clsx"

import styles from "./UnorderedList.module.css"

/**
 * a styled `<ul>` element, for use in MDX.
 */
export function UnorderedList({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLUListElement>) {
  return <ul {...restProps} className={clsx(styles.unorderedList, className)} />
}
