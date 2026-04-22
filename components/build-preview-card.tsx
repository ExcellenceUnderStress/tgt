import Image from "next/image";

import type { HomepageBuild } from "@/lib/site-content";

type BuildPreviewCardProps = {
  build: HomepageBuild;
  index: number;
  /** Enable GSAP motion attributes (parallax + reveal). */
  animated?: boolean;
};

export function BuildPreviewCard({ build, index, animated }: BuildPreviewCardProps) {
  return (
    <article
      className="build-preview"
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
      </div>
      <div className="build-preview-copy">
        <h3>{build.title}</h3>
        <p>{build.meta}</p>
      </div>
    </article>
  );
}
