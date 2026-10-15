import Link from "next/link";

export function CtaSection() {
  return (
    <section className="section-block cta-band">
      <div className="site-container cta-band-inner">
        <div>
          <p className="section-eyebrow">Campo Belo</p>
          <h2 className="section-heading">Quer ver uma dessas casas?</h2>
          <p className="section-description">
            Manda uma mensagem com o bairro ou o valor. A resposta vem com os imóveis que encaixam.
          </p>
        </div>
        <div className="closing-actions">
          <a
            className="cta-button"
            href="https://wa.me/5535988887777?text=Ol%C3%A1%2C%20quero%20ver%20casas%20%C3%A0%20venda%20em%20Campo%20Belo."
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
          <Link href="/imoveis" className="ghost-button">
            Ver imóveis
          </Link>
        </div>
      </div>
    </section>
  );
}
