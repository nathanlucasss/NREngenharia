"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { PropertyCard } from "@/components/ui/property-card";
import { Property } from "@/types/property";

interface PropertiesCatalogProps {
  properties: Property[];
  cities: string[];
}

const priceRanges = [
  { label: "Todos os precos", value: "all" },
  { label: "Ate R$ 5.000.000", value: "5000000" },
  { label: "Ate R$ 8.000.000", value: "8000000" },
  { label: "Ate R$ 12.000.000", value: "12000000" },
];

export function PropertiesCatalog({ properties, cities }: PropertiesCatalogProps) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const normalizedQuery = query.toLowerCase().trim();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        property.name.toLowerCase().includes(normalizedQuery) ||
        property.address.city.toLowerCase().includes(normalizedQuery) ||
        property.address.neighborhood.toLowerCase().includes(normalizedQuery);

      const matchesCity = city === "all" || property.address.city === city;

      const matchesPrice =
        maxPrice === "all" || property.price <= Number.parseInt(maxPrice, 10);

      const matchesBedrooms =
        bedrooms === "all" || property.specs.bedrooms >= Number.parseInt(bedrooms, 10);

      return matchesQuery && matchesCity && matchesPrice && matchesBedrooms;
    });
  }, [properties, query, city, maxPrice, bedrooms]);

  return (
    <section className="section-block section-light section-top-offset">
      <div className="site-container">
        <header className="section-title">
          <p className="section-eyebrow">Catalogo Premium</p>
          <h1 className="section-heading">Lorem ipsum dolor sit amet, colecao completa.</h1>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <div className="filter-panel glass-surface">
          <label className="filter-field">
            Busca
            <input
              type="text"
              placeholder="Buscar por nome ou local"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label className="filter-field">
            Cidade
            <select value={city} onChange={(event) => setCity(event.target.value)}>
              <option value="all">Todas</option>
              {cities.map((cityOption) => (
                <option key={cityOption} value={cityOption}>
                  {cityOption}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            Faixa de preco
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

        <p className="results-count">{filteredProperties.length} imoveis encontrados</p>

        {filteredProperties.length > 0 ? (
          <motion.div layout className="property-grid">
            <AnimatePresence>
              {filteredProperties.map((property) => (
                <motion.div
                  layout
                  key={property.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="empty-state glass-surface">
            <h3>Nenhum imovel encontrado</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ajuste os filtros
              para visualizar outras opcoes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
