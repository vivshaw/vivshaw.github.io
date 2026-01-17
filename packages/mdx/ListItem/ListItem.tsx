import { clsx } from "clsx"

import { listItem } from "./ListItem.css"

/**
 * a styled `<li>` element, for use in MDX lists.
 * works with both ordered and unordered lists.
 */
export function ListItem({
  className,
  ...restProps
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li {...restProps} className={clsx(listItem, className)} />
}
