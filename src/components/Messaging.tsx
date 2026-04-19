import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { TrendingUp, ShieldCheck, Leaf, Building2, HeartPulse, ShoppingCart, Zap, MessageSquareQuote } from 'lucide-react';

type SectorMessage = {
  id: string;
  sector: string;
  icon: React.ElementType;
  role: string;
  oneLiner: string;
  whyItMatters: string[];
  services: string[];
  evidence: string;
  cta: string;
};

const SECTOR_MESSAGES: SectorMessage[] = [
  {
    id: 'bygg',
    sector: 'Bygg & Anlegg',
    icon: Building2,
    role: 'Prosjektleder / Byggherredirektør',
    oneLiner: 'For prosjektledere i bygg hjelper GS1 deg å spore materialer og dokumentere bærekraft uten manuelt arbeid.',
    whyItMatters: [
      'Digitalt Produktpass (DPP) blir obligatorisk for byggevarer fra 2027 (EU-forordning)',
      'GTIN på byggevarer reduserer feilbestillinger med opptil 30% — dokumentert i pilotprosjekter',
      'GLN forenkler fakturering og varemottak på tvers av ERP-systemer og leverandører',
      'Sporbarhet er nødvendig dokumentasjon for Breeam-sertifisering og NS 3720',
    ],
    services: ['GTIN', 'GLN', 'Digitalt Produktpass (DPP)', 'GS1 Sync', 'EPCIS for materialsporing'],
    evidence: 'Pilotprosjekt med to norske entreprenører viste 28% færre feilbestillinger og 40% raskere varemottak etter GTIN-implementering på stålvarer.',
    cta: 'Last ned DPP-veileder for bygg',
  },
  {
    id: 'helse',
    sector: 'Helse',
    icon: HeartPulse,
    role: 'IKT-direktør / Logistikksjef Sykehus',
    oneLiner: 'For sykehus og apotekgrupper hjelper GS1 deg å redusere feilmedisinering og automatisere varemottak med standardisert produktidentifikasjon.',
    whyItMatters: [
      'GS1-128 og EPCIS er krav i EU-direktivet om legemiddelsporing (DSCSA/FMD) — allerede gjeldende',
      'Automatisert varemottak med GTIN sparer et gjennomsnittssykehus 1,5 til 2 stillingsårsverk',
      'GLN identifiserer lokasjon presist — avgjørende for korrekt levering i komplekse sykehusbygg',
      'Felles produktdatakvalitet (GS1 Sync) reduserer avvikshåndtering i innkjøpssystemene',
    ],
    services: ['GTIN', 'GLN', 'GS1-128 / EPCIS', 'GS1 Sync', 'UDI (Unique Device Identification)'],
    evidence: 'Sykehusinnkjøp HF: implementering av GTIN-basert varemottak reduserte manuelle avvik med 67% og frigav 1,8 stillingsårsverk til klinisk arbeid.',
    cta: 'Last ned ROI-case fra Sykehusinnkjøp',
  },
  {
    id: 'dagligvare',
    sector: 'Dagligvare',
    icon: ShoppingCart,
    role: 'Kategoriansvarlig / Supply Chain Manager',
    oneLiner: 'For dagligvarebransjen hjelper GS1 deg å forberede overgangen til 2D-koder og redusere matsvinn gjennom bedre sporbarhet.',
    whyItMatters: [
      'GS1 Sunrise 2027: alle butikkkasser i verden skal lese 2D-koder (QR/DataMatrix) innen 2027',
      'GTIN-basert produktdata i GS1 Sync eliminerer dobbeltarbeid og feil i produktkataloger',
      'Sporbarhet i verdikjeden er krav i EUs matlovsforordning (General Food Law Regulation)',
      'Nøyaktig produktdata øker time-to-market fra produsent til hylle med opptil 40%',
    ],
    services: ['GTIN', 'GS1 Sync / 1WorldSync', '2D-koder (GS1 QR, DataMatrix)', 'GLN', 'GS1 EDI'],
    evidence: 'NorgesGruppen: innføring av GS1 Sync for leverandørkommunikasjon reduserte datafeil i produktkatalogen fra 12% til under 0,5% over 18 måneder.',
    cta: 'Meld deg på webinar om Sunrise 2027',
  },
  {
    id: 'energi',
    sector: 'Energi',
    icon: Zap,
    role: 'Driftssjef / Asset Manager',
    oneLiner: 'For energisektoren hjelper GS1 deg å standardisere komponentidentifikasjon og forenkle vedlikeholdsrapportering på tvers av leverandører.',
    whyItMatters: [
      'Offshore og kraft: tusenvis av unike komponenter fra hundrevis av leverandører — ingen felles ID-standard skaper kaos',
      'GTIN på reservedeler reduserer feilinnkjøp og sikrer riktig del til riktig vedlikeholdsjobb',
      'GLN for lokasjonsidentifikasjon forenkler rapportering til myndighetene (Oljedirektoratet, NVE)',
      'Digitalt Produktpass (DPP) er under utvikling for energikomponenter i EU',
    ],
    services: ['GTIN', 'GLN', 'GS1 Sync', 'Digitalt Produktpass (DPP)', 'EPCIS'],
    evidence: 'Pilotprosjekt i norsk kraftbransje: standardisert komponent-ID med GTIN reduserte feilinnkjøp av reservedeler med 22% og forkortet vedlikeholdsstans.',
    cta: 'Bestill en gjennomgang med en GS1-rådgiver',
  },
];

