export function SectionHeader({ title, description }: { title: string, description?: string }) {
  return (
    <div className="mb-12 pb-8 border-b border-gs1-border">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-gs1-blue mb-4 tracking-tight">{title}</h1>
      {description && <p className="text-xl text-gs1-muted font-medium leading-relaxed max-w-2xl">{description}</p>}
    </div>
  );
}
