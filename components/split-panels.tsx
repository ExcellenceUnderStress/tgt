import type { ServiceDetailSection } from "@/lib/site-content";

type SplitPanelsProps = {
  kicker: string;
  items: ServiceDetailSection[];
};

export function SplitPanels({ kicker, items }: SplitPanelsProps) {
  return (
    <section className="route-section route-section-split">
      {items.map((item) => (
        <div className="route-section-panel" key={item.title}>
          <p className="section-kicker">{kicker}</p>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </section>
  );
}
