import clsx from "clsx"
import { ComponentPropsWithRef, ElementType, forwardRef, Ref } from "react"

import styles from "./Text.module.css"

/**
 * base props for Text, without the polymorphic element props.
 */
type TextOwnProps<T extends ElementType> = {
  as?: T
  color?: "default" | "muted"
  font?: "serif" | "sans"
  size?: "normal" | "small"
}

export type TextProps<T extends ElementType = "p"> = TextOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof TextOwnProps<T>>

const sizeClasses = {
  normal: styles.sizeNormal,
  small: styles.sizeSmall,
} as const

const fontClasses = {
  serif: styles.fontSerif,
  sans: styles.fontSans,
} as const

const colorClasses = {
  default: styles.colorDefault,
  muted: styles.colorMuted,
} as const

/**
 * a polymorphic text component.
 */
export const Text = forwardRef(
  <T extends ElementType = "p">(
    {
      as,
      className,
      color,
      font = "serif",
      size = "normal",
      ...props
    }: TextProps<T>,
    ref: Ref<Element>,
  ) => {
    const Component = (as ?? "p") as ElementType
    return (
      <Component
        ref={ref}
        className={clsx(
          styles.text,
          sizeClasses[size],
          fontClasses[font],
          color && colorClasses[color],
          className,
        )}
        {...props}
      />
    )
  },
) as <T extends ElementType = "p">(
  props: TextProps<T>,
) => React.ReactElement | null
