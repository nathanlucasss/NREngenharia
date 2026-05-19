"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

import { PropertyCard } from "@/components/ui/property-card";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { Property } from "@/types/property";

const PropertiesMap = dynamic(
  () => import("@/components/ui/properties-map").then((module) => module.PropertiesMap),
  { ssr: false },
);

interface PropertiesCatalogProps {
  properties: Property[];
  cities: string[];
  neighborhoods: string[];
  initialQuery?: string;
  initialNeighborhood?: string;
}

const priceRanges = [
  { label: "Qualquer preco", value: "all" },
  { label: "Ate R$ 600 mil", value: "600000" },
  { label: "Ate R$ 900 mil", value: "900000" },
  { label: "Ate R$ 1,3 mi", value: "1300000" },
  { label: "Ate R$ 2 mi", value: "2000000" },
];

export function PropertiesCatalog({
  properties,
  cities,
  neighborhoods,
  initialQuery = "",
  initialNeighborhood = "all",
}: PropertiesCatalogProps) {
  const [query, setQuery] = useState(initialQuery);
  const [city, setCity] = useState(cities[0] ?? "Campo Belo");
  const [neighborhood, setNeighborhood] = useState(initialNeighborhood);
  const [maxPrice, setMaxPrice] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [suites, setSuites] = useState("all");
  const [bathrooms, setBathrooms] = useState("all");
  const [garages, setGarages] = useState("all");
  const [area, setArea] = useState("all");

  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const debouncedQuery = useDebouncedValue(query, 260);

  const suggestions = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (value.length < 2) {
      return [];
    }

    const source = [
      ...neighborhoods,
      ...properties.map((property) => property.name),
      ...properties.flatMap((property) => property.amenities),
    ];

    return Array.from(new Set(source))
      .filter((item) => item.toLowerCase().includes(value))
      .slice(0, 6);
  }, [query, neighborhoods, properties]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const normalizedQuery = debouncedQuery.toLowerCase().trim();
      const terms = normalizedQuery.split(/[\s,.-]+/).filter(Boolean);
      const haystack = [
        property.name,
        property.category,
        property.address.city,
        property.address.neighborhood,
        ...property.amenities,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = terms.length === 0 || terms.every((term) => haystack.includes(term));
      const matchesCity = city === "all" || property.address.city === city;
      const matchesNeighborhood =
        neighborhood === "all" || property.address.neighborhood === neighborhood;
      const matchesPrice =
        maxPrice === "all" || property.price <= Number.parseInt(maxPrice, 10);

      const matchesBedrooms =
        bedrooms === "all" || property.specs.bedrooms >= Number.parseInt(bedrooms, 10);
      const matchesSuites =
        suites === "all" || property.specs.suites >= Number.parseInt(suites, 10);
      const matchesBathrooms =
        bathrooms === "all" || property.specs.bathrooms >= Number.parseInt(bathrooms, 10);
      const matchesGarages =
        garages === "all" || property.specs.garages >= Number.parseInt(garages, 10);
      const matchesArea =
        area === "all" || property.specs.area >= Number.parseInt(area, 10);

      return (
        matchesQuery &&
        matchesCity &&
        matchesNeighborhood &&
        matchesPrice &&
        matchesBedrooms &&
        matchesSuites &&
        matchesBathrooms &&
        matchesGarages &&
        matchesArea
      );
    });
  }, [
    properties,
    debouncedQuery,
    city,
    neighborhood,
    maxPrice,
    bedrooms,
    suites,
    bathrooms,
    garages,
    area,
  ]);

  const mapProperties = filteredProperties.length > 0 ? filteredProperties : properties;

  const activeSelectedId =
    selectedPropertyId && mapProperties.some((item) => item.id === selectedPropertyId)
      ? selectedPropertyId
      : mapProperties[0]?.id ?? null;

  const isSearching = query.trim() !== debouncedQuery.trim();

  const heroImage = properties[0]?.mainImage;

  return (
    <section className="lux-catalog">
      <section className="lux-hero lux-hero-fullbleed" style={{ backgroundImage: heroImage ? `url(${heroImage})` : undefined }}>
        <div className="lux-hero-overlay" />
        <div className="site-container">
          <div className="lux-hero-content">
            <p className="lux-kicker">Campo Belo - MG</p>
            <h1>Imoveis em Campo Belo com atendimento local de verdade.</h1>
            <p>
              Encontre casas e apartamentos com curadoria regional, suporte humano e agilidade
              para comprar com seguranca em Campo Belo.
            </p>

            <div className="lux-search-shell">
              <div className="lux-search-grid">
                <label>
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

                <label>
                  Bairro
                  <select value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)}>
                    <option value="all">Todos</option>
                    {neighborhoods.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="search-field">
                  Busca inteligente
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Rua, bairro ou caracteristica"
                  />
                </label>
              </div>

              {suggestions.length > 0 ? (
                <div className="lux-autocomplete">
                  {suggestions.map((item) => (
                    <button key={item} type="button" onClick={() => setQuery(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <div className="site-container lux-listing-shell" id="lux-listings">
        <div className="lux-results-column">
          <div className="lux-filter-toolbar">
            <label>
              Preco
              <select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}>
                {priceRanges.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Quartos
              <select value={bedrooms} onChange={(event) => setBedrooms(event.target.value)}>
                <option value="all">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </label>

            <label>
              Suites
              <select value={suites} onChange={(event) => setSuites(event.target.value)}>
                <option value="all">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </label>

            <label>
              Banheiros
              <select value={bathrooms} onChange={(event) => setBathrooms(event.target.value)}>
                <option value="all">Qualquer</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </label>

            <label>
              Vagas
              <select value={garages} onChange={(event) => setGarages(event.target.value)}>
                <option value="all">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </label>

            <label>
              Metragem
              <select value={area} onChange={(event) => setArea(event.target.value)}>
                <option value="all">Qualquer</option>
                <option value="120">120+ m2</option>
                <option value="220">220+ m2</option>
                <option value="350">350+ m2</option>
              </select>
            </label>
          </div>

          <header className="lux-results-head">
            <div>
              <h2>{filteredProperties.length} imoveis em Campo Belo</h2>
              <p>Curadoria premium com filtros avancados e mapa interativo sincronizado.</p>
            </div>
            <button type="button">Mais relevantes</button>
          </header>

          {isSearching ? (
            <div className="lux-skeleton-grid">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="lux-skeleton-card" />
              ))}
            </div>
          ) : filteredProperties.length > 0 ? (
            <motion.div layout className="lux-card-grid">
              <AnimatePresence>
                {filteredProperties.map((property) => (
                  <motion.div
                    layout
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PropertyCard
                      property={property}
                      highlighted={activeSelectedId === property.id}
                      onHoverStart={() => setSelectedPropertyId(property.id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="lux-empty-state">
              <h3>Nenhum imovel encontrado</h3>
              <p>Refine os filtros para exibir novas oportunidades em Campo Belo.</p>
            </div>
          )}
        </div>

        <aside className="lux-map-column">
          <div className="lux-map-frame">
            <PropertiesMap
              properties={mapProperties}
              selectedId={activeSelectedId}
              onHoverProperty={(id) => {
                if (id) {
                  setSelectedPropertyId(id);
                }
              }}
              onSelectProperty={(id) => setSelectedPropertyId(id)}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
