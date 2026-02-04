import { Heading } from "@vivshaw/basalt"

import styles from "./Headings.module.css"

/**
 * a styled `<h1>` element, for use in MDX.
 */
export function H1({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="1" className={styles.h1} {...restProps} />
}

/**
 * a styled `<h2>` element, for use in MDX.
 */
export function H2({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="2" className={styles.h2} {...restProps} />
}

/**
 * a styled `<h3>` element, for use in MDX.
 */
export function H3({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="3" className={styles.h3} {...restProps} />
}

/**
 * a styled `<h4>` element, for use in MDX. Uses the same style as h3.
 */
export function H4({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="4" className={styles.h3} {...restProps} />
}

/**
 * a styled `<h5>` element, for use in MDX. Uses the same style as h3.
 */
export function H5({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="5" className={styles.h3} {...restProps} />
}

/**
 * a styled `<h6>` element, for use in MDX. Uses the same style as h3.
 */
export function H6({ ...restProps }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level="6" className={styles.h3} {...restProps} />
}

export const headings = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
