import { clsx } from "clsx"

import styles from "./HorizontalRule.module.css"

/**
 * a styled `<hr>` element, for use in MDX.
 */
export function HorizontalRule({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr {...restProps} className={clsx(styles.horizontalRule, className)} />
  )
}
