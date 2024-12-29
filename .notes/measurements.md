# Bundle measurements:

## with Emotion and ThemeUI:

Not bad to start with!

```
Route (pages)                                    Size     First Load JS
┌ ○ /                                            1.08 kB         113 kB
├   /_app                                        0 B             104 kB
├ ○ /404                                         181 B           105 kB
├ ○ /about                                       1.66 kB         114 kB
├ ● /blog                                        1.54 kB         114 kB
├ ○ /blog/build-you-a-tweetbot                   6.69 kB         126 kB
├ ○ /blog/data-mashups                           838 B           116 kB
├ ○ /blog/electric-pentameter                    8.9 kB          124 kB
├ ○ /blog/haskell-snacks-yesod-morpheus-graphql  2.27 kB         118 kB
├ ○ /blog/linux-on-windows                       3.07 kB         122 kB
└ ○ /blog/robot-brain-scala                      8.09 kB         124 kB
+ First Load JS shared by all                    104 kB
  ├ chunks/framework-5429a50ba5373c56.js         45.2 kB
  ├ chunks/main-30e599d213ca4d73.js              33.9 kB
  ├ chunks/pages/_app-5131d7aff9153012.js        24.3 kB
  └ other shared chunks (total)                  1.04 kB
```

- main: **244kb**
  - js: 117kb
  - css: 3.8kb
  - doc: 5.7kb
  - fetch: 6.6kb
  - font: 109kb
- post (scala): **320kb**
  - js: 128kb
  - css: 3.8kb
  - doc: 16.1kb
  - font: 171kb

## with Vanilla Extract:

Noted across-the-board improvement from yanking out CSS-in-JS and replacing with static CSS generation.

```
Route (pages)                                    Size     First Load JS
┌ ○ /                                            652 B          89.8 kB
├   └ css/b557c13865f5a937.css                   1.55 kB
├   /_app                                        0 B            83.2 kB
├ ○ /404                                         180 B          83.4 kB
├ ○ /about                                       1.23 kB        90.4 kB
├   └ css/1f6e1429df4b81e7.css                   1.57 kB
├ ● /blog                                        736 B          89.9 kB
├   └ css/d945b9a1e0ab4816.css                   1.85 kB
├ ○ /blog/build-you-a-tweetbot                   7.69 kB         101 kB
├ ○ /blog/data-mashups                           1.77 kB          91 kB
├ ○ /blog/electric-pentameter                    9.92 kB        99.1 kB
├ ○ /blog/haskell-snacks-yesod-morpheus-graphql  3.21 kB        92.4 kB
├ ○ /blog/linux-on-windows                       3.98 kB          97 kB
└ ○ /blog/robot-brain-scala                      9.12 kB        98.3 kB
+ First Load JS shared by all                    85.6 kB
  ├ chunks/framework-5429a50ba5373c56.js         45.2 kB
  ├ chunks/main-fd4ce64a6df8f743.js              33.9 kB
  └ other shared chunks (total)                  6.5 kB
```

- main: **221kb** (-23kb)
  - js: 93.4kb
  - css: 8.1kb
  - doc: 2.9kb
  - fetch: 5.6kb
  - font: 109kb
- post (scala): **294kb** (-26kb)
  - js: 103kb
  - css: 8.9kb
  - doc: 11.3kb
  - font: 171kb

## With RSC / Next.js app router

somehow, it got a bit worse! Home now ships almost as much as before, and Blog ships _more_ than before!

```
Route (app)                              Size     First Load JS
┌ ○ /                                    672 B           110 kB
├ ○ /_not-found                          981 B           106 kB
├ ○ /about                               714 B           106 kB
├ ○ /blog                                481 B           118 kB
└ ● /blog/[slug]                         693 B           118 kB
    ├ /blog/build-you-a-tweetbot
    ├ /blog/data-mashups
    ├ /blog/electric-pentameter
    └ [+3 more paths]
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-e23254852a8baa55.js  52.9 kB
  ├ chunks/899-98bc5fa0d4f26f5e.js       50.6 kB
  └ other shared chunks (total)          1.97 kB
```

- main: **237kb** (+16kb)
  - js: 116kb
  - css: 7.7kb
  - doc: 4.5kb
  - fetch: 0kb
  - font: 109kb
- post (scala): **341kb** (+47kb)
  - js: 125kb
  - css: 11.5kb
  - doc: 23.0kb
  - font: 171kb
