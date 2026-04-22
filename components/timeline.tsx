import type { ServiceDetailSection } from "@/lib/site-content";

type TimelineProps = {
  steps: ServiceDetailSection[];
};

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="service-timeline">
      {steps.map((step) => (
        <article className="service-timeline-step" key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}
    </div>
  );
}
