import Link from "next/link";

import { ImageCarousel } from "@/components/ui/image-carousel";
import { PropertyCard } from "@/components/ui/property-card";
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
  const whatsappMessage = encodeURIComponent(
    `Olá, tenho interesse na casa ${property.name} (${property.id}), em Campo Belo.`,
  );
  const visitMessage = encodeURIComponent(
    `Olá, quero agendar uma visita: ${property.name} (${property.id}), Campo Belo.`,
  );

  return (
    <section className="section-block section-top-offset">
      <div className="site-container property-detail-wrap">
        <header className="property-headline">
          <nav className="breadcrumb" aria-label="Trilha">
            <Link href="/">Início</Link>
            <span aria-hidden>/</span>
            <Link href="/imoveis">Imóveis</Link>
            <span aria-hidden>/</span>
            <span>{property.name}</span>
          </nav>

          <p className="section-eyebrow">{property.category}</p>
          <div className="property-headline-row">
            <div>
              <h1 className="property-detail-title">{property.name}</h1>
              <p className="property-tagline">{property.tagLine}</p>
              <p className="property-detail-subtitle">
                {property.address.neighborhood} · {property.address.city} — {property.address.state}
              </p>
            </div>
            <p className="property-detail-price">{formatPrice(property.price)}</p>
          </div>
        </header>

        <ul className="spec-strip">
          <li>
            <strong>{property.specs.bedrooms}</strong>
            <span>Quartos</span>
          </li>
          <li>
            <strong>{property.specs.suites}</strong>
            <span>Suítes</span>
          </li>
          <li>
            <strong>{property.specs.bathrooms}</strong>
            <span>Banheiros</span>
          </li>
          <li>
            <strong>{property.specs.garages}</strong>
            <span>Vagas</span>
          </li>
          <li>
            <strong>{property.specs.area}</strong>
            <span>Área</span>
          </li>
        </ul>

        <div className="property-top-grid">
          <ImageCarousel images={property.gallery} alt={property.name} />

          <aside id="agendar" className="inquiry-card">
            <p className="section-eyebrow">Atendimento</p>
            <h2>Falar sobre esta casa</h2>
            <p className="section-description">
              Chame no WhatsApp para tirar dúvida ou marcar a visita em Campo Belo.
            </p>
            <div className="inquiry-actions">
              <a
                className="cta-button"
                href={`https://wa.me/5535988887777?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="ghost-button"
                href={`https://wa.me/5535988887777?text=${visitMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                Agendar visita
              </a>
            </div>
            <p className="inquiry-ref">Ref. {property.id}</p>
          </aside>
        </div>

        <div className="property-content-grid">
          <article className="panel">
            <h2>Sobre a casa</h2>
            <p>{property.fullDescription}</p>
            <h3>Diferenciais</h3>
            <ul className="bullet-list">
              {property.differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <h2>Ficha técnica</h2>
            <table className="feature-table">
              <tbody>
                <tr>
                  <td>Quartos</td>
                  <td>{property.specs.bedrooms}</td>
                </tr>
                <tr>
                  <td>Suítes</td>
                  <td>{property.specs.suites}</td>
                </tr>
                <tr>
                  <td>Banheiros</td>
                  <td>{property.specs.bathrooms}</td>
                </tr>
                <tr>
                  <td>Vagas</td>
                  <td>{property.specs.garages}</td>
                </tr>
                <tr>
                  <td>Área</td>
                  <td>{formatArea(property.specs.area)}</td>
                </tr>
                <tr>
                  <td>Piscina</td>
                  <td>{property.specs.hasPool ? "Sim" : "Não"}</td>
                </tr>
                <tr>
                  <td>Área gourmet</td>
                  <td>{property.specs.hasGourmetArea ? "Sim" : "Não"}</td>
                </tr>
              </tbody>
            </table>
            <h3>Amenidades</h3>
            <ul className="amenity-list">
              {property.amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="location-grid">
          <section className="panel">
            <h2>Localização</h2>
            <p>
              {property.address.neighborhood}, {property.address.city} — {property.address.state}.
              Campo Belo, MG. A visita é combinada direto com a corretora.
            </p>
            <div className="map-wrap muted">
              <iframe
                title={`Mapa de ${property.name}`}
                src={mapSource}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section id="tour-360" className="panel">
            <h2>Tour 360</h2>
            <p>O passeio é por dentro da casa. O player entra aqui quando o tour estiver pronto.</p>
            <div
              className="tour-placeholder"
              role="status"
              style={{
                display: "grid",
                placeItems: "center",
                minHeight: 340,
                marginTop: "1rem",
                border: "1px dashed rgba(0, 0, 0, 0.16)",
                borderRadius: 16,
                background: "#f3f4f6",
                textAlign: "center",
                padding: "1.5rem",
              }}
            >
              <p style={{ margin: 0, fontWeight: 700, color: "#222" }}>Tour interno em breve</p>
            </div>
          </section>
        </div>

        {similarProperties.length > 0 ? (
          <section className="similar-panel">
            <header className="section-title">
              <p className="section-eyebrow">Próximas</p>
              <h2 className="section-heading">Outras casas em Campo Belo</h2>
            </header>
            <div className="property-grid">
              {similarProperties.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
