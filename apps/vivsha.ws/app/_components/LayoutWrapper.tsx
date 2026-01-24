import "@vivshaw/basalt/reset"

import clsx from "clsx"
import React, { PropsWithChildren } from "react"

import { imageBackground, navbarSpacer, root } from "./LayoutWrapper.css"
import { Navbar } from "./Navbar"

type LayoutWrapperProps = PropsWithChildren<{
  showImageBackground?: boolean
  navbarVariant?: "full" | "abbreviated"
}>

export function LayoutWrapper({
  children,
  showImageBackground = false,
  navbarVariant = "abbreviated",
}: LayoutWrapperProps): React.ReactElement<any> {
  return (
    <div className={clsx(root, showImageBackground && imageBackground)}>
      <Navbar variant={navbarVariant} />
      <div className={navbarSpacer} />

      {children}
    </div>
  )
}
