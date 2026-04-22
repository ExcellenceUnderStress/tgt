import Link from "next/link";

import type { NavItem } from "@/lib/site-content";

type CtaRowProps = {
  primary: NavItem;
  secondary?: NavItem;
};

export function CtaRow({ primary, secondary }: CtaRowProps) {
  return (
    <div className="cta-row">
      <Link className="button-primary" href={primary.href}>
        {primary.label}
      </Link>
      {secondary && (
        <Link className="button-secondary" href={secondary.href}>
          {secondary.label}
        </Link>
      )}
    </div>
  );
}
