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
Only the open book's characters are listed — each book keeps its own cast, its own album and its own music. Click any of them for their own page: a cover picture, a portrait you can size, shape
and position, and seven tabs — Dossier, Inner Life, Voice & Dialogue, Relationships,
Appearances, Gallery, Notes. A gauge tells you what is still blank, four AI buttons
read the character *and* the book before suggesting anything (and work offline), and
**Appearances** finds them in your actual prologue and chapters by name, updating
itself as you write.

#### The deeper questions

Under the ordinary fields, each tab carries folded sections you can open when you want
more — forty optional questions, none of them required, every answer handed to the
character when you talk to them.

Three of the folds are for anybody: **How they sound, moment to moment** (how they
address people, what they say while thinking, how their voice changes when they are
angry, what their silence means, and — the one the chat needed most — *exactly how they
change the subject*), **Who they love**, and **What they stand on**.

Two of them exist because a character is not always a person. **If they are not human**
asks for species, size beside a person, what the body can and cannot do, which sense
comes first, what the body does before thought, how long their kind lives, and — for a
construct or a bound thing — what they are made of and which rules they cannot break.
**If they do not talk like a person** starts with the only question on the whole sheet
that changes the *shape* of a reply:

| Can they talk? | What you get back |
| --- | --- |
| Talks like anyone else | Ordinary dialogue |
| Talks, but the mouth fights it | Speech spelled the way it actually comes out, the same way every time |
| Talks, but only to their own kind | Dialogue to their own; to anyone else, the noise a listener would really hear |
| Talks, but only to one person | The same, but for one named person |
| Never aloud — mind to mind | Short, strange, arriving as feeling before words |
| Thinks in words, cannot say one | Clear thought inside, nothing out — the gap is the point |
| No words at all | Movement, posture and sound. Not one word of dialogue, ever |

Underneath sit the things that make a non-human stay non-human: the sounds they make
instead of words, the ideas their kind has no word for, their own private vocabulary,
what their mouth does to a word, and how they say "I" — including a hive that has no
such word.

Answer any of these and the instructions the model is given change, not just the facts:
a character who cannot speak is told outright that there is no dialogue, and the rules
about speaking in first person are *replaced* rather than piled on top. A character with
no voice is also never read aloud — the app will not let a text-to-speech engine narrate
a badger.

### Writing the way a word processor works

Writing pages open with **nothing but the writing**. The chapter list, the feed options,
the story map, the advice and the progress bar are all still there — they slide in over
the page when you ask for them from the bar above the text, and go away again. One button
switches the panels back to sitting permanently beside the page if you prefer that.

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

### Actually talking to your characters

The **Dialogue Sandbox** is a real conversation. Everything on a character's sheet —
what they want, what they need, their flaws, fears, the secret they will not volunteer,
the wound underneath it, how they speak, words they would never use, who they know and
how, the lines you have kept, the chapters they appear in, and the world the book is set
in — is assembled into who they believe they are before every single reply. Press
**Persona** to read exactly what is sent; if they are not answering the way you expect,
the missing piece is almost always a blank field on their sheet.

Set **the scene** — who they think you are, where and when this is happening, anything
they are holding in mind. A character speaks very differently to a stranger than to the
brother they have not seen in nine years, and that one field changes more than anything
else. Replies stream in as they are written. You can ask for another take, edit what you
said and have them answer the new version, or keep a line they gave you straight onto
their sheet as one of their quotes.

They stay in character: they only know what they would know, they can refuse, lie,
deflect or get angry, and if you ask whether they are an AI they react like a person
being asked something bizarre. With no API key at all it still works — an offline
simulator answers from the same sheet.

**The engine is on this page too.** The header names whoever is answering and turns
amber when nothing can. Next to it, **ENGINE** opens the whole control — four engines,
the key, the model, a test — and the same control sits beside the conversation. When the
engine you picked has no key, a strip above the chat says so and takes the key right
there, with a link to where that provider hands them out. Whatever you choose applies to
the entire app from then on; there is nothing else to set up, and nothing is rebuilt
while you are still pasting.

### Letting them speak back

Three engines, chosen per character, because the quiet one and the one who shouts do not
have to share a voice:

| | What it needs | What it sounds like |
| --- | --- | --- |
| **Built in** | Nothing at all | Your computer's own voice — free, instant, offline, and audibly a computer |
| **Gemini** | The Gemini key you already have | Thirty studio voices |
| **ElevenLabs** | An ElevenLabs key | The most lifelike, and the only one that can be taught a new voice |

**ElevenLabs can learn a character's voice from one recording.** Put about thirty seconds
of clean speech on their Voice Clips tab — your own read, an actor, anything you have the
right to use — and one button turns it into a voice only that character has. From then on
every reply is spoken in it.

> Character.AI does not publish a developer API, so nothing can connect to it. What this
> does instead is run the same idea against a model you control: your character sheet
> becomes the persona, and the voice comes from one of the three engines above.

### Music that follows you

Every character's **Voice Clips** tab carries a music player, and the small dock in the
bottom corner can add one to any page. Drop in your songs — SUNO exports, MP3s, anything —
and each player decides for itself where it belongs: this page only, one character's pages
(their sheet and the chat with them), every page of a book, or the whole app. Turn on
*start playing as soon as I arrive* and it begins by itself whenever you land somewhere
it belongs, keeps going while you move between pages it belongs to, and goes quiet when
you leave them. Loop, shuffle and volume are per player.

### Their own clips as their voice

