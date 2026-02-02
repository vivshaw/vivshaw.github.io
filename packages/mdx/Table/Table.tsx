import { clsx } from "clsx"

import styles from "./Table.module.css"

/**
 * a styled `<table>` element, for use in MDX.
 */
export function Table({
  className,
  ...restProps
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className={styles.wrapper}>
      <table {...restProps} className={clsx(styles.table, className)} />
    </div>
  )
}
