import Image from "next/image";
import Link from "next/link";

import { Property } from "@/types/property";
import { formatArea, formatPrice } from "@/utils/format";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
  layout?: "default" | "feature";
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="property-card">
      <Link className="property-card-link" href={`/imoveis/${property.slug}`}>
        <div className="property-image-wrap">
          <Image
            src={property.mainImage}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="property-image"
            priority={priority}
          />
          <span className="property-tag">{property.category}</span>
        </div>

        <div className="property-content">
          <p className="property-price">{formatPrice(property.price)}</p>
          <h3 className="property-name">{property.name}</h3>
          <p className="property-location">
            {property.address.neighborhood}, {property.address.city}
          </p>
          <p className="property-meta">
            {formatArea(property.specs.area)} · {property.specs.bedrooms} quartos ·{" "}
            {property.specs.garages} {property.specs.garages === 1 ? "vaga" : "vagas"}
          </p>
        </div>
      </Link>
    </article>
  );
}
