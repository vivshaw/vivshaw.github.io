import { clsx } from "clsx"

import styles from "./Figcaption.module.css"

/**
 * a styled `<figcaption>` element, for use in MDX.
 */
export function Figcaption({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <figcaption className={clsx(styles.figcaption, className)} {...restProps} />
  )
}
