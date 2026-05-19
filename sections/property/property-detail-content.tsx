"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import { PropertyCard } from "@/components/ui/property-card";
import { Property } from "@/types/property";
import { formatArea, formatPrice } from "@/utils/format";

interface PropertyDetailContentProps {
  property: Property;
  similarProperties: Property[];
}

type FeatureIconName =
  | "bed"
  | "suite"
  | "bath"
  | "garage"
  | "area"
  | "pool"
  | "gourmet";

function FeatureIcon({ name }: { name: FeatureIconName }) {
  if (name === "bed") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12h18v7h-2v-2H5v2H3z" fill="currentColor" />
        <path d="M5 7h5a2 2 0 0 1 2 2v3H5z" fill="currentColor" opacity="0.7" />
        <path d="M12 8h5a2 2 0 0 1 2 2v2h-7z" fill="currentColor" opacity="0.9" />
      </svg>
    );
  }

  if (name === "suite") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "bath") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3c2.4 2.9 4 5 4 7a4 4 0 0 1-8 0c0-2 1.6-4.1 4-7z"
          fill="currentColor"
        />
        <path d="M7 17h10v2H7z" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }

  if (name === "garage") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 11l8-6 8 6v7h-2v-2H6v2H4z" fill="currentColor" />
        <circle cx="8" cy="17" r="1.4" fill="#fff" />
        <circle cx="16" cy="17" r="1.4" fill="#fff" />
      </svg>
    );
  }

  if (name === "area") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 8h8v8H8z" fill="currentColor" opacity="0.25" />
      </svg>
    );
  }

  if (name === "pool") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 14c1.5 1.2 2.5 1.2 4 0s2.5-1.2 4 0 2.5 1.2 4 0 2.5-1.2 4 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 18c1.5 1.2 2.5 1.2 4 0s2.5-1.2 4 0 2.5 1.2 4 0 2.5-1.2 4 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5h2l2 7h2l2-7h2l-2 9h-8z" fill="currentColor" />
      <path d="M6 16h12v3H6z" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

