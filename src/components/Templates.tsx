import { useState } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { FileText, Linkedin, Mail, Video, CheckSquare, Users, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

type Template = {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  content: string;
};

const TEMPLATES: Template[] = [
  {
    id: 'brief',
    label: 'Dynamisk Brief',
    icon: FileText,
    description: 'Obligatorisk for alle produksjonsoppdrag. Ingen godkjent brief = ingen produksjon.',
    content: `DYNAMISK BRIEF — GS1 Norway

Oppdragstittel: [Kort beskrivelse, maks 10 ord]
Dato: [DD.MM.ÅÅÅÅ]
Bestiller: [Navn + sektoransvar]
Frist for utkast: [Dato]
Frist for publisering: [Dato]

──────────────────────────────
1. FORMÅL OG MÅL
──────────────────────────────
Hva ønsker vi å oppnå med dette innholdet?
[Beskriv ett konkret mål — ikke tre]

Kobling til Vision 2030:
☐ Industry Needs First
☐ Trusted Identification & Data
☐ Accelerating as One GS1

──────────────────────────────
2. MÅLGRUPPE
──────────────────────────────
Primærmålgruppe: [Rolle + sektor, f.eks. "Prosjektleder i bygg"]
Sekundærmålgruppe: [Hvis relevant]
Hvor er de i kjøpsreisen?
☐ Ikke bevisst på problemet
☐ Bevisst på problemet, søker løsning
☐ Vurderer GS1 vs. alternativer
☐ Eksisterende kunde/medlem

──────────────────────────────
3. KANAL OG FORMAT
──────────────────────────────
Primærkanal: ☐ LinkedIn  ☐ Web  ☐ Nyhetsbrev  ☐ Webinar  ☐ Event
Format: [LinkedIn-innlegg / Fagartikkel / Webinar-beskrivelse / Nyhetsbrev-sak / Annet]
Lengde: [Antall tegn / ord / minutter]
Visuelt: [Bilde / Grafik / Ingen — hva skal brukes?]

──────────────────────────────
4. NØKKELBUDSKAP
──────────────────────────────
Hva er det ÉNE vi vil at leseren skal sitte igjen med?
[Én setning]

Budskapspilar:
☐ ROI / Effektivitet  ☐ Etterlevelse & Risiko  ☐ Bærekraft & Sirkularitet

──────────────────────────────
5. FAKTA OG RÅMATERIALE
──────────────────────────────
Tall, caser eller dokumentasjon som skal brukes:
[Lim inn eller lenk til kilde]

Eventuelle sitater som kan brukes:
[Fra kunde, partner eller fagperson]

Lenker som skal inkluderes:
[URL + beskrivelse]

──────────────────────────────
6. ØNSKET HANDLING (CTA)
──────────────────────────────
Hva skal leseren gjøre etter å ha lest?
[Én spesifikk handling — ikke to]

──────────────────────────────
7. GODKJENNING
──────────────────────────────
Faglig godkjenning kreves: ☐ Ja  ☐ Nei
Fagansvarlig: [Navn]
Ledergodkjenning kreves: ☐ Ja  ☐ Nei

Status: ☐ Utkast  ☐ Sendt til godkjenning  ☐ Godkjent  ☐ Klar for produksjon`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn-mal',
    icon: Linkedin,
    description: 'Struktur for LinkedIn-innlegg. Tilpass med konkret case eller innsikt.',
    content: `LINKEDIN-MAL — GS1 Norway

──────────────────────────────
ÅPNINGSHOOK (linje 1–2, avgjørende)
──────────────────────────────
Velg én type:
A) Tall/fakta:    "[X]% av [målgruppe] opplever [problem]."
B) Observasjon:  "[Konkret observasjon fra virkeligheten]."
C) Spørsmål:     "Hva skjer når [problem oppstår]?"
D) Påstand:      "[Kontraintuitiv eller overraskende påstand]."

EKSEMPEL: "Tre av fire byggprosjekter overskrider budsjett."

──────────────────────────────
KJERNE (3–5 setninger)
──────────────────────────────
• Utdyp observasjonen eller problemet
• Forklar årsak (uten å nevne GS1 enda)
• Introduser løsning eller perspektiv
• Koble til GS1-relevans naturlig

EKSEMPEL:
"En viktig årsak: vi vet ikke hvor materialene er.
Mangel på felles produktidentifikasjon betyr at samme bolt
finnes under 12 ulike varenumre på tvers av systemer.
GTIN løser dette — ett nummer, alle systemer."

──────────────────────────────
AVSLUTNING + CTA
──────────────────────────────
Velg én type:
A) Spørsmål til leseren: "Hva er din erfaring med [tema]?"
B) Ressurs-CTA:          "Mer om dette i kommentarfeltet ↓"
C) Invitasjon:           "Meld deg på webinaret — lenke under."

──────────────────────────────
TEKNISKE KRAV
──────────────────────────────
☐ Under 1 300 tegn total (for å unngå "les mer"-avkorting)
☐ Lenker lagt i første kommentar — ikke i innlegget
☐ Maks 2–3 hashtags helt nederst
☐ Ingen "Hos GS1 Norway..." i åpningslinjen
☐ Én grafik eller ett bilde (ikke karusell)
☐ Faglig innhold verifisert av fagansvarlig`,
  },
  {
    id: 'newsletter',
    label: 'Nyhetsbrev-mal',
    icon: Mail,
    description: 'Struktur for månedlig eller temaspesifikt nyhetsbrev.',
    content: `NYHETSBREV-MAL — GS1 Norway

──────────────────────────────
TEKNISKE METADATA
──────────────────────────────
Emnelinje (maks 50 tegn):    [Skriv inn]
Preheader-tekst (40–90 tegn): [Skriv inn — brukes som preview-tekst]
Avsendernavn:                 [Henrik fra GS1 Norway] (ikke "info@")
Segment:                      ☐ Alle  ☐ Bygg  ☐ Helse  ☐ Dagligvare  ☐ Energi
Sendingstidspunkt:            Tirsdag–onsdag, 08:00–10:00

──────────────────────────────
BLOKK 1 — ÅPNING (personlig, 2–3 setninger)
──────────────────────────────
[Kort, direkte åpning — gjerne en observasjon fra uken/måneden]

EKSEMPEL:
"Denne måneden har vi hatt tre samtaler med byggherrer som ikke
visste at EU allerede har satt dato for obligatorisk produktpass.
Her er det du bør vite."

──────────────────────────────
BLOKK 2 — HOVEDSAK (én stor sak)
──────────────────────────────
Overskrift:  [Tydelig, problemorientert]
Ingress:     [2–3 setninger — hva handler det om og hvorfor nå?]
Brødtekst:  [3–5 avsnitt med én idé per avsnitt]
CTA-knapp:  [Tekst på knapp] → [URL]

──────────────────────────────
BLOKK 3 — KORTNYTT (2–3 saker)
──────────────────────────────
• [Overskrift] — [1–2 setninger + lenke]
• [Overskrift] — [1–2 setninger + lenke]
• [Overskrift] — [1–2 setninger + lenke]

──────────────────────────────
BLOKK 4 — RESSURS ELLER EVENT
──────────────────────────────
☐ Kommende webinar: [Tittel + dato + påmeldingslenke]
☐ Ny veileder: [Tittel + kort beskrivelse + nedlastingslenke]
☐ Relevant rapport: [Tittel + kilde + lenke]

──────────────────────────────
BLOKK 5 — AVSLUTNING
──────────────────────────────
[Vennlig avslutning + signatur med navn, tittel og bilde]

──────────────────────────────
SJEKKLISTE FØR UTSENDING
──────────────────────────────
☐ Emnelinje under 50 tegn og testet mot spam-filter
☐ Alle lenker testet og fungerende
☐ Preheader-tekst skrevet og ikke duplikat av emnelinjen
☐ Segmentering er riktig satt i e-postverktøyet
☐ Avmeldingslenke er synlig i footer
☐ Testsending sendt og godkjent`,
  },
  {
    id: 'webinar',
    label: 'Webinar-beskrivelse',
    icon: Video,
    description: 'Mal for påmeldingsside og markedsføring av webinar.',
    content: `WEBINAR-BESKRIVELSE — GS1 Norway

──────────────────────────────
TITTEL (navngi problemet, ikke løsningen)
──────────────────────────────
Formel: "[Konkret handling/endring]: Hva [målgruppe] må gjøre [tidsperspektiv]"

EKSEMPEL: "Fra strekkode til QR-kode: Hva norsk dagligvare må gjøre før 2027"
IKKE:     "GS1 Sunrise 2027-webinar"

──────────────────────────────
INGRESS (2–3 setninger, på påmeldingssiden)
──────────────────────────────
[Beskriv problemet/konteksten → hva webinaret løser → hvem det er for]

EKSEMPEL:
"Overgangen til 2D-koder er i gang — og butikkkassene må oppgraderes.
I dette webinaret viser vi hva det betyr for produsenter, grossister
og kjeder i praksis, og hva du konkret bør gjøre nå."

──────────────────────────────
DU LÆRER (3–5 læringsmål)
──────────────────────────────
• [Læringsmål 1 — konkret og handlingsorientert]
• [Læringsmål 2]
• [Læringsmål 3]
• [Læringsmål 4 — valgfritt]

──────────────────────────────
PRAKTISK INFO
──────────────────────────────
Dato og tid:   [DD.MM.ÅÅÅÅ, HH:MM–HH:MM]
Varighet:      [45 / 60 / 90 minutter]
Plattform:     [Teams / Zoom / Webex]
Pris:          Gratis for deltakere
Kapasitet:     [Maks X deltakere]

──────────────────────────────
AGENDA
──────────────────────────────
[HH:MM] Introduksjon og bakgrunn (X min)
[HH:MM] [Faglig hoveddel] (X min)
[HH:MM] Casepresentasjon: [Gjest/virksomhet] (X min)
[HH:MM] Spørsmål og diskusjon (X min)

──────────────────────────────
TALERE
──────────────────────────────
[Navn], [Tittel], GS1 Norway
[Navn], [Tittel], [Ekstern virksomhet] — om mulig, legg til ekstern gjest

──────────────────────────────
ETTERPÅ FÅR DU
──────────────────────────────
• Opptak tilgjengelig i [X] dager etter webinaret
• Lysbildene som PDF
• Relevant veileder eller rapport
• Mulighet for 1:1 oppfølgingssamtale`,
  },
];

const APPROVAL_FLOW = [
  { step: 1, role: 'Bestiller (sektoransvarlig)', action: 'Fyller ut Dynamisk Brief', color: 'bg-gs1-blue' },
  { step: 2, role: 'Kommunikasjon', action: 'Vurderer brief og bekrefter kapasitet og prioritering', color: 'bg-gs1-blue' },
  { step: 3, role: 'Kommunikasjon', action: 'Produserer utkast (med eller uten AI)', color: 'bg-gs1-orange' },
  { step: 4, role: 'Fagansvarlig', action: 'Verifiserer fakta, tall og regulatoriske formuleringer (5%)', color: 'bg-gs1-orange' },
  { step: 5, role: 'Ledelse (ved behov)', action: 'Godkjenner posisjon, tone og sensitive budskap', color: 'bg-gs1-blue' },
  { step: 6, role: 'Kommunikasjon', action: 'Finpusser og klargjør for publisering', color: 'bg-gs1-blue' },
  { step: 7, role: 'Kommunikasjon', action: 'Publiserer og registrerer i årshjul/CMS', color: 'bg-gs1-orange' },
];

const PUBLISH_CHECKLIST = [
  { category: 'Innhold', items: ['Er det ÉN tydelig hoved-idé?', 'Er alle tekniske begreper forklart?', 'Er fakta og tall verifisert av fagansvarlig?', 'Er kjernebudskapet knyttet til forretningsverdi (ROI, risiko eller bærekraft)?'] },
  { category: 'Tone', items: ['Er teksten i aktiv form ("vi gjør", "du får")?', 'Er det unngått stammespråk uten forklaring?', 'Er åpningslinjen sterk nok til å stoppe scrollingen?', 'Er det ingen "Hos GS1 Norway..." åpning?'] },
  { category: 'Teknisk', items: ['Er alle lenker testet?', 'Er det én primær CTA (ikke tre)?', 'Er lenker i LinkedIn lagt i første kommentar?', 'Er bilde eller grafik riktig størrelse for kanalen?'] },
  { category: 'Godkjenning', items: ['Er Dynamisk Brief fylt ut og arkivert?', 'Er faglig godkjenning innhentet der det kreves?', 'Er publiseringstidspunkt satt og kommunisert?'] },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-gs1-border rounded bg-white hover:border-gs1-blue hover:text-gs1-blue transition-colors"
    >
      {copied ? <Check size={12} className="text-gs1-blue" /> : <Copy size={12} />}
      {copied ? 'Kopiert' : 'Kopier'}
    </button>
  );
}

