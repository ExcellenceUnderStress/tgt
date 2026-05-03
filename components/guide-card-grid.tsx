import Image from "next/image";
import Link from "next/link";

import cardStyles from "./card-surface.module.css";

export type GuideCardItem = {
  title: string;
  body: string;
  href: string;
  eyebrow?: string;
  image?: string;
  meta?: string;
};

type GuideCardGridProps = {
  items: GuideCardItem[];
};

export function GuideCardGrid({ items }: GuideCardGridProps) {
  return (
    <div className="guide-card-grid">
      {items.map((item) => (
        <Link className={`guide-card ${cardStyles.premiumCard}`} href={item.href} key={item.href}>
          {item.image ? (
            <div className="guide-card-media">
              <Image
                alt=""
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
                src={item.image}
              />
            </div>
          ) : null}
          <div className="guide-card-copy">
            {item.eyebrow ? <span>{item.eyebrow}</span> : null}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.meta ? <small>{item.meta}</small> : null}
          </div>
        </Link>
      ))}
    </div>
  );
}
