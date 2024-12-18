import { useState } from "react";
import styled from "@emotion/styled";

import Icons from "@icons";
import mediaqueries from "@styles/media";
import { copyToClipboard } from "@utils";

interface CopyProps {
  toCopy: string;
}

const Copy: React.FC<CopyProps> = ({ toCopy }) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(toCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <CopyButton onClick={copyToClipboardOnClick} data-a11y="false">
      {hasCopied ? (
        <>
          Copied <Icons.Copied fill="#6f7177" />
        </>
      ) : (
        <>
          Copy <Icons.Copy fill="#6f7177" />
        </>
      )}
    </CopyButton>
  );
};

interface CodePrismProps {
  className: string;
  codeString: any;
}

const CodePrism: React.FC<CodePrismProps> = ({ codeString, className }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <pre
        className={`prism-code ${className}`}
        style={{ position: "relative" }}
      >
        {/* TODO: Stop this from copying a buncha `Object object`... */}
        {/* <Copy toCopy={codeString} /> */}
        {codeString}
      </pre>
    </div>
  );
};

export default CodePrism;

const CopyButton = styled.button`
  position: absolute;
  right: 6px;
  top: 6px;
  padding: 8px 12px 7px;
  border-radius: 5px;
  color: #6f7177;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -2%;
    top: -2%;
    width: 104%;
    height: 104%;
    border: 2px solid ${(p) => p.theme.colors.accent};
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.01);
  }

  ${mediaqueries.tablet`
    display: none;
  `}
`;
