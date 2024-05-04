import styled from "@emotion/styled";
import Link from "next/link";

import { DarkModeToggle } from "@components/Navbar/DarkModeToggle";
import mediaqueries from "@styles/media";
import { iconWrapperHover } from "./IconWrapper";

const NavContainer = styled.nav`
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;

  padding-right: calc(env(safe-area-inset-right) + 80px);
  padding-left: calc(env(safe-area-inset-right) + 80px);
  
  ${mediaqueries.tablet`
    padding-right: 24px;
    padding-left: 24px;
  `}

  ${mediaqueries.desktop_medium`
    padding-top: 50px;
  `};

  @media screen and (max-height: 800px) {
    padding-top: 50px;
  }
`;

const LogoLink = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
  font-size: 27px;
  transition: opacity 0.3s ease;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${mediaqueries.phablet`
    right: -5px;
  `}
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
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
  flex-direction: column
`

export const Navbar = () => (
    <CenteringWrapper>
      <NavContainer>
        <LogoLink
          href="/"
          title="Go to the homepage"
        >
          <em>vivsha.ws</em>
        </LogoLink>

        <NavControls>
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
              <PageLink href="/contact">
                Contact
              </PageLink>
            </li>
            <li>
              <PageLink href="/about">
                About
              </PageLink>
            </li>
          </NavLinks>
          <DarkModeToggle />
        </NavControls>
      </NavContainer>
    </CenteringWrapper>
)