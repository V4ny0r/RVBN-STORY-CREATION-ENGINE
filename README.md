# RAVENBANE · ARCHITECT

**Chronos Story Engine — 2077 Edition.** A complete novel, comic and children's-book
creation suite in a single self-contained HTML file.

## Running it

Open `index.html` in any modern browser. There is no build step, no install, no server.
## Never losing your work

Open **Storage & Backups** and press **Choose where to save**. Pick any file on your
computer — Documents, Dropbox, OneDrive, a USB stick. From then on the app writes
*everything* into that one file automatically as you work: books, chapters, cast,
pictures, settings, even your menu layout.

Move that file to another machine, open the app there, press **Open an existing vault
file**, and you are exactly where you left off — no accounts, no sync service, no install.

Underneath it there are three more layers:

- **Write-ahead saves** in IndexedDB, so a power cut mid-write can never corrupt anything.
  On the next launch the newest complete copy wins and the app tells you it recovered.
- **A rolling snapshot history** you can browse and roll back to. Naming a snapshot keeps
  it forever; automatic ones are recycled.
- **A crash flush** on tab close, tab hide and app blur, so the last sentence you typed
  survives even a killed tab.

Backups carry a checksum and are verified before anything is restored.

> Saving straight into a file needs Chrome, Edge, Opera or Brave. Firefox and Safari do not
> support it yet — there, use **Download a full backup**, which produces exactly the same file.

## What's inside

### All My Books — the shelf

The first page in the menu holds every book you have started, each one shown as its own
profile card: its cover picture, its profile picture, tagline, genre, word count, chapter
count and progress. Click a card to make that book active and land straight on its profile.

You can keep as many books as you like and nothing is shared between them — separate
chapters, cast, artwork, research, and even a separate colour scheme per book. Search by
title, author, genre or tagline, sort by what you worked on most recently, switch between
big cards and a compact list, and back up any single book to its own file.

### The Book Profile — where you actually work

Every book gets its own social-media style page, second in the menu:

- **Cover picture and profile picture**, both accepting photos, **animated GIFs** or video. Drag the cover to any height in pixels; set the profile picture's size, shape (circle / rounded / square / hexagon) and position (left, middle, right).
- **Every chapter as one scrollable feed.** Click a chapter to open a full editor inline and type straight into the page. Add a chapter anywhere with the dividers between posts, reorder, duplicate or delete without leaving the feed.
- **Story parts.** Tag each chapter — Setup, Inciting Incident, Midpoint, Climax, **The Conclusion**, Epilogue and fourteen more — and it gets a coloured stripe and badge. Switch on *Group by story part* to stack the feed under headings and see the shape of the whole book.
- **Paragraph markers.** Put the cursor in any paragraph and press *Tag paragraph* to mark the exact line where the story turns. Every mark is listed in the **Story Map** beside the feed and jumps you straight there.
- **Six tabs you can reorder** — drag any tab to move it: Chapters · About This Book (series, comps, POV, tense, setting, themes, warnings, pitch, synopsis, production plan, plus a completeness checklist) · Cast · World & Lore · Gallery · Notes.
- **A real photo album.** Add photos or GIFs, give each a title, description and tags, and click one for a full-screen viewer with the details beside the picture (or underneath — your choice). Every image used elsewhere in the book is gathered underneath, one click from being copied into the album. Any photo can be made the book's cover or profile picture.

### Making it yours

**Twenty-one whole-app style templates**, grouped by vibe, in *Settings & Appearance*. Each one changes colours, fonts, corner shape, card treatment, background style, spacing and even whether labels are capitalised — without moving a single control. A page with a banner still has its banner.

| Group | Styles |
| --- | --- |
| Technology | TRON Grid · Ares Red · Retro Terminal · Vaporwave |
| Everyday | Social Dark · Social Light · Nordic Minimal · Mono Slate |
| Gradient | Aurora Gradient · Sunset Drift · Lagoon |
| Literary | Manuscript · Midnight Ink · Cosy Library · Ink Noir · Typewriter |
| Mood | Deep Forest · Sakura Dusk · Blood Moon · Candy Pop · Arctic Signal |

Six of them are full light modes. Beyond the presets, *Fine-Tune Colours & Fonts* exposes every knob: five colours, light/dark, card transparency, glow, corner shape, card style, background style, spacing, outline tint, capitalisation, and separate fonts for headings, your prose and the interface.

