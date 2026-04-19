# GS1 Norway — Kommunikasjonsplaybook

Live playbook for GS1 Norways kommunikasjonsstrategi, bygget med React + Vite + Tailwind CSS.

**Live URL:** https://playbook.gs1.threesix1.com

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4 (nordic design tokens)
- Framer Motion (page transitions)
- Lucide React (ikoner)
- Deployet via Vercel — auto-deploy ved push til `main`

## Lokal utvikling

**Forutsetning:** Node.js 18+

```bash
npm install
npm run dev
```

Åpnes på http://localhost:3000

## Deploy

Alle push til `main` deployes automatisk via Vercel.

```bash
git add .
git commit -m "din melding"
git push origin main
```

## Prosjektstruktur

```
src/
  App.tsx              # Navigasjon + shell
  components/
    Introduction.tsx
    Framework.tsx
    Audiences.tsx
    Messaging.tsx
    Processes.tsx
    ToneOfVoice.tsx
    Channels.tsx
    AITools.tsx
    ui/
      SectionHeader.tsx
  index.css            # Nordic design tokens
```

## Del av GS1 × ThreeSixtyOne AI-suite

| App | URL |
|-----|-----|
| Dynamisk Brief | dynamiskbrief.gs1.threesix1.com |
| InfoHub | infohub.gs1.threesix1.com |
| Publish | publish.gs1.threesix1.com |
| **Playbook** | **playbook.gs1.threesix1.com** |
