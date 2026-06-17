import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqItems = [
    ["Is CIAO! really Sicilian?", "Yes. CIAO! works with olive oils of Sicilian origin, connected to the tradition, soil and food culture of Sicily."],
    ["Is CIAO! organic?", "Yes. CIAO! has European organic certification, aligned with USDA standards."],
    ["Is CIAO! Kosher certified?", "Yes. CIAO! is Kosher certified."],
    ["Does CIAO! use blends?", "No. We deliver real extra virgin olive oil with zero blend."],
    ["What is the difference between Cooking and Finishing?", "Cooking is for preparing food every day. Finishing is the final touch of flavor after the dish is ready."],
    ["What should I buy first?", "The Kitchen Set with Cooking + Finishing — one for the pan, one for the plate."],
    ["What foods can I use CIAO! on?", "Pasta, pizza, salads, bread, eggs, vegetables, bowls, soups, meat and fish."],
    ["Free shipping?", "Yes — on orders over $19.99 through the website."],
    ["First-order offer?", "Yes — 15% welcome discount per the active campaign."],
  ];

  return (
    <section id="faq" className="py-12 px-5 bg-[var(--brand-cream)]">
      {/* Schema Markup for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(([q, a]) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": a,
              },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">FAQ</span>
          <h2 className="mt-3 text-4xl md:text-5xl uppercase">Questions, answered.</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map(([q, a], index) => (
            <AccordionItem
              value={`item-${index}`}
              key={q}
              className="bg-background border-2 border-foreground rounded-2xl p-5 data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground transition-all duration-300 border-b-2"
            >
              <AccordionTrigger className="flex justify-between items-center cursor-pointer font-bold uppercase text-sm tracking-wide py-0 hover:no-underline text-foreground data-[state=open]:text-secondary-foreground [&>svg]:text-muted-foreground [&[data-state=open]>svg]:text-secondary-foreground">
                <span>{q}</span>
              </AccordionTrigger>
              <AccordionContent className="mt-3 opacity-90 text-base pb-0">
                <p>{a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
