# CLAUDE.md — GS1 Norway Kommunikasjonsplaybook
## Prosjektkontekst

Dette er Henriks eksempel-playbook for GS1 Norway — bygget som en demonstrasjon av
hvordan en kommunikasjonsplaybook kan gjøres operativ, interaktiv og AI-tilgjengelig.

Målgruppen er GS1 Norways kommunikasjonsteam:
- Anders Askevold (kommunikasjonsdirektør)
- Inger Trine Langelo (marketing)
- Harald Granström (audiovisuell design)
- Susanne Lavoll (PA & strategisk kommunikasjon)

**Budskapet de skal sitte igjen med:**
> En playbook er ikke et dokument — det er et operativt system. Den styrer hva AI
> produserer, hvem innholdet er for, og hvordan GS1 fremstår med én stemme.
> Dette er Henrik/ThreeSixtyOnes tilnærming: bygg playbooken som en webapp slik at
> den blir levende, søkbar og kan mates direkte inn i AI-verktøy.

---

## Design — GS1 Official Brand System

Bruk GS1s offisielle designsystem fra GS1 Global Brand Manual V2.0.
IKKE bruk de nordic design tokens fra tidligere iterasjoner av dette prosjektet.

### Fargepalett
```css
/* GS1 Primary */
--gs1-blue:        #003087;   /* GS1 Blue — C100 M80 Y0 K42 — primær */
--gs1-orange:      #F26334;   /* GS1 Orange — C0 M76 Y88 K0 — aksent */
--gs1-white:       #FFFFFF;
--gs1-dark-gray:   #333333;   /* GS1 Dark Gray — C0 M0 Y0 K80 */

/* GS1 Secondary (bruk til sektor-koding) */
--gs1-raspberry:   #D0006F;   /* Retail */
--gs1-teal:        #009CA6;   /* Transport & Logistics */
--gs1-lime:        #78BE20;   /* Marketplaces */
--gs1-purple:      #8246AF;   /* General merchandise */
--gs1-gold:        #C8A951;   /* Finance */

/* Funksjonelle farger */
--gs1-bg:          #F5F5F5;   /* Bakgrunn */
--gs1-surface:     #FFFFFF;   /* Kort/flater */
--gs1-border:      #D9D9D9;   /* Kanter */
--gs1-text:        #1A1A1A;   /* Brødtekst */
--gs1-text-muted:  #5C5C5C;   /* Sekundær tekst */
--gs1-blue-light:  #E6EDF5;   /* Lys blå bakgrunn for aktive elementer */
```

### Typografi
GS1 bruker **Gotham Office** som primærfont for profesjonelt designmateriale.
For web: bruk **Montserrat** som nærmeste Google Fonts-ekvivalent til Gotham.
Fallback: `system-ui, -apple-system, sans-serif`

```css
--font-primary: 'Montserrat', system-ui, sans-serif;
--font-body:    'Inter', system-ui, sans-serif;  /* brødtekst */
```

