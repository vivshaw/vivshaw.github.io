import { clsx } from "clsx"

import styles from "./TableHead.module.css"

/**
 * a styled `<thead>` element, for use in MDX.
 */
export function TableHead({
  className,
  ...restProps
}: Omit<React.HTMLAttributes<HTMLTableSectionElement>, "color">) {
  return <thead className={clsx(styles.tableHead, className)} {...restProps} />
}