- **Background pictures and GIFs** behind the whole app, with fill mode, blur and dimming.
- Apply any look to **just one page, one whole book, or everything** — page beats book beats global.
- **Banners are resizable in pixels everywhere**, with a live vertical reframe slider, opacity, blur and scrim.
- **Drag your own menu**: press *Arrange Menu* to drag pages between groups, reorder groups, rename them, add your own, or reset.
- **Dashboard slideshow**: your own images, GIFs or video with six transitions (fade, slide, zoom, flip, blur, Ken Burns), adjustable timing and height. Pull pictures straight from anywhere else in the book.

### Finishing the book

**Book Designer** typesets what you have written onto real pages and shows them to you as
you adjust the design. Eight templates — Classic Trade, Modern Literary, Fantasy Epic,
Cosy Mystery, Manuscript Submission, Large Print, Pocket Paperback, Typewriter Draft —
plus full control of trim size, margins, typeface, size, leading, indents, drop caps,
chapter openings, running heads and page numbers. The preview and the exported PDF are
produced by the same code, so what you see is what prints. While drafting, the open-book
button in any editor toolbar shows just that chapter as live pages that reflow as you type.

### Getting unstuck and generating ideas

**Idea Lab** holds twenty-one brainstorming tools — What-If Machine, Twist Machine,
Premise Mixer, Character Seeds, Obstacle Escalator, Ending Options, Plot Hole Hunter and
more — each of which reads your actual book before generating anything. Any idea can be
bookmarked, sent to your notes, turned into a beat, or made into a chapter.

The **Story Advisor** looks at what exists, what is tagged and how long it is, then tells
you the next sensible thing to write. Finish a prologue and it explains what Chapter One
has to do; tag a midpoint and it points you at the all-is-lost moment. It appears beside
your chapter feed, on the dashboard and in the Idea Lab.

### Never wondering what a page is for

Every page opens with a plain-English guide: one sentence on what the page is, a numbered *step by step*, and a *good to know* list. Modals and complex fields carry their own explanations. Hide them all with the **?** button in the top bar, bring them back the same way.

| Area | Modules |
| --- | --- |
| **Book Profiles** | *All My Books* — every book as a profile card, searchable and sortable — and the per-book profile: cover, avatar, stats, chapter feed, About / Cast / World / Gallery / Notes tabs. |
| **Command** | Dashboard with editable slideshow, word/reading/chapter/cast telemetry, completion vector, pacing & tension heatmap, activity feed and quick-jump. |
| **The Book** | Cover Studio (front, back, spine, full-wrap, trim/barcode guides), Title & Dedication suite with a font selector, Prologue Master Editor with an attached moodboard drawer, and a focused Draft Chapter desk with scene images and per-scene breakdown notes. |
| **Architecture** | Guided story builder (seven prompted questions) that expands into multi-act beat sheets across five structural templates, and turns them into chapter stubs. |
| **AI Co-Pilot** | The Unstuck Engine — reads your last 500 words and returns three distinct next moves (Logical / Twist / Wildcard), inserted with a glowing diff and one-click Keep or Undo. Plus an atmosphere & sensory enhancer and a cliché / repetition / filter-word scanner. |
| **Cast System** | Four-tier character matrix with full dossiers, a draggable relationship node map (plus matrix and list views), and a dialogue sandbox for talking to your characters in their own voice. |
| **Workspaces** | Twelve genre dossiers, a comic studio with ten panel layouts and script export, and a children's-book studio with age-tier layouts and exportable AI art prompts. |
| **Vault** | Draggable moodboard canvas, external reference library, and six in-depth masterclass craft lessons. |
| **Book Designer** | Your book typeset on real pages — eight print templates, trim sizes, margins, drop caps, running heads, page numbers — previewed live and exported as a proper PDF. |
| **Idea Lab** | Twenty-one brainstorming tools that read your book first, plus a Story Advisor that works out what you should write next. |
| **Storage** | Vault file on your own disk, write-ahead saves, snapshot history, verified backups. |
| **Export** | JSON backup/restore, clean HTML book, Markdown manuscript, printable manuscript, full story bible, cast sheet, comic script and children's dummy book. |

## AI providers

The app ships with a local simulator that works offline. To connect a real model, open
**AI Engine Settings** and add a key for OpenAI, Anthropic or Google Gemini. Requests go
directly from your browser to the provider; keys never leave the local database. Prompt
templates for every AI feature are editable in the Co-Pilot module.
