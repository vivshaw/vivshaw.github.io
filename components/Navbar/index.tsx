import styled from "@emotion/styled"
import Link from "next/link"

import { DarkModeToggle } from "@components/Navbar/DarkModeToggle"
import mediaqueries from "@styles/media"
import { iconWrapperHover } from "./IconWrapper"
import { MobileMenu } from "./MobileMenu"

const NavContainer = styled.nav`
  position: relative;
  z-index: 3;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  height: 40px;

  padding-right: calc(env(safe-area-inset-right) + 80px);
  padding-left: calc(env(safe-area-inset-right) + 80px);

  ${mediaqueries.desktop_medium`
    margin-top: 50px;
  `};

  ${mediaqueries.tablet`
    padding-right: 24px;
    padding-left: 24px;
    margin-top: 20px;
  `}
`

const LogoLink = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
  font-size: 27px;
  transition: color 0.3s ease;
  z-index: 10;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${mediaqueries.tablet`
    display: none;
  `}
`

const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin-right: 30px;
`

const PageLink = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
  font-size: 27px;

  ${iconWrapperHover}
`

const PageLinkExternal = styled.a`
  color: ${(p) => p.theme.colors.primary};
  font-size: 27px;

  ${iconWrapperHover}
`

const CenteringWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  /* avoid layout shift when there's a scrollbar */
  padding-left: calc(100vw - 100%);
`

export const Navbar = () => (
  <CenteringWrapper>
    <NavContainer>
      <LogoLink href="/" title="Go to the homepage">
        <em>vivsha.ws</em>
      </LogoLink>

      <NavControls>
        <NavLinks>
          <li>
            <PageLink href="/blog">Blog</PageLink>
          </li>
          <li>
            <PageLinkExternal href="https://zettel.vivsha.ws">
              Zettel
            </PageLinkExternal>
          </li>
          <li>
            <PageLink href="/about">About</PageLink>
          </li>
        </NavLinks>
        <DarkModeToggle />
      </NavControls>

      <MobileMenu />
    </NavContainer>
  </CenteringWrapper>
)
