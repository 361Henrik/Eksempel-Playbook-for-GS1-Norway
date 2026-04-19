import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { QrCode, ShieldCheck, Package, MapPin, Database, Leaf, GraduationCap, Users, TrendingUp } from 'lucide-react';

type Topic = {
  id: string;
  title: string;
  icon: React.ElementType;
  oneLiner: string;
  whyNow: string;
  audiences: string[];
  pillars: ('ROI' | 'Etterlevelse' | 'Bærekraft')[];
  channels: string[];
  exampleHeadlines: string[];
  keyFacts: string[];
  resources: string;
};

const TOPICS: Topic[] = [
  {
    id: '2d',
    title: '2D-koder og Sunrise 2027',
    icon: QrCode,
    oneLiner: 'Alle butikkkasser i verden skal lese 2D-koder innen 2027 — en historisk overgang fra tradisjonell strekkode.',
    whyNow: 'GS1 Global Sunrise 2027 er en bindende industristandard. Produsenter, grossister og kjeder må oppgradere systemer og etiketter. Fristen er ikke teoretisk — den er allerede i gang.',
    audiences: ['Dagligvare', 'Apotek', 'Logistikk', 'Produsenter'],
    pillars: ['ROI', 'Etterlevelse'],
    channels: ['LinkedIn', 'Nyhetsbrev', 'Webinar', 'Web/artikkel'],
    exampleHeadlines: [
      'Fra strekkode til QR-kode: Hva norsk dagligvare må gjøre før 2027',
      'Sunrise 2027: Tre ting din virksomhet bør gjøre nå',
      'Hvorfor QR-koden erstatter strekkoden — og hva det betyr for deg',
    ],
    keyFacts: [
      'GS1 QR og DataMatrix bærer vesentlig mer data enn tradisjonell EAN-kode',
      'Sunrise 2027 krever at alle salgssystemer kan lese 2D-koder',
      'Mer produktinformasjon til forbrukere direkte fra koden (ingredienser, utløpsdato, sporbarhet)',
      'Pilotprogrammer er allerede i gang i Europa og USA',
    ],
    resources: 'GS1 Global Sunrise-plan, GS1 Norway 2D-veileder',
  },
  {
    id: 'dpp',
    title: 'Digitalt Produktpass (DPP)',
    icon: Package,
    oneLiner: 'EU krever at produkter har et digitalt pass som dokumenterer materialinnhold, opprinnelse og bærekraft — GTIN er nøkkelidentifikatoren.',
    whyNow: 'EUs Ecodesign for Sustainable Products Regulation (ESPR) innfører DPP for stadig flere produktkategorier fra 2026–2030. Batterier er allerede i gang. Tekstil og bygg følger.',
    audiences: ['Bygg & Anlegg', 'Tekstil', 'Elektronikk', 'Produsenter', 'Importører'],
    pillars: ['Etterlevelse', 'Bærekraft'],
    channels: ['LinkedIn', 'Web/artikkel', 'Webinar', 'Nyhetsbrev'],
    exampleHeadlines: [
      'Hva er Digitalt Produktpass — og når gjelder det din virksomhet?',
      'DPP i bygg: Fra 2027 må byggevarer ha digital dokumentasjon',
      'Digitalt produktpass: GS1 som infrastruktur for EU-etterlevelse',
    ],
    keyFacts: [
      'DPP er obligatorisk for batterier fra 2026, tekstil og bygg fra 2027–2030',
      'GTIN er den primære identifikatoren som kobler fysisk produkt til digital tvillingdata',
      'QR-kode (basert på GS1 Digital Link) er det anbefalte grensesnittet for forbrukere og myndigheter',
      'Manglende DPP vil kunne blokkere produkter fra det europeiske markedet',
    ],
    resources: 'EU ESPR-forordningen, GS1 DPP-implementeringsguide',
  },
  {
    id: 'sporbarhet',
    title: 'Sporbarhet i legemidler',
    icon: ShieldCheck,
    oneLiner: 'EPCIS og GS1-standarder er krav i EU-direktiv for legemiddel­sporing — implementering er lovpålagt, ikke valgfritt.',
    whyNow: 'EUs Falsified Medicines Directive (FMD) og USAs DSCSA krever sporbarhet i hele legemiddelforsyningen. Sykehus, apotek og grossister som ikke er sertifisert risikerer stans i mottak av legemidler.',
    audiences: ['Helse', 'Apotek', 'Legemiddelgrossister', 'Sykehus'],
    pillars: ['Etterlevelse', 'ROI'],
    channels: ['Web/artikkel', 'Nyhetsbrev', 'Direkte dialog', 'Webinar'],
    exampleHeadlines: [
      'Ny EU-krav til legemiddelsporing — er din virksomhet klar?',
      'EPCIS i helse: Fra lovkrav til operativ gevinst',
      'Hvordan automatisert varemottak frigjorde 1,8 stillingsårsverk ved norsk sykehus',
    ],
    keyFacts: [
      'FMD (EU) og DSCSA (USA) krever serialisering og EPCIS-rapportering for alle legemidler',
      'GS1-128 strekkode på legemiddelforpakning er minimumskravet — RFID øker effektiviteten ytterligere',
      'Feilmedisinering er fortsatt en av de hyppigste pasientskadene i norske sykehus',
      'Automatisert varemottak med GTIN reduserer menneskelig feil ved varemottak med over 60%',
    ],
    resources: 'EU FMD-direktiv, GS1 Healthcare implementeringsguide, Sykehusinnkjøp HF case',
  },
  {
    id: 'gln',
    title: 'GLN og lokasjonsstyring',
    icon: MapPin,
    oneLiner: 'GLN (Global Location Number) er den universelle adressen for alle lokasjoner i forsyningskjeden — fra fabrikk til hylle.',
    whyNow: 'Økt kompleksitet i forsyningskjeder, krav til presis EDI-kommunikasjon og automatisert fakturering gjør GLN til en forutsetning for effektiv drift. Mange virksomheter har ulik intern adressering som skaper feil.',
    audiences: ['Dagligvare', 'Helse', 'Bygg & Anlegg', 'Energi', 'Logistikk'],
    pillars: ['ROI', 'Etterlevelse'],
    channels: ['Web/artikkel', 'LinkedIn', 'Nyhetsbrev'],
    exampleHeadlines: [
      'Hva er GLN — og hvorfor er det viktigere enn du tror?',
      'Slik bruker du GLN til å eliminere leveringsfeil i forsyningskjeden',
      'Fra manuell adresse til GLN: Erfaringer fra norsk grossisthandel',
    ],
    keyFacts: [
      'GLN identifiserer presist enhver fysisk lokasjon — fra ett lager til ett spesifikt lagerrom',
      'Manglende eller feil GLN er en av de vanligste årsakene til EDI-feil og feilfakturering',
      'Sykehus bruker GLN for å sikre at medisinsk utstyr leveres til riktig avdeling',
      'GLN er krav i PEPPOL-standarden for offentlig e-faktura i Norge',
    ],
    resources: 'GS1 GLN-veileder, PEPPOL-dokumentasjon',
  },
  {
    id: 'sync',
    title: 'GS1 Sync og produktdatakvalitet',
    icon: Database,
    oneLiner: 'GS1 Sync er den felles produktdatabanken som sikrer at produsent og kjede alltid er enige om nøyaktig hva et produkt er og heter.',
    whyNow: 'Feil produktdata koster norsk dagligvare anslagsvis hundrevis av millioner kroner årlig i returer, feilprising og avvikshåndtering. Krav om mer forbrukerinformasjon (allergener, næringsinnhold) øker kompleksiteten.',
    audiences: ['Dagligvare', 'Grossister', 'Produsenter', 'Apotek'],
    pillars: ['ROI', 'Etterlevelse'],
    channels: ['LinkedIn', 'Nyhetsbrev', 'Web/artikkel'],
    exampleHeadlines: [
      'Hva koster feil produktdata din virksomhet? (Svar: mer enn du tror)',
      'GS1 Sync: Fra manuell datautveksling til én kilde til sannhet',
      'Slik reduserte NorgesGruppen datafeil fra 12% til 0,5%',
    ],
    keyFacts: [
      'GS1 Sync er det norske grensesnittet mot det globale GDSN-nettverket (1WorldSync)',
      'Korrekt produktdata i GS1 Sync reduserer time-to-market fra produsent til hylle med opptil 40%',
      'EU-forordning om forbrukermating krever digitalt tilgjengelig næringsinnhold og allergener',
      'Feil i produktdata er blant de hyppigste årsakene til unødvendige matreturer',
    ],
    resources: 'GS1 Sync produktdatakrav, GDSN-standard',
  },
  {
    id: 'baerekraft',
    title: 'Bærekraft og sirkularøkonomi',
    icon: Leaf,
    oneLiner: 'GS1-standarder er infrastrukturen som gjør bærekraftsmål målbare — sporbarhet og produktdata er forutsetningen for sirkulær økonomi.',
    whyNow: 'EU-taksonomien, CSRD-rapportering og stadig strengere krav fra forbrukere og investorer krever dokumentert sporbarhet. "Grønnvasking" uten data er ulovlig fra 2026.',
    audiences: ['Alle sektorer', 'Bærekraftsansvarlige', 'CFO/økonomiledelse', 'Innkjøpsavdelinger'],
    pillars: ['Bærekraft', 'Etterlevelse'],
    channels: ['LinkedIn', 'Web/artikkel', 'Webinar', 'Events'],
    exampleHeadlines: [
      '"Vi kan ikke ha bærekraftsmål vi ikke kan måle" — om sporbarhet som forutsetning',
      'Hvordan GS1 gjør sirkulær økonomi mulig — ikke bare ønskelig',
      'Fra CSRD-krav til konkret datagrunnlag: Hva bransjen trenger',
    ],
    keyFacts: [
      'CSRD (Corporate Sustainability Reporting Directive) krever dokumentert sporbarhet i verdikjeden fra 2025',
      'Digitalt Produktpass er EU sitt svar på krav om livsløpsdokumentasjon',
      'Produktsporing reduserer matsvinn med opptil 30% gjennom bedre holdbarhetsstyring',
      'GS1-standarder er brukt i over 25 offisielle nasjonale bærekraftsinitiativer globalt',
    ],
    resources: 'EU CSRD-direktiv, GS1 Sustainability whitepaper',
  },
  {
    id: 'kurs',
    title: 'Kurs og kompetanse (GS1 Academy)',
    icon: GraduationCap,
    oneLiner: 'GS1 Norway tilbyr sertifisert kompetanseheving innen standarder, implementering og bransjespesifikk bruk — for enkeltpersoner og organisasjoner.',
    whyNow: 'Økt regulatorisk kompleksitet (DPP, FMD, Sunrise 2027) skaper behov for praktisk kunnskap. Mange virksomheter vet hva de MÅ gjøre, men ikke hvordan.',
    audiences: ['Alle sektorer', 'IT-ansvarlige', 'Innkjøp og logistikk', 'Kommunikasjons- og marketingansvarlige'],
    pillars: ['ROI'],
    channels: ['LinkedIn', 'Nyhetsbrev', 'Web/artikkel', 'Events'],
    exampleHeadlines: [
      'Lær deg standarden som sparer tid og penger — neste webinar er gratis',
      'GS1 Academy: Sertifisert kunnskap for hele teamet',
      'Hvorfor intern GS1-kompetanse er den beste investeringen du gjør i 2025',
    ],
    keyFacts: [
      'GS1 Academy tilbyr kurs på tvers av standarder, sektorer og kompetansenivåer',
      'Sertifiseringer er anerkjent av over 116 GS1-organisasjoner globalt',
      'Webinarer er gratis for GS1 Norway-medlemmer',
      'Bransjespesifikke workshops tilbys for bygg, helse og dagligvare',
    ],
    resources: 'GS1 Academy kursoversikt, GS1 Norway kalender',
  },
  {
    id: 'medlemsverdi',
    title: 'Medlemsverdi og ROI',
    icon: Users,
    oneLiner: 'GS1 Norway-medlemskap gir tilgang til standarder, nettverk, kompetanse og tjenester som dokumentert reduserer kostnader og risiko.',
    whyNow: 'Stadig flere regulatoriske krav forutsetter GS1-standarder. Medlemskap er ikke en kostnad — det er en forutsetning for å operere i verdikjeder som allerede bruker GS1.',
    audiences: ['Potensielle nye medlemmer', 'Eksisterende medlemmer', 'Ledelse og økonomiansvar'],
    pillars: ['ROI'],
    channels: ['LinkedIn', 'Web/artikkel', 'Nyhetsbrev', 'Direkte dialog'],
    exampleHeadlines: [
      'Hva får du egentlig som GS1 Norway-medlem? (Konkret oversikt)',
      'ROI-kalkulatoren: Hva betyr GS1-implementering for din bunnlinje?',
      'Fra kontingent til konkurransefortrinn: 5 ting norske bedrifter bruker GS1 til',
    ],
    keyFacts: [
      'Over 3 000 norske virksomheter er GS1 Norway-medlemmer',
      'Tilgang til globalt nettverk av 116 GS1-organisasjoner og over 2 millioner virksomheter',
      'Dokumentert ROI: gjennomsnittlig 4–8x kostnadene i effektivitetsgevinster innen 2 år',
      'Norske offentlige virksomheter (sykehus, kommuner) bruker GS1 for PEPPOL og innkjøp',
    ],
    resources: 'GS1 Norway medlemsbrosjyre, ROI-kalkulator',
  },
];

