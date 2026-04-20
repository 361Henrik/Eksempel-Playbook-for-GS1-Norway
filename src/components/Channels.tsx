import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { Linkedin, Globe, Mail, Video, Users, CheckCircle2, AlertCircle, Target, MessageSquare } from 'lucide-react';

type Channel = {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  purpose: string;
  audience: string;
  formats: { title: string; structure: string }[];
  bestPractices: string[];
  ctas: string[];
  qualityCheck: string[];
  example: { label: string; text: string };
};

const CHANNELS: Channel[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    tagline: 'Tankelederskap og organisk reach',
    purpose: 'LinkedIn er GS1 Norways primærkanal for å nå beslutningstakere, bygge troverdighet og etablere tankelederskap i prioriterte sektorer.',
    audience: 'C-suite og fagledere i bygg, helse, dagligvare og energi. IKT-direktører, innkjøpssjefer, bærekraftsansvarlige.',
    formats: [
      { title: 'Erfaringsinnlegg', structure: 'Åpningsobservasjon (1–2 setninger) → kjerne med innsikt eller case (3–5 setninger) → avsluttende spørsmål eller CTA' },
      { title: 'Bransjeinnsikt', structure: 'Statistikk eller faktum → tolkning og relevans → konsekvens for leseren → CTA' },
      { title: 'Case-deling', structure: 'Problem → løsning via GS1-standard → konkret resultat (tall der mulig) → hva andre kan lære' },
    ],
    bestPractices: [
      'Under 1 300 tegn for full synlighet uten "les mer"-klikk',
      'Åpne med en observasjon eller et faktum — aldri med "Hos GS1 Norway..."',
      'Én grafik eller ett bilde per innlegg — ikke karusell',
      'Legg alle lenker i første kommentar, ikke i selve innlegget',
      'Publiser tirsdag–torsdag mellom 08–10 eller 12–13 for høyest rekkevidde',
      'Unngå hashtags i brødteksten — maks 2–3 hashtags helt nederst',
    ],
    ctas: [
      '"Last ned veilederen — lenke i første kommentar"',
      '"Hva er din erfaring? Del gjerne i kommentarfeltet"',
      '"Meld deg på webinaret — lenke i kommentarfeltet"',
      '"Ta kontakt med [navn] for en uforpliktende prat"',
    ],
    qualityCheck: [
      'Er første setning sterk nok til å stoppe scrollingen?',
      'Kobles innlegget til et konkret forretningsproblem (ikke bare standarden)?',
      'Er tonen aktiv og direkte — ingen passiv form?',
      'Er alle tall og faktapåstander verifisert av fagansvarlig?',
      'Er eventuelle lenker lagt i kommentarfeltet?',
    ],
    example: {
      label: 'Eksempel — Bygg & Anlegg (DPP)',
      text: `Tre av fire byggprosjekter overskrider budsjett.

En viktig årsak: vi vet ikke hvor materialene er.

Mangel på standardisert produktidentifikasjon betyr at samme bolt kan finnes under 12 ulike varenumre i 12 ulike systemer. Det gir feilbestillinger, forsinkelser og unødvendig svinn.

Digitalt Produktpass (DPP) endrer dette — og det blir obligatorisk for byggevarer fra 2027.

Hva gjør dere i dag for å forberede dere?

[DPP-veileder for bygg i kommentarfeltet]`,
    },
  },
  {
    id: 'web',
    name: 'Web / Artikler',
    icon: Globe,
    tagline: '"Source of truth" — dybde og søkbarhet',
    purpose: 'GS1 Norways nettside er den primære kilden for dybdeinnhold, fagartikler og ressurser. Alt annet innhold peker hit. God SEO er avgjørende.',
    audience: 'Fagpersoner, IT-ansvarlige og prosjektledere som aktivt søker informasjon. Beslutningstakere som vurderer implementering.',
    formats: [
      { title: 'Fagartikkel', structure: 'Ingress som svarer på spørsmålet i tittelen → bakgrunn og kontekst → forklaring → eksempel/case → konklusjon og CTA' },
      { title: 'Veileder / How-to', structure: 'Problemformulering → steg-for-steg løsning (nummerert) → vanlige feil → neste steg' },
      { title: 'Case-studie', structure: 'Virksomhet og bransje → utfordring → løsning → målbart resultat → sitat fra kontaktperson' },
    ],
    bestPractices: [
      'Tittel skal svare på et konkret spørsmål ("Hva er GTIN og hvorfor trenger du det?")',
      'Ingress: maks 2–3 setninger — oppsummerer hele artikkelen',
      'Bruk mellomtitler (H2/H3) hvert 200–300 ord for skanning',
      'Én tydelig CTA per artikkel — ikke fem ulike lenker',
      'Metabeskrivelse: 120–155 tegn, inkluder primær søketerm',
      'Alle tall og standardreferanser skal ha kilde eller link',
    ],
    ctas: [
      '"Last ned gratis veileder (PDF)"',
      '"Bestill en uforpliktende gjennomgang med en GS1-rådgiver"',
      '"Se relaterte artikler om [tema]"',
      '"Meld deg på nyhetsbrevet for oppdateringer i din bransje"',
    ],
    qualityCheck: [
      'Svarer tittelen på et spørsmål målgruppen faktisk stiller?',
      'Er innholdet dypere enn det LinkedIn-innlegget kunne dekke?',
      'Er alle tekniske begreper forklart første gang de nevnes?',
      'Er det én tydelig primær CTA (ikke tre konkurrerende)?',
      'Er metabeskrivelsen skrevet og optimalisert?',
    ],
    example: {
      label: 'Eksempel — tittel og ingress (GTIN)',
      text: `TITTEL: Hva er GTIN — og hvorfor er det viktigere enn strekkoden?

INGRESS: GTIN er det globale serienummeret som gir produktet ditt en unik digital identitet på tvers av alle systemer og grenser. Uten det risikerer du feilplasserte varer, dyr manuell håndtering og brudd på kommende EU-krav til produktsporing.`,
    },
  },
  {
    id: 'nyhetsbrev',
    name: 'Nyhetsbrev',
    icon: Mail,
    tagline: 'Målrettet nurturing mot segmenter',
    purpose: 'Nyhetsbrevet er GS1 Norways direktekanal til eksisterende medlemmer og varme leads. Det skal bygge lojalitet, dele eksklusiv innsikt og drive handling.',
    audience: 'Eksisterende medlemmer, potensielle nye medlemmer og bransjekontakter som har meldt seg på. Segmentert etter sektor og interesse.',
    formats: [
      { title: 'Månedlig bransjenews', structure: 'Emnelinjeformel: [Bransje] + innsikt/handling + haster/ikke. Innhold: 1 hovedsak → 2–3 kortnytt → 1 ressurs → 1 event' },
      { title: 'Temanyhetsbrev', structure: 'Ett tema i dybden: bakgrunn → hva det betyr for deg → hva GS1 Norway tilbyr → CTA' },
      { title: 'Velkomst-sekvens', structure: 'E-post 1: Velkommen + hva du får. E-post 2: De 3 viktigste ressursene. E-post 3: Book en rådgiversamtale' },
    ],
    bestPractices: [
      'Emnelinjen: under 50 tegn — test A/B mellom spørsmål og påstand',
      'Unngå "nyhetsbrev fra GS1 Norway" i emnelinjen — si hva leseren får',
      'Én primær CTA — ikke lenker til 8 ulike artikler',
      'Preheader-tekst (preview): bruk den bevisst, 40–90 tegn',
      'Send tirsdag eller onsdag formiddag for høyest åpningsrate',
      'Avsender: bruk en navngitt person ("Henrik fra GS1 Norway"), ikke "info@"',
    ],
    ctas: [
      '"Les hele artikkelen →"',
      '"Meld deg på webinaret (gratis) →"',
      '"Last ned bransjerapport →"',
      '"Book en uforpliktende samtale →"',
    ],
    qualityCheck: [
      'Er emnelinjen under 50 tegn og tydelig på verdien?',
      'Er det én primær CTA — ikke fire konkurrerende?',
      'Er innholdet relevant for dette spesifikke segmentet?',
      'Er avsenderen et navn, ikke "info@"?',
      'Er alle lenker testet og fungerende?',
    ],
    example: {
      label: 'Eksempel — emnelinje og åpning (helse)',
      text: `EMNELINJE: Ny EU-krav til legemiddelsporing — er du klar?

ÅPNING: Fra 2026 krever EU at all legemiddellogistikk dokumenteres med EPCIS-standarden. For sykehus og apotek betyr det at papirbaserte rutiner ikke lenger holder. Her er det du trenger å vite — og hva GS1 Norway kan hjelpe deg med.`,
    },
  },
  {
    id: 'webinar',
    name: 'Webinar',
    icon: Video,
    tagline: 'Faglig fordypning og lead-generering',
    purpose: 'Webinarer er GS1 Norways sterkeste verktøy for lead-generering og faglig posisjonering. De samler målgruppen rundt et konkret problem og demonstrerer ekspertise.',
    audience: 'Fagpersoner og prosjektledere som vurderer implementering. Eksisterende medlemmer som ønsker fordypning. Beslutningstakere som er tidlig i kjøpsprosessen.',
    formats: [
      { title: 'Introduksjonswebinar', structure: '45 min: 5 min intro + 30 min faginnhold + 10 min Q&A. Passer for "hva er X og hvorfor nå?"' },
      { title: 'Case-webinar', structure: '60 min: 10 min bakgrunn + 20 min case-presentasjon (gjest) + 20 min implikasjoner + 10 min Q&A' },
      { title: 'Workshop-webinar', structure: '90 min: 15 min teori + 45 min hands-on øvelse + 30 min diskusjon. Krever aktiv deltakelse.' },
    ],
    bestPractices: [
      'Tittel på webinaret skal navngi problemet, ikke løsningen: "Hvordan spare 30% på logistikk med GTIN" > "GTIN-webinar"',
      'Send påminnelse 1 uke + 1 dag + 1 time før',
      'Ha en ekstern gjest (kunde/bransjeekspert) — øker troverdighet og rekkevidde',
      'Del lysbilde-PDF og oppsummering i etterkant med alle påmeldte',
      'Følg opp med e-post 24 timer etter med lenke til opptak og neste steg',
    ],
    ctas: [
      '"Meld deg på — helt gratis"',
      '"Reserver plass (begrenset antall)"',
      '"Se opptak fra forrige webinar"',
      '"Book en 1:1 oppfølging etter webinaret"',
    ],
    qualityCheck: [
      'Navngir tittelen et konkret problem målgruppen kjenner?',
      'Er det en ekstern gjest som øker troverdigheten?',
      'Er påminnelsessekvensen satt opp i e-postverktøyet?',
      'Er Q&A og opptak planlagt og kommunisert?',
      'Er oppfølgings-e-post planlagt for 24 timer etter?',
    ],
    example: {
      label: 'Eksempel — webinarbeskrivelse (dagligvare/2D)',
      text: `TITTEL: Fra strekkode til QR-kode: Hva norsk dagligvare må gjøre før 2027

INGRESS: Overgangen til 2D-koder (GS1 QR og DataMatrix) er i gang — og butikkkassene må oppgraderes. I dette webinaret viser vi hva det betyr for produsenter, grossister og kjeder i praksis.

DU LÆRER:
• Hva Sunrise 2027 innebærer for din virksomhet
• Hvilke systemer og prosesser som må oppdateres
• Eksempler fra pilotprosjekter i Europa
• Hva GS1 Norway kan bistå med`,
    },
  },
  {
    id: 'events',
    name: 'Events og konferanser',
    icon: Users,
    tagline: 'Flaggskip-arenaer for posisjon og relasjoner',
    purpose: 'Større events er GS1 Norways viktigste arena for relasjonsbygging, synlighet i offentlig debatt og posisjonering som "trusted advisor" på tvers av bransjer.',
    audience: 'Bransjledere, politikere, offentlig sektor, media og partnere. Nordic Summit er for GS1-nettverket; Arendalsuka for bred samfunnsdebatt.',
    formats: [
      { title: 'Nordic Summit (internt nettverk)', structure: 'Nøkkelnotat → parallelle sesjoner per sektor → networking-lunsj → innovasjonsutstilling → avsluttende plenumssesjon' },
      { title: 'Arendalsuka / bransjearena', structure: 'Panel/debatt → moderert samtale → konkret policy-forslag → oppfølging via pressemelding og LinkedIn-innlegg' },
      { title: 'Frokostseminar (uformell arena)', structure: '60 min: 15 min faginnlegg → 30 min diskusjon → 15 min networking. Maks 25 deltakere for god dialog.' },
    ],
    bestPractices: [
      'Events skal alltid gi opphav til innhold: referat, sitat, LinkedIn-innlegg, nyhetsbrev-sak',
      'Forbered 3–5 "snackable" sitater fra talerne til LinkedIn-bruk under og etter eventet',
      'Ha én tydelig "melding" fra hvert event — ikke fem parallelle narrativer',
      'Oppfølging av leads fra eventet innen 48 timer',
      'Inviter media til Nordic Summit — forbered pressekit med nøkkelcaser',
    ],
    ctas: [
      '"Meld deg på / reserver plass"',
      '"Last ned program og talenotat"',
      '"Se bilder og oppsummering fra fjorårets event"',
      '"Bli partner / sponsor"',
    ],
    qualityCheck: [
      'Er det én tydelig narrativ/melding fra eventet planlagt på forhånd?',
      'Er LinkedIn-innlegg og nyhetsbrev-sak planlagt til under og etter eventet?',
      'Er leads-oppfølging satt opp i CRM innen 48 timer?',
      'Er pressekit klart for Nordic Summit?',
      'Er sitat-bibliotek fra talerne forberedt?',
    ],
    example: {
      label: 'Eksempel — LinkedIn-innlegg etter Arendalsuka',
      text: `I dag diskuterte vi sporbarhet i matforsyningen på Arendalsuka.

Én setning satt seg: "Vi kan ikke ha bærekraftsmål vi ikke kan måle."

Det er kjernen i det GS1 jobber med. Ikke bare standarder — men infrastrukturen som gjør målbare verdikjeder mulig.

Takk til alle som tok samtalen videre. Vi fortsetter jobben.

[Lenke til referat og nøkkelpunkter i kommentarfeltet]`,
    },
  },
];

function ChecklistItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gs1-text">
      <CheckCircle2 size={16} className="text-gs1-orange shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function CTAItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gs1-text">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gs1-blue shrink-0" />
      <span className="italic">{text}</span>
    </li>
  );
}

export default function Channels() {
  const [activeId, setActiveId] = useState(CHANNELS[0].id);
  const active = CHANNELS.find(c => c.id === activeId)!;
  const Icon = active.icon;

  return (
    <div className="space-y-12">
      <SectionHeader
        title="Kanaler og Formater"
        description="Komplett guide til hver kanal — formål, struktur, best practices, CTAer og kvalitetssjekk."
        exampleNote="Best practices er basert på bransjepraksis — tilpass til GS1 Norways egne erfaringer"
      />

      {/* Kanal-velger */}
      <div className="flex flex-wrap gap-2">
        {CHANNELS.map(channel => {
          const CIcon = channel.icon;
          const isActive = channel.id === activeId;
          return (
            <button
              key={channel.id}
              onClick={() => setActiveId(channel.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded
                ${isActive
                  ? 'bg-gs1-blue text-white border-gs1-blue'
                  : 'bg-white text-gs1-text border-gs1-border hover:border-gs1-blue hover:text-gs1-blue'}`}
            >
              <CIcon size={15} />
              {channel.name}
            </button>
          );
        })}
      </div>

      {/* Kanalinnhold */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="bg-gs1-blue text-white p-6 rounded flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded shrink-0">
              <Icon size={28} className="text-gs1-orange" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-white m-0">{active.name}</h2>
              <p className="text-white/75 text-sm mt-0.5">{active.tagline}</p>
            </div>
          </div>

          {/* Formål + Målgruppe */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gs1-border p-5 rounded border-l-4 border-l-gs1-blue">
              <div className="flex items-center gap-2 mb-2">
                <Target size={16} className="text-gs1-blue" />
                <h3 className="font-display font-semibold text-gs1-blue text-sm uppercase tracking-wider m-0">Formål</h3>
              </div>
              <p className="text-sm text-gs1-text leading-relaxed">{active.purpose}</p>
            </div>
            <div className="bg-white border border-gs1-border p-5 rounded border-l-4 border-l-gs1-orange">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={16} className="text-gs1-orange" />
                <h3 className="font-display font-semibold text-gs1-blue text-sm uppercase tracking-wider m-0">Målgruppe</h3>
              </div>
              <p className="text-sm text-gs1-text leading-relaxed">{active.audience}</p>
            </div>
          </div>

          {/* Formater */}
          <div className="bg-white border border-gs1-border p-6 rounded">
            <h3 className="font-display font-semibold text-gs1-blue mb-4">Innleggsformater og struktur</h3>
            <div className="space-y-3">
              {active.formats.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gs1-bg rounded">
                  <div className="font-display font-bold text-gs1-blue text-sm shrink-0 w-5 mt-0.5">{i + 1}</div>
                  <div>
                    <p className="font-semibold text-gs1-text text-sm mb-1">{f.title}</p>
                    <p className="text-xs text-gs1-muted leading-relaxed">{f.structure}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best practices + CTAer */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gs1-border p-6 rounded">
              <h3 className="font-display font-semibold text-gs1-blue mb-4">Best practices</h3>
              <ul className="space-y-2.5">
                {active.bestPractices.map((bp, i) => (
                  <ChecklistItem key={i} text={bp} />
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gs1-border p-6 rounded">
              <h3 className="font-display font-semibold text-gs1-blue mb-4">Typiske CTAer</h3>
              <ul className="space-y-2.5">
                {active.ctas.map((cta, i) => (
                  <CTAItem key={i} text={cta} />
                ))}
              </ul>
            </div>
          </div>

          {/* Kvalitetssjekk */}
          <div className="bg-gs1-bg border border-gs1-border p-6 rounded">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={18} className="text-gs1-blue" />
              <h3 className="font-display font-semibold text-gs1-blue m-0">Kvalitetssjekk før publisering</h3>
            </div>
            <ul className="space-y-2">
              {active.qualityCheck.map((q, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gs1-text">
                  <span className="font-display font-bold text-gs1-orange shrink-0 mt-0.5">{i + 1}.</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eksempel */}
          <div className="bg-white border border-gs1-border p-6 rounded">
            <p className="text-xs font-semibold text-gs1-muted uppercase tracking-wider mb-3">{active.example.label}</p>
            <pre className="text-sm text-gs1-text leading-relaxed whitespace-pre-wrap font-sans bg-gs1-bg p-4 rounded border border-gs1-border">
              {active.example.text}
            </pre>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
