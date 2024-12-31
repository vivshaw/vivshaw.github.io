"use client"

import { ViriditasProvider } from "@vivshaw/viriditas/context"
import { PropsWithChildren } from "react"

export function GlobalProviders({ children }: PropsWithChildren<{}>) {
  return <ViriditasProvider>{children}</ViriditasProvider>
}
