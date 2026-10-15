interface StatItem {
  value: string;
  label: string;
  compact?: boolean;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="stats-band" aria-label="A casa em números">
      <div className="site-container stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <strong className={stat.compact ? "stat-value word" : "stat-value"}>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
