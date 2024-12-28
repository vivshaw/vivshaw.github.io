import React, { PropsWithChildren } from "react"

import "#viriditas/reset.css"
import { container, content } from "./LayoutWrapper.css"
import { Navbar } from "./Navbar"

export function LayoutWrapper({
  children,
}: PropsWithChildren<{}>): React.ReactElement<any> {
  return (
    <div className={container}>
      <Navbar />
      <div className={content}>{children}</div>
    </div>
  )
}
