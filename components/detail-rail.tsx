import cardStyles from "./card-surface.module.css";

type DetailRailProps = {
  label: string;
  title: string;
  body: string;
  as?: "div" | "aside";
};

export function DetailRail({
  label,
  title,
  body,
  as: Tag = "div",
}: DetailRailProps) {
  return (
    <Tag className={`service-detail-rail ${cardStyles.premiumCard}`}>
      <p className="booking-mini-label">{label}</p>
      <h3>{title}</h3>
      <p>{body}</p>
    </Tag>
  );
}
