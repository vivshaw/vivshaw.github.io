import "@vivshaw/basalt/reset"

import React, { PropsWithChildren } from "react"

import { root, imageBackground } from "./LayoutWrapper.css"
import { Navbar } from "./Navbar"
import clsx from "clsx"

type LayoutWrapperProps = PropsWithChildren<{
  showImageBackground?: boolean
}>

export function LayoutWrapper({
  children,
  showImageBackground = false,
}: LayoutWrapperProps): React.ReactElement<any> {
  return (
    <div className={clsx(root, showImageBackground && imageBackground)}>
      <Navbar />

      {children}
    </div>
  )
}
