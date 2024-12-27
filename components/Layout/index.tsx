import React, { PropsWithChildren } from "react"

import { Navbar } from "@components/Navbar"
import "@styles/global.css"
import { container } from "./layout.css"

export function Layout({
  children,
}: PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className={container}>
      <Navbar />
      {children}
    </div>
  )
}
