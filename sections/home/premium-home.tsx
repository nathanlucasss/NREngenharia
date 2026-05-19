"use client";

import Link from "next/link";
import { useMemo } from "react";

import { PropertyCard } from "@/components/ui/property-card";
import { Property } from "@/types/property";

interface PremiumHomeProps {
  properties: Property[];
  neighborhoods: string[];
}

export function PremiumHome({ properties, neighborhoods }: PremiumHomeProps) {
  const suggested = useMemo(() => properties.slice(0, 3), [properties]);
  const premium = useMemo(() => [...properties].sort((a, b) => b.price - a.price).slice(0, 3), [properties]);
  const launches = useMemo(() => [...properties].slice(6, 9), [properties]);

  const trends = [
    {
      title: "Valorizacao em bairros centrais",
      value: "+8.2%",
      text: "Centro e Jardim America concentram a maior procura em Campo Belo no ultimo trimestre.",
    },
    {
      title: "Tempo medio de anuncio",
      value: "24 dias",
      text: "Imoveis com tour virtual e fotos profissionais vendem e alugam mais rapido.",
    },
    {
      title: "Perfil de demanda",
      value: "3 quartos",
      text: "Plantas com 3 quartos e 2 vagas seguem como maior volume de buscas.",
    },
  ];

  const searchHref = "/imoveis";

  return (
    <>
      <section className="section-block premium-intro">
        <div className="site-container premium-intro-inner">
          <div>
            <p className="premium-kicker">Plataforma premium</p>
            <h2 className="section-heading">Tecnologia, curadoria e alto padrao em Campo Belo</h2>
            <p className="section-description">
              Experiencia completa inspirada em QuintoAndar, Loft e Airbnb, com
              foco em performance, visual sofisticado e confianca para decisao.
            </p>
          </div>
          <div className="premium-intro-cta">
            <Link href={searchHref} className="premium-search-button">Ver todos os imoveis</Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <header className="section-title">
            <p className="section-eyebrow">Imoveis em destaque</p>
            <h2 className="section-heading">Selecao premium para compra</h2>
          </header>
          <div className="property-grid portal-grid">
            {suggested.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <header className="section-title">
            <p className="section-eyebrow">Imoveis recomendados</p>
            <h2 className="section-heading">Selecao personalizada para seu perfil</h2>
          </header>
          <div className="property-grid portal-grid">
            {properties.slice(3, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block premium-section-soft">
        <div className="site-container">
          <header className="section-title">
            <p className="section-eyebrow">Explore por bairro</p>
            <h2 className="section-heading">Onde voce quer morar em Campo Belo?</h2>
          </header>
          <div className="premium-bairro-grid">
            {neighborhoods.map((item) => (
              <Link key={item} href={`/imoveis?bairro=${encodeURIComponent(item)}`} className="premium-bairro-card">
                <h3>{item}</h3>
                <p>Ver oportunidades, mapa e tendencia de preco</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <header className="section-title">
            <p className="section-eyebrow">Imoveis de luxo</p>
            <h2 className="section-heading">Arquitetura moderna e alto padrao</h2>
          </header>
          <div className="property-grid portal-grid">
            {premium.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <header className="section-title">
            <p className="section-eyebrow">Lancamentos</p>
            <h2 className="section-heading">Novas oportunidades chegando ao mercado</h2>
          </header>
          <div className="property-grid portal-grid">
            {launches.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block premium-section-soft">
        <div className="site-container">
          <header className="section-title">
            <p className="section-eyebrow">Tendencias do mercado</p>
            <h2 className="section-heading">Dados para decisao com mais confianca</h2>
          </header>

          <div className="premium-trends-grid">
            {trends.map((trend) => (
              <article key={trend.title} className="premium-trend-card">
                <p>{trend.title}</p>
                <strong>{trend.value}</strong>
                <span>{trend.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block premium-final-cta">
        <div className="site-container premium-final-cta-inner">
          <div>
            <p className="section-eyebrow">Consultoria premium</p>
            <h2 className="section-heading">Quer ajuda para selecionar os melhores imoveis?</h2>
            <p className="section-description">
              Nossa equipe combina dados de mercado, perfil de busca e curadoria local para
              acelerar sua decisao com seguranca.
            </p>
          </div>
          <Link href="/imoveis" className="premium-search-button">
            Iniciar busca guiada
          </Link>
        </div>
      </section>
    </>
  );
}
