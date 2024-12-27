import { author, type SocialSite } from "@data"
import { LinkedInIcon } from "@icons/social/LinkedIn"
import { TwitterIcon } from "@icons/social/Twitter"
import { GithubIcon } from "@icons/social/Github"
import type { IconProps } from "@icons/types"
import { hidden, socialIconContainer } from "./socialLinks.css"

type SocialIcons = Record<SocialSite, React.FC<IconProps>>

const icons: SocialIcons = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
}

interface SocialLinksProps {
  /**
   * Fill color for the social icons.
   *
   * @default "#73737D"
   */
  fill?: string
}

/**
 * Displays a list of social links and corresponding icons.
 */
export function SocialLinks({
  fill = "#73737D",
}: SocialLinksProps): React.ReactElement {
  return (
    <>
      {Object.entries(author.socials).map(([social, url]) => {
        const name = social
        const Icon = icons[name]

        return (
          <a
            className={socialIconContainer}
            key={url}
            href={url}
            target="_blank"
            rel="noopener nofollow"
            data-a11y="false"
            aria-label={`Link to ${url}`}
          >
            <Icon fill={fill} />
            <span className={hidden}>Link to ${url}</span>
          </a>
        )
      })}
    </>
  )
}
