# Styling

- with Next.js, if you run any code on load to control the color mode, it probably **won't** be fast enough if you run it in a Next `<Script>` tag. Yes, even if you pick [`beforeInteractive`](https://nextjs.org/docs/pages/api-reference/components/script#beforeinteractive). I found that only a raw scfript tag slapped at the top of the head was quick enough to avoid flashes of incorrect color mode.
- It's a little tricky to get a light/dark mode that works intuitively with both `prefers-color-mode` queries and user-selectable styles. It's not too bad to write some JS to handle the logic, but then you end up with a color mode that only works when JS is active! You could instead lean on CSS, but then you have an ergonomics problem- everywhere that cares about light or dark needs to handle both the light or dark mode class when applied, or the `prefers-color-mode` query when not applied. One of those is a class, the other a media query, so you can't even genericize it that well! And each styling framework will bump into this in different ways.
  - with Vanilla Extract, I found [this GitHub issue](https://github.com/vanilla-extract-css/vanilla-extract/discussions/1119) very helpful. It showed me that this is relatively easy to do, with a global class and `assignVars`.
  - solved the ergonomics problem by writing `darkModeStyles` and `lightModeStyles` helpers to abstract away the complexity

# Next.js

- Next is kinda annoying in Yarn workspaces. You can't just run `yarn workspace myApp dev`, because `next dev` will expect your `app` or `pages` directory to exist in the _current working directory_!
  - you can currently dodge this by adding top-level scripts with a Yarn syntax like: `yarn apps/vivsha.ws build`, to choose the directory you want it to run in
- moving from `pages` to `app` doesn't _necessarily_ improve performance, even if you use RSC super comprehensively! I _gained_ ~23kb of JavaScript
- it seems that the smallest amount of JS load an app-directory Next.js app can possibly have is around 100kb
- next/font can't work with remotely hosted fonts, which makes it a real challenge to use paid fonts in an open-source Next app with next/font (choose any 2)

# DNS & Hosting

- it's more complex than you'd expect redirecting an apex domain to another domain! can't use a CNAME like you would with a subdomain.
  - I ended up using AWS S3 and Cloudfront to host a redirect for me, [like so](https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html)
  - ...I should probably move that redirect under Terraform, though!

# MDX

- A lot of the ol' Prism ecosystem doesn't quite cooperate with current md/MDX tooling. for example, implementing only partial support, or no longer using the markup structure Prism expects.
