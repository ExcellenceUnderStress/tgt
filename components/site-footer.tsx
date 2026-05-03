import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/builds", label: "Builds" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-label">TurboGixxer Tuning</p>
        <p className="footer-copy">EFI calibration for street, strip, and circuit. Auburn, WA.</p>
      </div>

      <nav aria-label="Footer" className="footer-nav">
        {footerLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}

