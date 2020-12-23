---
layout: article
title: "Haskell Snacks #1: Integrating Yesod and Morpheus GraphQL"
excerpt: "It's all about the types"
categories: blog
modified: 2020-12-21T20:30:21-05:00
tags: [haskell, yesod, FP, web, tidbits]
comments: true
image:
  feature: haskell-snacks-1.png
  teaser: haskell-snacks-1-teaser.png
---

Here's a new little series of posts where I'll document some bite-sized things I learned while picking up Haskell, focusing on things that weren't immediately intuitive and didn't have easily Googleable answers.

First up: integrating [Yesod](https://www.yesodweb.com/) with [Morpheus GraphQL](https://morpheusgraphql.com/)! Morpheus provides examples for `scotty` and `servant` integration, but Scotty wasn't full-featured enough for my needs, and I'm not familair with servant. Yesod to the rescue! But, you'll find that the syntax shown in the scotty and servant examples for declaring your GraphQL API, will not cooperate with Yesod. Here's how it is in the simplest Scotty example from the Morpheus docs:

```haskell
-- Definition of GraphQL API
gqlApi :: ByteString -> IO ByteString
gqlApi = interpreter rootResolver

-- Hooking it up to Scotty handler
main :: IO ()
main = scotty 3000 $ post "/api" $ raw =<< (liftIO . gqlApi =<< body)
```

You might think you can just snag the `liftIO . gqlApi =<< body`, stick it in a Yesod handler unchanged, and pass in the POST request body. Sadly, you'd be wrong- Yesod expects different types.

Thanks to [a single GitHub issue](https://github.com/morpheusgraphql/morpheus-graphql/issues/396#issue-577612225) courtesy [tuxagon](https://github.com/tuxagon), I discovered the correct syntax, and it's really quite simple. All you have to do is change the type signature:

```haskell
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

Now, suppose you want to use the `App` syntax from Morpheus. So instead of using `interpreter`, your Morpheus GraphQL code now looks like this:

```haskell
app :: App APIEvent IO
app = deriveApp rootResolver
```

We can still stitch this into a Yesod handler quite easily! The key is in [the definition of interpreter](https://github.com/morpheusgraphql/morpheus-graphql/blob/b5ef7a50dd5bd42dc51bbdf11509028c868ee579/src/Data/Morpheus.hs#L31):

```haskell
interpreter ::
  (MapAPI a b, RootResolverConstraint m e query mut sub) =>
  RootResolver m e query mut sub ->
  a ->
  m b
interpreter = runApp . deriveApp
```

Hey, `interpreter` is just using `deriveApp` under the hood, just like `app` does! So all we need to do in our Yesod handler, is apply `runApp` to `app`, and we'll have the same GraphQL API as we did before. All it takes is one little `where` clause:

```haskell
app :: App APIEvent IO
app = deriveApp rootResolver

postGraphqlR :: Handler Value
postGraphqlR = do
  body <- requireCheckJsonBody :: Handler GQLRequest
  result <- (liftIO . graphqlApi) body
  returnJson result
  where graphqlApi = runApp app :: GQLRequest -> IO GQLResponse
```

Things get a bit more complex once we need WebSockets support... This will hopefully come in a later blog entry!
