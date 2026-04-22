import type { ServiceDetailStat } from "@/lib/site-content";

type StatGridProps = {
  stats: ServiceDetailStat[];
};

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="service-stat-grid">
      {stats.map((stat) => (
        <article className="service-stat" key={stat.label}>
          <span>{stat.label}</span>
          <strong>{stat.value}</strong>
        </article>
      ))}
    </div>
  );
}