The voice dialog has a fourth option: **Their own clips**. Each reply plays one of the
recordings on their Voice Clips tab — the one whose name or note best fits what they just
said (a clip called *angry* is picked for an angry line), otherwise one at random. It is
free, offline, and in their real voice, with the honest limit that a browser cannot make
a recording say new words; that still takes ElevenLabs behind it. Character.AI publishes
no way in, so nothing can be brought across from there.

### Talking to them on Character.AI instead

The chat header has a switch: **HERE** or **CHARACTER.AI**. In Character.AI mode the
conversation pane becomes theirs — the character remembers the link to their Character.AI
chat, *Find them* opens the site's search with their name, and their conversation opens
with the site's own login and voice.

In a browser it opens in one window beside the app. That is Character.AI's rule, not
this app's: their servers send `X-Frame-Options: SAMEORIGIN`, which tells every browser
to refuse their pages inside anyone else's, and nothing in a web page can override it.

**To have it inside the app**, run the desktop version. It is the same `index.html` in a
window of its own — the story app is not rebuilt or changed — and the only thing the
window adds is the ability to draw Character.AI's chat right in the pane, login kept
between sessions. From the `desktop` folder:

```
npm install        # once
npm start          # run it
npm run build:win  # or build:mac / build:linux — makes an installer in desktop/dist
```

### Hearing your characters

Every character page has a **Voice Clips** tab. The *Voice & Dialogue* tab is where you
write down how someone speaks; this is where you keep proof. Upload samples you made
anywhere — an AI voice tool such as ElevenLabs, a phone recording, an actor's read — or
**record one on the spot** from your microphone. Name each clip (*Calm*, *Furious*,
*Lying*), reorder them, and press play.

Beside the character's name sits **Hear them**: one press plays a clip at random, never
repeating the one that just sounded, so you get a different side of them each time. If
you already wrote their voice notes, *Copy their voice notes* assembles a ready-made
prompt — how they speak, words they use, words they never use, their recorded lines — to
paste straight into whichever voice tool you use.

### Pictures inside the prose

The picture button in any editor drops a photo or animated GIF **at the text cursor** —
mid-chapter, between two paragraphs, wherever you are. Upload it, paste a link, or
reuse anything already in the book. Click a placed picture to set its width, put it
left, centre, right or full width, and give it a caption. Figures carry through the
Book Designer's pagination, the exported HTML book and the Markdown manuscript.

### A live document on your own PC

Open a book's **Live Documents** tab and point it at a WordPad (`.rtf`), Word (`.doc`)
or Notepad (`.txt`) file on your disk. From then on the app keeps that file up to date
while you write. Close the app entirely, open the document, and the whole book is there
— title page, dedication, every chapter starting on a new page, page numbers at the
foot, set in your Book Designer typeface at your trim size and margins. Hand it to a
printer as it is.

**Pictures are embedded inside the file itself**, at the size and position you gave
them, so the document stands alone. Each book can have as many linked documents as you
like, and each decides for itself whether it carries pictures — so keep a formatted
`.rtf` with the artwork *and* a raw `.txt` of nothing but the words, both always current.

It is deliberately not per-keystroke: a file is rewritten only when the manuscript has
actually changed, and at most once every few seconds (you choose, per document). Each
picture is encoded once and reused, so a long illustrated book costs no more than a
short one.

> Writing straight to a file needs Chrome, Edge, Opera or Brave. Firefox and Safari do
> not support it yet — there, *Save as a document* produces exactly the same file by hand.

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
| **Cast System** | Four-tier character matrix with full dossiers, a draggable relationship node map (plus matrix and list views), and a dialogue sandbox where characters answer from their whole sheet and can speak back in a voice of their own. |
| **Workspaces** | Twelve genre dossiers, a comic studio with ten panel layouts and script export, and a children's-book studio with age-tier layouts and exportable AI art prompts. |
| **Vault** | Draggable moodboard canvas, external reference library, and six in-depth masterclass craft lessons. |
| **Book Designer** | Your book typeset on real pages — eight print templates, trim sizes, margins, drop caps, running heads, page numbers — previewed live and exported as a proper PDF. |
| **Idea Lab** | Twenty-one brainstorming tools that read your book first, plus a Story Advisor that works out what you should write next. |
| **Characters** | Every character listed in the menu, each with a full profile page: cover picture you drag to reframe, portrait, dossier, inner life, voice, ties, appearances, gallery, voice clips you can play, notes. |
| **Google Doc Sync** | This book mirrored into a live-updating Google Doc, typeset from your Book Designer settings. |
| **Storage** | Vault file or storage folder on your own disk, write-ahead saves, snapshot history, verified backups, version-stamped and update-proof. |
| **Live Documents** | A WordPad, Word or Notepad file on your own PC kept up to date as you write, print-formatted, with pictures embedded — or a raw-text twin without them. Per book. |
| **Export** | Word `.doc`, WordPad `.rtf`, plain `.txt`, JSON backup/restore, clean HTML book, Markdown manuscript, printable manuscript, full story bible, cast sheet, comic script and children's dummy book. |
| **Import** | Word, WordPad, Markdown, HTML or text manuscripts, split into chapters automatically. |

## AI providers

The app ships with a local simulator that works offline. To connect a real model, either
press **ENGINE** on the Dialogue Sandbox or open **AI Engine Settings** — they are the
same setting — and add a key for OpenAI, Anthropic or Google Gemini. For speech,
add an optional ElevenLabs key in the same place. Requests go directly from your browser
to the provider; keys never leave the local database and are never sent anywhere else.
Prompt templates for every AI feature are editable in the Co-Pilot module — except a
character's persona, which is built from their sheet rather than a template.
