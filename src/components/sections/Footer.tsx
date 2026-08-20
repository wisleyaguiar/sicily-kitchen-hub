import ciaoLogo from "@/assets/ciao-logo.png";

const footerSections = [
  {
    title: "Shop",
    links: [
      {
        label: "Kitchen Set",
        href: "https://www.ciao-sicily.com/products/ciao-kitchen-set-extra-virgin-olive-oil?utm_source=lp-ciao-sicily-kitchen&utm_medium=referral&utm_campaign=lp-footer",
      },
      {
        label: "Finishing EVOO",
        href: "https://www.ciao-sicily.com/products/ciao-extra-virgin-olive-oil-500ml-finishing?utm_source=lp-ciao-sicily-kitchen&utm_medium=referral&utm_campaign=lp-footer",
      },
      {
        label: "Cooking EVOO",
        href: "https://www.ciao-sicily.com/products/ciao-cooking-extra-virgin-olive-oil?utm_source=lp-ciao-sicily-kitchen&utm_medium=referral&utm_campaign=lp-footer",
      },
      {
        label: "Truffle Infused",
        href: "https://www.ciao-sicily.com/products/ciao-truffle-infused-olive-oil?utm_source=lp-ciao-sicily-kitchen&utm_medium=referral&utm_campaign=lp-footer",
      },
      {
        label: "Basil Infused",
        href: "https://www.ciao-sicily.com/products/ciao-basil-infused-olive-oil?utm_source=lp-ciao-sicily-kitchen&utm_medium=referral&utm_campaign=lp-footer",
      },
      {
        label: "Chili Infused",
        href: "https://www.ciao-sicily.com/products/ciao-chili-infused-olive-oil?utm_source=lp-ciao-sicily-kitchen&utm_medium=referral&utm_campaign=lp-footer",
      },
      {
        label: "Rosemary Infused",
        href: "https://www.ciao-sicily.com/products/ciao-rosemary-infused-olive-oil?utm_source=lp-ciao-sicily-kitchen&utm_medium=referral&utm_campaign=lp-footer",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Shipping Policy",
        href: "https://www.ciao-sicily.com/policies/terms-of-service",
      },
      {
        label: "Privacy Policy",
        href: "https://www.ciao-sicily.com/policies/privacy-policy",
      },
      {
        label: "Terms of Service",
        href: "https://www.ciao-sicily.com/policies/terms-of-service",
      },
      {
        label: "Contact",
        href: "https://www.ciao-sicily.com/pages/contact",
      },
    ],
  },
  {
    title: "Follow",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/getciaonow/?igsh=MXJpNXl3dDJwcDFuMQ%3D%3D#",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/people/Getciaonow/61577114289317/",
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@getciaonow",
      },
      {
        label: "Pinterest",
        href: "https://br.pinterest.com/getciaonow",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      {/* FINAL CTA */}
      <section className="py-14 px-5 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_white,_transparent_40%),radial-gradient(circle_at_70%_60%,_oklch(0.52_0.18_148),_transparent_45%)]" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl uppercase leading-[0.95]">
            Cook better.
            <br />
            Finish better.
            <br />
            Eat better.
          </h2>
          <p className="mt-6 text-lg opacity-90">
            Real Sicilian extra virgin olive oil — premium, organic, zero blend, cold pressed. From
            the pan to the plate. From ordinary to unforgettable.
          </p>
          <a
            href="#shop"
            className="inline-flex items-center justify-center mt-10 bg-background text-foreground px-9 py-5 text-base md:text-lg font-bold uppercase tracking-wider rounded-full outline outline-2 outline-offset-2 outline-background hover:bg-foreground hover:text-background hover:outline-foreground transition shadow-2xl leading-none btn-pulse-white"
          >
            <span className="leading-none">Shop CIAO! with 15% OFF</span>
          </a>
        </div>
      </section>

      <div className="h-6 checker-band" />

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-6 pb-8 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <img
              src={ciaoLogo}
              alt="CIAO! Sicily"
              loading="lazy"
              decoding="async"
              className="h-16 w-auto rounded-md"
            />
            <p className="mt-3 text-sm text-background/70">
              Real Sicilian Extra Virgin Olive Oil. Bringing taste and joy to your food.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-background/50">
              <a
                href="https://www.ciao-sicily.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                www.ciao-sicily.com
              </a>
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-background/80">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-background/50 mt-12">
          © CIAO! Sicily. All rights reserved.
        </p>
      </footer>
    </>
  );
}
