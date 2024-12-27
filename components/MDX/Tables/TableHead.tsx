import { clsx } from "clsx"

import { tableHead } from "./tableHead.css"

export function TableHead({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...restProps} className={clsx(tableHead, className)} />
}