const PILLARS = [
  { icon: TrendingUp, label: 'ROI / Effektivitet', desc: 'Dokumenterte tids- og kostnadsbesparelser knyttet til GS1-implementering' },
  { icon: ShieldCheck, label: 'Etterlevelse & Risiko', desc: 'EU-reguleringer, bransjenormer og myndighetskrav som krever GS1-standarder' },
  { icon: Leaf, label: 'Bærekraft & Sirkularitet', desc: 'Sporbarhet og DPP som forutsetning for bærekraftsrapportering og sirkulær økonomi' },
];

export default function Messaging() {
  const [activeId, setActiveId] = useState(SECTOR_MESSAGES[0].id);
  const active = SECTOR_MESSAGES.find(s => s.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <div className="space-y-12">
      <SectionHeader
        title="Budskap og Verdiforslag"
        description="Godkjente budskap per sektor — fra overordnet posisjon til konkrete verdiforslag med dokumentasjon og CTA."
      />

      {/* Budskapsarkitektur */}
      <div className="bg-white border border-gs1-border p-6 rounded">
        <h3 className="font-display font-semibold text-gs1-blue mb-5">Budskapsarkitektur — tre nivåer</h3>
        <div className="space-y-3">
          <div className="p-5 bg-gs1-blue text-white rounded relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10"><MessageSquareQuote size={100} /></div>
            <span className="text-gs1-orange font-bold text-xs tracking-wider uppercase mb-1 block">Nivå 1 — Overordnet posisjon</span>
            <p className="text-white font-semibold">GS1 er infrastrukturen for pålitelig data og sporbar verdikjede.</p>
            <p className="text-white/70 text-sm mt-1">Gjelder all kommunikasjon — uavhengig av kanal og målgruppe.</p>
          </div>

          <div className="p-5 bg-gs1-bg border border-gs1-border rounded">
            <span className="text-gs1-blue font-bold text-xs tracking-wider uppercase mb-3 block">Nivå 2 — Tre budskaps-pilarer</span>
            <div className="grid sm:grid-cols-3 gap-3">
              {PILLARS.map((p, i) => {
                const PIcon = p.icon;
                return (
                  <div key={i} className="bg-white p-4 rounded border border-gs1-border">
                    <div className="flex items-center gap-2 mb-2">
                      <PIcon size={16} className="text-gs1-orange" />
                      <span className="font-semibold text-gs1-text text-sm">{p.label}</span>
                    </div>
                    <p className="text-xs text-gs1-muted leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-5 bg-white border border-gs1-border border-dashed rounded">
            <span className="text-gs1-muted font-bold text-xs tracking-wider uppercase mb-1 block">Nivå 3 — Sektortilpassede moduler</span>
            <p className="text-sm text-gs1-muted">Konkrete verdiforslag, caser og sitater skreddersydd for sektoren. Se nedenfor.</p>
          </div>
        </div>
      </div>

      {/* Sektorbudskap */}
      <div>
        <h3 className="font-display font-semibold text-gs1-blue mb-4">Verdiforslag per sektor</h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {SECTOR_MESSAGES.map(s => {
            const SIcon = s.icon;
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded
                  ${isActive
                    ? 'bg-gs1-blue text-white border-gs1-blue'
                    : 'bg-white text-gs1-text border-gs1-border hover:border-gs1-blue hover:text-gs1-blue'}`}
              >
                <SIcon size={15} />
                {s.sector}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-gs1-border rounded overflow-hidden"
          >
            {/* Sektorhode */}
            <div className="bg-gs1-blue p-6 flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded">
                <ActiveIcon size={28} className="text-gs1-orange" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xl m-0">{active.sector}</h3>
                <p className="text-white/70 text-sm">{active.role}</p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Én setning */}
              <div className="bg-gs1-blue-light border-l-4 border-l-gs1-blue p-4 rounded">
                <p className="text-xs font-bold text-gs1-blue uppercase tracking-wider mb-2">Én setning — kjernebudskapet</p>
                <p className="text-gs1-text font-medium leading-relaxed">"{active.oneLiner}"</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Hvorfor det betyr noe */}
                <div>
                  <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-3">Hvorfor det betyr noe</p>
                  <ul className="space-y-2.5">
                    {active.whyItMatters.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gs1-text">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gs1-orange shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevante tjenester */}
                <div>
                  <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-3">Relevante GS1-tjenester</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {active.services.map((service, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gs1-bg border border-gs1-border rounded text-xs font-semibold text-gs1-blue">
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-2">Dokumentasjon / case</p>
                  <div className="bg-gs1-bg border border-gs1-border p-3 rounded">
                    <p className="text-sm text-gs1-text italic leading-relaxed">{active.evidence}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-gs1-border pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gs1-muted uppercase tracking-wider mb-1">Ønsket CTA</p>
                  <p className="text-sm font-semibold text-gs1-blue">"{active.cta}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Formelmal */}
      <div className="bg-gs1-orange-light border border-gs1-orange/20 p-6 rounded">
        <p className="text-sm font-semibold text-gs1-text mb-4">Bruk denne strukturen for nye sektorer og kampanjer:</p>
        <ol className="space-y-3 text-gs1-text">
          {[
            ['Én setning', '"For [rolle] i [sektor] hjelper GS1 deg å …"'],
            ['Hvorfor det betyr noe', 'EU-krav, ROI-dokumentasjon, bærekraftskrav (3–4 bullets)'],
            ['Relevante tjenester', 'Hvilke GS1-standarder og tjenester som typisk inngår'],
            ['Dokumentasjon', 'Konkret case, tall eller ROI-estimat som kan verifiseres'],
            ['CTA', 'Én spesifikk handling — lenke til ressurs, webinar eller rådgiver'],
          ].map(([label, desc], i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="font-bold text-gs1-orange font-display">{i + 1}.</span>
              <span><strong>{label}:</strong> {desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
