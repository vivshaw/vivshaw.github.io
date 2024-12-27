import { clsx } from "clsx"

import { tableCell } from "./tableCell.css"

export function TableCell({
  className,
  ...restProps
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...restProps} className={clsx(tableCell, className)} />
}
