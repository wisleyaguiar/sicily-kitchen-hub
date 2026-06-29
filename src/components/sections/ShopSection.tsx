import kitchenDuo from "@/assets/ciao-kitchen-set.jpg";
import finishingFlat from "@/assets/ciao-finishing-flat.png";
import cookingFlat from "@/assets/ciao-cooking-flat.png";
import truffleFlat from "@/assets/ciao-truffle-flat.png";
import basilFlat from "@/assets/ciao-basil-flat.png";
import chiliFlat from "@/assets/ciao-chili-flat.png";
import rosemaryFlat from "@/assets/ciao-rosemary-flat.png";
import truffle100 from "@/assets/ciao-truffle-100.png";
import basil100 from "@/assets/ciao-basil-100.png";
import chili100 from "@/assets/ciao-chili-100.png";
import rosemary100 from "@/assets/ciao-rosemary-100.png";
import iconFinishing from "@/assets/icon-finishing.png";
import iconCooking from "@/assets/icon-cooking.png";
import iconBasil from "@/assets/icon-basil.png";
import iconRosemary from "@/assets/icon-rosemary.png";
import iconChili from "@/assets/icon-chili.png";
import iconTruffle from "@/assets/icon-truffle.png";

// v2 Assets
import finishingFlatV2 from "@/assets/ciao-finishing-flat-v2.png";
import cookingFlatV2 from "@/assets/ciao-cooking-flat-v2.png";
import iconFinishingV2 from "@/assets/icon-finishing-v2.png";
import iconCookingV2 from "@/assets/icon-cooking-v2.png";

