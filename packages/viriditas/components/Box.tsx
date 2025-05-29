import { forwardRef } from "react"
import { Sprinkles, sprinkles } from "../theme/index.css"

export const Box = forwardRef((props: any, ref) => {
  const { as: Component = "div", ...other } = props

  const sprinklesProps: Record<string, unknown> = {}
  const otherProps: Record<string, unknown> = {}

  Object.entries(other).forEach(([key, value]) => {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = value
    } else {
      otherProps[key] = value
    }
  })

  return (
    <Component
      {...otherProps}
      className={sprinkles(sprinklesProps)}
      ref={ref}
    />
  )
})
