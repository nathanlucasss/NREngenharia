"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Property } from "@/types/property";
import { formatArea, formatPrice } from "@/utils/format";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <motion.article
      className="property-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <Link className="property-image-wrap" href={`/imoveis/${property.slug}`}>
        <Image
          src={property.mainImage}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="property-image"
          priority={priority}
        />
        <span className="property-tag">{property.category}</span>
      </Link>

      <div className="property-content">
        <p className="property-location">
          {property.address.neighborhood} | {property.address.city}
        </p>
        <h3 className="property-name">{property.name}</h3>
        <p className="property-price">{formatPrice(property.price)}</p>

        <div className="property-meta">
          <span>{property.specs.bedrooms} quartos</span>
          <span>{property.specs.bathrooms} banheiros</span>
          <span>{formatArea(property.specs.area)}</span>
        </div>

        <Link className="ghost-button" href={`/imoveis/${property.slug}`}>
          Ver detalhes
        </Link>
      </div>
    </motion.article>
  );
}
