import styled from "@emotion/styled"

import { mediaqueries } from "@styles/media"

export const iconWrapperHover = `
  opacity: 0.5;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }

  ${mediaqueries.tablet`
    &:hover {
      opacity: 0.5;
    }
  `}
`

export const IconWrapper = styled.button<{ isDark: boolean }>`
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${iconWrapperHover}
`
