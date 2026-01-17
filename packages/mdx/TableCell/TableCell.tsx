import { clsx } from "clsx"

import { tableCell } from "./TableCell.css"

/**
 * a styled `<td>` element, for use in MDX.
 */
export function TableCell({
  className,
  ...restProps
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...restProps} className={clsx(tableCell, className)} />
}
