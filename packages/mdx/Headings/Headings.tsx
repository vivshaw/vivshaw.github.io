import { Heading } from "@vivshaw/basalt"

import styles from "./Headings.module.css"

/**
 * a styled `<h1>` element, for use in MDX.
 */
export function h1({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="1" className={styles.h1} {...restProps} />
}

/**
 * a styled `<h2>` element, for use in MDX.
 */
export function h2({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="2" className={styles.h2} {...restProps} />
}

/**
 * a styled `<h3>` element, for use in MDX.
 */
export function h3({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="3" className={styles.h3} {...restProps} />
}

/**
 * a styled `<h4>` element, for use in MDX. Uses the same style as h3.
 */
export function h4({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="4" className={styles.h3} {...restProps} />
}

/**
 * a styled `<h5>` element, for use in MDX. Uses the same style as h3.
 */
export function h5({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="5" className={styles.h3} {...restProps} />
}

/**
 * a styled `<h6>` element, for use in MDX. Uses the same style as h3.
 */
export function h6({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="6" className={styles.h3} {...restProps} />
}

export const headings = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}