function ChecklistSection({ category, items }: { category: string; items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  const allDone = checked.every(Boolean);

  return (
    <div className="bg-white border border-gs1-border rounded overflow-hidden">
      <div className={`px-5 py-3 flex items-center justify-between ${allDone ? 'bg-gs1-blue' : 'bg-gs1-bg'} border-b border-gs1-border`}>
        <span className={`text-xs font-bold uppercase tracking-wider ${allDone ? 'text-white' : 'text-gs1-blue'}`}>{category}</span>
        {allDone && <Check size={14} className="text-white" />}
      </div>
      <ul className="divide-y divide-gs1-border">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-gs1-bg transition-colors"
            onClick={() => setChecked(prev => prev.map((v, j) => j === i ? !v : v))}
          >
            <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${checked[i] ? 'bg-gs1-blue border-gs1-blue' : 'border-gs1-border'}`}>
              {checked[i] && <Check size={10} className="text-white" />}
            </div>
            <span className={`text-sm ${checked[i] ? 'line-through text-gs1-muted' : 'text-gs1-text'}`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Templates() {
  const [activeId, setActiveId] = useState(TEMPLATES[0].id);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const active = TEMPLATES.find(t => t.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <div className="space-y-12">
      <SectionHeader
        title="Maler og Sjekklister"
        description="Klare-til-bruk maler for de viktigste innholdstypene, godkjenningsflyt og interaktiv publiseringssjekkliste."
        exampleNote="Malene kan brukes direkte eller tilpasses — de er ikke offisielt godkjent"
      />

      {/* Maler */}
      <div>
        <h3 className="font-display font-semibold text-gs1-blue mb-4">Innholdsmaler</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {TEMPLATES.map(t => {
            const TIcon = t.icon;
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded transition-colors
                  ${isActive ? 'bg-gs1-blue text-white border-gs1-blue' : 'bg-white text-gs1-text border-gs1-border hover:border-gs1-blue hover:text-gs1-blue'}`}
              >
                <TIcon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="bg-white border border-gs1-border rounded overflow-hidden">
          <div className="px-6 py-4 border-b border-gs1-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gs1-blue-light rounded">
                <ActiveIcon size={18} className="text-gs1-blue" />
              </div>
              <div>
                <p className="font-display font-semibold text-gs1-text">{active.label}</p>
                <p className="text-xs text-gs1-muted">{active.description}</p>
              </div>
            </div>
            <CopyButton text={active.content} />
          </div>
          <pre className="p-6 text-sm text-gs1-text leading-relaxed whitespace-pre-wrap font-sans bg-gs1-bg overflow-x-auto">
            {active.content}
          </pre>
        </div>
      </div>

      {/* Godkjenningsflyt */}
      <div>
        <h3 className="font-display font-semibold text-gs1-blue mb-2">Godkjenningsflyt</h3>
        <p className="text-sm text-gs1-muted mb-5">Hvem gjør hva — fra brief til publisering.</p>
        <div className="space-y-2">
          {APPROVAL_FLOW.map((step, i) => (
            <div key={i} className="bg-white border border-gs1-border rounded overflow-hidden">
              <button
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
                onClick={() => setExpandedStep(expandedStep === i ? null : i)}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${step.color}`}>
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-gs1-muted uppercase tracking-wider block">{step.role}</span>
                  <span className="text-sm text-gs1-text">{step.action}</span>
                </div>
                {expandedStep === i ? <ChevronUp size={16} className="text-gs1-muted shrink-0" /> : <ChevronDown size={16} className="text-gs1-muted shrink-0" />}
              </button>
              {expandedStep === i && (
                <div className="px-5 pb-4 border-t border-gs1-border bg-gs1-bg">
                  <p className="text-sm text-gs1-muted pt-3">
                    {i === 0 && 'Bestiller er ansvarlig for at brief er komplett og faktasjekket før innsending. Ufullstendige briefs returneres.'}
                    {i === 1 && 'Kommunikasjon bekrefter mottak innen 1 virkedag. Kapasitetsvurdering og prioritering skjer her — ikke i etterkant.'}
                    {i === 2 && 'AI brukes for struktur og førsteutkast (80%). Kommunikasjon foredler vinkling, flyt og merkevare (15%).'}
                    {i === 3 && 'Fagansvarlig verifiserer alle faktapåstander, tall og regulatoriske referanser. Svarfrist: 1 virkedag.'}
                    {i === 4 && 'Ledergodkjenning kreves for: posisjoneringsutsagn, saker med politisk eller juridisk sensitivitet, og kampanjer med stor rekkevidde.'}
                    {i === 5 && 'Siste gjennomgang av tone, lengde og tekniske krav (lenker, metadata, bilde) før publisering.'}
                    {i === 6 && 'Publisering registreres i årshjulet. LinkedIn-innlegg planlegges via Hootsuite/Buffer. Effektmåling settes opp.'}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Publiseringssjekkliste */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <CheckSquare size={20} className="text-gs1-blue" />
          <h3 className="font-display font-semibold text-gs1-blue m-0">Publiseringssjekkliste</h3>
        </div>
        <p className="text-sm text-gs1-muted mb-5">Interaktiv — klikk av hvert punkt. Husk: sjekklisten nullstilles ved reload.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {PUBLISH_CHECKLIST.map((section, i) => (
            <ChecklistSection key={i} category={section.category} items={section.items} />
          ))}
        </div>
      </div>
    </div>
  );
}
