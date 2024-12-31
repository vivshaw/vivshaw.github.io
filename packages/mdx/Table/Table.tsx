import { clsx } from "clsx"

import { table, tableWrapper } from "./Table.css"

/**
 * A styled `<table>` element, for use in MDX.
 */
export function Table({
  className,
  ...restProps
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className={tableWrapper}>
      <table {...restProps} className={clsx(table, className)} />
    </div>
  )
}