Import i CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
```

### Logo-behandling
- GS1-logoen brukes alltid på hvit eller lys bakgrunn
- Logoens primærfarge er GS1 Blue (#003087)
- Orangen (#F26334) er kun i selve "1"-symbolet i logoen
- Bruk tekstbasert GS1-representasjon i header: `GS1` i bold + `Norway` i regular

---

## Playbook-innhold — 8 seksjoner

All innholdstekst er basert på det vedlagte Google-dokumentet:
"GS1 Norway Kommunikasjon - Playbook 2026 - Fra operativ støtte til strategisk vekstmotor"

### Seksjon 1: Introduksjon
- GS1 Norway: fra operativ støtte til strategisk vekstmotor
- Vision 2030: Industry Needs First, Trusted Data, One GS1
- Playbooken vs SOP — hva er hva
- Hvem playbooken er for (kommunikasjonsteam, sektor/fag, ledelse, AI-verktøy)
- Hva playbooken er og ikke er

### Seksjon 2: Rammeverk & Strategi
- GS1 Norways samfunnsoppdrag
- Vision 2030 og de seks strategiområdene
- Global Office mandat: Industry Needs First, Trusted Data, One GS1
- Verdiene GÅANS i kommunikasjon (Grundig, Åpen, Ansvarlig, Nysgjerrig, Sammen)

### Seksjon 3: Målgrupper
- Overordnet målgruppelogikk (sektor × rolle × makrobehov)
- Audience Card-struktur (ID, mål, KPIer, utfordringer, innvendinger, kanaler)
- Placeholder cards for: Byggherre/direktør, IKT-direktør helse, Kategoriansvarlig dagligvare
- Vis tydelig at dette er levende data som oppdateres

### Seksjon 4: Budskap & Verdiforslag
- Budskaps-arkitektur (tre nivåer: posisjon → pilarer → moduler)
- Verdiforslag per målgruppe-mal
- Prioriterte eksempeltyper: ROI-caser, tankelederskap, gjenbrukbart innhold

### Seksjon 5: Arbeidsprosesser (SOP)
- Fra ressursbooking til leveransedrevet modell
- Standard kommunikasjonsprodukter (kampanje, webinar, ROI-case, osv.)
- Dynamisk Brief — «ingen brief = ingen produksjon»
- 80/15/5-modellen (AI 80% / kommunikasjon 15% / fagperson 5%)
- Roller: sektor vs. kommunikasjon vs. ledelse

### Seksjon 6: Tone of Voice
- Personlighet: inkluderende, inspirerende, løsningsorientert
- Praktiske språkregler (aktiv form, kort og konkret, én idé per avsnitt)
- Gode/dårlige eksempler (placeholder — vis strukturen)

### Seksjon 7: Kanaler
- LinkedIn, web, nyhetsbrev, webinar, Nordic Summit/Arendalsuka
- For hver kanal: rolle, målgruppe, format, rytme, suksesskriterier

### Seksjon 8: AI & Verktøy
- GS1 Norway sin kommunikasjons-IP (verdibudskap, audience cards, ToV)
- Dynamisk Brief, InfoHub, publiseringsløsning
- Hva AI kan og ikke kan gjøre
- BONUS: Enkel chat-demo mot playbook-innhold (se under)

---

## Spesiell feature: Playbook Chat

Legg til en enkel chat-funksjon i seksjonen for AI & Verktøy som demonstrerer
hvordan playbooken kan brukes som kunnskapsbase.

Bruk Anthropic Claude API (claude-sonnet-4-20250514) med playbook-innholdet
som system prompt. Nøkkelen hentes fra `import.meta.env.VITE_ANTHROPIC_API_KEY`.

System prompt for chatten:
```
Du er GS1 Norways kommunikasjonsassistent. Du har tilgang til GS1 Norways
kommunikasjonsplaybook 2026. Svar alltid på norsk. Vær konkret og praktisk.
Hvis spørsmålet handler om kommunikasjon, budskap, målgrupper, tone of voice
eller kanaler — svar direkte fra playbooken. Ikke påstå ting som ikke er i
playbooken. Sitt stil: inkluderende, inspirerende, løsningsorientert.
```

Vis 3 eksempel-spørsmål som starter-knapper:
- "Hvem er playbooken for?"
- "Hva er 80/15/5-modellen?"
- "Hvilken tone skal vi bruke på LinkedIn?"

---

## Teknisk stack

```
React 19 + TypeScript
Vite 6
Tailwind CSS v4 med GS1 design tokens (se over)
Framer Motion (seksjonsoverganger)
Lucide React (ikoner)
Claude API (playbook chat i seksjon 8)
Vercel (deploy)
```

## Miljøvariabler
```bash
# .env.local (aldri commit)
VITE_ANTHROPIC_API_KEY=din-nøkkel-her
```

---

## Lokalt oppsett
```bash
npm install
cp .env.example .env.local
# Legg inn VITE_ANTHROPIC_API_KEY i .env.local
npm run dev
# Åpnes på http://localhost:3000
```

## Deploy
```bash
git add .
git commit -m "feat: din beskrivelse"
git push origin main
# → Vercel deployer automatisk til playbook.gs1.threesix1.com
```

---

## Hva Claude Code skal gjøre i plan mode

1. **Les dette dokumentet** som første steg
2. **Lag en plan** for å erstatte alt eksisterende innhold og design med GS1-systemet
3. **Vent på godkjenning** av planen før du skriver kode
4. Bygg ut en seksjon av gangen — start med `index.css` (design tokens) og `App.tsx` (shell)
5. Bygg deretter hver seksjon i denne rekkefølgen:
   - Introduction.tsx
   - Framework.tsx  
   - Audiences.tsx
   - Messaging.tsx
   - Processes.tsx
   - ToneOfVoice.tsx
   - Channels.tsx
   - AITools.tsx (inkl. chat-funksjonen)
6. Test at `npm run build` kjører rent uten TypeScript-feil
7. Commit og push til main

## Tone i koden
- Norsk innhold gjennomgående
- Kommentarer på norsk
- Komponentnavn på engelsk (React-konvensjon)
- Alle tekst-strenger på norsk
