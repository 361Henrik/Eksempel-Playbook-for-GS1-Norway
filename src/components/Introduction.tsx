import { SectionHeader } from './ui/SectionHeader';
import { ExampleBanner } from './ui/ExampleBanner';
import { Target, Users, BookOpen, XCircle, Lightbulb } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="space-y-12">
      <ExampleBanner />

      <SectionHeader
        title="Fra operativ støtte til strategisk vekstmotor"
        description="GS1 Norway står midt i en strategisk dreining frem mot Vision 2030. Denne playbooken er et konkret eksempel på hva GS1 Norway kan ha på plass i kommunikasjonsarbeidet."
      />

      <div className="text-gs1-text">
        <div className="bg-gs1-blue-light border border-gs1-border rounded-xl p-6 mb-8">
          <p className="text-base leading-relaxed text-gs1-text mb-3">
            Denne playbooken er bygget av Henrik som en konkret demonstrasjon av hva GS1 Norway kan ha på plass i kommunikasjonsarbeidet frem mot Vision 2030. Alt innhold — fra audience cards til kanalguider og maler — er eksempelbasert og ment som inspirasjon, ikke som ferdig vedtatt policy.
          </p>
          <p className="text-base leading-relaxed text-gs1-text">
            Tanken er enkel: i stedet for å beskrive hva en playbook bør inneholde i et PowerPoint-lysbilde, er dette en faktisk versjon du kan klikke deg gjennom, tilpasse og bruke som grunnlag for noe ekte.
          </p>
        </div>

        <p className="text-lg mb-6 leading-relaxed">
          Globalt ligger rammene fast: vi skal sette <strong>"Industry Needs First"</strong>, bygge <strong>"trusted data"</strong> og levere som ett GS1 på tvers av land og bransjer. Samtidig har vi i Norge et tydelig ambisjonsnivå: innen 2029 skal GS1 Norway være en uunnværlig katalysator som omsetter globale standarder til målbar verdi for norsk næringsliv, forbrukere og pasienter.
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

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gs1-border">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-gs1-orange" />
              <h3 className="text-lg font-semibold text-gs1-blue m-0">Hva playbooken ER</h3>
            </div>
            <ul className="space-y-2 text-sm text-gs1-text">
              <li className="flex items-start gap-2"><span className="text-gs1-orange mt-0.5">✓</span> Vår standardiserte arbeidsmåte for kommunikasjon</li>
              <li className="flex items-start gap-2"><span className="text-gs1-orange mt-0.5">✓</span> Et operativt oppslagsverk for målgrupper, budskap, tone og kanaler</li>
              <li className="flex items-start gap-2"><span className="text-gs1-orange mt-0.5">✓</span> Et sett med byggeklosser for både mennesker og AI-verktøy</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gs1-border">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="text-gs1-muted" />
              <h3 className="text-lg font-semibold text-gs1-blue m-0">Hva playbooken IKKE er</h3>
            </div>
            <ul className="space-y-2 text-sm text-gs1-muted">
              <li className="flex items-start gap-2"><span className="mt-0.5">✗</span> En strategi (forankres i Vision 2030, men erstatter den ikke)</li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✗</span> En aktivitetsplan eller årshjul</li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✗</span> En styrepresentasjon</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gs1-border">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-gs1-blue" />
              <h3 className="text-lg font-semibold text-gs1-blue m-0">Hva dette eksempelet viser</h3>
            </div>
            <ul className="space-y-2 text-sm text-gs1-text">
              <li className="flex items-start gap-2"><span className="text-gs1-blue mt-0.5">✦</span> Et konkret forslag til struktur og innhold</li>
              <li className="flex items-start gap-2"><span className="text-gs1-blue mt-0.5">✦</span> En arbeidsmodell som kan tilpasses og utvides</li>
              <li className="flex items-start gap-2"><span className="text-gs1-blue mt-0.5">✦</span> Et grunnlag for diskusjon om hva GS1 Norways playbook bør bli</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gs1-blue mb-4">Hvem er den for?</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
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

        <div className="bg-gs1-orange-light border border-gs1-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Target className="text-gs1-orange shrink-0" size={20} />
            <h3 className="text-lg font-semibold text-gs1-blue m-0">Hvordan du kan bidra</h3>
          </div>
          <p className="text-sm text-gs1-text leading-relaxed mb-0">
            Har du eksisterende dokumenter, strateginotater eller lenker som bør inn? Gå til <strong>«Legg til innhold»</strong> i menyen — og se hvordan de kan mappes til playbooken.
          </p>
        </div>
      </div>
    </div>
  );
}
