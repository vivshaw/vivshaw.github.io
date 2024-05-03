import { useState } from "react";
import styled from "@emotion/styled";
import { useColorMode } from "theme-ui";

import { IconWrapper } from "../IconWrapper";
import Icons from "@icons";
import mediaqueries from "@styles/media";
import { copyToClipboard } from "@utils";

const ToolTip = styled.div<{ isDark: boolean; hasCopied: boolean }>`
  position: absolute;
  padding: 4px 13px;
  background: ${(p) => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
  color: ${(p) => (p.isDark ? "#fff" : "#000")};
  border-radius: 5px;
  font-size: 14px;
  top: -35px;
  opacity: ${(p) => (p.hasCopied ? 1 : 0)};
  transform: ${(p) => (p.hasCopied ? "translateY(-3px)" : "none")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${(p) => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
  }
`;

export const SharePageButton: React.FC<{}> = () => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? "#fff" : "#000";

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(window.location.href);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label="Copy URL to clipboard"
      title="Copy URL to clipboard"
    >
      <Icons.Link fill={fill} />
      <ToolTip isDark={isDark} hasCopied={hasCopied}>
        Copied
      </ToolTip>
    </IconWrapper>
  );
};
