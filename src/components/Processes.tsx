import { useState } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { ArrowRight, FileText, Bot, CheckCircle2, Clock, User, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

type SOPStep = {
  step: number;
  title: string;
  owner: string;
  duration: string;
  actions: string[];
  gate?: string;
};

type SOP = {
  id: string;
  title: string;
  description: string;
  trigger: string;
  steps: SOPStep[];
};

const SOPS: SOP[] = [
  {
    id: 'innholdsproduksjon',
    title: 'SOP 1 — Innholdsproduksjon fra brief til publisering',
    description: 'Standardprosessen for all planlagt innholdsproduksjon. Gjelder LinkedIn-innlegg, fagartikler, nyhetsbrev og webinar-beskrivelser.',
    trigger: 'Sektoransvarlig eller kommunikasjon identifiserer behov for innhold.',
    steps: [
      {
        step: 1,
        title: 'Brief innsendes',
        owner: 'Sektoransvarlig',
        duration: 'Samme dag',
        actions: [
          'Fyll ut Dynamisk Brief (mal i Maler-seksjonen)',
          'Legg ved relevant fakta, tall og kildelenker',
          'Send til kommunikasjon via avtalt kanal (Teams/e-post)',
        ],
        gate: 'Ufullstendig brief returneres. Ingen produksjon starter uten godkjent brief.',
      },
      {
        step: 2,
        title: 'Brief vurderes og prioriteres',
        owner: 'Kommunikasjon',
        duration: '1 virkedag',
        actions: [
          'Gjennomgå brief for fullstendighet',
          'Vurder prioritet mot årshjul og kapasitet',
          'Bekreft mottak og forventet leveringstid til bestiller',
          'Legg inn i produksjonsplan',
        ],
      },
      {
        step: 3,
        title: 'AI-assistert produksjon (80%)',
        owner: 'Kommunikasjon',
        duration: '1–2 virkedager',
        actions: [
          'Last brief og playbook-data inn i AI-verktøy (Claude / Gemini)',
          'Generer strukturert førsteutkast',
          'Juster prompt ved behov og generer alternativt utkast',
          'Lagre alle utkast i .tmp/-mappe — aldri direkte i CMS',
        ],
      },
      {
        step: 4,
        title: 'Redaksjonell foredling (15%)',
        owner: 'Kommunikasjon',
        duration: '1 virkedag',
        actions: [
          'Juster vinkling, åpningslinje og avslutning',
          'Sjekk tone of voice mot playbook-reglene',
          'Tilpass lengde og format til kanal',
          'Skriv alternativ overskrift og ingress (for A/B-test ved behov)',
        ],
      },
      {
        step: 5,
        title: 'Faglig verifisering (5%)',
        owner: 'Fagansvarlig',
        duration: '1 virkedag (svarfrist)',
        actions: [
          'Verifiser alle fakta, tall og regulatoriske referanser',
          'Korriger feil direkte i dokumentet med kommentar',
          'Godkjenn med signatur/kommentar i brief-dokumentet',
        ],
        gate: 'Faglig godkjenning er obligatorisk for alt innhold med tall, lovhenvisninger eller ROI-påstander.',
      },
      {
        step: 6,
        title: 'Publisering og registrering',
        owner: 'Kommunikasjon',
        duration: 'Etter godkjenning',
        actions: [
          'Publiser til riktig kanal på avtalt tidspunkt',
          'Legg lenke i første kommentar (LinkedIn)',
          'Registrer publisert innhold i årshjul/redaksjonsplan',
          'Sett opp effektmåling (LinkedIn Analytics, GA4 for web)',
        ],
      },
    ],
  },
  {
    id: 'webinar',
    title: 'SOP 2 — Webinar fra idé til oppfølging',
    description: 'Prosessen for planlegging, gjennomføring og oppfølging av webinarer. Inkluderer markedsføring og lead-oppfølging.',
    trigger: 'Kommunikasjon eller sektorrelevant fagansvarlig identifiserer tema med høy interesse.',
    steps: [
      {
        step: 1,
        title: 'Idé og brief',
        owner: 'Kommunikasjon + Sektoransvarlig',
        duration: 'Uke 1',
        actions: [
          'Definer tema, målgruppe og læringsmål (bruk webinar-malen)',
          'Identifiser ekstern gjest (kunde, partner, myndighet)',
          'Sett dato — minst 4 uker frem i tid',
          'Legg inn i årshjul og produksjonsplan',
        ],
      },
      {
        step: 2,
        title: 'Markedsføring og påmelding',
        owner: 'Kommunikasjon',
        duration: 'Uke 2–3',
        actions: [
          'Publiser påmeldingsside med webinar-beskrivelse-mal',
          'LinkedIn-innlegg: annonsering (3 uker før)',
          'Nyhetsbrev til relevante segmenter',
          'Send personlig invitasjon til nøkkeldeltakere fra CRM',
          'Sett opp påminnelses-e-post: 1 uke + 1 dag + 1 time før',
        ],
      },
      {
        step: 3,
        title: 'Gjennomføring',
        owner: 'Kommunikasjon + Fagansvarlig',
        duration: 'Webinar-dag',
        actions: [
          'Test lyd, bilde og skjermdeling 30 min før',
          'Åpne møterom 10 min før og hils deltakere',
          'Gjennomfør etter agenda — hold tidene',
          'Ta opp webinaret (informer deltakere)',
          'Samle spørsmål fra Q&A for oppfølging',
        ],
      },
      {
        step: 4,
        title: 'Oppfølging innen 24 timer',
        owner: 'Kommunikasjon',
        duration: 'Dagen etter',
        actions: [
          'Send oppfølgings-e-post til alle påmeldte med: opptak, lysbilder (PDF) og ressurser',
          'Publiser LinkedIn-innlegg med nøkkelpunkter fra webinaret',
          'Eksporter deltakerliste til CRM og marker som "varmt lead"',
          'Send personlig oppfølging til deltakere som stilte spørsmål',
        ],
        gate: 'Oppfølgings-e-post skal ut innen 24 timer — ikke 3 dager.',
      },
    ],
  },
  {
    id: 'krisekommunikasjon',
    title: 'SOP 3 — Reaktiv kommunikasjon og krisehåndtering',
    description: 'Prosessen for håndtering av uventede hendelser, kritisk medieomtale, regulatory-endringer eller feil som krever umiddelbar kommunikasjon.',
    trigger: 'Uventet hendelse, kritisk spørsmål fra media, feil i publisert innhold, eller regulatorisk endring med umiddelbar virkning.',
    steps: [
      {
        step: 1,
        title: 'Identifikasjon og eskalering',
        owner: 'Den som oppdager saken',
        duration: 'Umiddelbart',
        actions: [
          'Varsle kommunikasjonsansvarlig og nærmeste leder',
          'Ikke kommenter offentlig uten godkjenning',
          'Dokumenter hva som skjedde, hvem som er berørt og tidslinjen',
        ],
        gate: 'Ingen offentlig kommunikasjon før kommunikasjonsleder og relevant leder er orientert.',
      },
      {
        step: 2,
        title: 'Situasjonsvurdering',
        owner: 'Kommunikasjon + Ledelse',
        duration: '30–60 minutter',
        actions: [
          'Vurder alvorlighetsgrad: intern feil / bransjepåvirkning / regulatorisk / media',
          'Definer hvem som er berørt og hvilke kanaler som er involvert',
          'Avgjør: trenger vi proaktiv kommunikasjon eller reaktiv beredskap?',
          'Sett ansvarlig avsender og godkjenner',
        ],
      },
      {
        step: 3,
        title: 'Utkast og godkjenning',
        owner: 'Kommunikasjon',
        duration: '1–2 timer',
        actions: [
          'Skriv utkast til statement, e-post eller innlegg',
          'Fokus: fakta → hva vi gjør → neste steg. Ingen spekulasjon.',
          'Gjennomgå med relevant fagperson og ledelse',
          'Godkjenn av administrerende direktør ved alvorlige saker',
        ],
      },
      {
        step: 4,
        title: 'Kommunikasjon og oppfølging',
        owner: 'Kommunikasjon',
        duration: 'Løpende',
        actions: [
          'Publiser på riktig kanal med riktig avsender',
          'Overvåk respons og kommentarer aktivt de neste 24 timene',
          'Oppdater med ny informasjon dersom situasjonen endrer seg',
          'Skriv intern evaluering: hva skjedde og hva vi lærer',
        ],
      },
    ],
  },
];

function SOPCard({ sop }: { sop: SOP }) {
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <div className="bg-white border border-gs1-border rounded overflow-hidden">
      <div className="bg-gs1-bg border-b border-gs1-border px-6 py-4">
        <h3 className="font-display font-semibold text-gs1-blue mb-1">{sop.title}</h3>
        <p className="text-sm text-gs1-muted">{sop.description}</p>
        <div className="flex items-center gap-2 mt-3">
          <AlertTriangle size={13} className="text-gs1-orange shrink-0" />
          <p className="text-xs text-gs1-text"><strong>Utløser:</strong> {sop.trigger}</p>
        </div>
      </div>

      <div className="divide-y divide-gs1-border">
        {sop.steps.map((step, i) => (
          <div key={i}>
            <button
              className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-gs1-bg transition-colors"
              onClick={() => setOpenStep(openStep === i ? null : i)}
            >
              <div className="w-8 h-8 rounded-full bg-gs1-blue text-white flex items-center justify-center text-xs font-bold shrink-0">
                {step.step}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gs1-text text-sm">{step.title}</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="flex items-center gap-1 text-xs text-gs1-muted"><User size={11} />{step.owner}</span>
                  <span className="flex items-center gap-1 text-xs text-gs1-muted"><Clock size={11} />{step.duration}</span>
                </div>
              </div>
              {openStep === i ? <ChevronUp size={16} className="text-gs1-muted shrink-0" /> : <ChevronDown size={16} className="text-gs1-muted shrink-0" />}
            </button>

            {openStep === i && (
              <div className="px-6 pb-5 bg-gs1-bg border-t border-gs1-border">
                <ul className="space-y-2 pt-4">
                  {step.actions.map((action, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gs1-text">
                      <CheckCircle2 size={14} className="text-gs1-blue shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
                {step.gate && (
                  <div className="mt-4 flex items-start gap-2.5 bg-gs1-orange-light border border-gs1-orange/20 rounded p-3">
                    <AlertTriangle size={14} className="text-gs1-orange shrink-0 mt-0.5" />
                    <p className="text-xs text-gs1-text font-medium">{step.gate}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Processes() {
  const [activeSOPId, setActiveSOPId] = useState(SOPS[0].id);
  const activeSOP = SOPS.find(s => s.id === activeSOPId)!;

  return (
    <div className="space-y-12">
      <SectionHeader
        title="Arbeidsprosesser og Ansvar (SOP)"
        description="Tre kjerne-SOPer som definerer hvem som gjør hva — fra brief til publisering, webinar til krisehåndtering."
      />

      {/* Gammel vs. ny modell */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white border border-gs1-border p-5 rounded border-l-4 border-l-gs1-orange">
          <h3 className="font-display font-semibold text-gs1-text mb-3">Gammel modell</h3>
          <ul className="space-y-2.5 text-sm text-gs1-muted">
            {[
              'Sektorleder ber om "40% av en ressurs"',
              'Uklare leveranser og uspesifiserte frister',
              'Kommunikasjon prioriterer etter stemmevolum',
              'Ingen nedre/øvre grense på arbeidsmengde',
              'Mye tidsbruk, frustrasjon og uklarhet',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gs1-orange shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gs1-border p-5 rounded border-l-4 border-l-gs1-blue">
          <h3 className="font-display font-semibold text-gs1-text mb-3">Ny modell</h3>
          <ul className="space-y-2.5 text-sm text-gs1-text">
            {[
              'Sektorene bestiller definerte produkter via brief',
              'Kommunikasjon eier metode, kvalitet og prioritering',
              'Ingen brief = ingen produksjon (hard regel)',
              'Skalerbar leveranse med AI i produksjonsløpet',
              'Tydelig ansvar og forutsigbare leveringstider',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} className="text-gs1-blue shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 80/15/5-modellen */}
      <div className="bg-gs1-blue text-white p-6 rounded">
        <div className="flex items-center gap-3 mb-5">
          <Bot size={22} className="text-gs1-orange" />
          <h3 className="font-display font-bold text-white m-0">80/15/5-modellen</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {[
            { pct: '80%', label: 'AI genererer', desc: 'Struktur og førsteutkast basert på brief og playbook-data', color: 'border-t-gs1-orange' },
            { pct: '15%', label: 'Kommunikasjon foredler', desc: 'Vinkling, tone, merkevare og redaksjonell kvalitet', color: 'border-t-white' },
            { pct: '5%', label: 'Fagperson verifiserer', desc: 'Fakta, tall, regulatoriske formuleringer og sensitivt innhold', color: 'border-t-gs1-blue' },
          ].map((item, i) => (
            <div key={i} className={`flex-1 bg-white/10 rounded p-4 ${i < 2 ? 'flex-1' : ''}`}>
              <div className="text-3xl font-display font-black text-gs1-orange mb-1">{item.pct}</div>
              <p className="font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4 justify-center text-white/50">
          <ArrowRight size={14} /><ArrowRight size={14} /><ArrowRight size={14} />
        </div>
      </div>

      {/* SOPer */}
      <div>
        <h3 className="font-display font-semibold text-gs1-blue mb-4">Standard Operating Procedures</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {SOPS.map(sop => (
            <button
              key={sop.id}
              onClick={() => setActiveSOPId(sop.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded transition-colors
                ${activeSOPId === sop.id ? 'bg-gs1-blue text-white border-gs1-blue' : 'bg-white text-gs1-text border-gs1-border hover:border-gs1-blue hover:text-gs1-blue'}`}
            >
              <FileText size={14} />
              {sop.id === 'innholdsproduksjon' ? 'Innholdsproduksjon' : sop.id === 'webinar' ? 'Webinar' : 'Krisekommunikasjon'}
            </button>
          ))}
        </div>
        <SOPCard sop={activeSOP} />
      </div>
    </div>
  );
}
