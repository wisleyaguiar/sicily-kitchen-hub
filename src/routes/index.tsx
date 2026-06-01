import { createFileRoute } from "@tanstack/react-router";
import basilProduct from "@/assets/Basil_Product.asset.json";
import basilContext from "@/assets/Basil_Context.asset.json";
import truffleContext from "@/assets/Truffle_Context.asset.json";
import truffleFlavor from "@/assets/Truffle_Flavor.asset.json";
import chiliContext from "@/assets/Chili_Context.asset.json";
import rosemaryContext from "@/assets/Rosemary_Context.asset.json";
import finishing from "@/assets/500_FINISHING_AF_BG_ZERO.asset.json";

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
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
        <div className="h-2 checker-band" />
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
          <a href="#" className="text-4xl ciao-script leading-none">Ciao!</a>
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#why" className="hover:text-primary">Why CIAO!</a>
            <a href="#cooking" className="hover:text-primary">Cooking + Finishing</a>
            <a href="#infused" className="hover:text-primary">Infused</a>
            <a href="#shop" className="hover:text-primary">Shop</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <a href="#shop" className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-full hover:bg-[var(--brand-red-dark)] transition shadow-[var(--shadow-bold)]">
            Shop 15% OFF
          </a>
        </div>
        <div className="h-2 checker-band" />
      </header>

      {/* HERO */}
      <section className="relative pt-16 pb-24 px-5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.52_0.18_148_/_0.18),_transparent_60%),radial-gradient(ellipse_at_bottom_left,_oklch(0.58_0.22_27_/_0.15),_transparent_55%)]" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-cream)]" /> Prodotto in Italia, Sicilia
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] uppercase">
              Real <span className="text-primary">Sicilian</span><br/>
              Extra Virgin<br/>
              Olive Oil
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              For everyday cooking and finishing. Premium, organic, zero blend, cold pressed —
              created to turn simple meals into Italian moments.
            </p>
            <p className="mt-4 font-display text-2xl text-secondary tracking-wide">
              From the pan to the plate.<br/>
              From ordinary to <em className="not-italic text-primary">unforgettable.</em>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-wide rounded-full shadow-[var(--shadow-bold)] hover:scale-[1.03] transition">
                Shop CIAO! — 15% OFF
              </a>
              <a href="#why" className="border-2 border-foreground px-7 py-4 font-bold uppercase tracking-wide rounded-full hover:bg-foreground hover:text-background transition">
                Watch the story
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm font-medium">
              {["15% OFF first order","Organic","Zero blend","Cold pressed","Sicilian origin","Kosher certified"].map(x=>(
                <li key={x} className="flex items-center gap-2">
                  <span className="text-secondary font-black">✓</span>{x}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Free shipping over $19.99</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary to-secondary rounded-[2.5rem] rotate-3 opacity-90" />
            <div className="relative bg-[var(--brand-cream)] rounded-[2rem] p-8 shadow-[var(--shadow-card)] border-4 border-foreground">
              <img src={finishing.url} alt="CIAO Finishing Sicilian EVOO bottle" className="w-full h-auto animate-float drop-shadow-2xl" />
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center font-display text-center rotate-12 shadow-lg">
                <span className="text-3xl leading-none">15%</span>
                <span className="text-[10px] uppercase tracking-wider">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-3 checker-band" />

      {/* WHY CIAO */}
      <section id="why" className="py-24 px-5 bg-[var(--brand-cream)]">
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

      {/* PREMIUM. REAL ORIGIN. EVERYDAY USE. */}
      <section className="py-24 px-5 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary rounded-[2rem] -rotate-2" />
            <div className="relative bg-[var(--brand-cream)] border-4 border-foreground rounded-[2rem] p-10 flex items-center justify-center">
              <img src={basilProduct.url} alt="CIAO! premium Sicilian EVOO bottle" className="h-[420px] object-contain animate-float" />
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              🔒 Premium · Real Origin · Everyday Use
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl uppercase leading-[0.95]">
              More than a regular<br/>grocery store olive oil.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              CIAO! combines quality, aesthetics and practicality — a product designed to live on your counter and elevate every meal.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
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
            <p className="mt-6 font-display text-2xl text-primary">Use better olive oil every day.</p>
            <a href="#shop" className="inline-block mt-6 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-[var(--brand-red-dark)] transition">
              Choose my CIAO! now
            </a>
          </div>
        </div>
      </section>

      {/* TRUTH ABOUT OLIVE OIL */}
      <section className="py-24 px-5 bg-foreground text-background">
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

      {/* VALUE PROPOSITION */}
      <section className="py-24 px-5 bg-background">
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

      {/* COOKING + FINISHING */}
      <section id="cooking" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Cooking + Finishing</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase">One for the Pan.<br/>One for the Plate.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-[var(--brand-cream)] border-4 border-foreground rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-3 checker-band" />
              <div className="flex justify-center my-6">
                <img src={basilProduct.url} alt="CIAO Cooking bottle" className="h-80 object-contain" />
              </div>
              <h3 className="text-3xl uppercase">CIAO! Cooking</h3>
              <p className="mt-3 text-muted-foreground">For everyday cooking with real extra virgin olive oil. Perfect for preparing recipes, grilling, sautéing and elevating the quality of your food from the very beginning.</p>
            </article>
            <article className="bg-secondary text-secondary-foreground border-4 border-foreground rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-3 checker-band" />
              <div className="flex justify-center my-6">
                <img src={finishing.url} alt="CIAO Finishing squeeze bottle" className="h-80 object-contain" />
              </div>
              <h3 className="text-3xl uppercase">CIAO! Finishing</h3>
              <p className="mt-3 text-secondary-foreground/90">For using after the dish is ready. Perfect for pasta, pizza, salads, bread, eggs, vegetables, meats, fish, bowls and soups.</p>
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

      {/* INFUSED OILS */}
      <section id="infused" className="py-24 px-5 bg-[var(--brand-cream)]">
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

      {/* LESS DRESS MORE DRIZZLE */}
      <section className="py-24 px-5 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-80">Manifesto</span>
            <h2 className="mt-3 text-5xl md:text-7xl uppercase leading-[0.9]">
              Less Dress.<br/>
              <span className="text-primary">More Drizzle.</span>
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-md">
              Sometimes all a meal needs is a drizzle of real extra virgin olive oil.
              Replace heavy dressings with a simple, premium, flavorful finishing touch.
            </p>
            <ul className="mt-6 space-y-2 text-base">
              <li>→ An ordinary salad becomes memorable.</li>
              <li>→ A simple pasta becomes Italian.</li>
              <li>→ A ready-made pizza becomes gourmet.</li>
              <li>→ Artisan bread becomes a ritual.</li>
            </ul>
            <a href="#shop" className="inline-block mt-8 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase rounded-full hover:bg-foreground transition">
              I want more flavor
            </a>
          </div>
          <div className="relative flex justify-center">
            <img src={finishing.url} alt="CIAO Finishing drizzle" className="h-[480px] object-contain animate-float drop-shadow-2xl" />
            {[0,0.4,0.8,1.2].map(d=>(
              <span key={d} className="absolute top-[42%] left-1/2 w-1.5 h-6 rounded-full bg-[oklch(0.85_0.18_95)] animate-drizzle" style={{ animationDelay: `${d}s` }} />
            ))}
          </div>
        </div>
      </section>

      {/* THE PROOF IS IN THE FLAVOR */}
      <section className="py-24 px-5 bg-background">
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

      {/* WHO IS CIAO FOR — standalone */}
      <section className="py-24 px-5 bg-[var(--brand-cream)]">
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

      {/* WHY NOT ANOTHER + WHO IS IT FOR */}
      <section className="py-24 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-[var(--brand-cream)] border-4 border-foreground rounded-3xl p-8">
            <h3 className="text-3xl md:text-4xl uppercase">Why CIAO!<br/>and not another?</h3>
            <ul className="mt-6 space-y-2">
              {["Authentic Sicilian origin","Zero blend extra virgin","Organic & Kosher certified","Cold pressed process","Practical squeeze bottle","Modern, desirable design","Clear cooking + finishing strategy","Infused oils & gift packs"].map(x=>(
                <li key={x} className="flex gap-3"><span className="text-primary font-black">✓</span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground border-4 border-foreground rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl uppercase">Premium. Fun.<br/>Truly Sicilian.</h3>
              <p className="mt-4 opacity-90">
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

      {/* SHOP */}
      <section id="shop" className="py-24 px-5 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Choose your CIAO!</span>
            <h2 className="mt-3 text-4xl md:text-6xl uppercase">Bring Sicily to your table</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Kitchen Set", desc: "Cooking + Finishing. The full experience.", img: finishing.url, badge: "Best Seller", price: "$42" },
              { title: "Finishing EVOO", desc: "The final drizzle for any dish.", img: finishing.url, badge: "Squeeze", price: "$24" },
              { title: "Cooking EVOO", desc: "Premium everyday extra virgin.", img: basilProduct.url, badge: "Everyday", price: "$22" },
              { title: "Infused — Truffle", desc: "Rich, indulgent, gourmet.", img: truffleFlavor.url, badge: "Gourmet", price: "$28" },
              { title: "Infused — Basil", desc: "Fresh Italian basil EVOO.", img: basilProduct.url, badge: "Fresh", price: "$24" },
              { title: "Gift Pack", desc: "Flavor, design & Italy — wrapped.", img: rosemaryContext.url, badge: "Gift", price: "$58" },
            ].map(p=>(
              <article key={p.title} className="bg-background text-foreground rounded-3xl overflow-hidden border-4 border-background hover:border-primary transition group">
                <div className="aspect-square bg-[var(--brand-cream)] flex items-center justify-center overflow-hidden relative">
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">{p.badge}</span>
                  <img src={p.img} alt={p.title} className="h-full w-full object-contain p-6 group-hover:scale-105 transition" />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl uppercase">{p.title}</h3>
                    <span className="text-primary font-bold">{p.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  <button className="mt-4 w-full bg-foreground text-background py-3 font-bold uppercase text-sm tracking-wide rounded-full hover:bg-primary transition">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10 text-sm uppercase tracking-widest text-background/70">
            15% OFF welcome offer · Free shipping over $19.99
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-5 bg-[var(--brand-cream)]">
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

      {/* FINAL CTA */}
      <section className="py-28 px-5 bg-primary text-primary-foreground text-center relative overflow-hidden">
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

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-16 pb-8 px-5">
        <div className="h-2 checker-band -mx-5 mb-12" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-5xl ciao-script">Ciao!</div>
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
