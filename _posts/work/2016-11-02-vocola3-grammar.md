---
layout: media
title: "Disability-accessible programming with Vocola 3 grammars"
categories: work
modified: 2017-01-26T03:58:41-05:00
excerpt: "Using speech recognition to program by voice alone."
share: false
image:
  feature: vocola-grammar.png
  teaser: vocola-grammar-teaser.png
  credit: Hannah Vivian Shaw
  creditlink: http://vivshaw.github.io
---

{{ page.excerpt }}

[My Vocola3 grammars](https://github.com/vivshaw/vocola3-dotfiles) were created out of necessity. To make a long story short, in 2016 I badly injured my wrists and was unable to use a computer at all for several months. Even once I recovered, programming seemed like an impossibility due to the pain of sustained typing. But, after seeing [a presentation by Tavis Rudd](http://ergoemacs.org/emacs/using_voice_to_code.html), I decided to give [voice programming](http://vocola.net/programming-by-voice-FAQ.html) a try, and it worked like a charm.

This project is composed of a bunch of grammars that parse spoken English words and other phonemes into keyboard commands or Python, Java, or web code. Effectively, the result is a language midway between spoken English and written code. The grammars are implemented in [the Vocola 3 scripting language](http://vocola.net/v3/default.asp), and run on the standard Windows Speech Recognition app included on all Windows machines. I've written grammars for 3 levels of use-case:

1. General dictation and everyday Windows use
2. Interfacing with the specific apps I use, such as bash, git, and my IDEs
3. Programming grammars for Python, Java, and front-end web development

These grammars are dynamically loaded and unloaded as needed, and allow me to use my voice for most of what I used to do with my hands (albeit somewhat slower). For example, if I wanted to write this Java code:

```java
HashMap<Character, Integer> frequency = new HashMap<Character, Integer>();

for (char letter : alphabet.toCharArray()) {
    frequency.put(letter, 0);
}
```

I'd say:

```
hashmap char int frequency qual new hashmap char int funk doop
slap 2
for char letter face alphabet to char array camel 3 dottie 2 funk
body
frequency put dottie
funk letter swipe null doop
```

It might sound silly, but it gets the job done. I decided to [share the project on GitHub](https://github.com/vivshaw/vocola3-dotfiles) to help other injured or disabled programmers in a similar situation to mine. The code is kind of a mess, since the project is under constant development as I tweak my grammars to handle each new situation I run into. But, I'm working on refactoring it into a more readable and coherent form.