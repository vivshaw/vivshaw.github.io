import React, { PropsWithChildren } from "react"

import { Navbar } from "@app/_components/Navbar"
import "@viriditas/reset.css"
import { container, content } from "./LayoutWrapper.css"

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
