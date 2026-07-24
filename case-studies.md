---
layout: case-study
title: Case Studies
description: "Selected Platformatory engagements across banking, public sector, manufacturing, capital markets, D2C, and accessibility."
permalink: /case-studies/
---

{% assign studies = site.case-studies | sort: "weight" %}

<section class="case-studies-index">
  <div class="case-study-inner case-study-inner--wide">
    <h1 class="case-studies-index-title">Case Studies</h1>
    <div class="case-studies-grid" data-case-studies-grid>
      {% for study in studies %}
      <a class="case-study-card" href="{{ study.url }}">
        <span class="case-study-card-industry">{{ study.industry }}</span>
        <h2>{{ study.title }}</h2>
        <p>{{ study.summary }}</p>
        {% if study.technologies and study.technologies.size > 0 %}
        <ul class="case-study-card-tags">
          {% for tech in study.technologies limit: 4 %}
          <li>{{ tech }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        <span class="case-study-card-more">View</span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
