# RAVENBANE · ARCHITECT

**Chronos Story Engine — 2077 Edition.** A complete novel, comic and children's-book
creation suite in a single self-contained HTML file.

## Running it

Open `index.html` in any modern browser. There is no build step, no install, no server.
Everything you write is stored locally in the browser (IndexedDB, with a localStorage
fallback) and autosaves every 5 seconds.

> Because storage is local, clearing site data or using a private window will discard your
> work. Use **Export & Data → Export Entire Vault** for a portable JSON backup.

## What's inside

| Area | Modules |
| --- | --- |
| **Command** | Dashboard with word/reading/chapter/cast telemetry, completion vector, pacing & tension heatmap, activity feed, quick-jump. Multi-project library. |
| **The Book** | Cover Studio (front, back, spine, full-wrap, trim/barcode guides), Title & Dedication suite with a font selector, Prologue Master Editor with an attached moodboard drawer, and an unlimited Draft Chapter workspace with scene images and per-scene breakdown notes. |
| **Architecture** | Guided story builder (seven prompted questions) that expands into multi-act beat sheets across five structural templates, and turns them into chapter stubs. |
| **AI Co-Pilot** | The Unstuck Engine — reads your last 500 words and returns three distinct next moves (Logical / Twist / Wildcard), inserted with a glowing diff and one-click Keep or Undo. Plus an atmosphere & sensory enhancer and a cliché / repetition / filter-word scanner. |
| **Cast System** | Four-tier character matrix with full dossiers, a draggable relationship node map (plus matrix and list views), and a dialogue sandbox for talking to your characters in their own voice. |
| **Workspaces** | Twelve genre dossiers, a comic studio with ten panel layouts and script export, and a children's-book studio with age-tier layouts and exportable AI art prompts. |
| **Vault** | Draggable moodboard canvas, external reference library, and six in-depth masterclass craft lessons. |
| **Export** | JSON backup/restore, clean HTML book, Markdown manuscript, printable manuscript, full story bible, cast sheet, comic script and children's dummy book. |

## Customisation

Click the program name to rename it and the badge beside it to set your own logo. The
banner hub on every page accepts an image, GIF or video, with compact / medium /
cinematic heights and a live vertical reframe slider — applied per page, per book, or
globally.

## AI providers

The app ships with a local simulator that works offline. To connect a real model, open
**AI Engine Settings** and add a key for OpenAI, Anthropic or Google Gemini. Requests go
directly from your browser to the provider; keys never leave the local database. Prompt
templates for every AI feature are editable in the Co-Pilot module.
