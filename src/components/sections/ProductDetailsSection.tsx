import ciaoCooking from "@/assets/ciao-cooking.png";
import finishingTable from "@/assets/ciao-finishing-table.jpg";
import truffleContext from "@/assets/Truffle_Context.png";
import chiliContext from "@/assets/Chili_Context.png";
import rosemaryContext from "@/assets/Rosemary_Context.png";
import basilContext from "@/assets/Basil_Context.png";
import kitchenSet from "@/assets/kitchen-set.png";

export default function ProductDetailsSection() {
  return (
    <>
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
                <img src={ciaoCooking} alt="CIAO! Cooking — yellow squeeze bottle in a kitchen scene" className="h-80 w-full object-cover object-center rounded-2xl" />
              </div>
              <h3 className="text-3xl uppercase text-primary">CIAO! Cooking</h3>
              <p className="mt-3 text-muted-foreground">For everyday cooking with real extra virgin olive oil. Perfect for preparing recipes, grilling, sautéing and elevating the quality of your food from the very beginning.</p>
            </article>
            <article className="bg-[var(--brand-cream)] border-4 border-foreground rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-6 checker-band" />
              <div className="flex justify-center my-8 pt-4">
                <img
                  src={finishingTable}
                  alt="CIAO! Finishing — green squeeze bottle on a Sicilian table with burrata, bread, pasta and pizza"
                  className="h-80 w-full object-cover rounded-2xl"
                  style={{ objectPosition: "0 -102px" }}
                />
              </div>
              <h3 className="text-3xl uppercase text-primary">CIAO! Finishing</h3>
              <p className="mt-3 text-muted-foreground">For using after the dish is ready. Perfect for pasta, pizza, salads, bread, eggs, vegetables, meats, fish, bowls and soups.</p>
            </article>
          </div>
          <div className="mt-12 bg-primary text-primary-foreground rounded-3xl border-4 border-foreground p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_120%,_white,_transparent_50%)]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-5xl uppercase leading-none">The Kitchen Set</h3>
                <p className="mt-4 text-base md:text-lg opacity-95 max-w-md">
                  Cooking + Finishing. The most complete way to live the CIAO! experience. One for the pan, one for the plate.
                </p>
                <a href="#shop" className="inline-flex items-center justify-center mt-8 bg-background text-foreground px-8 py-4 font-bold uppercase rounded-full hover:bg-foreground hover:text-background transition shadow-lg leading-none">
                  <span className="h-2.5">Shop the Kitchen Set</span>
                </a>
              </div>
              <div className="relative flex justify-center items-center h-[260px] md:h-[300px]">
                {/* Visual backdrop */}
                <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-secondary border-4 border-foreground z-0 shadow-inner" />
                {/* Popping product image */}
                <img
                  src={kitchenSet}
                  alt="CIAO! Kitchen Set — Cooking and Finishing bottles together"
                  className="relative z-10 max-h-[110%] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] hover:scale-[1.05] transition duration-500"
                />
              </div>
            </div>
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
              { name: "Truffle", img: truffleContext, note: "Rich, indulgent, gourmet.", tint: "bg-foreground text-background" },
              { name: "Chili",   img: chiliContext,   note: "A bold Sicilian kick.",     tint: "bg-primary text-primary-foreground" },
              { name: "Rosemary",img: rosemaryContext,note: "Aromatic & herbal.",        tint: "bg-[oklch(0.85_0.06_85)] text-foreground" },
              { name: "Basil",   img: basilContext,   note: "Fresh Italian basil.",      tint: "bg-secondary text-secondary-foreground" },
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
            <a href="#shop" className="inline-flex items-center justify-center bg-foreground text-background px-7 py-4 font-bold uppercase rounded-full hover:bg-primary transition leading-none">
              <span className="h-2.5">View Infused Oils & Gift Packs</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
