---
layout: home
permalink: /
title: Hannah Vivian Shaw
excerpt: "I'm a Vermont developer working in Python, Javascript, & Java. I'm into machine learning, web development, and functional programming."
image:
  feature: 
---
<h3>Recent posts:</h3>
<ul>
{% for post in site.categories.blog limit:3 %} 
	<li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>