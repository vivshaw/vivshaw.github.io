import { PropsWithChildren } from "react"

import { mdxBody } from "./mdxBody.css"

/**
 * Wrapper for MDX content. Applies global styles for things like Prism and images.
 */
export function MDXBody({ children }: PropsWithChildren<{}>) {
  return <div className={mdxBody}>{children}</div>
}
