---
layout: article
title: "Haskell Snacks #1: Integrating Yesod and Morpheus GraphQL"
excerpt: "It's all about the types"
categories: blog
modified: 2020-11-08T04:30:21-05:00
tags: [haskell, yesod, FP, web, tidbits]
comments: true
image:
  feature: haskell-snacks-1.png
  teaser: haskell-snacks-1-teaser.png
---

Here's a new little series of posts where I'll document some bite-sized things I learned while picking up Haskell, focusing on things that weren't immediately intuitive and didn't have easily Googleable answers.

First up: integrating [Yesod](https://www.yesodweb.com/) with [Morpheus GraphQL](https://morpheusgraphql.com/)! Morpheus provides examples for `scotty` and `servant` integration, but Scotty wasn't full-featured enough for my needs, and I'm not familair with servant. Yesod to the rescue! But, you'll find that the syntax shown in the scotty and servant examples for declaring your GraphQL API, will not cooperate with Yesod. Here's how it is in the simplest Scotty example from the Morpheus docs:

```
-- Definition of GraphQL API
gqlApi :: ByteString -> IO ByteString
gqlApi = interpreter rootResolver

-- Hooking it up to Scotty handler
main :: IO ()
main = scotty 3000 $ post "/api" $ raw =<< (liftIO . gqlApi =<< body)
```

You might think you can just snag the `liftIO . gqlApi =<< body`, stick it in a Yesod handler unchanged, and pass in the POST request body. Sadly, you'd be wrong- Yesod expects different types.

Thanks to [a single GitHub issue](https://github.com/morpheusgraphql/morpheus-graphql/issues/396#issue-577612225) courtesy [tuxagon](https://github.com/tuxagon), I discovered the correct syntax, and it's really quite simple. All you have to do is change the type signature:

```
-- Type signature changed from ByteString to GQLRequest/Response
graphqlApi :: GQLRequest -> IO GQLResponse
graphqlApi =
  interpreter rootResolver

-- Now it works like you'd expect
postGraphqlR :: Handler Value
postGraphqlR = do
  body <- requireCheckJsonBody :: Handler GQLRequest
  result <- (liftIO . graphqlApi) body
  returnJson result
```

From that point, you can just follow the regular Morpheus and Yesod docs and be good to go. Simple enough!
