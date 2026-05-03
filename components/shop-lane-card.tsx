import Image from "next/image";
import Link from "next/link";

import type { HomepageShopLane } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";
import { ThemedImage } from "./themed-image";

type ShopLaneCardProps = {
  lane: HomepageShopLane;
  /** Enable GSAP reveal attribute. */
  animated?: boolean;
};

export function ShopLaneCard({ lane, animated }: ShopLaneCardProps) {
  const imageClass = `shop-lane-image${lane.imageMode === "brandmark" ? " shop-lane-image--brandmark" : ""}`;

  return (
    <article
      className={`shop-lane ${cardStyles.premiumCard}`}
      {...(animated ? { "data-reveal": "slide-up" } : {})}
    >
      <div className="shop-lane-media">
        {lane.darkImage ? (
          <ThemedImage
            alt={lane.title}
            className={imageClass}
            darkSrc={lane.darkImage}
            fill
            lightSrc={lane.image}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        ) : (
          <Image
            alt={lane.title}
            className={imageClass}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            src={lane.image}
          />
        )}
      </div>
      <div className="shop-lane-copy">
        <h3>{lane.title}</h3>
        <p>{lane.description}</p>
        <Link className="section-link" href={lane.cta.href}>
          {lane.cta.label}
        </Link>
      </div>
    </article>
  );
}
