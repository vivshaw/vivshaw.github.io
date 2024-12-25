import styled from "@emotion/styled"

/**
 * A styled external link. This is not currently in use, but probably should be!
 */
export const Anchor = styled.a`
  transition: ${(p) => p.theme.colorModeTransition};
  color: ${(p) => p.theme.colors.accent};

  &:visited {
    color: ${(p) => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
