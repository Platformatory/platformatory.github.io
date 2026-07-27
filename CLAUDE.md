# CLAUDE.md — Platformatory site

Guidance for agents working in this repository.

## Content creation (preferred)

Use project skills and slash commands—do not freestyle frontmatter:

| Slash command | Skill |
|---------------|--------|
| `/new-case-study` | `.cursor/skills/platformatory-content/` |
| `/new-offering` | same |
| `/new-principle` | same |
| `/new-event` | same |
| `/new-team-member` | same |
| `/new-talk` | same (talks live on events) |

Templates: `.cursor/skills/platformatory-content/templates.md`  
Rule (auto when editing collections): `.cursor/rules/platformatory-content.mdc`

## Review checklist

- [ ] **Customer case studies are confidential.** Do not publish customer or brand names (or recognizable logos) in case studies unless publication is expressly approved. Prefer anonymous labels (`customer_label`, industry, region/segment). Treat named customer references in drafts as a review blocker.
- [ ] Homepage partnership logos are a separate surface from case studies; still confirm naming/logo rights before adding new marks.
- [ ] Case study structure: Customer → Challenge → Work → Impact.
- [ ] Case study `tags:` = outcomes (`Platform Excellence`, `Modernization`, `Data Platform`, `Data Engineering`, `Performance Engineering`, `AI/ML`, `Product Engineering`). `technologies:` = product names only.
- [ ] Do not invent metrics or impact claims; leave stubs empty when facts are unknown.
- [ ] Prefer rebuilding with `bundle exec jekyll build` after layout/CSS/content changes when `--watch` is unreliable.

## Collections (quick map)

| Collection | Path | Notes |
|------------|------|--------|
| Case studies | `_case-studies/` | Index `/case-studies/`; layout `case-study` |
| Offerings | `_offerings/` | Permalink `/<name>/`; layout `offering` |
| Principles | `_principles/` | Permalink `/platform-engineering/<name>/` |
| Events | `_events/` | Talks nested in `talks:`; feed `/talks/` |
| Team | `_team/` | Also list on `company.md` for leadership grid |

When expanding or editing case studies, ask for permission status before restoring any real customer name.
