import { useState, useRef, useEffect } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Bot, Database, Sparkles, AlertTriangle, Send, Loader2 } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };

const SYSTEM_PROMPT = `Du er GS1 Norways kommunikasjonsassistent, innebygd i deres interne playbook.

Du har dyp kunnskap om:
- GS1 Norway sin Vision 2030 og strategi mot 2029
- GÅANS-verdiene (Grundig, Åpen, Ansvarlig, Nysgjerrig, Sammen)
- GS1-standarder: GTIN, GLN, GS1-128, EPC/RFID, Digital Product Passport (DPP), 2D-koder
- Prioriterte sektorer: Bygg & Anlegg, Helse, Energi, Dagligvare
- GS1 Norway sin tone of voice: inkluderende, inspirerende, løsningsorientert — alltid aktiv form
- 80/15/5-modellen for AI-støttet innholdsproduksjon
- Dynamisk Brief-verktøyet og InfoHub

Regler:
- Svar alltid på norsk
- Hold deg til GS1-kontekst — avvis spørsmål som ikke er relevante
- Knytt alltid standarder til forretningsverdi (ROI, risiko, bærekraft, pasientsikkerhet)
- Unngå teknisk stammespråk uten forklaring
- Maks 3–4 avsnitt per svar`;

async function sendMessage(messages: Message[]): Promise<string> {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('VITE_ANTHROPIC_API_KEY er ikke satt');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any)?.error?.message ?? `API-feil ${res.status}`);
  }

  const data = await res.json();
  return data.content[0].text;
}

function ChatBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-gs1-blue text-white rounded-br-sm'
            : 'bg-white border border-gs1-border text-gs1-text rounded-bl-sm'
        }`}
      >
        {msg.content}
      </div>
    </div>
  );
}

function GS1Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    const updated: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(updated);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const reply = await sendMessage(updated);
      setMessages([...updated, { role: 'assistant', content: reply }]);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gs1-border overflow-hidden flex flex-col" style={{ minHeight: '420px' }}>
      <div className="bg-gs1-blue px-6 py-4 flex items-center gap-3">
        <Bot size={20} className="text-gs1-orange" />
        <span className="font-semibold text-white text-sm">GS1-assistenten</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: '320px' }}>
        {messages.length === 0 && (
          <p className="text-sm text-gs1-muted text-center mt-8">
            Still et spørsmål om GS1-standarder, målgrupper, tone of voice eller Vision 2030.
          </p>
        )}
        {messages.map((msg, i) => (
          <ChatBubble key={i} msg={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 bg-white border border-gs1-border rounded-2xl rounded-bl-sm">
              <Loader2 size={16} className="text-gs1-muted animate-spin" />
            </div>
          </div>
        )}
        {error && (
          <p className="text-xs text-gs1-orange text-center">{error}</p>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-gs1-border p-4 flex gap-3">
        <textarea
          className="flex-1 resize-none text-sm border border-gs1-border rounded-xl px-4 py-2.5 text-gs1-text placeholder:text-gs1-muted focus:outline-none focus:ring-2 focus:ring-gs1-blue/30"
          rows={1}
          placeholder="Skriv et spørsmål..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="w-10 h-10 flex items-center justify-center bg-gs1-blue text-white rounded-xl disabled:opacity-40 transition-opacity hover:opacity-90"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

export default function AITools() {
  return (
    <div className="space-y-12">
      <SectionHeader
        title="AI og Verktøystøtte"
        description="Hvordan vi bruker AI for å skalere kvalitet og kapasitet basert på vår unike GS1-IP."
      />

      <div className="bg-gs1-blue text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Database className="text-gs1-orange" />
          Vår unike IP (Intellectual Property)
        </h3>
        <p className="mb-6 text-white/90">
          Playbooken fanger GS1 Norway sin unike kommunikasjons-IP. Dette gjør at våre AI-verktøy leverer skreddersydd innhold, ikke generisk tekst fra internett.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-5 rounded-xl">
            <h4 className="font-bold text-gs1-orange mb-2">Verdibaserte budskap</h4>
            <p className="text-sm text-white/80">Godkjente fakta som knytter standarder til forretningsverdi (ROI, bærekraft).</p>
          </div>
          <div className="bg-white/10 p-5 rounded-xl">
            <h4 className="font-bold text-gs1-orange mb-2">Audience Cards</h4>
            <p className="text-sm text-white/80">Detaljert innsikt i målgruppenes mål og utfordringer. Hindrer generisk innhold.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-xl">
            <h4 className="font-bold text-gs1-orange mb-2">Tone-of-Voice</h4>
            <p className="text-sm text-white/80">Konkrete språkregler skreddersydd for GS1 (inkluderende, aktiv form).</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gs1-border">
          <h3 className="text-xl font-bold text-gs1-text mb-6 flex items-center gap-2">
            <Sparkles className="text-gs1-blue" />
            Hva AI KAN gjøre
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
              <span className="text-sm text-gs1-text">Lage strukturerte førsteutkast</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
              <span className="text-sm text-gs1-text">Omskrive og tilpasse til kanaler og målgrupper</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
              <span className="text-sm text-gs1-text">Hente ut forslag til titler, ingresser, budskap</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-blue shrink-0" />
              <span className="text-sm text-gs1-text">Oppsummere lengre dokumenter til bruk i brief og caser</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gs1-border">
          <h3 className="text-xl font-bold text-gs1-text mb-6 flex items-center gap-2">
            <AlertTriangle className="text-gs1-orange" />
            Hva AI BØR IKKE gjøre
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-orange shrink-0" />
              <span className="text-sm text-gs1-text">Godkjenne innhold som juridisk korrekt eller regulatorisk tilstrekkelig</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-orange shrink-0" />
              <span className="text-sm text-gs1-text">Fastslå ROI-tall uten datagrunnlag</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gs1-orange shrink-0" />
              <span className="text-sm text-gs1-text">Publisere eller kommunisere direkte utad uten menneskelig kontroll</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gs1-blue mb-2">Prøv GS1-assistenten</h3>
        <p className="text-gs1-muted text-sm mb-6">
          En AI-assistent forhåndsinnstilt med GS1 Norways playbook, tone of voice og Vision 2030.
        </p>
        <GS1Chat />
      </div>
    </div>
  );
}
