import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/section-title";
import { NeighborhoodHighlight } from "@/utils/properties";

interface NeighborhoodsSectionProps {
  neighborhoods: NeighborhoodHighlight[];
}

function residenceLabel(count: number) {
  return count === 1 ? "1 casa" : `${count} casas`;
}

export function NeighborhoodsSection({ neighborhoods }: NeighborhoodsSectionProps) {
  return (
    <section className="section-block section-sand">
      <div className="site-container">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="Bairros"
            title="Onde estão as casas"
            description="Todos os anúncios são em Campo Belo. Escolha o bairro para ver só o que tem lá."
          />
          <Link href="/imoveis" className="text-link">
            Ver todos
          </Link>
        </div>

        <div className="neighborhood-grid">
          {neighborhoods.map((neighborhood, index) => (
            <Link
              key={`${neighborhood.city}-${neighborhood.name}`}
              href={`/imoveis?q=${encodeURIComponent(neighborhood.name)}`}
              className={index === 0 ? "neighborhood-card wide" : "neighborhood-card"}
            >
              <Image
                src={neighborhood.image}
                alt={`${neighborhood.name}, ${neighborhood.city}`}
                fill
                sizes={index === 0 ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 50vw, 33vw"}
                className="neighborhood-image"
              />
              <span className="neighborhood-shade" />
              <span className="neighborhood-copy">
                <span className="neighborhood-meta">{neighborhood.city}</span>
                <span className="neighborhood-name">{neighborhood.name}</span>
                <span className="neighborhood-count">{residenceLabel(neighborhood.count)}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
