"use client";

import { motion } from "framer-motion";

import { PropertyCard } from "@/components/ui/property-card";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { Property } from "@/types/property";
import { formatArea, formatPrice } from "@/utils/format";

interface PropertyDetailContentProps {
  property: Property;
  similarProperties: Property[];
}

export function PropertyDetailContent({
  property,
  similarProperties,
}: PropertyDetailContentProps) {
  const mapSource = `https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=14&output=embed`;
  const tour360Source = `https://www.google.com/maps?q=&layer=c&cbll=${property.coordinates.lat},${property.coordinates.lng}&cbp=12,0,0,0,0&output=svembed`;
  const whatsappMessage = encodeURIComponent(
    `Lorem ipsum dolor sit amet: ${property.name}`,
  );

  return (
    <section className="section-block section-light section-top-offset">
      <div className="site-container property-detail-wrap">
        <motion.header
          className="property-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">{property.category}</p>
          <h1 className="property-detail-title">{property.name}</h1>
          <p className="property-detail-subtitle">
            {property.address.neighborhood} | {property.address.city} - {property.address.state}
          </p>
          <p className="property-detail-price">{formatPrice(property.price)}</p>
        </motion.header>

        <div className="property-top-grid">
          <ImageCarousel images={property.gallery} alt={property.name} />

          <aside className="property-side-panel glass-surface">
            <h2>Informacoes do imovel</h2>
            <ul className="property-side-list">
              <li>
                <span>Quartos</span>
                <strong>{property.specs.bedrooms}</strong>
              </li>
              <li>
                <span>Suites</span>
                <strong>{property.specs.suites}</strong>
              </li>
              <li>
                <span>Banheiros</span>
                <strong>{property.specs.bathrooms}</strong>
              </li>
              <li>
                <span>Garagem</span>
                <strong>{property.specs.garages}</strong>
              </li>
              <li>
                <span>Metragem</span>
                <strong>{formatArea(property.specs.area)}</strong>
              </li>
            </ul>

            <div className="detail-actions-column">
              <a
                className="cta-button"
                href={`https://wa.me/5511988887777?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a href="#agendar" className="ghost-button">
                Agendar visita
              </a>
            </div>
          </aside>
        </div>

        <div className="property-content-grid">
          <article className="detail-panel glass-surface">
            <h2>Descricao</h2>
            <p>{property.fullDescription}</p>
            <h3>Diferenciais</h3>
            <ul className="bullet-list">
              {property.differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel glass-surface">
            <h2>Caracteristicas</h2>
            <table className="feature-table">
              <tbody>
                <tr>
                  <td>Quartos</td>
                  <td>{property.specs.bedrooms}</td>
                </tr>
                <tr>
                  <td>Suites</td>
                  <td>{property.specs.suites}</td>
                </tr>
                <tr>
                  <td>Banheiros</td>
                  <td>{property.specs.bathrooms}</td>
                </tr>
                <tr>
                  <td>Garagem</td>
                  <td>{property.specs.garages}</td>
                </tr>
                <tr>
                  <td>Metragem</td>
                  <td>{formatArea(property.specs.area)}</td>
                </tr>
                <tr>
                  <td>Piscina</td>
                  <td>{property.specs.hasPool ? "Sim" : "Nao"}</td>
                </tr>
                <tr>
                  <td>Area gourmet</td>
                  <td>{property.specs.hasGourmetArea ? "Sim" : "Nao"}</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>

        <section id="agendar" className="map-panel glass-surface">
          <h2>Localizacao</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>
          <div className="map-wrap">
            <iframe
              title={`Mapa de ${property.name}`}
              src={mapSource}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <button type="button" className="cta-button">
            Agendar visita
          </button>
        </section>

        <section id="tour-360" className="map-panel glass-surface">
          <h2>Tour 360 (exemplo)</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Visualizacao
            panoramica de referencia para experiencia imersiva.
          </p>
          <div className="map-wrap">
            <iframe
              title={`Tour 360 de ${property.name}`}
              src={tour360Source}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a className="ghost-button" href={tour360Source} target="_blank" rel="noreferrer">
            Abrir tour em nova aba
          </a>
        </section>

        <section className="similar-panel">
          <header className="section-title">
            <p className="section-eyebrow">Imoveis semelhantes</p>
            <h2 className="section-heading">Lorem ipsum collection selection</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>
          </header>

          <div className="property-grid">
            {similarProperties.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