type Product = {
  title: string;
  size: string;
  desc: string;
  img: string;
  badge: string;
  badgeIcon?: string;
  badgeIconWide?: boolean;
  price: string;
  objectClass?: string;
  aspectClass?: string;
};

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="bg-background text-foreground rounded-3xl overflow-hidden border-4 border-background hover:border-primary transition group flex flex-col h-full">
      <div className={`bg-white flex items-center justify-center overflow-hidden relative ${p.aspectClass ?? "aspect-square"}`}>
        {p.badgeIcon ? (
          <img
            src={p.badgeIcon}
            alt={p.badge}
            className={`absolute z-20 drop-shadow-md pointer-events-none ${
              p.badgeIconWide
                ? "top-3 left-3 w-28 md:w-36 h-auto object-contain"
                : "top-3 left-3 h-20 w-20 md:h-24 md:w-24 object-contain"
            }`}
          />
        ) : p.badge === "Best Seller" ? (
          <span className="absolute top-3 left-3 inline-flex items-center justify-center bg-primary text-primary-foreground text-xs md:text-sm font-extrabold uppercase tracking-widest px-4 py-2 rounded-full z-10 shadow-md leading-none"><span className="h-2.5">{p.badge}</span></span>
        ) : (
          <span className="absolute top-3 left-3 inline-flex items-center justify-center bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full z-10 leading-none"><span className="h-2.5">{p.badge}</span></span>
        )}
        <img src={p.img} alt={p.title} className={`h-full w-full object-contain p-2 transition ${p.objectClass ?? "scale-125 group-hover:scale-[1.35]"}`} />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-xl uppercase">{p.title}</h3>
          <span className="text-primary font-bold whitespace-nowrap">{p.price}</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1 font-[var(--font-mono)]">{p.size}</p>
        <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
        <button className="mt-auto pt-4 w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3 font-bold uppercase text-sm tracking-wide rounded-full hover:bg-[var(--brand-red-dark)] transition leading-none btn-pulse-red">
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default function ShopSection() {
  const evoo = [
    { title: "Kitchen Set", size: "750ml + 500ml", desc: "Cooking + Finishing. The full experience.", img: kitchenDuo, badge: "Best Seller", price: "$37.99", objectClass: "scale-110 group-hover:scale-[1.18]", aspectClass: "aspect-[1600/1360]" },
    { title: "Finishing EVOO", size: "500ml · 16.9 fl oz", desc: "The final drizzle for any dish.", img: finishingFlatV2, badge: "Finishing", badgeIcon: iconFinishingV2, badgeIconWide: true, price: "$22.99", objectClass: "scale-100 group-hover:scale-105", aspectClass: "aspect-[360/306]" },
    { title: "Cooking EVOO", size: "750ml · 25.4 fl oz", desc: "Premium everyday extra virgin.", img: cookingFlatV2, badge: "Cooking", badgeIcon: iconCookingV2, badgeIconWide: true, price: "$17.99", objectClass: "scale-100 group-hover:scale-105", aspectClass: "aspect-[360/306]" },
  ];
  const infused100 = [
    { title: "Infused — Truffle", size: "100ml · 3.38 fl oz", desc: "Rich, indulgent, gourmet.", img: truffle100, badge: "Truffle", badgeIcon: iconTruffle, price: "$12.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
    { title: "Infused — Basil", size: "100ml · 3.38 fl oz", desc: "Fresh Italian basil EVOO.", img: basil100, badge: "Basil", badgeIcon: iconBasil, price: "$12.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
    { title: "Infused — Chili", size: "100ml · 3.38 fl oz", desc: "A bold Sicilian kick.", img: chili100, badge: "Chili", badgeIcon: iconChili, price: "$12.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
    { title: "Infused — Rosemary", size: "100ml · 3.38 fl oz", desc: "Herbal, aromatic, Mediterranean.", img: rosemary100, badge: "Rosemary", badgeIcon: iconRosemary, price: "$12.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
  ];
  const infused250 = [
    { title: "Infused — Truffle", size: "250ml · 8.45 fl oz", desc: "Rich, indulgent, gourmet.", img: truffleFlat, badge: "250ml", badgeIcon: iconTruffle, price: "$19.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
    { title: "Infused — Basil", size: "250ml · 8.45 fl oz", desc: "Fresh Italian basil EVOO.", img: basilFlat, badge: "250ml", badgeIcon: iconBasil, price: "$19.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
    { title: "Infused — Chili", size: "250ml · 8.45 fl oz", desc: "A bold Sicilian kick.", img: chiliFlat, badge: "250ml", badgeIcon: iconChili, price: "$19.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
    { title: "Infused — Rosemary", size: "250ml · 8.45 fl oz", desc: "Herbal, aromatic, Mediterranean.", img: rosemaryFlat, badge: "250ml", badgeIcon: iconRosemary, price: "$19.99", objectClass: "scale-110 group-hover:scale-[1.18]" },
  ];

  return (
    <section id="shop" className="py-12 px-5 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-base md:text-lg font-extrabold uppercase tracking-[0.3em] text-white">Choose your CIAO!</span>
          <h2 className="mt-3 text-4xl md:text-6xl uppercase">Bring Sicily to your table</h2>
        </div>

        <h3 className="font-[var(--font-mono)] text-base md:text-lg font-bold uppercase tracking-[0.3em] text-white mb-4">Extra Virgin Olive Oil</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {evoo.map(p => <ProductCard key={p.title} p={p} />)}
        </div>

        <h3 className="font-[var(--font-mono)] text-base md:text-lg font-bold uppercase tracking-[0.3em] text-white mt-14 mb-4">Infused · 100ml</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {infused100.map(p => <ProductCard key={p.title} p={p} />)}
        </div>

        <h3 className="font-[var(--font-mono)] text-base md:text-lg font-bold uppercase tracking-[0.3em] text-white mt-14 mb-4">Infused · 250ml</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {infused250.map(p => <ProductCard key={p.title} p={p} />)}
        </div>

        <div className="text-center mt-10 text-base font-bold uppercase tracking-widest text-white">
          15% OFF welcome offer · Free shipping over $19.99
        </div>
      </div>
    </section>
  );
}
