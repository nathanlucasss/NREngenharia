import { PropertyCard } from "@/components/ui/property-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Property } from "@/types/property";

interface FeaturedSectionProps {
  properties: Property[];
}

export function FeaturedSection({ properties }: FeaturedSectionProps) {
  return (
    <section id="destaques" className="section-block section-light">
      <div className="site-container">
        <SectionTitle
          eyebrow="Colecao Curada"
          title="Lorem ipsum dolor sit amet, elit premium collection"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          center
        />

        <div className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
