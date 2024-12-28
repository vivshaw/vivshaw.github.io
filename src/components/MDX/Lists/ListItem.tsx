import { clsx } from "clsx"

import { listItem } from "./listItem.css"

/**
 * A styled `<li>` element, for use in MDX lists.
 * Works with both ordered and unordered lists.
 */
export function ListItem({
  className,
  ...restProps
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li {...restProps} className={clsx(listItem, className)} />
}
