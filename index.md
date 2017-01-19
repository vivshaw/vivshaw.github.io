---
layout: home
permalink: /
image:
  feature: 
---
<ul>
{% for post in site.posts %} 
	<li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>