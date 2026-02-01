import { clsx } from "clsx"

import { tableHead } from "./TableHead.css"

/**
 * a styled `<thead>` element, for use in MDX.
 */
export function TableHead({
  className,
  ...restProps
}: Omit<React.HTMLAttributes<HTMLTableSectionElement>, "color">) {
  return <thead className={clsx(tableHead, className)} {...restProps} />
}
