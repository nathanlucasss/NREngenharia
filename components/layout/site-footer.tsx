export function SiteFooter() {
  return (
    <footer id="contato" className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <p className="footer-brand">Lorem Prime</p>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
        </div>

        <div>
          <p className="footer-title">Contato</p>
          <p className="footer-text">+55 11 98888-7777</p>
          <p className="footer-text">contato@loremprime.com</p>
          <p className="footer-text">Lorem Avenue, 2450</p>
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
        <p>(c) 2026 Lorem Prime. Lorem ipsum dolor sit amet.</p>
      </div>
    </footer>
  );
}
