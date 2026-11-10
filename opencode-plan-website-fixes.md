# Single-PR plan: fix /company/ breakage + site-wide responsiveness

All fixes land as **one PR** off `master`, split into reviewable commits (each independently revertable). No feature flags, no staging experiments — build + device matrix at the end gates the merge.

**PR title:** `Fix company page layout and site-wide mobile responsiveness`

---

## Commit 1 — `company: fix structural bugs` (was Plan A)

| Change | File |
|--------|------|
| Remove inner duplicate `id="contact"` (keep the section's id) | `_layouts/company.html:24` |
| Add `.contact-container`, `.contact-container #contact`, `.hbspot-form`, `.address-info`, `.careers-copy-inner`, `.careers-form` to the mobile overflow kill-switch list; global `overscroll-behavior: contain` on remaining `overflow: auto` panels | `_sass/components/_page.scss:3221-3226` |
| Align careers-slide reflow threshold with the 600px page-wide override (kills the 601–992px clip band) | `_page.scss:2759, :3113` |
| Company hero headline: wrap in `#typewriter-title`; fix typo class `typewriter-and-quotes` (was `typewirter-and-quotes`) on company, homepage, consulting, academy | `company.md:17`, `index.md:18`, `consulting.md:13`, `v2/academy.md:12` |
| `intro_image` people.jpg: render as hero background or delete the field | `company.md:4`, `_layouts/default.html` |
| `#typewriter-title`: drop `nowrap; overflow: hidden` so it wraps on phones | `assets/css/style.scss:545-550` |

## Commit 2 — `company: correct Reveal integration & slide fitting` (was Plan B)

| Change | File |
|--------|------|
| Remove the extra `<div class="slides">` wrapper (Reveal auto-wraps; matches all other layouts) | `_layouts/company.html:6,165` |
| Extend the inner-page stack mode from 600px to the shared 992px breakpoint so clipped-taller-than-viewport slides (Culture, Leadership, Contact) reflow instead of crop | `_page.scss:3209-3270`, `:423-470` |
| Leadership grid: `repeat(auto-fit, minmax(180px, 1fr))`, `height: auto` panels inside the stack mode | `_page.scss:965-1010` |

## Commit 3 — `Cross-site responsive quick wins` (was Plan C)

- Event/publication cards: `width: min(454px, 100%); height: auto; min-height` — `assets/css/style.scss:178-180`
- Video embeds: remove `width/height` attributes + `min-width: 364px`; `aspect-ratio: 16/9` wrapper — `_layouts/event.html:65`, `_event.scss:120-126`
- Reveal rail: delete custom `bindProgressBarTouch`, set `scrollActivationWidth: 2` (built-in guard) — `_includes/reveal.html:255,263-282`
- `max-height: 740px` block: add `and (orientation: portrait)` — `_page.scss:3479`
- Fixed `!important` widths → `max-width` + fluid (796/652/528px intro-content; 336px dialog) — `_page.scss:297-307`, `style.scss:413-420`
- Delete dead `@media (width: 1024px) and (height: 1366px)` rule — `_event.scss:339`
- Remove duplicate viewport metas — `default.html:22,45`, `home_default.html:22,40`

## Commit 4 — `Mobile menu & header fixes` (was Plan D)

- Mobile menu: `100dvh`, internal scroll (`overflow-y: auto; overscroll-behavior: contain`), `pointer-events: none` when closed — `_main-menu-mobile.scss:156-216`
- `.lock-scroll` also locks `.reveal-viewport` — `_main-menu-mobile.scss:77-79` + `assets/js/scripts.js`
- Header nav row: allow shrink/wrap (or bump hamburger breakpoint) so 992–1140px stops overflowing — `_header.scss:44-58`
- Load bootstrap dropdown deps (or CSS/JS-native equivalent) on offering pages — `_layouts/offering.html`
- a11y: live `aria-expanded`, unique nav parent ids, `<nav aria-label>`, `:focus-visible` on hamburger — `main-menu*.html`, `_hamburger.scss`

## Commit 5 — `Responsive foundation & payload cleanup` (was Plan E)

- Breakpoint variables (`$bp-sm/md/lg/xl`) in `_bootstrap-variables.scss`; normalize the ad-hoc values (410/440/520/540/560/640/700/760/776/800/856/860/900/960/990/1000/1599/1612…) to them, mechanical substitution only — no behavior change intended beyond overlap fixes
- De-`!important` the mobile block of `_page.scss` (330 occurrences): consolidate conflicting h1 sizes into one cascade so each headline has a single size per breakpoint
- Stop wrapping non-deck pages in `.reveal` (team/services/plain pages) so Reveal isn't initialized over them — `_layouts/default.html:62` + guard in `_includes/reveal.html`
- Compress images >200KB (worst: `v2/banners/confluence.jpg` 4.2MB, `location.jpg` 4.1MB, homepage banner 1.2MB); add `width`/`height` + `loading="lazy"` in templates
- Remove commented-out jsvectormap load; pin or remove unpinned `typewriter-effect@latest`; delete dead `.main-menu-mobile`/`.header` CSS and the duplicate `sub-menu` mixin

**Deliberately excluded from this PR** (would balloon the diff / risk regressions, tracked as follow-ups): full `_page.scss` rewrite, `srcset`/`sizes` pipeline, remaining hover-only transforms vs `@media (hover: hover)` audit.

## Verification gate (before PR is marked ready)

1. `bundle exec jekyll build` clean (Sass compiles — GitHub Pages build must stay green).
2. Viewport matrix on `/company/`, `/`, `/products/`, `/events/`, one offering page, one registration page: 360×800, 390×844, 430×932, 844×390, 768×1024, 1024×1366, 1440×900.
3. No horizontal scrollbar at any width; no content unreachable for lack of a scroller; swipe pages through the deck on a touch device (or Chrome device emulation with touch).
4. Deep links `#contact`, `#teams`, `#culture` land correctly (no duplicate ids).
