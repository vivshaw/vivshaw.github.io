---
layout: home
permalink: /
image:
  feature: 
---
<h3>Recent posts:</h3>
<ul>
{% for post in site.posts limit:3 %} 
	<li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>