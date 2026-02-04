import { clsx } from "clsx"

import styles from "./TableCell.module.css"

/**
 * a styled `<td>` element, for use in MDX.
 */
export function TableCell({
  className,
  ...restProps
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...restProps} className={clsx(styles.tableCell, className)} />
}
