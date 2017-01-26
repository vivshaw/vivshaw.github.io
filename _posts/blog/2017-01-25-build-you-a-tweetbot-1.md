---
layout: article
title: "Build You a Python TweetBot, Part 1: Tweepy & Markovify"
categories: blog
modified: 2017-01-25T18:48:00-05:00
tags: [python]
comments: true
teaser: tweeter-robo-teaser.png
---

Perhaps you've run across Twitter bots like [@thesefutures](https://twitter.com/thesefutures) or [@thinkpiecebot](https://twitter.com/thinkpiecebot) and been intrigued. For the non-technically-inclined, it's easy enough to create a bot with a tool that will handle the heavy lifting for you, like [cheap bots done quick](http://cheapbotsdonequick.com/). But if, Reader dearest, you desire something more than that— you've come to the right place. Today we're going to get our hands dirty with Python and the Twitter API, and code our own Twitter bot from scratch. Later, we'll even go over deploying the bot to Heroku and letting it loose to act autonomously in the cloud. If this piques your curiosity, then I'd love to show you how simple it can really be, with a pinch of Python magic.

{% include toc.html %}

## Introductory matters

Before we dive in, let's go over the tools we'll be using. Of course, you'll need Python 3, git, and your favorite Python IDE (I'm partial to [PyCharm](https://www.jetbrains.com/pycharm/)). To interface with Twitter, we'll be working with the excellent Twitter API wrapper [Tweepy](http://www.tweepy.org/). To generate our tweets, towe'll also work with [Markovify](https://github.com/jsvine/markovify), a Markov chain library. Today, we'll get you set up with Tweepy & Markovify, write the `TweetBot` class, and get your new bot up & running. Roll up your sleeves, we've got some code to write!

## Setup: Getting your Twitter credentials & setting up your libraries

To start, you'll need to get some Twitter credentials so that you can access the API. Unless you want your bot to post to your personal Twitter, I recommend [creating a new Twitter account](https://twitter.com/signup) for your bot and going through this process with the dedicated account. First, you'll need to register a new twitter app for your bot. I should mention here that you'll need to associate a unique phone number with the account in order to create an app. If you don't have a spare phone number laying around, you can either make use of a service like [Google Voice](https://voice.google.com) or [Burner](https://www.burnerapp.com/), or register the app on your primary Twitter account and go through the lengthy process of transferring the API key to another account, as outlined [on Molly White's blog](http://blog.mollywhite.net/twitter-bots-pt2/). In any case, once you've got an account registered, let's proceed:

#### Getting your credentials

Go to [apps.twitter.com](https://apps.twitter.com/) and click on the "Create New App" button. You'll need to fill out a few fields for your bot's name, description, and website, and to agree to the [Twitter Developer Agreement](https://dev.twitter.com/overview/terms/agreement-and-policy), and then you'll have a new app! Now, go to the Permissions tab and ensure that your app has read and write permissions. Finally, go to the Keys and Access Tokens tab, and create your access tokens. We'll need to store these for your bot.

It's important that you keep these keys private, because anyone with access to them can access the API in your name and freely post to your account. To prevent this from happening, we're going to ensure that your keys do not get checked in to version control. Make a directory for your project, `git init` as you usually would, then create a file entitled `.gitignore` with these contents:

```
twitter_credentials.py
```

Now, let's create `twitter_credentials.py` and store your access keys in it:

```python
consumer_key = ""
consumer_secret = ""
access_token = ""
access_token_secret = ""
```

Copy and paste the keys and access tokens from Twitter into `twitter_credentials.py`, and you'll finally be done with that.

#### Installing Tweepy & Markovify

This should be the easiest part of the whole process!

```
pip install tweepy
pip install markovify
```

That's it! Now we're ready to code.

## Tweeting with Tweepy

OK, let's dive into the code. Make yourself a `tweetbot.py`, and import Tweepy and your Twitter keys:

```python
import tweepy
from twitter_credentials import consumer_key, consumer_secret, access_token, access_token_secret
```

## Generating gibberish with Markovify

## Sketch up a TweetBot class

## Putting it all together

## Next time on Build You a TweetBot