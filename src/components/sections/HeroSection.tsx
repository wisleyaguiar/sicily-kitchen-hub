import kitchenSet from "@/assets/kitchen-set.png";

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-12 px-5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.52_0.18_148_/_0.18),_transparent_60%),radial-gradient(ellipse_at_bottom_left,_oklch(0.58_0.22_27_/_0.15),_transparent_55%)]" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-cream)]" /> Prodotto in Italia, Sicilia
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] uppercase text-primary">
            New Cooking<br/>
            AND Finishing<br/>
            Kit
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Two bottles. One mission: make every meal taste like Italy. Premium, organic,
            zero blend, cold pressed Sicilian EVOO — one to cook, one to finish.
          </p>
          <p className="mt-4 ciao-script text-3xl text-secondary tracking-wide">
            From the pan to the plate.<br/>
            From ordinary to <em className="not-italic text-primary">unforgettable.</em>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-wide rounded-full shadow-[var(--shadow-bold)] hover:scale-[1.03] transition">
              Get the Kit — 15% OFF
            </a>
            <a href="#why" className="border-2 border-foreground px-7 py-4 font-bold uppercase tracking-wide rounded-full hover:bg-foreground hover:text-background transition">
              Watch the story
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm font-medium font-[var(--font-mono)]">
            {["15% OFF first order","Organic","Zero blend","Cold pressed","Sicilian origin","Kosher certified"].map(x=>(
              <li key={x} className="flex items-center gap-2">
                <span className="text-secondary font-black">✓</span>{x}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Free shipping over $19.99</p>
        </div>

        <div className="relative">
          {/* Product image — clean, no frames */}
          <img
            src={kitchenSet}
            alt="CIAO! Kitchen Set — Cooking and Finishing Extra Virgin Olive Oil on the table"
            className="w-full h-auto block"
          />

          {/* Green starburst seal — authentic zigzag, centered text */}
          <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 z-10 w-40 h-40 md:w-52 md:h-52 rotate-[-8deg] drop-shadow-[0_14px_24px_rgba(0,0,0,0.25)] animate-float">
            <svg viewBox="-110 -110 220 220" className="absolute inset-0 w-full h-full" aria-hidden>
              {(() => {
                const points = 24;
                const make = (rOuter: number, rInner: number) => {
                  const pts: string[] = [];
                  for (let i = 0; i < points * 2; i++) {
                    const r = i % 2 === 0 ? rOuter : rInner;
                    const a = (Math.PI / points) * i - Math.PI / 2;
                    pts.push(`${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r).toFixed(2)}`);
                  }
                  return pts.join(" ");
                };
                return (
                  <>
                    <polygon points={make(100, 82)} fill="var(--brand-green-dark)" />
                    <polygon points={make(94, 76)} fill="var(--brand-cream)" />
                    <polygon points={make(86, 70)} fill="var(--brand-green)" />
                  </>
                );
              })()}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--brand-cream)] leading-none text-center">
              <span className="ciao-script text-2xl md:text-3xl -rotate-3">save</span>
              <span className="font-display text-[40px] md:text-[54px] tracking-tight mt-1">15%</span>
              <span className="font-display text-sm md:text-lg tracking-[0.3em] mt-1">OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
