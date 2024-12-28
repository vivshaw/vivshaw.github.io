import { clsx } from "clsx"

import { tableCell } from "./TableCell.css"

/**
 * A styled `<td>` element, for use in MDX.
 */
export function TableCell({
  className,
  ...restProps
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...restProps} className={clsx(tableCell, className)} />
}
