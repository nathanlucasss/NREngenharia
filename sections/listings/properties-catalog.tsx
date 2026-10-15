"use client";

import { useMemo, useState } from "react";

import { PropertyCard } from "@/components/ui/property-card";
import { Property } from "@/types/property";

interface PropertiesCatalogProps {
  properties: Property[];
  neighborhoods: string[];
  initialQuery?: string;
}

const priceRanges = [
  { label: "Qualquer valor", value: "all" },
  { label: "Até R$ 400.000", value: "400000" },
  { label: "Até R$ 600.000", value: "600000" },
  { label: "Até R$ 900.000", value: "900000" },
];

export function PropertiesCatalog({
  properties,
  neighborhoods,
  initialQuery = "",
}: PropertiesCatalogProps) {
  const [query, setQuery] = useState(initialQuery);
  const [neighborhood, setNeighborhood] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const normalizedQuery = query.toLowerCase().trim();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        property.name.toLowerCase().includes(normalizedQuery) ||
        property.address.city.toLowerCase().includes(normalizedQuery) ||
        property.address.neighborhood.toLowerCase().includes(normalizedQuery) ||
        property.category.toLowerCase().includes(normalizedQuery);

      const matchesNeighborhood =
        neighborhood === "all" || property.address.neighborhood === neighborhood;

      const matchesPrice =
        maxPrice === "all" || property.price <= Number.parseInt(maxPrice, 10);

      const matchesBedrooms =
        bedrooms === "all" || property.specs.bedrooms >= Number.parseInt(bedrooms, 10);

      return matchesQuery && matchesNeighborhood && matchesPrice && matchesBedrooms;
    });
  }, [properties, query, neighborhood, maxPrice, bedrooms]);

  const hasFilters =
    query.trim().length > 0 || neighborhood !== "all" || maxPrice !== "all" || bedrooms !== "all";

  const countLabel =
    filteredProperties.length === 1 ? "1 casa" : `${filteredProperties.length} casas`;

  const resetFilters = () => {
    setQuery("");
    setNeighborhood("all");
    setMaxPrice("all");
    setBedrooms("all");
  };

  return (
    <section className="section-block section-top-offset">
      <div className="site-container">
        <header className="catalog-intro section-title">
          <p className="section-eyebrow">Campo Belo · MG</p>
          <h1 className="section-heading">Casas à venda</h1>
          <p className="section-description">
            Filtre por bairro, valor ou número de quartos. Todos os anúncios são na cidade.
          </p>
        </header>

        <div className="filter-bar">
          <label className="filter-field">
            Busca
            <input
              type="search"
              placeholder="Bairro ou tipo de casa"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label className="filter-field">
            Bairro
            <select value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)}>
              <option value="all">Todos</option>
              {neighborhoods.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            Valor
            <select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}>
              {priceRanges.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            Quartos
            <select value={bedrooms} onChange={(event) => setBedrooms(event.target.value)}>
              <option value="all">Qualquer</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </label>
        </div>

        <div className="results-row">
          <p className="results-count">{countLabel}</p>
          {hasFilters ? (
            <button type="button" className="text-button" onClick={resetFilters}>
              Limpar filtros
            </button>
          ) : null}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="property-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Nenhum imóvel com esses filtros</h2>
            <p>Ajuste a busca ou limpe os filtros para ver todas as casas.</p>
          </div>
        )}
      </div>
    </section>
  );
}
