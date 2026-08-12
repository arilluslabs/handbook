---
title: Meeting Notes
description: How we capture, store and structure notes from every meeting at Arillus.
---

Good meeting notes are not a nice-to-have — they're how decisions survive beyond the room, actions get followed through, and people who weren't there stay informed.

## Everyone Contributes

Note-taking is not the responsibility of one person. If two people are in a conversation and a third is listening, the third person should be writing the notes. If you're not actively speaking, you should be actively writing.

This means no one has to choose between contributing to the discussion and capturing what was said.

## Where Notes Live

All meeting notes are stored in **Zoho WorkDrive** under:

```
Projects → [Project Name] → Meeting Notes
```

One file per **meeting type** — not per meeting occurrence. A weekly sync has one file. A client review has one file. Every time that meeting happens, a new dated entry is appended to the same file.

This keeps notes easy to find: you always know where the history of a particular meeting type lives, without hunting through dozens of separate files.

## Note Format

Each meeting occurrence is added as a new section at the top of the file, most recent first.

```
## 2026-07-20
Attendees: 
Agenda: 
Notes: 

Actions:
```

**Notes** and **Actions** are always separate sections.

- **Notes** — what was discussed, decided, or raised. Capture the substance, not a word-for-word transcript.
- **Actions** — specific, owned next steps. Format: *what* needs to happen, *who* owns it, and *by when* if known.

### Example

```
## 2026-07-20
Attendees: Anand, Anandu, Priya
Agenda: Sprint review — Project Orion
Notes:
- Completed: user authentication flow, onboarding screens (3 of 5)
- Onboarding screen 4 delayed — dependency on API not yet ready
- Client demo moved to July 25th; Anand to confirm with client
- Design feedback: reduce padding on mobile cards, Priya to revise

Actions:
- Anand: confirm July 25th demo slot with client — by July 21st
- Priya: revise mobile card padding — by July 23rd
- Dev team: unblock onboarding screen 4 once API is ready
```

## A Note on Actions

An action without an owner is not an action — it's a wish. Every action item must have a named person responsible for it. Product Leads should review actions from the previous meeting at the start of the next one.
