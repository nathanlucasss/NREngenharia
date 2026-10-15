const services = [
  {
    index: "1",
    title: "Escolhe no site",
    text: "Filtre por bairro, valor e quantidade de quartos. Cada card mostra o preço e o tamanho.",
  },
  {
    index: "2",
    title: "Marca a visita",
    text: "Chama no WhatsApp com o imóvel que interessou. A corretora confirma o horário.",
  },
  {
    index: "3",
    title: "Fecha com acompanhamento",
    text: "Da proposta à escritura, o mesmo atendimento segue com você em Campo Belo.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-block">
      <div className="site-container">
        <header className="section-title section-intro">
          <p className="section-eyebrow">Como funciona</p>
          <h2 className="section-heading">Do anúncio até a visita</h2>
        </header>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.index} className="service-card">
              <p className="service-index">{service.index}</p>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
