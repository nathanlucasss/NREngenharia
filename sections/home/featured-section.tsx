import Link from "next/link";

import { PropertyCard } from "@/components/ui/property-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Property } from "@/types/property";

interface FeaturedSectionProps {
  properties: Property[];
}

export function FeaturedSection({ properties }: FeaturedSectionProps) {
  return (
    <section id="destaques" className="section-block">
      <div className="site-container">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="Destaques"
            title="Casas à venda agora"
            description="Anúncios em Campo Belo. O preço, o bairro e o tamanho estão no card."
          />
          <Link href="/imoveis" className="text-link">
            Ver todas
          </Link>
        </div>

        <div className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
