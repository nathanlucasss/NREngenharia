import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="section-block">
      <div className="site-container split-layout">
        <div className="split-copy">
          <p className="section-eyebrow">A corretora</p>
          <h2 className="section-heading">Quem anuncia também mostra a casa.</h2>
          <p className="section-description">
            A Lorem Prime vende casas em Campo Belo, MG. Você escolhe o imóvel no site, chama no
            WhatsApp e a visita é marcada com alguém que conhece a rua.
          </p>
          <p className="section-description">
            Não é um catálogo de várias cidades. O foco é a casa certa dentro de Campo Belo, no
            bairro e no valor que cabem no que você procura.
          </p>
        </div>

        <div className="split-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Fachada de uma casa em bairro residencial"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="split-image"
          />
        </div>
      </div>
    </section>
  );
}
