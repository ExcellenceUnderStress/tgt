import Link from "next/link";
import type { ReactNode } from "react";

type SectionBarProps = {
  linkHref: string;
  linkLabel: string;
  children: ReactNode;
};

export function SectionBar({ linkHref, linkLabel, children }: SectionBarProps) {
  return (
    <div className="home-section-bar">
      {children}
      <Link className="section-link" href={linkHref}>
        {linkLabel}
      </Link>
    </div>
  );
}
