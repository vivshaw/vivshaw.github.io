import { clsx } from "clsx"

import { Box } from "@vivshaw/viriditas/components"

import { heading1, heading2 } from "./Headings.css"

/**
 * A styled `<h1>` element, for use in MDX.
 */
export function h1({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Box
      as="h1"
      className={clsx(heading1, className)}
      sx={{
        color: "primary",
        font: "serif",
        fontWeight: "normal",
        text: "heading1",
      }}
      {...restProps}
    />
  )
}

/**
 * A styled `<h2>` element, for use in MDX.
 */
export function h2({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Box
      as="h2"
      className={clsx(heading2, className)}
      sx={{
        color: "primary",
        font: "serif",
        fontWeight: "normal",
        text: "heading2",
      }}
      {...restProps}
    />
  )
}

/**
 * A styled `<h3>` element, for use in MDX.
 */
export function h3({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Box
      as="h3"
      className={clsx(heading2, className)}
      sx={{
        color: "primary",
        font: "serif",
        fontWeight: "normal",
        text: "heading2",
      }}
      {...restProps}
    />
  )
}

/**
 * A styled `<h4>` element, for use in MDX.
 */

export function h4({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Box
      as="h4"
      className={clsx(heading2, className)}
      sx={{
        color: "primary",
        font: "serif",
        fontWeight: "normal",
        text: "heading2",
      }}
      {...restProps}
    />
  )
}

/**
 * A styled `<h5>` element, for use in MDX.
 */
export function h5({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Box
      as="h5"
      className={clsx(heading2, className)}
      sx={{
        color: "primary",
        font: "serif",
        fontWeight: "normal",
        text: "heading2",
      }}
      {...restProps}
    />
  )
}

/**
 * A styled `<h6>` element, for use in MDX.
 */
export function h6({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Box
      as="h6"
      className={clsx(heading2, className)}
      sx={{
        color: "primary",
        font: "serif",
        fontWeight: "normal",
        text: "heading2",
      }}
      {...restProps}
    />
  )
}

export const headings = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}
