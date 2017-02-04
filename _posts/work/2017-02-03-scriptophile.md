---
layout: media
title: "scriptophile"
categories: work
modified: 2017-02-04T15:56:11-05:00
excerpt: "A neural network that reads handwriting, written from scratch in Scala."
share: false
image:
  feature: scriptophile.png
  teaser: scriptophile-teaser.png
  credit: MNIST / Hannah Vivian Shaw
  creditlink: http://vivshaw.github.io
---

{{ page.excerpt }}

[scriptophile](https://github.com/vivshaw/scriptophile) was my first attempt to work with the [MNIST dataset](http://yann.lecun.com/exdb/mnist/) of handwritten digits. Inspired by [Michael Nielsen](http://michaelnielsen.org/)'s excellent textbook [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/), I decided to hack together a Scala implementation of the neural network algorithms described in Nielsen's book. The result: a simple network that learns through mini-batch dtochastic gradient descent & identifies digits from the MNIST dataset with roughly 94% accuracy. It's written with [Breeze](https://github.com/scalanlp/breeze) for linear algebra. I wrote up [a blog post](https://vivshaw.github.io/blog/robot-brain-scala/) about my thought processes while building it. The code is, of course, all [on my GitHub](https://github.com/vivshaw/scriptophile).