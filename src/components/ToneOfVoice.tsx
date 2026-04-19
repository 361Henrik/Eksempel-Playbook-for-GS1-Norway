import { useState } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { HeartHandshake, Lightbulb, Wrench, Check, X, ChevronRight } from 'lucide-react';

type ExamplePair = {
  id: string;
  label: string;
  context: string;
  before: string;
  after: string;
};

const EXAMPLES: ExamplePair[] = [
  {
    id: 'gtin',
    label: 'Forklare GTIN',
    context: 'LinkedIn-innlegg eller artikkelåpning til dagligvare-målgruppe',
    before: 'GTIN er et globalt serienummer for identifikasjon av varer i forsyningskjeden som sikrer entydig identifikasjon på tvers av systemer og landegrenser.',
    after: 'GTIN er produktets digitale ID. Den sørger for at alle i verdikjeden — fra fabrikk til butikkhylle — snakker om det samme produktet, i samme system, uten manuell dobbelsjekk.',
  },
  {
    id: 'dpp',
    label: 'Forklare Digitalt Produktpass',
    context: 'Artikkel rettet mot prosjektledere i bygg',
    before: 'Digitalt Produktpass er et EU-krav som vil gjelde for byggevarer i henhold til Ecodesign for Sustainable Products Regulation (ESPR) og innebærer at produktdata knyttes til en digital identifikator.',
    after: 'Fra 2027 må alle byggevarer ha et digitalt produktpass. Det betyr at informasjon om materialer, opprinnelse og CO₂-avtrykk følger produktet — ikke arkiveres i en PDF ingen finner igjen.',
  },
  {
    id: 'bli-medlem',
    label: 'Invitasjon til medlemskap',
    context: 'Nyhetsbrev til potensielle nye medlemmer',
    before: 'GS1 Norway tilbyr kompetanseheving gjennom kurs og webinarer som er tilgjengelig for medlemmer av organisasjonen.',
    after: 'Som GS1 Norway-medlem får du tilgang til bransjenormer, faglige nettverk og praktiske verktøy som sparer tid og penger — og som stadig flere av dine leverandører og kunder allerede bruker.',
  },
  {
    id: 'sporbarhet',
    label: 'Sporbarhet i helse',
    context: 'Artikkel til IKT-direktører i sykehus',
    before: 'Implementering av GS1-standarder for sporbarhet i legemiddellogistikk bidrar til økt pasientsikkerhet og effektivisering av varemottaksprosessene.',
    after: 'Hvert år skjer det feilmedisinering fordi feil legemiddel er på feil sted. Automatisert varemottak med GS1-standarder gjør at systemet alltid vet hva som er mottatt, hvem som leverte det, og hvilken pasient det er ment for.',
  },
];

const DO_DONT = [
  { do: 'Skriv i aktiv form: "vi gjør", "du får"', dont: 'Unngå passiv form: "det gjøres", "tilbys av"' },
  { do: 'Start med problemet eller observasjonen', dont: 'Aldri åpne med "Hos GS1 Norway..." eller "I vår organisasjon..."' },
  { do: 'Knytt standarden til forretningskonsekvens', dont: 'Aldri beskriv standarden uten å forklare hvorfor det betyr noe' },
  { do: 'Forklar tekniske begreper første gang de nevnes', dont: 'Ikke bruk forkortelser (GTIN, GLN, EPCIS) uten forklaring i ny kontekst' },
  { do: 'Bruk konkrete tall og caser der mulig', dont: 'Unngå vage påstander som "forbedrer effektiviteten betydelig"' },
  { do: 'Én hoved-idé per avsnitt', dont: 'Ikke pakk tre poenger inn i ett langt avsnitt' },
];

