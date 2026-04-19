import { SectionHeader } from './ui/SectionHeader';
import { ArrowRight, FileText, CheckCircle2, Bot } from 'lucide-react';

function XCircle(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
}

export default function Processes() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Arbeidsprosesser og Ansvar (SOP)" 
        description="Kjernen i Playbooken er arbeidsmetoden. Vi går fra ressursbooking til en leveransedrevet modell."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-nordic-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-nordic-accent" />
          <h3 className="text-lg font-bold text-nordic-text mb-4">Gammel Modell</h3>
          <ul className="space-y-3 text-sm text-nordic-text-muted">
            <li className="flex items-center gap-2"><XCircle className="text-nordic-accent" size={16} /> Sektorleder ber om "40% av en ressurs"</li>
            <li className="flex items-center gap-2"><XCircle className="text-nordic-accent" size={16} /> Uklare leveranser</li>
            <li className="flex items-center gap-2"><XCircle className="text-nordic-accent" size={16} /> Ingen nedre/øvre grense</li>
            <li className="flex items-center gap-2"><XCircle className="text-nordic-accent" size={16} /> Mye tidsbruk og frustrasjon</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-nordic-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-nordic-green" />
          <h3 className="text-lg font-bold text-nordic-text mb-4">Ny Modell</h3>
          <ul className="space-y-3 text-sm text-nordic-text">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-nordic-green" size={16} /> Sektorene bestiller <strong>definerte produkter</strong></li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-nordic-green" size={16} /> Kommunikasjon eier metode og kvalitet</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-nordic-green" size={16} /> Skalerbar leveranse</li>
          </ul>
        </div>
      </div>

      <div className="bg-nordic-blue text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <FileText className="text-nordic-accent" />
          Dynamisk Brief
        </h3>
        <p className="text-xl font-medium text-nordic-accent mb-6">"Ingen brief = ingen produksjon"</p>
        <p className="mb-6 text-white/80">
          All kommunikasjon starter med Dynamisk Brief. Dette sikrer at bestillinger er velformulerte og at kommunikasjon har informasjonen de trenger.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <h4 className="font-bold mb-2 text-sm uppercase tracking-wider">Briefen sikrer:</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>• Målgruppe og ønsket effekt</li>
              <li>• Kobling til Vision2030</li>
              <li>• Forslag til kanaler</li>
              <li>• Fakta og råmateriale</li>
            </ul>
          </div>
          <div className="bg-nordic-accent-light border border-nordic-accent/30 p-4 rounded-lg">
            <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-nordic-accent">Uten godkjent brief:</h4>
            <ul className="space-y-2 text-sm text-nordic-text">
              <li>• Settes ikke oppdraget i årshjulet</li>
              <li>• Produseres det ikke innhold</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-nordic-blue mb-6 flex items-center gap-3">
          <Bot className="text-nordic-accent" />
          80/15/5-modellen
        </h3>
        <p className="text-nordic-text-muted mb-6">For å løse kapasitetsflaskehalsen bruker vi AI som produksjonsmotor.</p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-white p-6 rounded-xl border-t-4 border-nordic-blue shadow-sm">
            <div className="text-3xl font-black text-nordic-blue mb-2">80%</div>
            <h4 className="font-bold text-nordic-text mb-2">AI Genererer</h4>
            <p className="text-sm text-nordic-text-muted">Struktur, førsteutkast og versjoner basert på Dynamisk Brief og Playbook-data.</p>
          </div>
          <div className="flex items-center justify-center hidden md:flex">
            <ArrowRight className="text-gray-300" />
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl border-t-4 border-nordic-accent shadow-sm">
            <div className="text-3xl font-black text-nordic-accent mb-2">15%</div>
            <h4 className="font-bold text-nordic-text mb-2">Kommunikasjon Foredler</h4>
            <p className="text-sm text-nordic-text-muted">Vinkling, flyt, kvalitet, merkevare og språk.</p>
          </div>
          <div className="flex items-center justify-center hidden md:flex">
            <ArrowRight className="text-gray-300" />
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl border-t-4 border-nordic-green shadow-sm">
            <div className="text-3xl font-black text-nordic-green mb-2">5%</div>
            <h4 className="font-bold text-nordic-text mb-2">Fagperson Verifiserer</h4>
            <p className="text-sm text-nordic-text-muted">Fakta, tall, regulatoriske formuleringer og sensitivt innhold.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
