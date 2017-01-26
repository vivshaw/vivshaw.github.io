---
layout: home
permalink: /
image:
  feature: 
---
<h3>Recent posts:</h3>
<ul>
{% for post in site.categories.blog limit:3 %} 
	<li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>