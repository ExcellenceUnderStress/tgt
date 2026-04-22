import Image from "next/image";
import Link from "next/link";

import { primaryNavigation } from "@/lib/site-content";
import { ThemedImage } from "@/components/themed-image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-mark" href="/">
        <span className="brand-logo brand-logo-desktop" aria-hidden="true">
          <ThemedImage
            alt=""
            darkSrc="/images/logo/1x/desktop-logo-white.png"
            height={76}
            lightSrc="/images/logo/1x/desktop-logo-color.png"
            priority
            width={351}
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

      <nav aria-label="Primary" className="site-nav">
        {primaryNavigation.map((item) => (
          <Link key={item.href} className="site-nav-link" href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
