import { PropsWithChildren } from "react"

import { blogIndexWrapper } from "./layout.css"

export default function BlogLayout({ children }: PropsWithChildren<{}>) {
  return <div className={blogIndexWrapper}>{children}</div>
}
