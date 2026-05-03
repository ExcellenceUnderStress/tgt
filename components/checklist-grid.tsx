import cardStyles from "./card-surface.module.css";

type ChecklistGroup = {
  title?: string;
  items: string[];
};

type ChecklistGridProps = {
  groups: ChecklistGroup[];
};

export function ChecklistGrid({ groups }: ChecklistGridProps) {
  return (
    <div className="service-checklist-grid">
      {groups.map((group) => (
        <article className={`service-checklist ${cardStyles.premiumCard}`} key={group.title ?? group.items[0]}>
          {group.title && <p className="booking-mini-label">{group.title}</p>}
          <ul className="service-preview-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
