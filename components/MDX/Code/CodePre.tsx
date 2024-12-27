import React from "react"

import { CodePrism } from "./CodePrism"

function preToCodeBlock(preProps) {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === "code"
  ) {
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)

    return {
      codeString: codeString,
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    }
  }
}

// TODO: Figure out how to type this better!
export function CodePre(preProps: any): React.ReactElement {
  const props = preToCodeBlock(preProps)

  if (props) {
    return <CodePrism {...props} />
  } else {
    return <pre {...preProps} />
  }
}
