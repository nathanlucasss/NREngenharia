"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { getPropertyInsights } from "@/services/property-insights";
import { useFavoritesStore } from "@/stores/favorites-store";
import { Property } from "@/types/property";
import { formatArea, formatPrice } from "@/utils/format";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
  highlighted?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export function PropertyCard({
  property,
  priority = false,
  highlighted = false,
  onHoverStart,
  onHoverEnd,
}: PropertyCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(property.id));
  const insights = getPropertyInsights(property);
  const media = useMemo(
    () => (property.gallery.length > 0 ? property.gallery : [property.mainImage]),
    [property.gallery, property.mainImage],
  );

  const nextImage = () => setActiveImage((prev) => (prev + 1) % media.length);
  const previousImage = () =>
    setActiveImage((prev) => (prev - 1 + media.length) % media.length);

  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1400px) 48vw, 34vw";

  return (
    <motion.article
      className={highlighted ? "property-card lux-property-card highlighted" : "property-card lux-property-card"}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.005 }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="lux-property-media">
        <Link className="property-image-wrap" href={`/imoveis/${property.slug}`}>
          <Image
            src={media[activeImage]}
            alt={property.name}
            fill
            sizes={imageSizes}
            className="property-image"
            priority={priority}
          />
          <span className="property-tag">{property.category}</span>
          <span className="lux-property-badge">{insights.badge}</span>
          <span className="lux-property-verified">Verificado</span>
        </Link>

        {media.length > 1 ? (
          <>
            <button
              type="button"
              className="lux-media-nav left"
              onClick={(event) => {
                event.preventDefault();
                previousImage();
              }}
              aria-label="Imagem anterior"
            >
              ◀
            </button>
            <button
              type="button"
              className="lux-media-nav right"
              onClick={(event) => {
                event.preventDefault();
                nextImage();
              }}
              aria-label="Proxima imagem"
            >
              ▶
            </button>

            <div className="lux-media-dots" aria-hidden>
              {media.slice(0, 5).map((item, index) => (
                <span key={`${property.id}-${item}`} className={index === activeImage ? "active" : ""} />
              ))}
            </div>
          </>
        ) : null}
      </div>

      <button
        type="button"
        className={isFavorite ? "lux-property-save active" : "lux-property-save"}
        aria-label="Salvar imovel"
        onClick={() => toggleFavorite(property.id)}
      >
        {isFavorite ? "Salvo" : "Salvar"}
      </button>

      <div className="property-content lux-property-content">
        <h3 className="property-name lux-property-title">{property.name}</h3>
        <p className="property-location lux-property-location">
          {property.address.neighborhood}, {property.address.city} - {property.address.state}
        </p>

        <p className="property-price lux-property-price">{formatPrice(property.price)}</p>

        <div className="property-meta lux-property-meta">
          <span>{formatArea(property.specs.area)}</span>
          <span>{property.specs.bedrooms} quartos</span>
          <span>{property.specs.suites} suites</span>
          <span>{property.specs.bathrooms} banheiros</span>
          <span>{property.specs.garages} vagas</span>
        </div>

        <Link className="ghost-button lux-property-link" href={`/imoveis/${property.slug}`}>
          Ver detalhes
        </Link>
      </div>
    </motion.article>
  );
}
