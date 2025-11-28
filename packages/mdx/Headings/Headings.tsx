import { Heading } from "@vivshaw/viriditas/components"

/**
 * a styled `<h1>` element, for use in MDX.
 */
export function h1({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="1" {...restProps} />
}

/**
 * a styled `<h2>` element, for use in MDX.
 */
export function h2({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="2" {...restProps} />
}

export const headings = {
  h1,
  h2,
}
