import ciaoFullLogo from "@/assets/ciao-full-logo.png";
import finishingExploded from "@/assets/500_FINISHING_AF_BG_ZERO.png";
import pastaTable from "@/assets/ciao-pasta-table.jpg";
import saladLandscape from "@/assets/ciao-salad-landscape.jpg";
import sicilyEtna from "@/assets/sicily-etna.png";

export default function StorySection() {
  return (
    <>
      {/* PREMIUM. REAL ORIGIN. EVERYDAY USE. */}
      <section className="py-12 px-5 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.05fr] gap-6 md:gap-8 items-center">
          <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[540px]">
            {/* Exploded product in the foreground */}
            <img
              src={finishingExploded}
              alt="CIAO! Sicilian EVOO bottle — 500ml Finishing Extra Virgin Olive Oil"
              className="relative z-10 w-auto h-[380px] md:h-[520px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] hover:scale-[1.03] transition duration-500"
            />
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary font-[var(--font-mono)]">
              🔒 Premium · Real Origin · Everyday Use
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl uppercase leading-[0.95] text-primary">
              More than a regular<br/>grocery store olive oil.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              CIAO! combines quality, aesthetics and practicality — a product designed to live on your counter and elevate every meal.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4 font-[var(--font-mono)]">
              {[
                "Sicilian extra virgin olive oil",
                "Organic product",
                "Kosher certification",
                "Zero blend",
                "Cold pressed",
                "Bold flavor for cooking & finishing",
                "Practical squeeze bottle",
                "Modern design",
                "Cooking, finishing, infused & gift",
              ].map(x=>(
                <li key={x} className="flex gap-2 text-sm"><span className="text-secondary font-black">✓</span>{x}</li>
              ))}
            </ul>
            <p className="mt-10 ciao-script text-3xl text-primary">Use better olive oil every day.</p>
            <a href="#shop" className="inline-flex items-center justify-center mt-8 md:mt-12 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-[var(--brand-red-dark)] transition leading-none btn-pulse-red">
              <span className="h-2.5">Choose my CIAO! now</span>
            </a>
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* TRUTH ABOUT OLIVE OIL */}
      <section className="py-12 px-5 bg-foreground text-background relative overflow-hidden">
        {/* Background Image with warm tone and darkening overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={sicilyEtna}
            alt=""
            className="w-full h-full object-cover brightness-[0.25] sepia-[0.15] saturate-[1.1] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">The Truth</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase">About Olive Oil</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["All olive oils are the same.","Until you taste a real extra virgin with origin, intensity and flavor."],
              ["Olive oil is only for cooking.","The final drizzle is what brings aroma, texture and personality to the dish."],
              ["A beautiful bottle means quality.","What truly matters is origin, process, purity and flavor."],
              ["The cheapest one gets the job done.","Until you realize your meals could taste so much better with the right olive oil."],
            ].map(([myth, truth])=>(
              <div key={myth} className="border-l-4 border-primary pl-6 py-3">
                <p className="text-xl font-bold mb-2"><span className="text-primary mr-2">✗</span>"{myth}"</p>
                <p className="text-background/70">{truth}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-14 text-2xl font-display uppercase">
            Good olive oil is not a detail. It's the <span className="text-primary">difference</span> on the plate.
          </p>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* VALUE PROPOSITION */}
      <section className="py-12 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Our Value Proposition</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase leading-[0.95]">
              Not another bottle.<br/>A <span className="text-primary">complete kitchen experience.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              ["Cook better","Real EVOO from the very first sauté."],
              ["Finish better","The drizzle that turns the dish."],
              ["Eat better","Premium ingredients, every single day."],
              ["Italian moments","Simple meals, unforgettable bites."],
            ].map(([t,d])=>(
              <div key={t} className="bg-[var(--brand-cream)] border-2 border-foreground rounded-2xl p-6 hover:bg-primary hover:text-primary-foreground transition">
                <div className="text-3xl font-display uppercase">{t}</div>
                <p className="text-sm opacity-80 mt-2">{d}</p>
              </div>
            ))}
          </div>
          <div className="bg-[var(--brand-combines-bg)] text-background rounded-3xl p-10 grid md:grid-cols-2 gap-8 items-center border-4 border-foreground shadow-[var(--shadow-card)]">
            <div>
              <h3 className="text-3xl md:text-4xl uppercase">CIAO! combines</h3>
              <p className="mt-2 text-background/70">Here, you don't just buy olive oil. You bring the real taste of Sicily into your everyday routine.</p>
              <a href="#shop" className="inline-flex items-center justify-center mt-6 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-secondary transition leading-none btn-pulse-red">
                <span className="h-2.5">Shop with discount</span>
              </a>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
              {["Real Sicilian origin","Premium extra virgin","Organic & Kosher","Zero blend purity","Cold pressed","Modern & memorable","Premium & fun brand"].map(x=>(
                <li key={x} className="flex gap-2"><span className="text-secondary font-black">✓</span>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* LESS DRESS MORE DRIZZLE */}
      <section className="py-4 md:py-6 px-5 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-80 font-[var(--font-mono)]">Manifesto</span>
            <h2 className="mt-3 text-5xl md:text-7xl uppercase leading-[0.9]">
              Less Dress.<br/>
              <span className="text-primary">More Drizzle.</span>
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-md">
              Sometimes all a meal needs is a drizzle of real extra virgin olive oil.
              Replace heavy dressings with a simple, premium, flavorful finishing touch.
            </p>
            <ul className="mt-6 space-y-2 text-base font-[var(--font-mono)]">
              <li>→ An ordinary salad becomes memorable.</li>
              <li>→ A simple pasta becomes Italian.</li>
              <li>→ A ready-made pizza becomes gourmet.</li>
              <li>→ Artisan bread becomes a ritual.</li>
            </ul>
            <a href="#shop" className="inline-flex items-center justify-center mt-8 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground transition leading-none btn-pulse-red">
              <span className="h-2.5">I want more flavor</span>
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={pastaTable}
              alt="CIAO! Extra Virgin Olive Oil bottle with fresh pasta, basil, eggs and tomatoes on a kitchen table"
              className="max-h-[560px] md:max-h-[640px] w-auto object-cover rounded-2xl drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* THE PROOF IS IN THE FLAVOR */}
      <section className="py-12 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">The Proof</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase">Is in the Flavor</h2>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              People may notice the design first. But when they taste CIAO!, they understand the difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              ["★★★★★","\"Tastes like Italy in a bottle. The squeeze is a game-changer.\"","— Marta R."],
              ["★★★★★","\"Bold, fresh, real. The finishing oil transformed my pasta nights.\"","— Daniel K."],
              ["★★★★★","\"Worth every penny. My kitchen smells like Sicily.\"","— Priya S."],
            ].map(([stars,quote,name])=>(
              <article key={name} className="bg-[var(--brand-cream)] border-2 border-foreground rounded-2xl p-6">
                <div className="text-primary text-lg">{stars}</div>
                <p className="mt-3 italic">{quote}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-wider">{name}</p>
              </article>
            ))}
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-sm">
            {["Positive marketplace reviews","Excellent product acceptance","Growing in the US market","Sensory experience from first use","Complete daily + gift portfolio"].map(x=>(
              <li key={x} className="bg-secondary text-secondary-foreground rounded-full px-4 py-2.5 text-center font-medium min-h-[56px] flex items-center justify-center leading-tight">{x}</li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <a href="#shop" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground transition leading-none btn-pulse-red">
              <span className="h-2.5">Try CIAO! with 15% OFF</span>
            </a>
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* WHO IS CIAO FOR — standalone */}
      <section className="py-12 px-5 bg-[var(--brand-cream)]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Who is CIAO! for?</span>
          <h2 className="mt-3 text-4xl md:text-6xl uppercase">For people who value<br/>food, quality & experience.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Loves Italian food","Cooks at home","Premium ingredients","Eat better every day",
              "Values organic","Hosts friends & family","Appreciates design","Tasteful gifting","Turns simple into special",
            ].map(x=>(
              <span key={x} className="inline-flex items-center justify-center bg-background border-2 border-foreground rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition leading-none">
                {x}
              </span>
            ))}
          </div>
          <p className="mt-10 text-lg text-muted-foreground max-w-xl mx-auto">
            If you believe good food starts with good ingredients, <strong className="text-foreground">CIAO! is for you.</strong>
          </p>
          <a href="#shop" className="inline-flex items-center justify-center mt-6 bg-foreground text-background px-7 py-4 font-bold uppercase rounded-full hover:bg-primary transition leading-none btn-pulse-black">
            <span className="h-2.5">Bring CIAO! to my kitchen</span>
          </a>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* WHY NOT ANOTHER + WHO IS IT FOR */}
      <section className="py-12 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-[var(--brand-cream)] border-4 border-foreground rounded-3xl p-8">
            <h3 className="text-3xl md:text-4xl uppercase">Why CIAO!<br/>and not another?</h3>
            <ul className="mt-6 space-y-2 font-[var(--font-mono)]">
              {["Authentic Sicilian origin","Zero blend extra virgin","Organic & Kosher certified","Cold pressed process","Practical squeeze bottle","Modern, desirable design","Clear cooking + finishing strategy","Infused oils & gift packs"].map(x=>(
                <li key={x} className="flex gap-3"><span className="text-primary font-black">✓</span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden border-4 border-foreground rounded-3xl p-8 flex flex-col justify-between text-white min-h-[460px]">
            <img
              src={saladLandscape}
              alt="CIAO! Extra Virgin Olive Oil bottle beside a fresh Sicilian salad with a sunlit countryside backdrop"
              className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" aria-hidden />
            <div className="relative max-w-[60%] z-10">
              <h3 className="text-3xl md:text-4xl uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">Premium. Fun.<br/>Truly Sicilian.</h3>
              <p className="mt-4 text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
                Other olive oils may look premium. But many have generic origin, little transparency, little personality.
                CIAO! is made to be <strong>used, displayed and remembered.</strong>
              </p>
            </div>
            <a href="#shop" className="relative z-10 inline-flex items-center justify-center mt-6 bg-background text-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground hover:text-background transition self-start shadow-[0_8px_24px_rgba(0,0,0,0.35)] leading-none btn-pulse-white">
              <span className="h-2.5">Choose CIAO! now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
