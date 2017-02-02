---
layout: article
title: "Beautify Your Java Collections with Google Guava"
categories: blog
modified: 2017-02-02T01:01:24-05:00
tags: [java]
comments: true
teaser: guava.jpg
---

I realize I'm years late to the [Google Guava](https://github.com/google/guava) train, but Guava is so delightfully useful that I can't help but belatedly gush about it. In particular, the new Collections are just amazing for getting rid of boilerplate and making your code simpler and prettier. Let me show off two of my favorites, the Multiset and the Multimap:

{% include toc.html %}

## Multisets

[Multisets](https://github.com/google/guava/wiki/NewCollectionTypesExplained#multiset) are kinda like a Set and kinda like a List. It's Set-like because it's unordered, it's List-like because it can contain multiples. It also provides a `.count()` method to get the count for any given element, letting us use it like a Map if we want. This can be very useful.

Suppose I have a Collection of Strings, like this one:

```java
List<String> words = Arrays.asList("monkey", "banana", "kitchen", "monkey", "monkey", "banana", "kitchen");
```

Further, suppose I desire to count the number of occurences of each String. Perhaps I'd write this:

```java
Map<String, Integer> frequencies = new HashMap<String, Integer>();
for (String word : words) {
    if (frequencies.containsKey(word)) {
        frequencies.put(word, frequencies.get(word) + 1);
    } else {
        frequencies.put(word, 1);
    }
}

for (String word : frequencies.keySet()) {
    System.out.println("There are " + frequencies.get(word) + " " +  word + "s.");
}
```

Let's try it with Guava:

```java
Multiset<String> frequencies = HashMultiset.create();
for (String word : word) {
    frequencies.add(word);
}

for (String word : frequencies.elementSet()) {
    System.out.println("There are " + frequencies.get(word) + " " + word + "s.");
}

```

That looks so much nicer! We've eliminated tons of boilerplate and we can focus on what we're actually doing.

Now let's throw in some of Java 8's new functional programming features and print formatting, and try it like this:

```java
Multiset<String> frequencies = HashMultiset.create();
words.forEach(frequencies::add);
frequencies.entrySet()
           .forEach(entry -> System.out.format("There are %d %ss.%n", entry.getCount(), entry.getElement()));
```

Tiny and adorable!

## Multimaps

A [Multimap](https://github.com/google/guava/wiki/NewCollectionTypesExplained#multimap) is kinda like a Map that can map each key to an arbitrary number of values, with a bunch of neat views to allow you to treat it like a regular Map if you need to, or any number of other things. This is a pretty sweet way to replace clunky Map<K, Collection<V>> iteration with tidier code. For example, suppose we wanted to group this string by word length:

```java
String message = "Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque vel enim id neque semper convallis vel vulputate nunc";
```

With old Java, we might try something like this:

```java
Map<Integer, Set<String>> wordsByLength = new HashMap<Integer, Set<String>>();
for (String word : message.split(" ")) {
    int length = word.length();
    Set<String> words;

    if (wordsByLength.containsKey(length)) {
        words = wordsByLength.get(length);
    } else {
        words = new HashSet<String>();
    }

    words.add(word);
    wordsByLength.put(length, wordss);
}
```

It works, but... yuck. Look at all that boilerplate. Let's try it in Guava instead!

```java
Multimap<Integer, String> wordsByLength = ArrayListMultimap.create();
for (String word : message.split(" ")) {
    wordsByLength.put(word.length(), word);
}
```

Nice! Short, sweet, does what it says on the tin. As an added bonus, modifications to our views will write into the Multimap. So we can go:

```java
Set<String> fourLetterWords = wordsByLength.get(4);
fourLetterWords.add("erat");
fourLetterWords.add("duis");
```

and these will write through right into `wordsByLength`.

Overall, I'm thrilled by the Guava collections & foresee myself using them often. My only tiny gripe is that they don't play too well with some of the sweet new functional toys in 8, like Collectors:

```java
Map<Integer, List<String>> wordsByLength = Arrays.stream(message.split(" "))
                                                 .collect(Collectors.groupingBy(String::length));
```

If we wanna do that with Guava collections we'd have to [write a custom Collector](http://www.nurkiewicz.com/2014/07/introduction-to-writing-custom.html). But, honestly not a big deal.