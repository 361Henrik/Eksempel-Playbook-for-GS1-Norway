export function SectionHeader({ title, description }: { title: string, description?: string }) {
  return (
    <div className="mb-12 pb-8 border-b border-nordic-border">
      <h1 className="text-4xl md:text-5xl font-serif text-nordic-blue mb-4 tracking-tight">{title}</h1>
      {description && <p className="text-xl text-nordic-text-muted font-light leading-relaxed max-w-2xl">{description}</p>}
    </div>
  );
}
