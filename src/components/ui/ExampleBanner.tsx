export function ExampleBanner() {
  return (
    <div className="mb-10 flex gap-4 p-5 bg-white rounded-xl border border-gs1-border border-l-4 border-l-gs1-orange shadow-sm">
      <span className="text-gs1-orange text-xl leading-none mt-0.5 shrink-0">ⓘ</span>
      <div>
        <p className="text-sm font-semibold text-gs1-text mb-1">Dette er et eksempelmiljø — ikke en ferdig intern playbook.</p>
        <p className="text-sm text-gs1-muted leading-relaxed">
          Innholdet er bygget av Henrik som et konkret forslag til hva GS1 Norway kan ha på plass.
          Bruk det som inspirasjon og utgangspunkt — ikke som offisielt godkjent policy.
        </p>
      </div>
    </div>
  );
}
