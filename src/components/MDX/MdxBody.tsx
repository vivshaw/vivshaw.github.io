import { PropsWithChildren } from "react"

import { mdxBody } from "./MdxBody.css"

/**
 * Wrapper for MDX content. Applies global styles for things like Prism and images.
 */
export function MdxBody({ children }: PropsWithChildren<{}>) {
  return <div className={mdxBody}>{children}</div>
}
