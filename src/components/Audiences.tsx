import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { Building2, HeartPulse, ShoppingCart } from 'lucide-react';

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

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-nordic-border mb-8">
        <h3 className="text-lg font-semibold text-nordic-blue mb-4">Prioriteringsakser</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-nordic-bg rounded-lg">
            <h4 className="font-bold text-nordic-text mb-2">1. Sektor</h4>
            <p className="text-sm text-nordic-text-muted">Bygg, helse, energi, dagligvare (pri 1), deretter øvrige bransjer.</p>
          </div>
          <div className="p-4 bg-nordic-bg rounded-lg">
            <h4 className="font-bold text-nordic-text mb-2">2. Rolle</h4>
            <p className="text-sm text-nordic-text-muted">C-suite/ledelse, fag/operasjon, IKT/digital, marked/kommunikasjon, bærekraft.</p>
          </div>
          <div className="p-4 bg-nordic-bg rounded-lg">
            <h4 className="font-bold text-nordic-text mb-2">3. Makrobehov</h4>
            <p className="text-sm text-nordic-text-muted">Effektivitet/kostnad, sporbarhet/pasientsikkerhet, etterlevelse, bærekraft, innovasjon.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-nordic-blue mb-6">Audience Cards (Eksempler)</h3>
        
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
                    ? 'bg-nordic-blue text-white border-nordic-blue' 
                    : 'bg-white text-nordic-text border-nordic-border hover:border-nordic-blue'}`}
              >
                <Icon size={16} />
                {card.sector}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-nordic-border overflow-hidden">
          {AUDIENCE_CARDS.map(card => card.id === activeCard && (
            <motion.div 
              key={card.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-nordic-blue p-6 text-white flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <card.icon size={32} className="text-nordic-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold m-0">{card.sector}</h3>
                  <p className="text-white/80 text-lg">{card.role}</p>
                </div>
              </div>
              
              <div className="p-6 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-nordic-text-muted uppercase tracking-wider mb-3">Forretningsmål & KPIer</h4>
                    <ul className="space-y-2">
                      {card.goals.map((goal, i) => (
                        <li key={i} className="flex items-center gap-2 text-nordic-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-nordic-accent" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-nordic-text-muted uppercase tracking-wider mb-3">Utfordringer & Risiko</h4>
                    <ul className="space-y-2">
                      {card.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-center gap-2 text-nordic-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-nordic-accent" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-nordic-text-muted uppercase tracking-wider mb-3">Typiske Innvendinger</h4>
                    <div className="space-y-2">
                      {card.objections.map((obj, i) => (
                        <div key={i} className="bg-nordic-bg p-3 rounded-lg text-sm text-nordic-text italic border-l-2 border-nordic-text-muted">
                          {obj}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-nordic-text-muted uppercase tracking-wider mb-3">Kanaler & Format</h4>
                    <div className="flex flex-wrap gap-2">
                      {card.channels.map((channel, i) => (
                        <span key={i} className="px-3 py-1 bg-nordic-blue-light text-nordic-blue rounded-full text-xs font-medium border border-nordic-border">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-nordic-text-muted uppercase tracking-wider mb-2">Ønsket Handling (CTA)</h4>
                    <p className="text-nordic-text font-medium">{card.action}</p>
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
