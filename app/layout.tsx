import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "@/styles/generated/tokens.css";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TurboGixxer Tuning",
  description:
    "Technical, proven, disciplined EFI calibration for dyno tuning, remote tuning, and project review.",
  icons: {
    icon: [
      { url: "/images/logo/favicon_io/favicon.ico" },
      {
        url: "/images/logo/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/logo/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/images/logo/favicon_io/apple-touch-icon.png",
    shortcut: "/images/logo/favicon_io/favicon.ico",
  },
  manifest: "/images/logo/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-color-mode="dark" data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                var applyMode = function(event) {
                  document.documentElement.dataset.colorMode = event.matches ? "dark" : "light";
                };
                applyMode(mediaQuery);
                if (typeof mediaQuery.addEventListener === "function") {
                  mediaQuery.addEventListener("change", applyMode);
                } else if (typeof mediaQuery.addListener === "function") {
                  mediaQuery.addListener(applyMode);
                }
              } catch (error) {}
            `,
          }}
        />
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
