import "@vivshaw/basalt/reset"
import React, { PropsWithChildren } from "react"

import {
  root,
  content,
  contentPanel,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
} from "./LayoutWrapper.css"
import { Navbar } from "./Navbar"

type LayoutWrapperProps = PropsWithChildren<{
  showContentPanel?: boolean
}>

/**
 * A solid background inset from the viewport edges,
 * leaving the background image visible as a frame around the screen.
 */
function ContentBackground() {
  return <div className={contentPanel} />
}

/**
 * A frame around the screen, made up of four border overlays,
 * which sit at the viewport edges and cover scrolling content.
 */
function FrameOverlay() {
  return (
    <>
      <span className={borderLeft} />
      <span className={borderRight} />
      <span className={borderTop} />
      <span className={borderBottom} />
    </>
  )
}

export function LayoutWrapper({
  children,
  showContentPanel = false,
}: LayoutWrapperProps): React.ReactElement<any> {
  return (
    <div className={root}>
      {showContentPanel && (
        <>
          <ContentBackground />
          <FrameOverlay />
        </>
      )}

      <div className={content}>{children}</div>
    </div>
  )
}
