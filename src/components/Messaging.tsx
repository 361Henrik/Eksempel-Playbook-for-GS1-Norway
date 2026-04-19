import { SectionHeader } from './ui/SectionHeader';
import { MessageSquareQuote, TrendingUp, ShieldCheck, Leaf } from 'lucide-react';

export default function Messaging() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Budskap og Verdiforslag" 
        description="Hvordan vi bygger opp budskapene våre fra overordnet posisjon til konkrete verdiforslag per målgruppe."
      />

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-nordic-border">
        <h3 className="text-2xl font-bold text-nordic-blue mb-6">Budskaps-arkitektur</h3>
        <div className="space-y-4">
          <div className="p-6 bg-nordic-blue text-white rounded-xl relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <MessageSquareQuote size={120} />
            </div>
            <span className="text-nordic-accent font-bold text-sm tracking-wider uppercase mb-2 block">Nivå 1</span>
            <h4 className="text-xl font-bold mb-2">Overordnet posisjon</h4>
            <p className="text-white/80">GS1 som infrastrukturen for pålitelig data og sporbar verdikjede.</p>
          </div>
          
          <div className="p-6 bg-nordic-bg rounded-xl border border-nordic-border">
            <span className="text-nordic-blue font-bold text-sm tracking-wider uppercase mb-2 block">Nivå 2</span>
            <h4 className="text-xl font-bold text-nordic-text mb-4">Pilarer</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-nordic-text bg-white p-3 rounded-lg shadow-sm">
                <TrendingUp className="text-nordic-accent" size={18} /> ROI / Effektivitet
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-nordic-text bg-white p-3 rounded-lg shadow-sm">
                <ShieldCheck className="text-nordic-accent" size={18} /> Etterlevelse & Risiko
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-nordic-text bg-white p-3 rounded-lg shadow-sm">
                <Leaf className="text-nordic-accent" size={18} /> Bærekraft & Sirkularitet
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-nordic-border border-dashed">
            <span className="text-nordic-text-muted font-bold text-sm tracking-wider uppercase mb-2 block">Nivå 3</span>
            <h4 className="text-xl font-bold text-nordic-text mb-2">Moduler per målgruppe</h4>
            <p className="text-nordic-text-muted text-sm">Konkrete verdiforslag, caser og sitater skreddersydd for sektoren.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-nordic-blue mb-6">Verdiforslag Struktur</h3>
        <div className="bg-nordic-accent-light border border-nordic-accent/20 p-6 rounded-xl">
          <p className="text-lg text-nordic-text mb-4">For hver målgruppe og makro-behov definerer vi:</p>
          <ul className="space-y-3 text-nordic-text">
            <li className="flex items-start gap-3">
              <span className="font-bold text-nordic-accent">1.</span>
              <span><strong>Én setning:</strong> "For [rolle] i [sektor] hjelper GS1 deg å …"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-nordic-accent">2.</span>
              <span><strong>Hvorfor det betyr noe:</strong> (3–4 bullets)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-nordic-accent">3.</span>
              <span><strong>Tjenester:</strong> Hvilke GS1-tjenester/standarder som typisk inngår</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-nordic-accent">4.</span>
              <span><strong>Dokumentasjon:</strong> Hvilken ROI eller risiko-reduksjon vi kan dokumentere</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-nordic-accent">5.</span>
              <span><strong>CTA:</strong> Hvilken handling vi ønsker</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
