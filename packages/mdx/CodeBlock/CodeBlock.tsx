import clsx from "clsx"
import { PropsWithChildren } from "react"

import { CODE_BLOCK_CLASS } from "./CodeBlock.css"

// import { useState } from "react"
// import styled from "@emotion/styled"
// import { CopyIcon } from "#icons/ui/Copy"
// import { CopiedIcon } from "#icons/ui/Copied"
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
}

/**
 * A styled `<pre>` code block for use with the Prism highlighter in MDX.
 * Caveats:
 * - This component assumes that _all_ <pre> blocks are code blocks! It does not check if its child is a <code> element.
 * - The styles are currently applied via globals in `mdxBody.css.ts`.
 */
export function CodeBlock(props: PropsWithChildren<CodePrismProps>) {
  return (
    <pre {...props} className={clsx(CODE_BLOCK_CLASS, props.className)}>
      {/* TODO: Stop this from copying a buncha `Object object`... */}
      {/* <Copy toCopy={codeString} /> */}
      {props.children}
    </pre>
  )
}
