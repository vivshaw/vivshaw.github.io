import styled from "@emotion/styled";

import { author, type SocialSite } from "@data";
import Icons from "@icons";
import type { Icon } from "@icons";
import mediaqueries from "@styles/media";

type SocialIcons = Record<SocialSite, Icon>;

const icons: SocialIcons = {
  linkedin: Icons.LinkedIn,
  twitter: Icons.Twitter,
  github: Icons.Github,
};

interface SocialLinksProps {
  /**
   * Fill color for the social icons.
   *
   * @default "#73737D"
   */
  fill?: string;
}

/**
 * Displays a list of social links and corresponding icons.
 */
const SocialLinks: React.FC<SocialLinksProps> = ({
  fill = "#73737D",
}) => {
  return (
    <>
      {Object.entries(author.socials).map(([social, url]) => {
        const name = social;
        const Icon = icons[name];

        return (
          <SocialIconContainer
            key={url}
            target="_blank"
            rel="noopener nofollow"
            data-a11y="false"
            aria-label={`Link to ${url}`}
            href={url}
          >
            <Icon fill={fill} />
            <Hidden>Link to ${url}</Hidden>
          </SocialIconContainer>
        );
      })}
    </>
  );
};

export default SocialLinks;

const SocialIconContainer = styled.a`
  position: relative;
  margin-left: 3.2rem;
  text-decoration: none;
  max-width: 16px;

  &:hover {
    svg {
      &:hover * {
        fill: ${(p) => p.theme.colors.primary};
      }
      * {
        transition: fill 0.25s var(--ease-in-out-quad);
      }
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -50%;
    top: -20%;
    width: 200%;
    height: 160%;
    border: 2px solid ${(p) => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.tablet`
    margin: 0 2.2rem;
  `};
`;

const Hidden = styled.span`
  width: 0px;
  height: 0px;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  display: inline-block;
`;
