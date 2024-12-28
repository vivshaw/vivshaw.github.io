import { clsx } from "clsx"

import { tableHeadCell } from "./TableHeadCell.css"

/**
 * A styled `<td>` element, for use in MDX.
 */
export function TableHeadCell({
  className,
  ...restProps
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th {...restProps} className={clsx(tableHeadCell, className)} />
}
