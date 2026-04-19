import { SectionHeader } from './ui/SectionHeader';
import { Bot, Database, Sparkles, AlertTriangle } from 'lucide-react';

export default function AITools() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="AI og Verktøystøtte" 
        description="Hvordan vi bruker AI for å skalere kvalitet og kapasitet basert på vår unike GS1-IP."
      />

      <div className="bg-nordic-blue text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Database className="text-nordic-accent" />
          Vår unike IP (Intellectual Property)
        </h3>
        <p className="mb-6 text-white/90">
          Playbooken fanger GS1 Norway sin unike kommunikasjons-IP. Dette gjør at våre AI-verktøy leverer skreddersydd innhold, ikke generisk tekst fra internett.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-5 rounded-xl">
            <h4 className="font-bold text-nordic-accent mb-2">Verdibaserte budskap</h4>
            <p className="text-sm text-white/80">Godkjente fakta som knytter standarder til forretningsverdi (ROI, bærekraft).</p>
          </div>
          <div className="bg-white/10 p-5 rounded-xl">
            <h4 className="font-bold text-nordic-accent mb-2">Audience Cards</h4>
            <p className="text-sm text-white/80">Detaljert innsikt i målgruppenes mål og utfordringer. Hindrer generisk innhold.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-xl">
            <h4 className="font-bold text-nordic-accent mb-2">Tone-of-Voice</h4>
            <p className="text-sm text-white/80">Konkrete språkregler skreddersydd for GS1 (inkluderende, aktiv form).</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-nordic-border">
          <h3 className="text-xl font-bold text-nordic-text mb-6 flex items-center gap-2">
            <Sparkles className="text-nordic-green" />
            Hva AI KAN gjøre
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-nordic-green shrink-0" />
              <span className="text-sm text-nordic-text">Lage strukturerte førsteutkast</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-nordic-green shrink-0" />
              <span className="text-sm text-nordic-text">Omskrive og tilpasse til kanaler og målgrupper</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-nordic-green shrink-0" />
              <span className="text-sm text-nordic-text">Hente ut forslag til titler, ingresser, budskap</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-nordic-green shrink-0" />
              <span className="text-sm text-nordic-text">Oppsummere lengre dokumenter til bruk i brief og caser</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-nordic-border">
          <h3 className="text-xl font-bold text-nordic-text mb-6 flex items-center gap-2">
            <AlertTriangle className="text-nordic-accent" />
            Hva AI BØR IKKE gjøre
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-nordic-accent shrink-0" />
              <span className="text-sm text-nordic-text">Godkjenne innhold som juridisk korrekt eller regulatorisk tilstrekkelig</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-nordic-accent shrink-0" />
              <span className="text-sm text-nordic-text">Fastslå ROI-tall uten datagrunnlag</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-nordic-accent shrink-0" />
              <span className="text-sm text-nordic-text">Publisere eller kommunisere direkte utad uten menneskelig kontroll</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
