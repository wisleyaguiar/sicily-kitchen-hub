import { createFileRoute } from "@tanstack/react-router";
import finishing from "@/assets/500_FINISHING_AF_BG_ZERO.png";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import WhyCiaoSection from "@/components/sections/WhyCiaoSection";
import StorySection from "@/components/sections/StorySection";
import ProductDetailsSection from "@/components/sections/ProductDetailsSection";
import ShopSection from "@/components/sections/ShopSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CIAO! — Real Sicilian Extra Virgin Olive Oil" },
      { name: "description", content: "Premium organic Sicilian EVOO — zero blend, cold pressed. From the pan to the plate. Get 15% OFF your first order." },
      { property: "og:title", content: "CIAO! — Real Sicilian Extra Virgin Olive Oil" },
      { property: "og:description", content: "Premium organic Sicilian EVOO — zero blend, cold pressed. Get 15% OFF your first order." },
      { property: "og:image", content: finishing },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <div className="h-6 checker-band" />
      <WhyCiaoSection />
      <div className="h-6 checker-band" />
      <StorySection />
      <div className="h-6 checker-band" />
      <ProductDetailsSection />
      <div className="h-6 checker-band" />
      <ShopSection />
      <div className="h-6 checker-band" />
      <FaqSection />
      <div className="h-6 checker-band" />
      <Footer />
    </main>
  );
}
