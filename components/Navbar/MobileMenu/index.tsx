import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { useColorMode } from "theme-ui";

import { Close } from "@icons/ui/Close.Icon";
import { Menu } from "@icons/ui/Menu.Icon"
import mediaqueries from "@styles/media";
import colors from "@theme/colors";
import { iconWrapperHover } from "../IconWrapper";
import { DarkModeToggle } from "../DarkModeToggle";

const MobileMenuWrapper = styled.div`
    display: none;

    ${mediaqueries.tablet`
        display: block;
    `}
`

const IconWrapper = styled.div`
    cursor: pointer;
    height: 40px;
    width: 40px;
    z-index: 3;

    ${iconWrapperHover}
`

const MobileMenuContents = styled.div`
    background-color: ${(p) => p.theme.colors.background};
    height: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    transition: ${(p) => p.theme.colorModeTransition}, height 0.5s ease;
    top: 0;
    width: 100vw;
    z-index: -1;

    &.show {
        height: 100vh;
    }
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

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  margin-top: 80px;
  margin-left: 32px;
`

export const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [colorMode] = useColorMode();
    const isDark = colorMode === `dark`;
    const fill = isDark ? colors.modes.dark.primary : colors.primary

    const toggleMenu = () => setMenuOpen(menuState => !menuState)

    return <MobileMenuWrapper>
        <IconWrapper onClick={toggleMenu}>
            {menuOpen ? <Close fill={fill} /> : <Menu fill={fill} />}
        </IconWrapper>

        <MobileMenuContents className={menuOpen ? "show" : undefined}>
            <NavLinks>
                <li> 
                    <PageLink href="/blog">
                        Blog
                    </PageLink>
                </li>
                <li>
                    <PageLinkExternal href="https://zettel.vivsha.ws">
                        Zettel
                    </PageLinkExternal>
                </li>
                <li>
                    <PageLink href="/about">
                        About
                    </PageLink>
                </li>
                <li style={{marginLeft: -6, marginTop: 5, position: "relative", display: "flex", alignItems: "center"}}>
                    <DarkModeToggle />
                </li>
            </NavLinks>
        </MobileMenuContents>
    </MobileMenuWrapper>
}