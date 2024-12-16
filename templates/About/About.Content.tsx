import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

/**
 * Wrapper for an Author's about section on their Author page.
 */
const AboutContent = styled.div`
  background-color: ${(p) => p.theme.colors.card};
  border-radius: 8px;
  padding: 88px 98px;
  position: relative;
  z-index: 1;

  ${mediaqueries.desktop_medium`
    padding: 80px;
  `}

  ${mediaqueries.desktop`
    padding: 0;
    background: transparent;
  `}
`;

export default AboutContent;
