import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { Building2, HeartPulse, ShoppingCart, Zap, Truck } from 'lucide-react';

const AUDIENCE_CARDS = [
  {
    id: 'bygg',
    sector: 'Bygg & Anlegg',
    icon: Building2,
    role: 'Byggherredirektør / Prosjektleder',
    goals: ['Kostnadskontroll', 'Bærekraftsrapportering', 'Effektiv logistikk'],
    challenges: ['Mangel på sporing av materialer', 'Manuelle prosesser på byggeplass', 'Nye miljøkrav (DPP)'],
    objections: ['"Det koster for mye å implementere"', '"Bransjen er ikke moden"'],
    channels: ['LinkedIn', 'Bygg.no', 'Frokostseminarer'],
    action: 'Booke møte for pilotprosjekt på materialsporing'
  },
  {
    id: 'helse',
    sector: 'Helse',
    icon: HeartPulse,
    role: 'IKT-direktør / Logistikksjef Sykehus',
    goals: ['Pasientsikkerhet', 'Redusere svinn', 'Automatisert varemottak'],
    challenges: ['Komplekse IT-systemer', 'Feilmedisinering', 'Manuell telling av utstyr'],
    objections: ['"Vi har egne systemer som fungerer"', '"For ressurskrevende å bytte"'],
    channels: ['Helsekonferanser', 'Direkte dialog', 'Dybdeartikler (Web)'],
    action: 'Laste ned ROI-case fra Sykehusinnkjøp'
  },
  {
    id: 'dagligvare',
    sector: 'Dagligvare',
    icon: ShoppingCart,
    role: 'Kategoriansvarlig / Supply Chain Manager',
    goals: ['Sømløs verdikjede', 'Redusere matsvinn', 'Raskere time-to-market'],
    challenges: ['Utdatert strekkode-teknologi', 'Krav om mer forbrukerinfo'],
    objections: ['"2D-koder krever oppgradering av alle kasser"'],
    channels: ['LinkedIn', 'Nyhetsbrev', 'Bransjetreff'],
    action: 'Melde seg på webinar om overgang til 2D-koder'
  },
  {
    id: 'energi',
    sector: 'Energi',
    icon: Zap,
    role: 'Driftssjef / Asset Manager',
    goals: ['Sikker og effektiv vedlikeholdsstyring', 'Redusere nedetid', 'Etterleve regulatoriske rapporteringskrav'],
    challenges: ['Tusenvis av komponenter fra hundrevis av leverandører uten felles ID', 'Manuelle prosesser for reservedelsbestilling', 'Nye EU-krav til produktdokumentasjon'],
    objections: ['"Vi har egne interne systemer som fungerer godt nok"', '"Bransjen er ikke standardisert nok til at GS1 hjelper"'],
    channels: ['LinkedIn', 'Fagkonferanser (ONS, Energi Norge)', 'Direkte dialog', 'Web/artikkel'],
    action: 'Bestille en gjennomgang med GS1-rådgiver for komponentidentifikasjon'
  },
  {
    id: 'grossist',
    sector: 'Grossist / Logistikk',
    icon: Truck,
    role: 'Logistikkdirektør / Operasjonsdirektør',
    goals: ['Feilfri ordrebehandling', 'Effektiv lagerstyring', 'Automatisert varemottak og fakturering'],
    challenges: ['Avvik mellom leverandørdata og eget system', 'Manuell håndtering av produktdata fra hundrevis av leverandører', 'Krav om mer sporbarhet fra kunder og myndigheter'],
    objections: ['"Vi er mellomledd — produsentene må ta ansvaret"', '"Vi har ikke kapasitet til å tvinge leverandørene over på GS1"'],
    channels: ['LinkedIn', 'Nyhetsbrev', 'Bransjetreff (Logistikk & Transport)', 'Direkte dialog'],
    action: 'Laste ned GS1 Sync-veileder for grossister'
  }
];

export default function Audiences() {
  const [activeCard, setActiveCard] = useState(AUDIENCE_CARDS[0].id);

  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Målgrupper og Roller" 
        description="Vi prioriterer på tre akser: Sektor, Rolle og Makrobehov. Her er våre Audience Cards."
      />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gs1-border mb-8">
        <h3 className="text-lg font-semibold text-gs1-blue mb-4">Prioriteringsakser</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gs1-bg rounded-lg">
            <h4 className="font-bold text-gs1-text mb-2">1. Sektor</h4>
            <p className="text-sm text-gs1-muted">Bygg, helse, energi, dagligvare (pri 1), deretter øvrige bransjer.</p>
          </div>
          <div className="p-4 bg-gs1-bg rounded-lg">
            <h4 className="font-bold text-gs1-text mb-2">2. Rolle</h4>
            <p className="text-sm text-gs1-muted">C-suite/ledelse, fag/operasjon, IKT/digital, marked/kommunikasjon, bærekraft.</p>
          </div>
          <div className="p-4 bg-gs1-bg rounded-lg">
            <h4 className="font-bold text-gs1-text mb-2">3. Makrobehov</h4>
            <p className="text-sm text-gs1-muted">Effektivitet/kostnad, sporbarhet/pasientsikkerhet, etterlevelse, bærekraft, innovasjon.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gs1-blue mb-6">Audience Cards (Eksempler)</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {AUDIENCE_CARDS.map(card => {
            const Icon = card.icon;
            const isActive = activeCard === card.id;
            return (
              <button
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border
                  ${isActive 
                    ? 'bg-gs1-blue text-white border-gs1-blue' 
                    : 'bg-white text-gs1-text border-gs1-border hover:border-gs1-blue'}`}
              >
                <Icon size={16} />
                {card.sector}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gs1-border overflow-hidden">
          {AUDIENCE_CARDS.map(card => card.id === activeCard && (
            <motion.div 
              key={card.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gs1-blue p-6 text-white flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <card.icon size={32} className="text-gs1-orange" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold m-0">{card.sector}</h3>
                  <p className="text-white/80 text-lg">{card.role}</p>
                </div>
              </div>
              
              <div className="p-6 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gs1-muted uppercase tracking-wider mb-3">Forretningsmål & KPIer</h4>
                    <ul className="space-y-2">
                      {card.goals.map((goal, i) => (
                        <li key={i} className="flex items-center gap-2 text-gs1-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-gs1-orange" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gs1-muted uppercase tracking-wider mb-3">Utfordringer & Risiko</h4>
                    <ul className="space-y-2">
                      {card.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-center gap-2 text-gs1-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-gs1-orange" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gs1-muted uppercase tracking-wider mb-3">Typiske Innvendinger</h4>
                    <div className="space-y-2">
                      {card.objections.map((obj, i) => (
                        <div key={i} className="bg-gs1-bg p-3 rounded-lg text-sm text-gs1-text italic border-l-2 border-gs1-muted">
                          {obj}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gs1-muted uppercase tracking-wider mb-3">Kanaler & Format</h4>
                    <div className="flex flex-wrap gap-2">
                      {card.channels.map((channel, i) => (
                        <span key={i} className="px-3 py-1 bg-gs1-blue-light text-gs1-blue rounded-full text-xs font-medium border border-gs1-border">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gs1-muted uppercase tracking-wider mb-2">Ønsket Handling (CTA)</h4>
                    <p className="text-gs1-text font-medium">{card.action}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
