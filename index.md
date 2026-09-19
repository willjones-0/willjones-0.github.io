---
layout: default
title: Home
---
<section class="hero">
  <p class="kicker">Writer · Creator · Builder</p>
  <h1>Ideas, work, and things worth sharing.</h1>
  <p class="lede">I’m William Jones. This is where I publish writing, videos, and projects.</p>
</section>
<section class="home-section">
  <div class="section-heading"><h2>Latest writing</h2><a href="{{ '/writing/' | relative_url }}">View all</a></div>
  {% if site.posts.size > 0 %}
  <ol class="item-list">
    {% for post in site.posts limit: 4 %}
    <li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %b %Y" }}</time><div><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>{% if post.description %}<p>{{ post.description }}</p>{% endif %}</div></li>
    {% endfor %}
  </ol>
  {% else %}<p class="empty-state">The first essay is on its way.</p>{% endif %}
</section>
<section class="home-section compact-grid">
  <a class="feature-link" href="{{ '/videos/' | relative_url }}"><span>Videos</span><small>Watch on YouTube →</small></a>
  <a class="feature-link" href="{{ '/projects/' | relative_url }}"><span>Projects</span><small>Things I’ve made →</small></a>
</section>
