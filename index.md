---
layout: home
title: "Daniel Tenreiro"
permalink: "/"
---

# Hi, I'm Daniel Tenreiro 👋

Welcome to my corner of the internet! I’m a fintech entrepreneur, quantitative researcher, and singer-songwriter. Here you’ll find my latest projects, thoughts on AI in finance, and occasional tunes.

## Now

<ul>
  <li>Exploring roles in venture capital & hedge funds</li>
  <li>Building Plath AI and Autoencoder Holdings</li>
  <li>Writing new acoustic tracks</li>
</ul>

## Recent Posts

<ul>
  {% for post in site.posts limit:5 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> &mdash; {{ post.date | date: "%B %-d, %Y" }}</li>
  {% endfor %}
</ul>
