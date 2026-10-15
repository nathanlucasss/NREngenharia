import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  image: string;
  neighborhoods: string[];
}

export function HeroSection({ image, neighborhoods }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="site-container hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Campo Belo, Minas Gerais</p>
          <h1 className="hero-title">Casas à venda na cidade</h1>
          <p className="hero-description">
            Veja as casas anunciadas em Campo Belo e fale com a corretora para marcar uma visita.
          </p>

          <form className="hero-search" action="/imoveis">
            <div className="hero-search-main">
              <label className="hero-search-field">
                <span>Buscar</span>
                <input
                  type="search"
                  name="q"
                  placeholder="Bairro ou número de quartos"
                  autoComplete="off"
                />
              </label>
              <button type="submit" className="cta-button">
                Buscar
              </button>
            </div>
          </form>

          <div className="hero-cities">
            {neighborhoods.slice(0, 6).map((neighborhood) => (
              <Link key={neighborhood} href={`/imoveis?q=${encodeURIComponent(neighborhood)}`}>
                {neighborhood}
              </Link>
            ))}
          </div>
        </div>

        <div className="hero-photo">
          <Image
            src={image}
            alt="Casa à venda em Campo Belo"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
