# New talk

Add a recorded talk to the Talks library.

Talks are **not** a separate collection—they live on an event as `talks:` entries and render on `/talks/` when `video` is set.

1. Read and follow `.cursor/skills/platformatory-content/SKILL.md` and `templates.md`.
2. Identify the target event under `_events/` (or create one first via `/new-event`).
3. Append a properly indented talk:

```yaml
  - title: "Talk title"
    speaker: Name, Company
    video: YouTubeVideoId
    slide: https://optional
```

4. `video` must be the YouTube ID only (not a full URL).
5. Confirm the card appears under Recordings & slides on `/talks/`.

User context (if any) follows this command.
