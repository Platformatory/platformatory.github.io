# Frontmatter templates

Copy the relevant block. Fill only known facts.

## Case study — `_case-studies/<slug>.md`

```yaml
---
layout: case-study
title: "Short outcome-led title"
customer_label: "Anonymous segment label"
industry: "Industry"
tags:
  - Data Platform
  - Performance Engineering
technologies:
  - Apache Kafka
  - Apache Flink
summary: "One or two sentences: what was built and the hard outcome numbers."
weight: 100
draft_status: approved
the_customer: |
  Who they are and why this problem mattered. No brand names.

challenge: |
  What was broken or blocked. Concrete failure modes.

work: |
  What Platformatory owned and shipped. Name systems and decisions.

impact:
  - "Measurable outcome 1"
  - "Measurable outcome 2"
  - "Measurable outcome 3"
---
```

## Offering — `_offerings/<slug>.md`

```yaml
---
title: "Offering name"
description: "SEO description — one sentence, concrete."
kicker: "Consulting"
headline: "Hero headline"
lede: "One supporting sentence under the headline."
primary_cta: "Talk to us"
primary_cta_href: "/company#contact"
secondary_cta: "Explore case studies"
secondary_cta_href: "/case-studies/"
hero_points_label: "At a glance"
hero_points:
  - title: "Point"
    body: "Short clause."
stack_kicker: "Stack"
stack_heading: "Typical foundations"
stack_logos:
  - name: "Apache Kafka"
    logo: "/images/v2/expertise/apache-kafka.png"
pillars_kicker: "Surfaces"
pillars_heading: "How we engage"
pillars_intro: "One line."
pillars:
  - id: "kebab-id"
    title: "Pillar title"
    body: "What this surface is."
panels:
  - title: "Panel title"
    kicker: "How we build"
    body:
      - "Paragraph one."
      - "Paragraph two."
---
```

Optional: `process:` steps, `footnotes:` / `off-fn` links, `secondary_cta_href`.

## Principle — `_principles/<slug>.md`

```yaml
---
title: "Maxim title"
description: "One-sentence maxim for cards and SEO."
weight: 200
---

Body paragraph one.

Body paragraph two. Keep it short and opinionated.
```

## Event — `_events/YYYY-MM-<slug>.md`

```yaml
---
layout: event
title: "Event title"
date: 2026-09-15
time: 6:00pm - 8:30pm
location: City / Venue short name
address: Full street address
category: meetup
type: free
partners: Partner names
mode: In-Person
description: "One-line event description."
link: https://www.meetup.com/...
map_link: https://maps.app.goo.gl/...
talks:
  - title: "Talk title"
    speaker: Name, Company
    video: YouTubeVideoId
    slide: https://...
---

<div class="about">
Event blurb for attendees.
</div>
```

`category`: often `meetup` | `workshop`. `mode`: `In-Person` | `Online` | hybrid as used by peers.

## Team — `_team/<slug>.md`

```yaml
---
title: "Full Name"
date: 2026-01-01T00:00:00+00:00
draft: false
image: "images/team/photo.jpeg"
jobtitle: "Role title"
linkedinurl: "https://www.linkedin.com/in/..."
weight: 10
layout: team
---
```

Also add a matching feature entry under `company.md` → Leadership team if they should show on `/company/`.

## Talk (append to event)

```yaml
  - title: "Talk title"
    speaker: Name, Company
    video: YouTubeVideoId
    slide: https://optional-slides-url
```

`video` must be the YouTube ID only. Omit `slide` if none.
