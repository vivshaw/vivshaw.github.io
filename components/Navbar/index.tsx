import styled from "@emotion/styled";
import Link from "next/link";

import { DarkModeToggle } from "@components/Navbar/DarkModeToggle";
import Section from "@components/Section";
import mediaqueries from "@styles/media";
import { SharePageButton } from "./ShareButton";

const NavContainer = styled.nav`
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

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
`;

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${mediaqueries.phablet`
    right: -5px;
  `}
`;

export const Navbar = () => (
  <Section>
    <NavContainer>
      <LogoLink
        href="/"
        title="Go to the homepage"
      >
        <em>vivsha.ws</em>
      </LogoLink>

      <NavControls>
        <SharePageButton />
        <DarkModeToggle />
      </NavControls>
    </NavContainer>
  </Section>
)