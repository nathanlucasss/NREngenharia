export function SiteFooter() {
  return (
    <footer id="contato" className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <p className="footer-brand">NR Engenharia</p>
          <p className="footer-text">
            Especialistas em intermediar imoveis residenciais com foco em Campo Belo,
            Minas Gerais.
          </p>
        </div>

        <div>
          <p className="footer-title">Contato</p>
          <p className="footer-text">+55 35 98888-7777</p>
          <p className="footer-text">contato@nrengenharia.com.br</p>
          <p className="footer-text">Campo Belo - MG</p>
        </div>

        <div>
          <p className="footer-title">Social</p>
          <div className="footer-links">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="YouTube">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>(c) 2026 NR Engenharia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
