import { Text, type TextProps } from "@vivshaw/basalt"
import clsx from "clsx"

import styles from "./Paragraph.module.css"

/**
 * a styled `<p>` element, for use in MDX.
 */
export function Paragraph({
  className,
  children,
  ...restProps
}: TextProps<"p">) {
  return (
    <Text {...restProps} className={clsx(styles.paragraph, className)}>
      {children}
    </Text>
  )
}
