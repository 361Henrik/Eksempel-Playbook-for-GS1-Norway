import { SectionHeader } from './ui/SectionHeader';
import { Globe, Target, ShieldCheck } from 'lucide-react';

export default function Framework() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Rammer: GS1-rollen, Vision2030 og GÅANS" 
        description="Fundamentet for all vår kommunikasjon. Alt vi sier og gjør skal bygge opp under dette."
      />

      <div className="space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gs1-border">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-gs1-orange w-8 h-8" />
            <h2 className="text-2xl font-bold text-gs1-blue m-0">Samfunnsoppdraget</h2>
          </div>
          <p className="text-lg text-gs1-text mb-6">
            GS1 Norway er en nøytral, medlemseid non-profit organisasjon som utvikler og forvalter åpne standarder for identifikasjon og datadeling. Vi skaper et felles forretningsspråk som gir effektivitet, sikkerhet og sporbarhet i hele verdikjeden.
          </p>
          <div className="bg-gs1-bg p-4 rounded-lg border-l-4 border-gs1-orange">
            <p className="font-medium text-gs1-blue m-0">Kommunikasjon skal gjøre dette oppdraget:</p>
            <ul className="mt-2 space-y-1 text-sm text-gs1-text list-disc list-inside">
              <li>Forståelig for beslutningstakere</li>
              <li>Relevant for deres bransje og mål</li>
              <li>Konkret gjennom ROI-historier, cases og gode eksempler</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gs1-blue text-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-gs1-orange w-8 h-8" />
              <h2 className="text-2xl font-bold m-0 text-white">Vision 2030</h2>
            </div>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-lg mb-1">Industry Needs First</h4>
                <p className="text-white/80 text-sm">Vi starter i forretningsproblemet, ikke i standarden.</p>
              </li>
              <li>
                <h4 className="font-bold text-lg mb-1">Trusted Identification & Data</h4>
                <p className="text-white/80 text-sm">Vi går fra "strekkoder" til "tillit til data".</p>
              </li>
              <li>
                <h4 className="font-bold text-lg mb-1">Accelerating as One GS1</h4>
                <p className="text-white/80 text-sm">Vi jobber som ett globalt nettverk, med felles merkevare og rammer.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gs1-border">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-gs1-orange w-8 h-8" />
              <h2 className="text-2xl font-bold text-gs1-blue m-0">GS1 Norway Strategi</h2>
            </div>
            <p className="text-sm text-gs1-muted mb-4">Kommunikasjon skal særlig bidra til:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
                <span className="text-sm text-gs1-text"><strong>Rolle, omdømme og kommunikasjon</strong> – synlig tankeleder og "trusted advisor"</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
                <span className="text-sm text-gs1-text"><strong>Vekst i fokussektorer</strong> – bygg, helse, energi, dagligvare</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
                <span className="text-sm text-gs1-text"><strong>Verdiskaping for medlemmer</strong> – ROI og dokumentert effekt</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
                <span className="text-sm text-gs1-text"><strong>Effektiv drift og teknologi</strong> – AI som motor for skalering</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gs1-border">
          <h2 className="text-2xl font-bold text-gs1-blue mb-6">Verdiene GÅANS i kommunikasjon</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Grundig', desc: 'Vi går i dybden, er etterrettelige, og dokumenterer effekter.' },
              { title: 'Åpen', desc: 'Vi er transparente, deler innsikt og forklarer valg.' },
              { title: 'Ansvarlig', desc: 'Vi tar eierskap til leveranser og konsekvenser.' },
              { title: 'Nysgjerrig', desc: 'Vi tester nye formater, verktøy og tilnærminger (inkl. AI).' },
              { title: 'Sammen', desc: 'Vi jobber som ett team på tvers av sektorer og funksjoner.' },
            ].map((v, i) => (
              <div key={i} className="p-4 bg-gs1-bg rounded-lg">
                <h4 className="font-bold text-gs1-orange mb-2">{v.title}</h4>
                <p className="text-sm text-gs1-text">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
