import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";

export function CtaSection() {
  return (
    <section className="section-block section-cta">
      <div className="site-container">
        <FadeIn className="cta-panel">
          <p className="section-eyebrow">Atendimento Exclusivo</p>
          <h2 className="section-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero-actions">
            <a
              className="cta-button"
              href="https://wa.me/5511988887777?text=Lorem%20ipsum%20dolor%20sit%20amet"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
            <Link href="/imoveis" className="ghost-button">
              Ver catalogo
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
