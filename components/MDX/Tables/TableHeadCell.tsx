import { clsx } from "clsx"

import { tableHeadCell } from "./tableHeadCell.css"

export function TableHeadCell({
  className,
  ...restProps
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...restProps} className={clsx(tableHeadCell, className)} />
}
