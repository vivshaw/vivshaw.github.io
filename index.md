---
layout: home
permalink: /
title: Hannah Vivian Shaw
excerpt: "I'm a Vermont developer passionate about Python development, Java & other JVM languages, machine learning, and functional programming."
image:
  feature: 
---
<h3>Recent posts:</h3>
<ul>
{% for post in site.categories.blog limit:3 %} 
	<li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>