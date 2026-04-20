import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { Upload, Link2, FileText, Loader2, CheckCircle2, X } from 'lucide-react';

type InputMode = 'file' | 'url' | 'text';

type MockResult = {
  title: string;
  suggestions: { section: string; subsection: string }[];
};

const MOCK_RESULTS: Record<string, MockResult> = {
  file: {
    title: 'Opplastet dokument',
    suggestions: [
      { section: 'Temabibliotek', subsection: 'DPP (Digitalt Produktpass)' },
      { section: 'Budskap & Verdi', subsection: 'Bygg & Anlegg' },
      { section: 'Maler & Sjekklister', subsection: 'Ny fakta-blokk' },
    ],
  },
  url: {
    title: 'Hentet URL',
    suggestions: [
      { section: 'Temabibliotek', subsection: '2D-koder og GTIN-overgang' },
      { section: 'Kanaler', subsection: 'LinkedIn — eksempelinnlegg' },
    ],
  },
  text: {
    title: 'Limt inn tekst',
    suggestions: [
      { section: 'Budskap & Verdi', subsection: 'Helse — ROI-argumenter' },
      { section: 'Tone of Voice', subsection: 'Nytt Før/Etter-eksempel' },
    ],
  },
};

export default function SourceImport() {
  const [mode, setMode] = useState<InputMode>('file');
  const [urlValue, setUrlValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [toast, setToast] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  }

  function canAnalyze() {
    if (mode === 'file') return !!fileName;
    if (mode === 'url') return urlValue.trim().length > 0;
    return textValue.trim().length > 0;
  }

  function runAnalysis() {
    setStatus('loading');
    setTimeout(() => setStatus('done'), 1800);
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function reset() {
    setStatus('idle');
    setFileName(null);
    setUrlValue('');
    setTextValue('');
    if (fileRef.current) fileRef.current.value = '';
  }

  const result = MOCK_RESULTS[mode];

  const tabs: { id: InputMode; label: string; icon: React.ElementType }[] = [
    { id: 'file', label: 'Last opp dokument', icon: Upload },
    { id: 'url', label: 'Lim inn URL', icon: Link2 },
    { id: 'text', label: 'Lim inn tekst', icon: FileText },
  ];

  return (
    <div className="space-y-12">
      <SectionHeader
        title="Legg til kildemateriale"
        description="Last opp dokumenter, lim inn lenker eller tekst — og se hvordan de kan berike playbooken."
      />

      <div className="bg-gs1-blue-light border border-gs1-border rounded-xl p-6 flex gap-4">
        <span className="text-gs1-orange text-xl leading-none mt-0.5 shrink-0">⚡</span>
        <div>
          <p className="text-sm font-semibold text-gs1-text mb-1">Demomodus</p>
          <p className="text-sm text-gs1-muted leading-relaxed">
            Forslag til seksjonsmapping er illustrative og basert på forhåndsdefinerte eksempler.
            I en produksjonsversjon ville AI analysere innholdet og foreslå konkrete plasseringer i sanntid.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gs1-border overflow-hidden">
        <div className="flex border-b border-gs1-border">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { setMode(id); setStatus('idle'); }}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors border-b-2
                ${mode === id
                  ? 'border-gs1-blue text-gs1-blue bg-gs1-blue-light'
                  : 'border-transparent text-gs1-muted hover:text-gs1-text hover:bg-gs1-bg'}`}
            >
              <Icon size={15} strokeWidth={1.5} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {status !== 'done' ? (
              <motion.div
                key={`input-${mode}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {mode === 'file' && (
                  <div>
                    <label className="block text-sm font-medium text-gs1-text mb-3">
                      Støttede formater: PDF, DOCX, TXT
                    </label>
                    <div
                      className="border-2 border-dashed border-gs1-border rounded-xl p-10 text-center cursor-pointer hover:border-gs1-blue hover:bg-gs1-blue-light transition-colors"
                      onClick={() => fileRef.current?.click()}
                    >
                      <Upload className="mx-auto mb-3 text-gs1-muted" size={32} strokeWidth={1.5} />
                      {fileName ? (
                        <p className="text-sm font-medium text-gs1-blue">{fileName}</p>
                      ) : (
                        <p className="text-sm text-gs1-muted">Klikk for å velge fil, eller dra og slipp her</p>
                      )}
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.docx,.txt"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}

                {mode === 'url' && (
                  <div>
                    <label className="block text-sm font-medium text-gs1-text mb-3">
                      URL til artikkel, rapport eller nettside
                    </label>
                    <input
                      type="url"
                      value={urlValue}
                      onChange={e => setUrlValue(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-4 py-3 rounded-lg border border-gs1-border text-sm focus:outline-none focus:border-gs1-blue transition-colors"
                    />
                  </div>
                )}

                {mode === 'text' && (
                  <div>
                    <label className="block text-sm font-medium text-gs1-text mb-3">
                      Lim inn tekst, notat eller e-post direkte
                    </label>
                    <textarea
                      value={textValue}
                      onChange={e => setTextValue(e.target.value)}
                      rows={8}
                      placeholder="Lim inn innhold her..."
                      className="w-full px-4 py-3 rounded-lg border border-gs1-border text-sm focus:outline-none focus:border-gs1-blue transition-colors resize-none"
                    />
                  </div>
                )}

                <button
                  onClick={runAnalysis}
                  disabled={!canAnalyze() || status === 'loading'}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gs1-blue text-white text-sm font-medium hover:bg-gs1-blue-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Analyserer…
                    </>
                  ) : (
                    'Analyser innhold'
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                  <h3 className="text-lg font-semibold text-gs1-blue m-0">Analyse fullført — {result.title}</h3>
                </div>

                <div className="bg-gs1-bg rounded-xl p-6 border border-gs1-border">
                  <p className="text-sm font-medium text-gs1-text mb-4">
                    Innholdet kan passe inn i følgende seksjoner:
                  </p>
                  <ul className="space-y-3">
                    {result.suggestions.map((s, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gs1-orange shrink-0" />
                        <span className="font-medium text-gs1-blue">{s.section}</span>
                        <span className="text-gs1-muted">→ {s.subsection}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => showToast('Lagret som notat — denne funksjonaliteten er under utvikling')}
                    className="px-5 py-2.5 rounded-lg bg-gs1-blue text-white text-sm font-medium hover:bg-gs1-blue-hover transition-colors"
                  >
                    Lagre til playbook
                  </button>
                  <button
                    onClick={() => showToast('Lagret som notat — denne funksjonaliteten er under utvikling')}
                    className="px-5 py-2.5 rounded-lg border border-gs1-border text-gs1-text text-sm font-medium hover:bg-gs1-bg transition-colors"
                  >
                    Se forslag
                  </button>
                  <button
                    onClick={reset}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-gs1-border text-gs1-muted text-sm hover:text-gs1-text hover:bg-gs1-bg transition-colors"
                  >
                    <X size={14} />
                    Avvis
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gs1-blue text-white text-sm px-5 py-3 rounded-xl shadow-lg z-50"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
