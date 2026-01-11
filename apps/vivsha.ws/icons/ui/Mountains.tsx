import type { IconProps } from "#icons/types"

export function MountainsIcon({ fill = "white", ...props }: IconProps) {
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
        d="M15 3l7 18H2L12 7l3-4zm0 4.943L12.057 14h5.886L15 7.943zM9.5 14l2.5-4.5L9.5 14zm-4.443 4h13.886L15 9.057 12 14H9l3-6-7 10z"
        fill={fill}
      />
    </svg>
  )
}
