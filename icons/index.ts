// Social
import Twitter from "./social/Twitter.Icon"
import LinkedIn from "./social/LinkedIn.Icon"
import Github from "./social/Github.Icon"
import Mailto from "./social/Mailto.Icon"
import Url from "./social/Url.Icon"

// UI
import Copied from "./ui/Copied.Icon"
import Copy from "./ui/Copy.Icon"
import Link from "./ui/Link.Icon"

export type Icon = React.FC<{
  className?: string
  fill?: string
}>

export default {
  Twitter,
  LinkedIn,
  Github,
  Mailto,
  Url,

  Copied,
  Copy,
  Link,
}
