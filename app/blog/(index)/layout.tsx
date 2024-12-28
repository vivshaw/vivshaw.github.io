import { PropsWithChildren } from "react"

import { centeringWrapper, mainpageContent } from "@pageStyles/main.css"

export default function BlogLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <div className={centeringWrapper}>
        <div className={mainpageContent}>{children}</div>
      </div>
    </>
  )
}
