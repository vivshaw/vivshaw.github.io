"use client"

import { PropsWithChildren } from "react"

import { ViriditasProvider } from "@viriditas/context"

export function AppProviders({ children }: PropsWithChildren<{}>) {
  return <ViriditasProvider>{children}</ViriditasProvider>
}
