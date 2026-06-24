import kitchenSet from "@/assets/kitchen-set.png";

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-12 px-5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.52_0.18_148_/_0.18),_transparent_60%),radial-gradient(ellipse_at_bottom_left,_oklch(0.58_0.22_27_/_0.15),_transparent_55%)]" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-brand-ink text-brand-cream px-5 py-2 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md leading-none">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" /> <span className="h-2.5">Prodotto in Italia, Sicilia</span>
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
            <a href="#shop" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-wide rounded-full shadow-[var(--shadow-bold)] hover:scale-[1.03] transition leading-none">
              <span className="h-2.5">Get the Kit — 15% OFF</span>
            </a>
            <a href="#why" className="inline-flex items-center justify-center border-2 border-foreground px-7 py-4 font-bold uppercase tracking-wide rounded-full hover:bg-foreground hover:text-background transition leading-none">
              <span className="h-2.5">Watch the story</span>
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
            className="w-full aspect-[4/3] md:aspect-[4/5] object-cover block rounded-3xl shadow-[var(--shadow-card)] hover:scale-[1.02] transition duration-500"
          />

          {/* Green circular badge — clean on-brand circle, centered text */}
          <div className="absolute -top-6 -right-4 md:-top-8 md:-right-8 z-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-secondary text-secondary-foreground border-4 border-foreground flex flex-col items-center justify-center text-center shadow-[var(--shadow-bold)]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-90">save</span>
            <span className="font-display text-3xl md:text-5xl tracking-tight mt-0.5 leading-none">15%</span>
            <span className="font-display text-xs md:text-sm tracking-[0.2em] mt-0.5 leading-none">OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
