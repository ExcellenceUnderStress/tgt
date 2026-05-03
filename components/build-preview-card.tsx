import Image from "next/image";

import type { HomepageBuild } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";

const OVERLAY_STATS: Array<{
  key: keyof HomepageBuild["tuningStats"];
  label: string;
}> = [
  { key: "platform", label: "Platform" },
  { key: "fuelType", label: "Fuel" },
  { key: "powerOutput", label: "Power" },
];

type BuildPreviewCardProps = {
  build: HomepageBuild;
  index: number;
  /** Enable GSAP motion attributes (parallax + reveal). */
  animated?: boolean;
};

export function BuildPreviewCard({ build, index, animated }: BuildPreviewCardProps) {
  return (
    <article
      className={`build-preview ${cardStyles.premiumCard}`}
      {...(animated ? { "data-parallax-card": true, "data-reveal": "slide-up" } : {})}
    >
      <div className="build-preview-media">
        <Image
          alt={build.title}
          className="build-preview-image"
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          src={build.image}
        />
        <span>Build {String(index + 1).padStart(2, "0")}</span>
        <dl className="build-preview-stats-overlay" aria-label="Tuning Stats">
          {OVERLAY_STATS.map(({ key, label }) => (
            <div className="build-preview-stat" key={key}>
              <dt>{label}</dt>
              <dd>{build.tuningStats[key]}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="build-preview-copy">
        <h3>{build.title}</h3>
      </div>
    </article>
  );
}
