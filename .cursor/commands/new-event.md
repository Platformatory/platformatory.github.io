# New event

Create a Platformatory community event under `_events/`.

1. Read and follow `.cursor/skills/platformatory-content/SKILL.md` and `templates.md`.
2. Filename: `YYYY-MM-<short-slug>.md`. Copy structure from a recent peer event.
3. Fill `layout: event` frontmatter (`title`, `date`, `time`, `location`, `address`, `category`, `type`, `partners`, `mode`, `description`, links).
4. If talks exist, nest `speaker` / `video` / `slide` **under** each list item (YAML indent). `video` = YouTube ID only.
5. Body: concise `.about` HTML; optional schedule table.
6. Talks with `video` automatically appear on `/talks/`—verify IDs.

User context (if any) follows this command.
