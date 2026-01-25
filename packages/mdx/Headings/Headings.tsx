import { Heading } from "@vivshaw/basalt/components"

import { h1Style, h2Style, h3Style } from "./Headings.css"

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

/**
 * a styled `<h3>` element, for use in MDX.
 */
export function h3({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="3" className={h3Style} {...restProps} />
}

/**
 * a styled `<h4>` element, for use in MDX. Uses the same style as h3.
 */
export function h4({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="4" className={h3Style} {...restProps} />
}

/**
 * a styled `<h5>` element, for use in MDX. Uses the same style as h3.
 */
export function h5({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="5" className={h3Style} {...restProps} />
}

/**
 * a styled `<h6>` element, for use in MDX. Uses the same style as h3.
 */
export function h6({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="6" className={h3Style} {...restProps} />
}

export const headings = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}
