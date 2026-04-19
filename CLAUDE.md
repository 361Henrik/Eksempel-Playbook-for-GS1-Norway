# CLAUDE.md — GS1 Norway Playbook
## Built on the ThreeSixtyOne Master Starter Template

---

## HOW I WORK — NON-NEGOTIABLE RULES

- **Plan mode first, always.** Read this file fully. Show a numbered plan. Wait for approval. Then build.
- **Design before backend.** Tokens first → shell → sections → features → then any API wiring.
- **One section at a time.** Build it, show it, wait. Do not rebuild approved things.
- **State assumptions in one line, then proceed.** Don't ask permission for every decision.
- **Run `npm run build` before every commit.** No broken builds ever pushed to main.
- **Commit messages:** `feat:`, `fix:`, `chore:`, `docs:` — short and meaningful.

---

## STANDARD TECH STACK

```
Frontend:   React 19 + TypeScript + Vite 6 + Tailwind CSS v4
Icons:      Lucide React
Animation:  Framer Motion (imported as 'motion')
AI calls:   Anthropic Claude API (claude-sonnet-4-20250514)
Deploy:     Vercel (GitHub main branch → auto-deploy)
Domain:     playbook.gs1.threesix1.com
```

---

## SETUP CHECKLIST

Before writing any code, verify all of these:

- [ ] `npm install` — no errors
- [ ] `.env.local` exists and has `VITE_ANTHROPIC_API_KEY` filled in
- [ ] `npm run dev` — app loads on localhost:3000
- [ ] `npm run build` — no TypeScript errors

---

## PROJECT STATE — GS1 Norway Playbook

**PROJECT:** GS1 Norway Kommunikasjonsplaybook 2026

**Purpose:** An interactive web playbook demonstrating Henrik's approach to making
communication strategy operational — living, searchable, and directly usable by AI tools.
This is an example built for GS1 Norway's communication team (Anders, Inger Trine,
Harald, Susanne) to show what a playbook can be as a product, not just a document.

**The one thing they should take away:**
> A playbook is not a PDF — it is an operating system. It controls what AI produces,
> who content is for, and how GS1 speaks with one voice. Build it as a web app
> so it becomes alive, searchable, and can feed directly into AI tools.

**Live URL:** https://playbook.gs1.threesix1.com
**GitHub repo:** https://github.com/361Henrik/Eksempel-Playbook-for-GS1-Norway
**Design system:** System B — GS1 Official Brand (see below)
**Supabase:** No — this is a static content app
**AI features:** Yes — playbook chat in section 8 using VITE_ANTHROPIC_API_KEY
**Content source:** `docs/playbook-content.md` in this repo

---

## DESIGN SYSTEM — GS1 OFFICIAL BRAND

**This is System B. Do NOT use nordic tokens. Replace everything.**

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

/* GS1 Primary colours */
--gs1-blue:        #003087;   /* Primary — headings, nav, key UI */
--gs1-orange:      #F26334;   /* Accent — underlines, bullets, highlights only */
--gs1-white:       #FFFFFF;
--gs1-dark-gray:   #333333;

/* GS1 Secondary (sector colour-coding only) */
--gs1-raspberry:   #D0006F;   /* Retail */
--gs1-teal:        #009CA6;   /* Transport & Logistics */
--gs1-lime:        #78BE20;   /* Marketplaces */
--gs1-purple:      #8246AF;   /* General merchandise */
--gs1-gold:        #C8A951;   /* Finance */

/* Functional */
--gs1-bg:          #F5F5F5;
--gs1-surface:     #FFFFFF;
--gs1-border:      #E0E0E0;
--gs1-text:        #1A1A1A;
--gs1-text-muted:  #5C5C5C;
--gs1-blue-light:  #E6EDF5;   /* Active nav background */

/* Typography */
--font-heading: 'Montserrat', system-ui, sans-serif;   /* Gotham equivalent */
--font-body:    'Inter', system-ui, sans-serif;
```

**Typography rules:**
- `h1`: Montserrat 700, color `#003087`
- `h2/h3`: Montserrat 600, color `#003087`
- Body: Inter 400, color `#1A1A1A`
- No serif fonts anywhere in the UI

**Sidebar:**
- Background: `#FFFFFF`, right border `#E0E0E0`
- Active nav: text `#003087`, background `#E6EDF5`
- GS1 logo in sidebar: `GS1` in Montserrat bold `#003087` + orange underline `#F26334` + `NORWAY` small/regular

**Cards:**
- White background, left border accent in `#003087` (not rounded nordic style)

---

## CONTENT — 8 SECTIONS

All text comes from `docs/playbook-content.md`. Read it before writing any component.

| # | Component | Key content |
|---|-----------|-------------|
| 1 | Introduction.tsx | Vision 2030, playbook vs SOP, who it's for, what it is/isn't |
| 2 | Framework.tsx | GS1 mission, 6 strategy areas, GÅANS values |
| 3 | Audiences.tsx | Audience card structure, 3 placeholder cards |
| 4 | Messaging.tsx | 3-level message architecture, value prop template |
| 5 | Processes.tsx | Resource booking → delivery model, 80/15/5, Dynamisk Brief |
| 6 | ToneOfVoice.tsx | Personality, language rules, before/after examples |
| 7 | Channels.tsx | LinkedIn, web, newsletter, webinar, events |
| 8 | AITools.tsx | GS1 IP, tools roadmap, AI can/can't + live chat demo |

---

## SPECIAL FEATURE: PLAYBOOK CHAT (Section 8)

Add a working chat UI in AITools.tsx using the Anthropic Claude API.

```
Model: claude-sonnet-4-20250514
API key: import.meta.env.VITE_ANTHROPIC_API_KEY
Max tokens: 1000
```

System prompt:
```
You are GS1 Norway's communication assistant. You have access to GS1 Norway's
Communication Playbook 2026. Always answer in Norwegian. Be concrete and practical.
If the question is about communication, messaging, audiences, tone of voice or
channels — answer directly from the playbook. Don't claim things not in the playbook.
Your style: inclusive, inspiring, solution-oriented.
```

Starter buttons (show 3 before first message):
- "Hvem er playbooken for?"
- "Hva er 80/15/5-modellen?"
- "Hvilken tone bruker vi på LinkedIn?"

---

## BUILD ORDER

Follow this exact order. Do not skip ahead.

1. `src/index.css` — Replace all tokens with GS1 system above
2. `src/App.tsx` — Update sidebar shell with GS1 branding
3. `src/components/Introduction.tsx`
4. `src/components/Framework.tsx`
5. `src/components/Audiences.tsx`
6. `src/components/Messaging.tsx`
7. `src/components/Processes.tsx`
8. `src/components/ToneOfVoice.tsx`
9. `src/components/Channels.tsx`
10. `src/components/AITools.tsx` — including chat feature
11. Run `npm run build` — fix any TypeScript errors
12. Commit: `feat: complete GS1 brand rebuild` and push to main

---

## THE ASK FOR THIS SESSION

> Read this file and `docs/playbook-content.md`.
> Enter plan mode. Show me the numbered build plan above with any gaps or
> risks you spot in the current codebase. Do NOT write any code yet.
> Wait for my approval before starting.
