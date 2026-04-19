import { SectionHeader } from './ui/SectionHeader';
import { HeartHandshake, Lightbulb, Wrench, Check } from 'lucide-react';

export default function ToneOfVoice() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Tone of Voice og Stil" 
        description="Hvordan vi høres ut er like viktig som hva vi sier. Vår personlighet bygger tillit og engasjement."
      />

      <div>
        <h3 className="text-2xl font-bold text-nordic-blue mb-6">Vår Personlighet</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-nordic-border">
            <div className="w-12 h-12 bg-nordic-blue-light rounded-full flex items-center justify-center mb-4">
              <HeartHandshake className="text-nordic-blue" />
            </div>
            <h4 className="text-xl font-bold text-nordic-text mb-3">Inkluderende</h4>
            <p className="text-sm text-nordic-text-muted">
              Vi inviterer inn, unngår stammespråk, og gjør komplekse ting forståelige for alle.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-nordic-border">
            <div className="w-12 h-12 bg-nordic-accent-light rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="text-nordic-accent" />
            </div>
            <h4 className="text-xl font-bold text-nordic-text mb-3">Inspirerende</h4>
            <p className="text-sm text-nordic-text-muted">
              Vi viser muligheter og fremtid, ikke bare krav, regler og begrensninger.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-nordic-border">
            <div className="w-12 h-12 bg-nordic-green-light rounded-full flex items-center justify-center mb-4">
              <Wrench className="text-nordic-green" />
            </div>
            <h4 className="text-xl font-bold text-nordic-text mb-3">Løsningsorienterte</h4>
            <p className="text-sm text-nordic-text-muted">
              Vi snakker om "hvordan" og konkret effekt på bunnlinje, tid og risiko.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-nordic-bg p-8 rounded-2xl border border-nordic-border">
        <h3 className="text-2xl font-bold text-nordic-blue mb-6">Praktiske Språkregler</h3>
        <ul className="space-y-4">
          {[
            'Skriv kort og konkret – én hoved-idé per avsnitt.',
            'Bruk aktiv form ("vi gjør", "du får" – ikke "det gjøres").',
            'Forklar tekniske begreper første gang de nevnes i en tekst.',
            'Knytt alltid standarder til konsekvens for virksomheten (kostnad, risiko, bærekraft, pasientsikkerhet).'
          ].map((rule, i) => (
            <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-nordic-border">
              <Check className="text-nordic-accent shrink-0 mt-0.5" size={20} />
              <span className="text-nordic-text font-medium">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-nordic-border">
        <h3 className="text-2xl font-bold text-nordic-blue mb-6">Visuell Typografi (Design System)</h3>
        <div className="space-y-4 text-sm text-nordic-text">
          <p><strong>Primary Font (Print):</strong> Gotham Office (Tracking -20)</p>
          <p><strong>Web Font:</strong> Gotham ScreenSmart</p>
          <p><strong>Shared Docs:</strong> Verdana</p>
          <p><strong>Alignment:</strong> Left-aligned, top of bounding box.</p>
        </div>
      </div>
    </div>
  );
}
