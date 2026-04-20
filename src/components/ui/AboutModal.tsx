import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-6 pointer-events-none"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full pointer-events-auto p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gs1-muted hover:text-gs1-text transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              <h2 className="text-2xl font-display font-bold text-gs1-blue mb-6">Om dette eksempelet</h2>

              <div className="space-y-5 text-sm text-gs1-text leading-relaxed">
                <p>
                  Denne playbooken er bygget av Henrik (ThreeSixtyOne) som et konkret forslag til hva GS1 Norway kan ha på plass i kommunikasjonsarbeidet fremover.
                </p>

                <div>
                  <h4 className="font-semibold text-gs1-blue mb-2">Hva er gjort</h4>
                  <p className="text-gs1-muted">
                    Struktur, innhold og eksempler er bygget fra bunnen av med utgangspunkt i GS1 Norways Vision 2030, offentlig tilgjengelig GS1-dokumentasjon og bransjekunnskap.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gs1-blue mb-2">Hva er ikke gjort</h4>
                  <p className="text-gs1-muted">
                    Ingenting av dette er internt godkjent av GS1 Norway. Tall, caser og budskap er illustrative — og bør kvalitetssikres av fagansvarlige før de tas i bruk.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gs1-blue mb-2">Neste steg</h4>
                  <p className="text-gs1-muted">
                    Ta det som er nyttig. Forkast det som ikke passer. Bygg videre på resten.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-8 w-full py-2.5 rounded-lg bg-gs1-blue text-white text-sm font-medium hover:bg-gs1-blue-hover transition-colors"
              >
                Lukk
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
