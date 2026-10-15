import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="contato" className="site-footer">
      <div className="site-container">
        <div className="footer-intro">
          <p className="footer-brand">Lorem Prime</p>
          <p className="footer-lead">
            Corretora de casas em Campo Belo, MG. Visita marcada direto com quem anuncia.
          </p>
        </div>

        <div className="footer-grid">
          <div>
            <p className="footer-title">Site</p>
            <div className="footer-links">
              <Link href="/">Início</Link>
              <Link href="/imoveis">Imóveis</Link>
              <Link href="/#sobre">Sobre</Link>
            </div>
          </div>

          <div>
            <p className="footer-title">Fale com a gente</p>
            <p className="footer-text">
              <a href="tel:+5535988887777">+55 35 98888-7777</a>
            </p>
            <p className="footer-text">
              <a href="mailto:contato@loremprime.com">contato@loremprime.com</a>
            </p>
            <div className="footer-links">
              <a
                href="https://wa.me/5535988887777?text=Ol%C3%A1%2C%20quero%20ver%20casas%20em%20Campo%20Belo."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="footer-title">Onde estamos</p>
            <p className="footer-text">Centro, Campo Belo — MG</p>
            <div className="footer-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Lorem Prime</p>
          <p>Casas em Campo Belo</p>
        </div>
      </div>
    </footer>
  );
}
