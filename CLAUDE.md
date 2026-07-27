# CLAUDE.md — Platformatory site

Guidance for agents working in this repository.

## Review checklist

- [ ] **Customer case studies are confidential.** Do not publish customer or brand names (or recognizable logos) in case studies unless publication is expressly approved. Prefer anonymous labels (`customer_label`, industry, region/segment). Treat named customer references in drafts as a review blocker.
- [ ] Homepage partnership logos are a separate surface from case studies; still confirm naming/logo rights before adding new marks.
- [ ] Keep case study structure: The Customer → Challenge / Opportunity → Tech → Impact.
- [ ] Do not invent metrics or impact claims; leave stubs empty when facts are unknown.
- [ ] Prefer rebuilding with `bundle exec jekyll build` after layout/CSS/content changes when `--watch` is unreliable.

## Case studies

- Collection: `_case-studies/`
- Index: `/case-studies/` (randomized card order on load)
- Detail layout: `_layouts/case-study.html`
- Front matter: `title`, `customer_label` (anonymous), `industry`, `domains[]`, `technologies[]` (product names such as Apache Kafka, Confluent, Databricks), `summary`, `weight`, `the_customer`, `challenge`, `tech`, `impact`
- `draft_status`: `stub` | `needs-review` | `approved` (optional workflow hint; not required for publish)
- Cards and detail pages must not include customer logos.

When expanding or editing case studies, ask for permission status before restoring any real customer name.
