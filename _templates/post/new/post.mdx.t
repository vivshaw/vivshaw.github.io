---
to: posts/<%= slug %>/post.mdx
---
---
title: "<%= title %>"

blurb: "<%= blurb %>"
date: <%= new Date().toISOString().split('T')[0] %>
next: <%- JSON.stringify(next) %>
tags: <%- JSON.stringify(tags) %>
---

