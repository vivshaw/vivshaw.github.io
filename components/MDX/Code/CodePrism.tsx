import clsx from "clsx"

import { PRISM_CODE_CLASS } from "@components/MDX/mdxBody.css"

// import { useState } from "react"
// import styled from "@emotion/styled"
// import { CopyIcon } from "@icons/ui/Copy"
// import { CopiedIcon } from "@icons/ui/Copied"
// import { mediaqueries } from "@styles/media"
// import { copyToClipboard } from "@utils"

// const CopyButton = styled.button`
//   position: absolute;
//   right: 6px;
//   top: 6px;
//   padding: 8px 12px 7px;
//   border-radius: 5px;
//   color: #6f7177;
//   transition: background 0.3s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.07);
//   }

//   ${mediaqueries.tablet`
//     display: none;
//   `}
// `

// interface CopyProps {
//   toCopy: string
// }

// const Copy: React.FC<CopyProps> = ({ toCopy }) => {
//   const [hasCopied, setHasCopied] = useState<boolean>(false)

//   function copyToClipboardOnClick() {
//     if (hasCopied) return

//     copyToClipboard(toCopy)
//     setHasCopied(true)

//     setTimeout(() => {
//       setHasCopied(false)
//     }, 2000)
//   }

//   return (
//     <CopyButton onClick={copyToClipboardOnClick}>
//       {hasCopied ? (
//         <>
//           Copied <CopiedIcon fill="#6f7177" />
//         </>
//       ) : (
//         <>
//           Copy <CopyIcon fill="#6f7177" />
//         </>
//       )}
//     </CopyButton>
//   )
// }

type CodePrismProps = {
  className?: string
  codeString: any
}

export function CodePrism({ codeString, className }: CodePrismProps) {
  return (
    <div style={{ overflow: "auto" }}>
      <pre
        className={clsx(PRISM_CODE_CLASS, className)}
        style={{ position: "relative" }}
      >
        {/* TODO: Stop this from copying a buncha `Object object`... */}
        {/* <Copy toCopy={codeString} /> */}
        {codeString}
      </pre>
    </div>
  )
}
