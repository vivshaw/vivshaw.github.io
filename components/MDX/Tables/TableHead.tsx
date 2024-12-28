import { clsx } from "clsx"

import { tableHead } from "./tableHead.css"

/**
 * A styled `<thead>` element, for use in MDX.
 */
export function TableHead({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...restProps} className={clsx(tableHead, className)} />
}
