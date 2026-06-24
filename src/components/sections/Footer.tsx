import ciaoLogo from "@/assets/ciao-logo.png";

export default function Footer() {
  return (
    <>
      {/* FINAL CTA */}
      <section className="py-14 px-5 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_white,_transparent_40%),radial-gradient(circle_at_70%_60%,_oklch(0.52_0.18_148),_transparent_45%)]" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl uppercase leading-[0.95]">
            Cook better.<br/>Finish better.<br/>Eat better.
          </h2>
          <p className="mt-6 text-lg opacity-90">
            Real Sicilian extra virgin olive oil — premium, organic, zero blend, cold pressed.
            From the pan to the plate. From ordinary to unforgettable.
          </p>
          <a href="#shop" className="inline-flex items-center justify-center mt-10 bg-background text-foreground px-9 py-5 font-bold uppercase tracking-wide rounded-full text-lg hover:bg-foreground hover:text-background transition shadow-2xl leading-none">
            Shop CIAO! with 15% OFF
          </a>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-6 pb-8 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <img src={ciaoLogo} alt="CIAO! Sicily" className="h-16 w-auto rounded-md" />
            <p className="mt-3 text-sm text-background/70">Real Sicilian Extra Virgin Olive Oil. Bringing taste and joy to your food.</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-background/50">www.ciao-sicily.com</p>
          </div>
          {[
            ["Shop", ["Extra Virgin Olive Oil","Cooking Olive Oil","Finishing Olive Oil","Infused Oils","Gift Pack"]],
            ["Support", ["Shipping Policy","Privacy Policy","Terms of Service","Contact"]],
            ["Follow", ["Instagram","Facebook","TikTok","Pinterest"]],
          ].map(([title, items])=>(
            <div key={title as string}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">{title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-background/80">
                {(items as string[]).map(i=>(<li key={i}><a href="#" className="hover:text-primary">{i}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-background/50 mt-12">© CIAO! Sicily. All rights reserved.</p>
      </footer>
    </>
  );
}
