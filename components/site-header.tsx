import Image from "next/image";
import Link from "next/link";

import { primaryNavigation } from "@/lib/site-content";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-mark" href="/">
        <span className="brand-logo brand-logo-desktop" aria-hidden="true">
          <Image
            src="/images/logo/1x/desktop-logo-color.png"
            alt=""
            width={351}
            height={76}
            priority
          />
        </span>
        <span className="brand-logo brand-logo-compact" aria-hidden="true">
          <Image
            src="/images/logo/1x/mobile-mark-color.png"
            alt=""
            width={162}
            height={160}
            priority
          />
        </span>
      </Link>

      <div className="site-header-controls">
        <nav aria-label="Primary" className="site-nav">
          {primaryNavigation.map((item) => (
            <Link key={item.href} className="site-nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
