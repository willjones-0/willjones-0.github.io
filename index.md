---
layout: default
title: Home
---
<section class="hero">
</section>
<section class="home-section">
  <div class="section-heading"><h2>Latest writing</h2><a href="{{ '/writing/' | relative_url }}">View all</a></div>
  {% if site.posts.size > 0 %}
  <ol class="item-list">
    {% for post in site.posts limit: 4 %}
    <li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %b %Y" }}</time><div><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>{% if post.description %}<p>{{ post.description }}</p>{% endif %}</div></li>
    {% endfor %}
  </ol>
  {% else %}<p class="empty-state"></p>{% endif %}
</section>