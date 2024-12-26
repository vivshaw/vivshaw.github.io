import React, { PropsWithChildren, useEffect } from "react"
import { Global } from "@emotion/react"
import styled from "@emotion/styled"
import { useColorMode } from "theme-ui"

import { Navbar } from "@components/Navbar"
import { globalStyles } from "@styles"

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
export function Layout({
  children,
}: PropsWithChildren<{}>): React.ReactElement {
  const [colorMode] = useColorMode()

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, "*")
  }, [colorMode])

  return (
    <Container>
      <Global styles={globalStyles} />
      <Navbar />
      {children}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.background};
  transition: ${(p) => p.theme.colorModeTransition};
  min-height: 100vh;
`
