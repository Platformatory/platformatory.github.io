---
name: platformatory-content
description: >-
  Create and edit Platformatory site content with consistent tone: case studies,
  offerings, principles, events, team members, and talks. Use when adding or
  rewriting files under _case-studies/, _offerings/, _principles/, _events/,
  _team/, or talks on /talks/.
---

# Platformatory content

## When to use

Read this skill **before** creating or rewriting any of:

| Type | Path | URL pattern |
|------|------|-------------|
| Case study | `_case-studies/<slug>.md` | `/case-studies/<slug>/` |
| Offering | `_offerings/<slug>.md` | `/<slug>/` |
| Principle | `_principles/<slug>.md` | `/platform-engineering/<slug>/` |
| Event | `_events/YYYY-MM-<slug>.md` | `/events/<path>/` |
| Team member | `_team/<slug>.md` | (company teams section) |
| Talk | nested under an event’s `talks:` | `/talks/` library |

Templates: [templates.md](templates.md)

## Voice (all types)

- Plain, practitioner prose. Short sentences. Specific nouns and numbers.
- **Do not invent metrics.** If unknown, omit or leave a clear stub; ask the user.
- Avoid AI-brochure cadence: stacked antithesis (“X, not Y”), “spine/estate/posture” padding, em-dash tech laundry lists in summaries.
- Prefer facts from an interview over generic industry filler.
- Match nearby peers: open 1–2 recent files of the same type and mirror length/register.

## Confidentiality (case studies)

- **Never** publish real customer/brand names or logos unless the user explicitly approves publication.
- Use anonymous `customer_label` (region + segment), e.g. `Leading South Asian telco`.
- Homepage partnership logos are a different surface—still confirm rights before adding marks.

## Outcome tags (case studies)

Use `tags:` for outcomes (shown on cards). Prefer this vocabulary:

`Platform Excellence` · `Modernization` · `Data Platform` · `Data Engineering` · `Performance Engineering` · `AI/ML` · `Product Engineering`

Keep product names in `technologies:` (muted stack on detail only)—not as card tags.

## Workflow by type

### Case study

1. Interview if facts are thin (customer, challenge, work owned, hard impact, title lean).
2. Create `_case-studies/<kebab-slug>.md` from the case-study template.
3. Sections in layout order: `the_customer` → `challenge` → `work` → `impact[]`.
4. `weight`: lower sorts earlier on index; pick relative to peers.
5. `draft_status`: `stub` | `needs-review` | `approved`.
6. Verify `/case-studies/` and detail after `bundle exec jekyll build` if layouts changed.

### Offering

1. Mirror a peer in `_offerings/` (e.g. `streaming.md`) for frontmatter shape.
2. Required: `title`, `description`, `kicker`, `headline`, `lede`, primary CTA, `pillars` and/or `panels`.
3. Hero budget: brand/kicker, one headline, one lede, CTA group—no card clutter in hero.
4. Permalink is `/<filename>/` via collection config—choose slug carefully.
5. Wire consulting/services pages only if the user asks.

### Principle (Platform Engineering maxim)

1. Filename = kebab of title.
2. Frontmatter: `title`, `description` (one maxim-length sentence), `weight`.
3. Body: 2–4 short paragraphs. Opinionated, concrete—no lemma cite/ref chrome.
4. Index: `/platform-engineering/`.

### Event

1. Filename: `YYYY-MM-<short-slug>.md`.
2. Frontmatter: `layout: event`, `title`, `date`, `time`, `location`, `address`, `category`, `type`, `partners`, `mode`, `description`, links as available.
3. `talks:` list items **must** indent nested keys (`title` / `speaker` / `video` / `slide`) under each `-` item.
4. Body: `.about` blurb + optional schedule table.
5. YouTube `video` = ID only (not full URL)—feeds `/talks/`.

### Talk

Talks are **not** a separate collection. Add under an event:

```yaml
talks:
  - title: "Talk title"
    speaker: Name, Company
    video: YouTubeVideoId
    slide: https://...
```

Only entries with `video` appear in the Talks library.

### Team member

1. `_team/<firstname>.md` (or clear unique slug).
2. Frontmatter: `title`, `image`, `jobtitle`, `linkedinurl`, `weight`, `layout: team`, `draft: false`.
3. Place headshot under `images/team/`.
4. Add to `company.md` leadership `features` if they should appear on `/company/`.

## Done checklist

- [ ] Frontmatter validates (no YAML indent errors)
- [ ] Tone matches peers; no invented metrics
- [ ] Case studies anonymized unless approved
- [ ] Tags = outcomes; technologies = product names
- [ ] Event talks indent correct; video IDs work on `/talks/`
- [ ] SEO: `description` or `summary` present (SEO include falls back to summary)
