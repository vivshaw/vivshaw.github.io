import "@vivshaw/basalt/reset"
import React, { PropsWithChildren } from "react"

import { root, content } from "./LayoutWrapper.css"
import { Navbar } from "./Navbar"

export function LayoutWrapper({
  children,
}: PropsWithChildren<{}>): React.ReactElement<any> {
  return (
    <div className={root}>
      <Navbar />
      <div className={content}>{children}</div>
    </div>
  )
}
