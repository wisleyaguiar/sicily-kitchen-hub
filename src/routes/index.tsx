import { createFileRoute } from "@tanstack/react-router";
import basilProduct from "@/assets/Basil_Product.asset.json";
import basilContext from "@/assets/Basil_Context.asset.json";
import truffleContext from "@/assets/Truffle_Context.asset.json";
import truffleFlavor from "@/assets/Truffle_Flavor.asset.json";
import chiliContext from "@/assets/Chili_Context.asset.json";
import rosemaryContext from "@/assets/Rosemary_Context.asset.json";
import finishing from "@/assets/500_FINISHING_AF_BG_ZERO.asset.json";
import ciaoLogo from "@/assets/ciao-logo.png.asset.json";
import kitchenSet from "@/assets/kitchen-set.png.asset.json";
import packshot from "@/assets/ciao-packshot.jpg.asset.json";
import ciaoCooking from "@/assets/ciao-cooking.png.asset.json";
import finishingBottle from "@/assets/ciao-finishing-bottle.png.asset.json";
import finishingTable from "@/assets/ciao-finishing-table.jpg.asset.json";
import etnaLandscape from "@/assets/etna-landscape.png.asset.json";
import etnaHero from "@/assets/etna-hero.png.asset.json";
import cookingFlat from "@/assets/ciao-cooking-flat.png.asset.json";
import finishingFlat from "@/assets/ciao-finishing-flat.png.asset.json";
import truffleFlat from "@/assets/ciao-truffle-flat.png.asset.json";
import basilFlat from "@/assets/ciao-basil-flat.png.asset.json";
import chiliFlat from "@/assets/ciao-chili-flat.png.asset.json";
import rosemaryFlat from "@/assets/ciao-rosemary-flat.png.asset.json";
import truffle100 from "@/assets/ciao-truffle-100.png.asset.json";
import basil100 from "@/assets/ciao-basil-100.png.asset.json";
import chili100 from "@/assets/ciao-chili-100.png.asset.json";
import rosemary100 from "@/assets/ciao-rosemary-100.png.asset.json";
import kitchenDuo from "@/assets/ciao-kitchen-set.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CIAO! — Real Sicilian Extra Virgin Olive Oil" },
      { name: "description", content: "Premium organic Sicilian EVOO — zero blend, cold pressed. From the pan to the plate. Get 15% OFF your first order." },
      { property: "og:title", content: "CIAO! — Real Sicilian Extra Virgin Olive Oil" },
      { property: "og:description", content: "Premium organic Sicilian EVOO — zero blend, cold pressed. Get 15% OFF your first order." },
      { property: "og:image", content: finishing.url },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
          <a href="#" className="block leading-none">
            <img
              src={ciaoLogo.url}
              alt="CIAO! Sicily"
              className="h-10 md:h-12 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:opacity-75 transition">Home</a>
            <a href="#shop" className="hover:opacity-75 transition">Shop</a>
            <a href="#faq" className="hover:opacity-75 transition">Contact Us</a>
            <a href="#why" className="hover:opacity-75 transition">Our Story</a>
          </nav>
          <a href="#shop" className="bg-[var(--brand-cream)] text-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-full hover:bg-white transition shadow-md">
            Shop 15% OFF
          </a>
        </div>
      </header>

      {/* HERO */}
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
              src={kitchenSet.url}
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

      <div className="h-6 checker-band" />

      {/* WHY CIAO */}
      <section id="why" className="py-12 px-5 bg-[var(--brand-cream)]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Why CIAO!?</span>
          <h2 className="mt-4 text-4xl md:text-6xl uppercase">A Sicilian Ritual.<br/>On Your Table.</h2>
          <div className="aspect-video bg-foreground mt-10 rounded-2xl flex items-center justify-center border-4 border-foreground shadow-[var(--shadow-card)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.58_0.22_27_/_0.3),_transparent_70%)]" />
            <button className="relative w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl shadow-[var(--shadow-bold)] hover:scale-110 transition" aria-label="Play video">▶</button>
            <span className="absolute bottom-5 left-5 text-background/80 text-xs uppercase tracking-widest">CIAO! Sicily — Story</span>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <p className="text-lg text-muted-foreground">
              Most people use olive oil only for cooking. But in Sicily, real olive oil also belongs <strong className="text-foreground">on the table</strong>. It finishes pasta. Enhances salads. Brings pizza to life.
            </p>
            <p className="text-lg text-muted-foreground">
              CIAO! brings this ritual into American kitchens — premium EVOO, bold flavor, modern design, and quality you notice from the very first drizzle. Not just another bottle. A product with <strong className="text-foreground">origin, purity, tradition and personality.</strong>
            </p>
          </div>
          <a href="#shop" className="inline-block mt-10 bg-foreground text-background px-7 py-4 font-bold uppercase tracking-wide rounded-full hover:bg-primary transition">
            Try CIAO! with 15% OFF
          </a>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* PREMIUM. REAL ORIGIN. EVERYDAY USE. */}
      <section className="py-12 px-5 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative flex items-center justify-center">
            <img
              src={packshot.url}
              alt="CIAO! Sicilian EVOO full packshot — cooking, finishing and infused range"
              className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] scale-[1.35] md:scale-[1.45]"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary font-[var(--font-mono)]">
              🔒 Premium · Real Origin · Everyday Use
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl uppercase leading-[0.95] text-primary">
              More than a regular<br/>grocery store olive oil.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              CIAO! combines quality, aesthetics and practicality — a product designed to live on your counter and elevate every meal.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 font-[var(--font-mono)]">
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
            <p className="mt-6 ciao-script text-3xl text-primary">Use better olive oil every day.</p>
            <a href="#shop" className="inline-block mt-6 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-[var(--brand-red-dark)] transition">
              Choose my CIAO! now
            </a>
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* TRUTH ABOUT OLIVE OIL */}
      <section className="py-12 px-5 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
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
          <div className="bg-foreground text-background rounded-3xl p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl uppercase">CIAO! combines</h3>
              <p className="mt-2 text-background/70">Here, you don't just buy olive oil. You bring the real taste of Sicily into your everyday routine.</p>
              <a href="#shop" className="inline-block mt-6 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-secondary transition">
                Shop with discount
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

      {/* COOKING + FINISHING */}
      <section id="cooking" className="py-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary font-[var(--font-mono)]">Cooking + Finishing</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase text-primary">One for the Pan.<br/>One for the Plate.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-[var(--brand-cream)] border-4 border-foreground rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-6 checker-band" />
              <div className="flex justify-center my-8 pt-4">
                <img src={ciaoCooking.url} alt="CIAO! Cooking — yellow squeeze bottle in a kitchen scene" className="h-80 w-full object-cover rounded-2xl" />
              </div>
              <h3 className="text-3xl uppercase text-primary">CIAO! Cooking</h3>
              <p className="mt-3 text-muted-foreground">For everyday cooking with real extra virgin olive oil. Perfect for preparing recipes, grilling, sautéing and elevating the quality of your food from the very beginning.</p>
            </article>
            <article className="bg-[var(--brand-cream)] border-4 border-foreground rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-6 checker-band" />
              <div className="flex justify-center my-8 pt-4">
                <img
                  src={finishingTable.url}
                  alt="CIAO! Finishing — green squeeze bottle on a Sicilian table with burrata, bread, pasta and pizza"
                  className="h-80 w-full object-cover rounded-2xl"
                  style={{ objectPosition: "center 18%" }}
                />
              </div>
              <h3 className="text-3xl uppercase text-primary">CIAO! Finishing</h3>
              <p className="mt-3 text-muted-foreground">For using after the dish is ready. Perfect for pasta, pizza, salads, bread, eggs, vegetables, meats, fish, bowls and soups.</p>
            </article>
          </div>
          <div className="mt-10 text-center bg-primary text-primary-foreground rounded-3xl p-10 border-4 border-foreground">
            <h3 className="text-3xl md:text-4xl uppercase">The Kitchen Set</h3>
            <p className="mt-2 text-lg opacity-90">Cooking + Finishing. The most complete way to live the CIAO! experience.</p>
            <a href="#shop" className="inline-block mt-6 bg-background text-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground hover:text-background transition">
              Shop the Kitchen Set
            </a>
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* INFUSED OILS */}
      <section id="infused" className="py-12 px-5 bg-[var(--brand-cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Infused Oils + Gift Packs</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase">More flavor in seconds.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Truffle", img: truffleContext.url, note: "Rich, indulgent, gourmet.", tint: "bg-foreground text-background" },
              { name: "Chili",   img: chiliContext.url,   note: "A bold Sicilian kick.",     tint: "bg-primary text-primary-foreground" },
              { name: "Rosemary",img: rosemaryContext.url,note: "Aromatic & herbal.",        tint: "bg-[oklch(0.85_0.06_85)] text-foreground" },
              { name: "Basil",   img: basilContext.url,   note: "Fresh Italian basil.",      tint: "bg-secondary text-secondary-foreground" },
            ].map(p=>(
              <article key={p.name} className={`${p.tint} rounded-3xl overflow-hidden border-4 border-foreground hover:-translate-y-1 transition`}>
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={`${p.name} infused EVOO`} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl uppercase">{p.name}</h3>
                  <p className="text-sm opacity-90 mt-1">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center mt-10 text-muted-foreground">Perfect for pizza night, pasta night, bread, appetizers and special meals at home.</p>
          <div className="text-center mt-6">
            <a href="#shop" className="inline-block bg-foreground text-background px-7 py-4 font-bold uppercase rounded-full hover:bg-primary transition">
              View Infused Oils & Gift Packs
            </a>
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
            <a href="#shop" className="inline-block mt-8 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground transition">
              I want more flavor
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={finishingBottle.url}
              alt="CIAO Finishing bottle"
              className="max-h-[560px] md:max-h-[640px] w-auto object-contain drop-shadow-[0_50px_70px_rgba(0,0,0,0.5)]"
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
              <li key={x} className="bg-secondary text-secondary-foreground rounded-full px-4 py-2.5 text-center font-medium">{x}</li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <a href="#shop" className="inline-block bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground transition">
              Try CIAO! with 15% OFF
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
              <span key={x} className="bg-background border-2 border-foreground rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                {x}
              </span>
            ))}
          </div>
          <p className="mt-10 text-lg text-muted-foreground max-w-xl mx-auto">
            If you believe good food starts with good ingredients, <strong className="text-foreground">CIAO! is for you.</strong>
          </p>
          <a href="#shop" className="inline-block mt-6 bg-foreground text-background px-7 py-4 font-bold uppercase rounded-full hover:bg-primary transition">
            Bring CIAO! to my kitchen
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
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${etnaHero.url})` }}
              aria-hidden
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(0,0,0,0.25)_0%,_rgba(0,0,0,0.55)_100%)]" aria-hidden />
            <div>
              <h3 className="text-3xl md:text-4xl uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">Premium. Fun.<br/>Truly Sicilian.</h3>
              <p className="mt-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                Other olive oils may look premium. But many have generic origin, little transparency, little personality.
                CIAO! is made to be <strong>used, displayed and remembered.</strong>
              </p>
            </div>
            <a href="#shop" className="inline-block mt-6 bg-background text-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground hover:text-background transition self-start">
              Choose CIAO! now
            </a>
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* SHOP */}
      <section id="shop" className="py-12 px-5 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Choose your CIAO!</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase">Bring Sicily to your table</h2>
          </div>
          {(() => {
            const ProductCard = ({ p }: { p: { title: string; size: string; desc: string; img: string; badge: string; price: string; objectClass?: string } }) => (
              <article className="bg-background text-foreground rounded-3xl overflow-hidden border-4 border-background hover:border-primary transition group">
                <div className="aspect-square bg-white flex items-center justify-center overflow-hidden relative">
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full z-10">{p.badge}</span>
                  <img src={p.img} alt={p.title} className={`h-full w-full object-contain p-2 scale-125 group-hover:scale-[1.35] transition ${p.objectClass ?? ""}`} />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl uppercase">{p.title}</h3>
                    <span className="text-primary font-bold whitespace-nowrap">{p.price}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1 font-[var(--font-mono)]">{p.size}</p>
                  <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                  <button className="mt-4 w-full bg-foreground text-background py-3 font-bold uppercase text-sm tracking-wide rounded-full hover:bg-primary transition">
                    Add to cart
                  </button>
                </div>
              </article>
            );
            const evoo = [
              { title: "Kitchen Set", size: "750ml + 500ml", desc: "Cooking + Finishing. The full experience.", img: kitchenDuo.url, badge: "Best Seller", price: "$37.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
              { title: "Finishing EVOO", size: "500ml · 16.9 fl oz", desc: "The final drizzle for any dish.", img: finishingFlat.url, badge: "Squeeze", price: "$22.99" },
              { title: "Cooking EVOO", size: "750ml · 25.4 fl oz", desc: "Premium everyday extra virgin.", img: cookingFlat.url, badge: "Everyday", price: "$17.99" },
            ];
            const infused100 = [
              { title: "Infused — Truffle", size: "100ml · 3.38 fl oz", desc: "Rich, indulgent, gourmet.", img: truffle100.url, badge: "100ml", price: "$12.99" },
              { title: "Infused — Basil", size: "100ml · 3.38 fl oz", desc: "Fresh Italian basil EVOO.", img: basil100.url, badge: "100ml", price: "$12.99" },
              { title: "Infused — Chili", size: "100ml · 3.38 fl oz", desc: "A bold Sicilian kick.", img: chili100.url, badge: "100ml", price: "$12.99" },
              { title: "Infused — Rosemary", size: "100ml · 3.38 fl oz", desc: "Herbal, aromatic, Mediterranean.", img: rosemary100.url, badge: "100ml", price: "$12.99" },
            ];
            const infused250 = [
              { title: "Infused — Truffle", size: "250ml · 8.45 fl oz", desc: "Rich, indulgent, gourmet.", img: truffleFlat.url, badge: "250ml", price: "$19.99" },
              { title: "Infused — Basil", size: "250ml · 8.45 fl oz", desc: "Fresh Italian basil EVOO.", img: basilFlat.url, badge: "250ml", price: "$19.99" },
              { title: "Infused — Chili", size: "250ml · 8.45 fl oz", desc: "A bold Sicilian kick.", img: chiliFlat.url, badge: "250ml", price: "$19.99" },
              { title: "Infused — Rosemary", size: "250ml · 8.45 fl oz", desc: "Herbal, aromatic, Mediterranean.", img: rosemaryFlat.url, badge: "250ml", price: "$19.99" },
            ];
            return (
              <>
                <h3 className="font-[var(--font-mono)] text-xs uppercase tracking-[0.3em] text-secondary mb-4">Extra Virgin Olive Oil</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {evoo.map(p => <ProductCard key={p.title} p={p} />)}
                </div>

                <h3 className="font-[var(--font-mono)] text-xs uppercase tracking-[0.3em] text-secondary mt-14 mb-4">Infused · 100ml</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {infused100.map(p => <ProductCard key={p.title} p={p} />)}
                </div>

                <h3 className="font-[var(--font-mono)] text-xs uppercase tracking-[0.3em] text-secondary mt-14 mb-4">Infused · 250ml</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {infused250.map(p => <ProductCard key={p.title} p={p} />)}
                </div>

                <div className="text-center mt-10 text-sm uppercase tracking-widest text-background/70">
                  15% OFF welcome offer · Free shipping over $19.99
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* FAQ */}
      <section id="faq" className="py-12 px-5 bg-[var(--brand-cream)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">FAQ</span>
            <h2 className="mt-3 text-4xl md:text-5xl uppercase">Questions, answered.</h2>
          </div>
          <div className="space-y-3">
            {[
              ["Is CIAO! really Sicilian?","Yes. CIAO! works with olive oils of Sicilian origin, connected to the tradition, soil and food culture of Sicily."],
              ["Is CIAO! organic?","Yes. CIAO! has European organic certification, aligned with USDA standards."],
              ["Is CIAO! Kosher certified?","Yes. CIAO! is Kosher certified."],
              ["Does CIAO! use blends?","No. We deliver real extra virgin olive oil with zero blend."],
              ["What is the difference between Cooking and Finishing?","Cooking is for preparing food every day. Finishing is the final touch of flavor after the dish is ready."],
              ["What should I buy first?","The Kitchen Set with Cooking + Finishing — one for the pan, one for the plate."],
              ["What foods can I use CIAO! on?","Pasta, pizza, salads, bread, eggs, vegetables, bowls, soups, meat and fish."],
              ["Free shipping?","Yes — on orders over $19.99 through the website."],
              ["First-order offer?","Yes — 15% welcome discount per the active campaign."],
            ].map(([q,a])=>(
              <details key={q} className="group bg-background border-2 border-foreground rounded-2xl p-5 open:bg-secondary open:text-secondary-foreground transition">
                <summary className="flex justify-between items-center cursor-pointer font-bold uppercase text-sm tracking-wide list-none">
                  {q}
                  <span className="text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 opacity-90">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="h-6 checker-band" />

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
          <a href="#shop" className="inline-block mt-10 bg-background text-foreground px-9 py-5 font-bold uppercase tracking-wide rounded-full text-lg hover:bg-foreground hover:text-background transition shadow-2xl">
            Shop CIAO! with 15% OFF
          </a>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-16 pb-8 px-5">
        <div className="h-2 checker-band -mx-5 mb-12" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <img src={ciaoLogo.url} alt="CIAO! Sicily" className="h-16 w-auto rounded-md" />
            <p className="mt-3 text-sm text-background/70">Real Sicilian Extra Virgin Olive Oil. Bringing taste and joy to your food.</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-background/50">www.ciao-sicily.com</p>
          </div>
          {[
            ["Shop", ["Extra Virgin Olive Oil","Cooking Olive Oil","Finishing Olive Oil","Infused Oils","Gift Pack","Merch"]],
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
    </main>
  );
}