function BeforeAfterCard({ pair }: { pair: ExamplePair }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-white border border-gs1-border rounded overflow-hidden">
      <div className="px-5 py-4 border-b border-gs1-border flex items-center justify-between">
        <div>
          <p className="font-semibold text-gs1-text text-sm">{pair.label}</p>
          <p className="text-xs text-gs1-muted mt-0.5">{pair.context}</p>
        </div>
        <button
          onClick={() => setShowAfter(v => !v)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
            showAfter
              ? 'bg-gs1-blue text-white'
              : 'bg-gs1-bg border border-gs1-border text-gs1-text hover:border-gs1-blue'
          }`}
        >
          {showAfter ? 'Vis: uten ToV' : 'Vis: med ToV'}
          <ChevronRight size={12} />
        </button>
      </div>
      <div className="p-5">
        {!showAfter ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <X size={14} className="text-gs1-orange shrink-0" />
              <span className="text-xs font-bold text-gs1-orange uppercase tracking-wider">Slik gjør vi det ikke</span>
            </div>
            <p className="text-sm text-gs1-muted leading-relaxed italic">{pair.before}</p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Check size={14} className="text-gs1-blue shrink-0" />
              <span className="text-xs font-bold text-gs1-blue uppercase tracking-wider">Slik gjør vi det</span>
            </div>
            <p className="text-sm text-gs1-text leading-relaxed">{pair.after}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ToneOfVoice() {
  return (
    <div className="space-y-12">
      <SectionHeader
        title="Tone of Voice og Stil"
        description="Hvordan vi høres ut er like viktig som hva vi sier. Her finner du personlighet, regler og konkrete eksempler."
      />

      {/* Personlighet */}
      <div>
        <h3 className="font-display font-semibold text-gs1-blue mb-5">Vår kommunikasjonspersonlighet</h3>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gs1-border p-6 rounded border-t-4 border-t-gs1-blue">
            <div className="w-10 h-10 bg-gs1-blue-light rounded flex items-center justify-center mb-4">
              <HeartHandshake size={20} className="text-gs1-blue" />
            </div>
            <h4 className="font-display font-semibold text-gs1-text mb-2">Inkluderende</h4>
            <p className="text-sm text-gs1-muted leading-relaxed">
              Vi inviterer inn, unngår stammespråk og gjør komplekse ting forståelige. Alle skal kunne lese og forstå — uavhengig av teknisk bakgrunn.
            </p>
          </div>

          <div className="bg-white border border-gs1-border p-6 rounded border-t-4 border-t-gs1-orange">
            <div className="w-10 h-10 bg-gs1-orange-light rounded flex items-center justify-center mb-4">
              <Lightbulb size={20} className="text-gs1-orange" />
            </div>
            <h4 className="font-display font-semibold text-gs1-text mb-2">Inspirerende</h4>
            <p className="text-sm text-gs1-muted leading-relaxed">
              Vi viser muligheter og fremtid, ikke bare krav, regler og begrensninger. Vi hjelper leseren se hva som er mulig.
            </p>
          </div>

          <div className="bg-white border border-gs1-border p-6 rounded border-t-4 border-t-gs1-blue">
            <div className="w-10 h-10 bg-gs1-blue-light rounded flex items-center justify-center mb-4">
              <Wrench size={20} className="text-gs1-blue" />
            </div>
            <h4 className="font-display font-semibold text-gs1-text mb-2">Løsningsorientert</h4>
            <p className="text-sm text-gs1-muted leading-relaxed">
              Vi snakker om "hvordan" og om konkret effekt på bunnlinje, tid og risiko. Aldri om standarden isolert fra problemet den løser.
            </p>
          </div>
        </div>
      </div>

      {/* Praktiske regler */}
      <div className="bg-gs1-bg border border-gs1-border p-6 rounded">
        <h3 className="font-display font-semibold text-gs1-blue mb-5">Praktiske språkregler</h3>
        <ul className="space-y-3">
          {[
            'Skriv kort og konkret — én hoved-idé per avsnitt.',
            'Bruk aktiv form ("vi gjør", "du får" — ikke "det gjøres").',
            'Forklar tekniske begreper første gang de nevnes i en tekst.',
            'Knytt alltid standarder til konsekvens for virksomheten (kostnad, risiko, bærekraft, pasientsikkerhet).',
            'Start aldri et innlegg eller artikkel med "Hos GS1 Norway..."',
            'Unngå superlativer uten dokumentasjon ("best i klassen", "svært effektivt").',
          ].map((rule, i) => (
            <li key={i} className="flex items-start gap-3 bg-white border border-gs1-border p-4 rounded">
              <Check size={16} className="text-gs1-orange shrink-0 mt-0.5" />
              <span className="text-sm text-gs1-text">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Do / Don't */}
      <div>
        <h3 className="font-display font-semibold text-gs1-blue mb-5">Do / Don't — raskt oppslagsverk</h3>
        <div className="overflow-hidden border border-gs1-border rounded">
          <div className="grid grid-cols-2 bg-gs1-bg border-b border-gs1-border">
            <div className="px-5 py-3 flex items-center gap-2">
              <Check size={14} className="text-gs1-blue" />
              <span className="text-xs font-bold text-gs1-blue uppercase tracking-wider">Gjør dette</span>
            </div>
            <div className="px-5 py-3 flex items-center gap-2 border-l border-gs1-border">
              <X size={14} className="text-gs1-orange" />
              <span className="text-xs font-bold text-gs1-orange uppercase tracking-wider">Unngå dette</span>
            </div>
          </div>
          {DO_DONT.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < DO_DONT.length - 1 ? 'border-b border-gs1-border' : ''}`}>
              <div className="px-5 py-3 text-sm text-gs1-text bg-white">{row.do}</div>
              <div className="px-5 py-3 text-sm text-gs1-muted bg-white border-l border-gs1-border">{row.dont}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Før/etter eksempler */}
      <div>
        <h3 className="font-display font-semibold text-gs1-blue mb-2">Før og etter — se forskjellen i praksis</h3>
        <p className="text-sm text-gs1-muted mb-5">Klikk "Vis: med ToV" for å se hvordan innholdet endrer seg med riktig tone.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {EXAMPLES.map(pair => (
            <BeforeAfterCard key={pair.id} pair={pair} />
          ))}
        </div>
      </div>

      {/* Typografi */}
      <div className="bg-white border border-gs1-border p-6 rounded">
        <h3 className="font-display font-semibold text-gs1-blue mb-5">Visuell typografi og design system</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Print', font: 'Gotham Office', note: 'Tracking -20 · Left-aligned · Top of bounding box' },
            { label: 'Web', font: 'Montserrat + Inter', note: 'Montserrat for overskrifter · Inter for brødtekst · Google Fonts' },
            { label: 'Delte dokumenter', font: 'Verdana', note: 'Word, PowerPoint, e-post — universalt tilgjengelig' },
          ].map((t, i) => (
            <div key={i} className="p-4 bg-gs1-bg border border-gs1-border rounded">
              <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-2">{t.label}</p>
              <p className="font-display font-semibold text-gs1-text mb-1">{t.font}</p>
              <p className="text-xs text-gs1-muted">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
