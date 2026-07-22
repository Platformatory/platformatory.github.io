---
layout: case-study
title: Case Studies
description: "How Platformatory partners with technology leaders to modernize platforms, data, and real-time systems."
permalink: /case-studies/
---

<header class="case-studies-index-hero">
 <div class="case-study-inner case-study-inner--wide">
 <p class="case-study-kicker">Platformatory</p>
 <h1>Case Studies</h1>
 <p class="case-study-summary">Customer partnership, without partisanship, selected engagements across retail, banking, telecom, and industrial systems.</p>
 </div>
</header>

<section class="case-studies-index">
 <div class="case-study-inner case-study-inner--wide">
 <div class="case-studies-grid">
 {% assign studies = site.case-studies | sort: "weight" %}
 {% for study in studies %}
 <a class="case-study-card" href="{{ study.url }}">
 {% if study.logo %}
 <img class="case-study-card-logo" src="{{ study.logo | relative_url }}" alt="" />
 {% endif %}
 <span class="case-study-card-industry">{{ study.industry }}</span>
 <h2>{{ study.title }}</h2>
 <p>{{ study.summary }}</p>
 <span class="case-study-card-more">Read case study<span aria-hidden="true"> →</span></span>
 </a>
 {% endfor %}
 </div>
 </div>
</section>
