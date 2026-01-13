import { PropsWithChildren } from "react"

import { LayoutWrapper } from "../_components/LayoutWrapper"

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
