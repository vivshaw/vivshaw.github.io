---
layout: media
title: "Robot Shakespeare"
categories: work
modified: 2017-02-04T15:56:11-05:00
excerpt: "A Shakespearean sonnet generator, powered by a Keras LSTM network and Flask."
share: false
image:
  feature: robot-shakespeare.png
  teaser: robot-shakespeare-teaser.png
  credit: Cobbe portrait / Hannah Vivian Shaw
  creditlink: http://vivshaw.github.io
---

{{ page.excerpt }}

[Robot Shakespeare](http://robot-shakespeare.herokuapp.com/) was an opportunity to play with [Keras](keras.io) & learn about LSTM neural networks. I chose Shakespeare's sonnets as a text corpus because I wanted to see how the model would handle the hoghly-structured text of a poem. I think it's fascinating how even a simple model like this one can, when given nothing but raw characters as input, learn not only to make mostly-coherent words but even some high-level features of the sonnet form, such as appropriate capitalization and punctuation, linebreaks at the correct points, and sometimes even indentation mimicking the typesetting of the original. I also took the opportunity to build a web interface in [Flask](http://flask.pocoo.org/) and toss it up on Heroku so others can [play with it](http://robot-shakespeare.herokuapp.com/). I wrote up [a blog post](https://vivshaw.github.io/blog/electric-pentameter/) about my thought processes while building it. The code is, of course, all [on my GitHub](https://github.com/vivshaw/scriptophile).