import Link from "next/link";

import { primaryNavigation } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-mark" href="/">
        <span className="brand-kicker">TurboGixxer</span>
        <span className="brand-wordmark">Tuning</span>
      </Link>

      <nav aria-label="Primary" className="site-nav">
        {primaryNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
