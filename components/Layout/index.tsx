import React, { PropsWithChildren } from "react"

import { Navbar } from "@components/Navbar"
import "@viriditas/reset.css"
import { container, content } from "./layout.css"

export function Layout({
  children,
}: PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className={container}>
      <Navbar />
      <div className={content}>{children}</div>
    </div>
  )
}
