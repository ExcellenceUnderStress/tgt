import cardStyles from "./card-surface.module.css";

type CalloutProps = {
  label: string;
  children: string;
};

export function Callout({ label, children }: CalloutProps) {
  return (
    <aside className={`service-callout ${cardStyles.premiumCard}`}>
      <p className="booking-mini-label">{label}</p>
      <p>{children}</p>
    </aside>
  );
}
