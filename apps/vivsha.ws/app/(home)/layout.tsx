import { type PropsWithChildren } from "react"

import { LayoutWrapper } from "../_components/LayoutWrapper"

export default function HomeLayout({ children }: PropsWithChildren<{}>) {
  return (
    <LayoutWrapper showImageBackground navbarVariant="full">
      {children}
    </LayoutWrapper>
  )
}
