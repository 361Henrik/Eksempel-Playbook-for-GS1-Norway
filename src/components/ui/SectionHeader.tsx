export function SectionHeader({ title, description, exampleNote }: { title: string, description?: string, exampleNote?: string }) {
  return (
    <div className="mb-12 pb-8 border-b border-gs1-border">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-gs1-blue mb-4 tracking-tight">{title}</h1>
      {description && <p className="text-xl text-gs1-muted font-medium leading-relaxed max-w-2xl">{description}</p>}
      {exampleNote && (
        <p className="mt-3 text-[11px] text-gs1-muted italic flex items-center gap-1.5">
          <span className="text-gs1-orange font-bold not-italic">ⓘ</span>
          Eksempel-innhold · {exampleNote}
        </p>
      )}
    </div>
  );
}