export function PropertyDetailContent({
  property,
  similarProperties,
}: PropertyDetailContentProps) {
  const mapSource = `https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=14&output=embed`;
  const whatsappMessage = encodeURIComponent(
    `Tenho interesse no imovel ${property.name}. Gostaria de agendar uma visita.`,
  );
  const [entryPercent, setEntryPercent] = useState(20);
  const [months, setMonths] = useState(360);

  const simulation = useMemo(() => {
    const entryValue = property.price * (entryPercent / 100);
    const financed = property.price - entryValue;
    const monthlyRate = 0.0089;
    const installment =
      (financed * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

    return {
      entryValue,
      financed,
      installment,
    };
  }, [entryPercent, months, property.price]);

  const featureRows = [
    { label: "Quartos", value: String(property.specs.bedrooms), icon: "bed" as const },
    { label: "Suites", value: String(property.specs.suites), icon: "suite" as const },
    { label: "Banheiros", value: String(property.specs.bathrooms), icon: "bath" as const },
    { label: "Garagem", value: String(property.specs.garages), icon: "garage" as const },
    { label: "Metragem", value: formatArea(property.specs.area), icon: "area" as const },
    { label: "Piscina", value: property.specs.hasPool ? "Sim" : "Nao", icon: "pool" as const },
    {
      label: "Area gourmet",
      value: property.specs.hasGourmetArea ? "Sim" : "Nao",
      icon: "gourmet" as const,
    },
  ];
  const contactRows = featureRows.filter((item) => item.label !== "Metragem").slice(0, 4);

  const gallery = property.gallery.length > 0 ? property.gallery : [property.mainImage];
  const galleryMain = gallery[0] ?? property.mainImage;
  const gallerySecond = gallery[1] ?? property.mainImage;
  const galleryThird = gallery[2] ?? property.mainImage;

  return (
    <section className="section-block section-light vrd-page">
      <div className="site-container vrd-shell">
        <section className="vrd-gallery-shell">
          <div className="vrd-gallery-grid">
            <div className="vrd-gallery-item main">
              <Image src={galleryMain} alt={property.name} fill sizes="60vw" className="vrd-gallery-image" />
            </div>
            <div className="vrd-gallery-item">
              <Image src={gallerySecond} alt={property.name} fill sizes="20vw" className="vrd-gallery-image" />
            </div>
            <div className="vrd-gallery-item">
              <Image src={galleryThird} alt={property.name} fill sizes="20vw" className="vrd-gallery-image" />
            </div>
          </div>

          <div className="vrd-gallery-meta">
            <span>{gallery.length} fotos</span>
            <span>Mapa</span>
          </div>
        </section>

        <motion.header
          className="vrd-headline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="vrd-breadcrumbs">Inicio &gt; Imoveis &gt; {property.address.neighborhood}</div>
          <h1>{property.name}</h1>
          <p>
            {property.address.neighborhood}, {property.address.city} - {property.address.state}
          </p>
        </motion.header>

        <div className="vrd-main-grid">
          <div className="vrd-left-stack">
            <article className="vrd-card">
              <div className="vrd-title-row">
                <h2>{property.tagLine}</h2>
                <div className="vrd-actions-inline">
                  <button type="button">Compartilhar</button>
                  <button type="button">Favoritar</button>
                </div>
              </div>

              <div className="vrd-spec-pill-row">
                {featureRows.slice(0, 5).map((item) => (
                  <div key={item.label} className="vrd-spec-pill">
                    <span className="vrd-icon-wrap" aria-hidden>
                      <FeatureIcon name={item.icon} />
                    </span>
                    <div>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vrd-amenities-row">
                {property.amenities.slice(0, 8).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <article className="vrd-card">
              <h2>Caracteristicas</h2>
              <table className="vrd-feature-table">
                <tbody>
                  {featureRows.map((item) => (
                    <tr key={item.label}>
                      <td>
                        <span className="vrd-feature-label">
                          <span className="vrd-icon-wrap" aria-hidden>
                            <FeatureIcon name={item.icon} />
                          </span>
                          {item.label}
                        </span>
                      </td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className="vrd-card" id="agendar">
              <h2>Localizacao</h2>
              <p>{property.address.neighborhood}, {property.address.city} - {property.address.state}</p>
              <div className="vrd-map-wrap">
                <iframe
                  title={`Mapa de ${property.name}`}
                  src={mapSource}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>

            <article className="vrd-card">
              <h2>Descricao</h2>
              <p>{property.fullDescription}</p>
              <ul className="vrd-bullet-list">
                {property.differentiators.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="vrd-card">
              <h2>Simulador de financiamento</h2>
              <p>
                Simulacao indicativa para apoiar sua decisao. Valores finais dependem da analise
                de credito e instituicao financeira.
              </p>
              <label className="filter-field">
                Entrada: {entryPercent}%
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={entryPercent}
                  onChange={(event) => setEntryPercent(Number(event.target.value))}
                />
              </label>
              <label className="filter-field">
                Prazo: {months} meses
                <input
                  type="range"
                  min="120"
                  max="420"
                  step="12"
                  value={months}
                  onChange={(event) => setMonths(Number(event.target.value))}
                />
              </label>

              <div className="vrd-sim-grid">
                <div className="vrd-sim-donut-wrap">
                  <div
                    className="vrd-sim-donut"
                    style={{
                      background: `conic-gradient(#1f8d4b 0deg ${entryPercent * 3.6}deg, #d9e2f2 ${entryPercent * 3.6}deg 360deg)`,
                    }}
                    role="img"
                    aria-label={`Entrada ${entryPercent} por cento e saldo financiado ${100 - entryPercent} por cento`}
                  >
                    <span>{entryPercent}%</span>
                  </div>

                  <div className="vrd-sim-legend">
                    <p>
                      <span className="dot entry" aria-hidden /> Entrada
                    </p>
                    <p>
                      <span className="dot financed" aria-hidden /> Financiado
                    </p>
                  </div>
                </div>

                <table className="vrd-feature-table vrd-sim-table">
                  <tbody>
                    <tr>
                      <td>Entrada estimada</td>
                      <td>{formatPrice(simulation.entryValue)}</td>
                    </tr>
                    <tr>
                      <td>Saldo financiado</td>
                      <td>{formatPrice(simulation.financed)}</td>
                    </tr>
                    <tr>
                      <td>Parcela aproximada</td>
                      <td>{formatPrice(simulation.installment)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <aside className="vrd-right-stack">
            <article className="vrd-contact-card">
              <p className="vrd-price-label">Valor do imovel</p>
              <strong className="vrd-price-value">{formatPrice(property.price)}</strong>
              <span className="vrd-price-caption">Atendimento direto com corretor</span>

              <div className="vrd-contact-details">
                {contactRows.map((item) => (
                  <div key={item.label} className="vrd-contact-detail-row">
                    <span className="vrd-feature-label">
                      <span className="vrd-icon-wrap" aria-hidden>
                        <FeatureIcon name={item.icon} />
                      </span>
                      {item.label}
                    </span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <a
                className="vrd-whatsapp-btn"
                href={`https://wa.me/5511988887777?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </article>
          </aside>
        </div>

        <section className="similar-panel vrd-similar-panel">
          <header className="section-title">
            <p className="section-eyebrow">Imoveis semelhantes</p>
            <h2 className="section-heading">Outras oportunidades em Campo Belo</h2>
            <p className="section-description">Curadoria de opcoes proximas ao seu perfil.</p>
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
