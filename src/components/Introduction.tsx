import { SectionHeader } from './ui/SectionHeader';
import { Target, Users, BookOpen, XCircle } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Fra operativ støtte til strategisk vekstmotor" 
        description="GS1 Norway står midt i en strategisk dreining frem mot Vision 2030. Denne playbooken er et meget viktig element for å løse dette inn i neste strategiperiode."
      />

      <div className="text-gs1-text">
        <p className="text-lg mb-6 leading-relaxed">
          Globalt ligger rammene fast: vi skal sette <strong>“Industry Needs First”</strong>, bygge <strong>“trusted data”</strong> og levere som ett GS1 på tvers av land og bransjer. Samtidig har vi i Norge et tydelig ambisjonsnivå: innen 2029 skal GS1 Norway være en uunnværlig katalysator som omsetter globale standarder til målbar verdi for norsk næringsliv, forbrukere og pasienter.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gs1-border mb-8">
          <h3 className="text-xl font-semibold text-gs1-blue mb-4">Vision 2030 krever at vi:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-orange shrink-0" />
              <span>Går fra ressursbooking av ansatte til en <strong>tydelig service-leveransemodell</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-orange shrink-0" />
              <span>Går fra å snakke om standarder og syntaks til å snakke om <strong>ROI, risiko, bærekraft og forretningsverdi</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-orange shrink-0" />
              <span>Løser kapasitetsutfordringen gjennom <strong>AI-drevne arbeidsflyter</strong> (Dynamisk Brief, InfoHub, 80/15/5-modellen).</span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gs1-border">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-gs1-orange" />
              <h3 className="text-xl font-semibold text-gs1-blue m-0">Hva Playbooken ER</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>✓ Vår standardiserte arbeidsmåte for kommunikasjon</li>
              <li>✓ Et operativt oppslagsverk for målgrupper, budskap, tone og kanaler</li>
              <li>✓ Et sett med byggeklosser for både mennesker og AI-verktøy</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gs1-border">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="text-gs1-muted" />
              <h3 className="text-xl font-semibold text-gs1-blue m-0">Hva Playbooken IKKE er</h3>
            </div>
            <ul className="space-y-2 text-sm text-gs1-muted">
              <li>✗ En strategi (den forankres i Vision2030, men erstatter den ikke)</li>
              <li>✗ En aktivitetsplan eller årshjul</li>
              <li>✗ En styrepresentasjon</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gs1-blue mb-4">Hvem er den for?</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { role: 'Kommunikasjonsteamet', desc: 'Planlegger, prioriterer, produserer, publiserer og måler effekt.' },
            { role: 'Sektor- og fagansvarlige', desc: 'Definerer mål, leverer innsikt og fakta, godkjenner fag.' },
            { role: 'Ledelsen', desc: 'Setter retning, godkjenner tone og posisjon, er nøkkelavsendere.' },
            { role: 'AI-verktøy', desc: 'Leser dataene og genererer utkast i tråd med rammene.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-gs1-bg rounded-lg border border-gs1-border">
              <Users className="text-gs1-blue shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-gs1-blue m-0">{item.role}</h4>
                <p className="text-sm text-gs1-text m-0 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
