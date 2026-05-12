interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <header className={center ? "section-title section-title-center" : "section-title"}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      <p className="section-description">{description}</p>
    </header>
  );
}
