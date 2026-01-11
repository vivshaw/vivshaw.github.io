import type { IconProps } from "#icons/types"

export function ZoteroIcon({ fill = "white", ...props }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.231 2.462 7.18 20.923h14.564v2.154H2.256v-1.539L16.308 3.077H3.359V.923h17.872z"
        fill={fill}
      />
    </svg>
  )
}
