import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";

export default function NotFound() {
  return (
    <>
      <SiteNavbar />
      <main className="not-found">
        <div className="site-container not-found-inner">
          <p className="section-eyebrow">404</p>
          <h1 className="section-heading">Essa página não existe.</h1>
          <p className="section-description">
            Volte ao início ou veja as casas à venda em Campo Belo.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="cta-button">
              Voltar ao início
            </Link>
            <Link href="/imoveis" className="ghost-button">
              Ver imóveis
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
