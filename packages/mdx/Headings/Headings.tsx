import { clsx } from "clsx"

import { heading1, heading2, heading3 } from "./Headings.css"

/**
 * A styled `<h1>` element, for use in MDX.
 */
export function h1({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={clsx(heading1, className)} {...restProps} />
}

/**
 * A styled `<h2>` element, for use in MDX.
 */
export function h2({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={clsx(heading2, className)} {...restProps} />
}

/**
 * A styled `<h3>` element, for use in MDX.
 */
export function h3({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx(heading3, className)} {...restProps} />
}

export const headings = {
  h1,
  h2,
  h3,
}
