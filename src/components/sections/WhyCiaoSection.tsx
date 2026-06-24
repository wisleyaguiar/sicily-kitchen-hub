export default function WhyCiaoSection() {
  return (
    <section id="why" className="py-12 px-5 bg-[var(--brand-cream)]">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Why CIAO!?</span>
        <h2 className="mt-4 text-4xl md:text-6xl uppercase">A Sicilian Ritual.<br/>On Your Table.</h2>
        <div className="aspect-video bg-foreground mt-10 rounded-2xl flex items-center justify-center border-4 border-foreground shadow-[var(--shadow-card)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.58_0.22_27_/_0.3),_transparent_70%)]" />
          <button className="relative w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl shadow-[var(--shadow-bold)] hover:scale-110 transition pl-1.5" aria-label="Play video"><span className="h-6">▶</span></button>
          <span className="absolute bottom-5 left-5 text-background/80 text-xs uppercase tracking-widest">CIAO! Sicily — Story</span>
        </div>
        <div className="mt-12 max-w-2xl mx-auto flex flex-col gap-6 text-center">
          <p className="text-lg text-muted-foreground text-balance">
            Most people use olive oil only for cooking. But in Sicily, real olive oil also belongs <strong className="text-foreground">on the table</strong>. It finishes pasta. Enhances salads. Brings pizza to life.
          </p>
          <p className="text-lg text-muted-foreground text-balance">
            CIAO! brings this ritual into American kitchens — premium EVOO, bold flavor, modern design, and quality you notice from the very first drizzle. Not just another bottle. A product with <strong className="text-foreground">origin, purity, tradition and personality.</strong>
          </p>
        </div>
        <a href="#shop" className="inline-flex items-center justify-center mt-10 bg-foreground text-background px-7 py-4 font-bold uppercase tracking-wide rounded-full hover:bg-primary transition leading-none">
          <span className="h-2.5">Try CIAO! with 15% OFF</span>
        </a>
      </div>
    </section>
  );
}
