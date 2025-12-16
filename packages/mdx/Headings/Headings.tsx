import { Heading } from "@vivshaw/basalt/components"

import { h1Style, h2Style } from "./Headings.css"

/**
 * a styled `<h1>` element, for use in MDX.
 */
export function h1({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="1" className={h1Style} {...restProps} />
}

/**
 * a styled `<h2>` element, for use in MDX.
 */
export function h2({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="2" className={h2Style} {...restProps} />
}

export const headings = {
  h1,
  h2,
}
