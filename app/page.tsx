import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { AboutSection } from "@/sections/home/about-section";
import { CtaSection } from "@/sections/home/cta-section";
import { FeaturedSection } from "@/sections/home/featured-section";
import { HeroSection } from "@/sections/home/hero-section";
import { getFeaturedProperties } from "@/utils/properties";

export default function Home() {
  const featuredProperties = getFeaturedProperties(3);
  const heroImage =
    featuredProperties[0]?.mainImage ??
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80";

  return (
    <>
      <SiteNavbar transparentOnTop />
      <main>
        <HeroSection image={heroImage} />
        <FeaturedSection properties={featuredProperties} />
        <AboutSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
