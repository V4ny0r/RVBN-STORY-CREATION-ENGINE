# RAVENBANE · ARCHITECT

**Chronos Story Engine — 2077 Edition.** A complete novel, comic and children's-book
creation suite in a single self-contained HTML file.

## Running it

Open `index.html` in any modern browser. There is no build step, no install, no server.

One optional exception: **Google Doc Sync** needs the file served over http rather than
opened off the disk, because Google will not sign in to a `file://` page. If you want
that feature, run `python3 -m http.server 8080` in this folder and open
`http://localhost:8080/`. Everything else is identical either way.

## Never losing your work

Open **Storage & Backups** and press **Choose where to save**. Pick any file on your
computer — Documents, Dropbox, OneDrive, a USB stick. From then on the app writes
*everything* into that one file automatically as you work: books, chapters, cast,
pictures, settings, even your menu layout.

Move that file to another machine, open the app there, press **Open an existing vault
file**, and you are exactly where you left off — no accounts, no sync service, no install.

Or hand it a **whole folder** instead. It keeps `ravenbane-vault.json` in there
permanently current and rotates dated copies into a `backups` sub-folder. That is
also what makes updating painless: download a newer version of the app, delete the
old one, press *Choose a folder* and point at the same folder — it reads the newest
thing inside and carries on.

Underneath it there are three more layers:

- **Write-ahead saves** in IndexedDB, so a power cut mid-write can never corrupt anything.
  On the next launch the newest complete copy wins and the app tells you it recovered.
- **A rolling snapshot history** you can browse and roll back to. Naming a snapshot keeps
  it forever; automatic ones are recycled.
- **A crash flush** on tab close, tab hide and app blur, so the last sentence you typed
  survives even a killed tab.

Backups carry a checksum and are verified before anything is restored.

### Updating without losing anything

Your work is not inside the `.html` file — that file is only the program. Every save,
snapshot and backup is stamped with the version that wrote it and the moment it was
written, and the app uses those stamps to do the right thing:

- Data from an **older** version gains everything the new one added, and nothing it
  already had is touched.
- Data from a **newer** version still opens, and fields this build has never heard of
  are carried through rather than stripped — so going backwards a version destroys
  nothing.
- When two copies exist, **the one written most recently wins**, judged by the clock
  rather than by a counter that only means anything on one machine.
- **Merge, newest wins** compares book by book, so two half-updated machines reconcile
  without either side losing work.

So the whole upgrade is: download the new file, delete the old one, point it back at
your vault file or storage folder.

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

### The cast, one page each

A **CHARACTERS** group in the menu lists everyone in the open book, portrait and all.
Click any of them for their own page: a cover picture, a portrait you can size, shape
and position, and seven tabs — Dossier, Inner Life, Voice & Dialogue, Relationships,
Appearances, Gallery, Notes. A gauge tells you what is still blank, four AI buttons
read the character *and* the book before suggesting anything (and work offline), and
**Appearances** finds them in your actual prologue and chapters by name, updating
itself as you write.

### Writing the way a word processor works

The writing box has a toolbar **at the top and at the bottom**, and a pin button that
makes it follow you down a long chapter so a picture can go in wherever you are, not
only where you started. **Full screen** gives you nothing but the page. **Highlight any
text** and a small bar appears over it: bold, italic, underline, bigger, smaller, a
font just for those words, eleven colours and a highlighter.

Pictures behave like pictures: drag the corner handle to resize one in place, click it
for width, position and a caption, and text flows around it. One switch decides whether
you see pictures *while writing*; a separate one decides whether they appear in the
*finished book* — so you can write with reference art in front of you and still export
the story on its own.

### Bringing a manuscript in, and sending one out

**Import a document** reads Word (`.docx`), WordPad (`.rtf`), Markdown, HTML and plain
text. It finds your chapters — real headings, or lines that read like *Chapter Four* or
*Prologue* — shows you what it found before anything changes, and keeps your bold and
italics. Choose whether it becomes a new book, gets added to the one you have open, or
replaces it.

**Save as a document** writes the whole manuscript back out as `.doc` (opens in Word,
WordPad, Google Docs and LibreOffice, with real chapter page breaks and your typeface),
`.rtf`, `.txt`, `.html`, `.md`, or a designed PDF.

### Pictures inside the prose

The picture button in any editor drops a photo or animated GIF **at the text cursor** —
mid-chapter, between two paragraphs, wherever you are. Upload it, paste a link, or
reuse anything already in the book. Click a placed picture to set its width, put it
left, centre, right or full width, and give it a caption. Figures carry through the
Book Designer's pagination, the exported HTML book and the Markdown manuscript.

### A Google Doc that keeps itself current

Open **Google Doc Sync**, connect your Google account and this book becomes a real Doc
in your Drive — typeset from your Book Designer settings, so it opens looking like the
book rather than a wall of text: title page, dedication, chapters on new pages as real
headings, justified body with your indent, scene breaks, bold and italics intact.
Leave live updating on and the Doc follows what you write, with a flashing red **LIVE
UPDATING** badge in the top bar and a last-updated time for every book.

> Google only issues sign-in tokens to pages with a real web address, so this needs the
> app served over `http://` or `https://` rather than opened straight off the disk — the
> page detects that and gives you the one command that fixes it. You supply your own
> OAuth Client ID; the sign-in token lives in the tab's memory and is never saved.

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
- **Every page owns its banner.** Nothing cascades and nothing follows you around: the
  banner on the Cover Studio is not the banner on the Prologue. Each one has the same
  full set of controls — six size presets from Compact to Full Bleed, height in pixels,
  reframe up/down *and* left/right (or just drag the picture), zoom, opacity, dark fade,
  blur, and a switch to hide the page name over it. Remove a banner from any page and a
  slim strip stays behind to put it back. If you do want one picture everywhere, one
  button copies it — and each page still keeps its own copy afterwards.
- **Drag your own menu**: press *Arrange Menu* to drag pages between groups, reorder
  groups, rename them, add your own, or reset. Every page also has a **→ dropdown** that
  sends it straight into any other group without dragging.
- **Your books are the menu.** Under *Book Profiles* each book is listed by its own name
  with its picture and word count; clicking one opens that book and lands on its profile.
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

Every page carries a small **?** in the corner. Press it for a plain-English guide: one
sentence on what the page is, a numbered *step by step*, and a *good to know* list. It
stays out of the way until you want it, so the page itself is not crowded. Modals and
complex fields carry their own explanations, and the **?** in the top bar opens the
guide for whatever page you are on.

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
| **Characters** | Every character listed in the menu, each with a full profile page: cover, portrait, dossier, inner life, voice, ties, appearances, gallery, notes. |
| **Google Doc Sync** | This book mirrored into a live-updating Google Doc, typeset from your Book Designer settings. |
| **Storage** | Vault file or storage folder on your own disk, write-ahead saves, snapshot history, verified backups, version-stamped and update-proof. |
| **Export** | Word `.doc`, WordPad `.rtf`, plain `.txt`, JSON backup/restore, clean HTML book, Markdown manuscript, printable manuscript, full story bible, cast sheet, comic script and children's dummy book. |
| **Import** | Word, WordPad, Markdown, HTML or text manuscripts, split into chapters automatically. |

## AI providers

The app ships with a local simulator that works offline. To connect a real model, open
**AI Engine Settings** and add a key for OpenAI, Anthropic or Google Gemini. Requests go
directly from your browser to the provider; keys never leave the local database. Prompt
templates for every AI feature are editable in the Co-Pilot module.
