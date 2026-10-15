import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { AboutSection } from "@/sections/home/about-section";
import { CtaSection } from "@/sections/home/cta-section";
import { FeaturedSection } from "@/sections/home/featured-section";
import { HeroSection } from "@/sections/home/hero-section";
import { NeighborhoodsSection } from "@/sections/home/neighborhoods-section";
import { ServicesSection } from "@/sections/home/services-section";
import { StatsSection } from "@/sections/home/stats-section";
import {
  getAllProperties,
  getFeaturedProperties,
  getNeighborhoodHighlights,
  getNeighborhoods,
} from "@/utils/properties";

export default function Home() {
  const catalog = getAllProperties();
  const featured = getFeaturedProperties(6);
  const neighborhoods = getNeighborhoods();
  const highlights = getNeighborhoodHighlights(6);
  const heroImage =
    catalog[0]?.mainImage ??
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";

  return (
    <>
      <SiteNavbar />
      <main>
        <HeroSection image={heroImage} neighborhoods={neighborhoods} />
        <StatsSection
          stats={[
            { value: String(catalog.length), label: "Casas à venda" },
            { value: String(neighborhoods.length), label: "Bairros" },
            { value: "Campo Belo", label: "Minas Gerais", compact: true },
            { value: "Visita", label: "Com a corretora", compact: true },
          ]}
        />
        <FeaturedSection properties={featured} />
        <NeighborhoodsSection neighborhoods={highlights} />
        <ServicesSection />
        <AboutSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
