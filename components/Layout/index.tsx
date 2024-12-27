import React, { PropsWithChildren, useEffect } from "react"
import { Global } from "@emotion/react"
import { useColorMode } from "theme-ui"

import { Navbar } from "@components/Navbar"
import { globalStyles } from "@styles/global"
import { container } from "./layout.css"

export function Layout({
  children,
}: PropsWithChildren<{}>): React.ReactElement {
  const [colorMode] = useColorMode()

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, "*")
  }, [colorMode])

  return (
    <div className={container}>
      <Global styles={globalStyles} />
      <Navbar />
      {children}
    </div>
  )
}