const PILLAR_COLORS: Record<string, string> = {
  ROI: 'bg-gs1-blue-light text-gs1-blue border-gs1-blue/20',
  Etterlevelse: 'bg-gs1-orange-light text-gs1-orange border-gs1-orange/20',
  Bærekraft: 'bg-green-50 text-green-700 border-green-200',
};

export default function Topics() {
  const [activeId, setActiveId] = useState(TOPICS[0].id);
  const active = TOPICS.find(t => t.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <div className="space-y-12">
      <SectionHeader
        title="GS1-temabibliotek"
        description="Oversikt over de viktigste temaene GS1 Norway kommuniserer om — med målgruppe, budskapspilar, kanalanbefaling og eksempeloverskrifter."
      />

      {/* Temavelger — grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {TOPICS.map(topic => {
          const TIcon = topic.icon;
          const isActive = topic.id === activeId;
          return (
            <button
              key={topic.id}
              onClick={() => setActiveId(topic.id)}
              className={`flex flex-col items-start gap-1.5 p-4 rounded border text-left transition-colors
                ${isActive ? 'bg-gs1-blue border-gs1-blue text-white' : 'bg-white border-gs1-border hover:border-gs1-blue'}`}
            >
              <TIcon size={18} className={isActive ? 'text-gs1-orange' : 'text-gs1-blue'} />
              <span className={`text-xs font-semibold leading-snug ${isActive ? 'text-white' : 'text-gs1-text'}`}>{topic.title}</span>
            </button>
          );
        })}
      </div>

      {/* Temainnhold */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          {/* Header */}
          <div className="bg-gs1-blue text-white p-6 rounded flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded shrink-0">
              <ActiveIcon size={26} className="text-gs1-orange" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-white m-0">{active.title}</h2>
              <p className="text-white/80 text-sm mt-1 leading-relaxed">{active.oneLiner}</p>
            </div>
          </div>

          {/* Hvorfor nå */}
          <div className="bg-white border border-gs1-border border-l-4 border-l-gs1-orange p-5 rounded">
            <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-2">Hvorfor det haster / er relevant nå</p>
            <p className="text-sm text-gs1-text leading-relaxed">{active.whyNow}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Venstre kolonne */}
            <div className="space-y-5">
              {/* Nøkkelfakta */}
              <div className="bg-white border border-gs1-border p-5 rounded">
                <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-3">Nøkkelfakta og dokumentasjon</p>
                <ul className="space-y-2.5">
                  {active.keyFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gs1-text">
                      <TrendingUp size={14} className="text-gs1-orange shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Målgrupper + pilarer */}
              <div className="bg-white border border-gs1-border p-5 rounded">
                <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-3">Målgrupper</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {active.audiences.map((a, i) => (
                    <span key={i} className="px-3 py-1 bg-gs1-bg border border-gs1-border rounded text-xs font-medium text-gs1-text">{a}</span>
                  ))}
                </div>
                <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-3">Budskapspilar</p>
                <div className="flex flex-wrap gap-2">
                  {active.pillars.map((p, i) => (
                    <span key={i} className={`px-3 py-1 border rounded text-xs font-semibold ${PILLAR_COLORS[p]}`}>{p}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Høyre kolonne */}
            <div className="space-y-5">
              {/* Kanalanbefaling */}
              <div className="bg-white border border-gs1-border p-5 rounded">
                <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-3">Anbefalte kanaler</p>
                <div className="flex flex-wrap gap-2">
                  {active.channels.map((c, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gs1-blue-light border border-gs1-blue/20 rounded text-xs font-semibold text-gs1-blue">{c}</span>
                  ))}
                </div>
              </div>

              {/* Eksempeloverskrifter */}
              <div className="bg-white border border-gs1-border p-5 rounded">
                <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-3">Eksempel på artikkel- og innleggstitler</p>
                <ul className="space-y-2.5">
                  {active.exampleHeadlines.map((headline, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="font-display font-bold text-gs1-orange text-xs shrink-0 mt-0.5">{i + 1}.</span>
                      <span className="text-sm text-gs1-text italic">"{headline}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ressurser */}
              <div className="bg-gs1-bg border border-gs1-border p-4 rounded">
                <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-1.5">Relevante ressurser og kilder</p>
                <p className="text-sm text-gs1-muted">{active.resources}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
