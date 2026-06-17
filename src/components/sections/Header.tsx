import ciaoLogo from "@/assets/ciao-logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        <a href="#" className="block leading-none">
          <img
            src={ciaoLogo}
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
  );
}
