import Link from "next/link";

import { CartTrigger } from "@/components/cart-trigger";
import { ThemedImage } from "@/components/themed-image";
import { primaryNavigation } from "@/lib/site-content";

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
          <ThemedImage
            alt=""
            darkSrc="/images/logo/1x/mobile-mark-color.png"
            height={160}
            lightSrc="/images/logo/1x/mobile-mark-color.png"
            priority
            width={162}
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

      <CartTrigger />
    </header>
  );
}
