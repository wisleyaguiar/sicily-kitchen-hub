import ciaoCooking from "@/assets/ciao-cooking.png";
import finishingTable from "@/assets/ciao-finishing-table.jpg";
import truffleContext from "@/assets/Truffle_Context.png";
import chiliContext from "@/assets/Chili_Context.png";
import rosemaryContext from "@/assets/Rosemary_Context.png";
import basilContext from "@/assets/Basil_Context.png";

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
                <img src={ciaoCooking} alt="CIAO! Cooking — yellow squeeze bottle in a kitchen scene" className="h-80 w-full object-cover rounded-2xl" />
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
            <a href="#shop" className="inline-block bg-foreground text-background px-7 py-4 font-bold uppercase rounded-full hover:bg-primary transition">
              View Infused Oils & Gift Packs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
