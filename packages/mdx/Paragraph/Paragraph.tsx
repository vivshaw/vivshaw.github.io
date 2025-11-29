import { Text } from "@vivshaw/viriditas/components"

import { wrapFirstThreeWords } from "./utils"

/**
 * a styled <p> element, for use in MDX.
 */
export function Paragraph({
  className,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const wrappedChildren = wrapFirstThreeWords(children)

  return (
    <Text
      {...restProps}
      sx={{
        marginBottom: {
          desktopSuperLarge: "8",
          tablet: "6",
        },
      }}
    >
      {wrappedChildren}
    </Text>
  )
}
