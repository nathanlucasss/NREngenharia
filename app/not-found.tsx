import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <>
      <main className="section-block section-light">
        <div className="site-container">
          <p className="section-eyebrow">404</p>
          <h1 className="section-heading">Lorem ipsum dolor sit amet, pagina nao encontrada.</h1>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
          </p>
          <div className="hero-actions">
            <Link href="/" className="cta-button">
              Voltar ao inicio
            </Link>
            <Link href="/imoveis" className="ghost-button">
              Ver imoveis
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
