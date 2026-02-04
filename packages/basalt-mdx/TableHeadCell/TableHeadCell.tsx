import { clsx } from "clsx"

import styles from "./TableHeadCell.module.css"

/**
 * a styled `<td>` element, for use in MDX.
 */
export function TableHeadCell({
  className,
  ...restProps
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th {...restProps} className={clsx(styles.tableHeadCell, className)} />
}
