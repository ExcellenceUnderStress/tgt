import { RouteIntro } from "@/components/route-intro";
import { routeHeroes } from "@/lib/site-content";

export default function HaltechPage() {
  return (
    <>
      <RouteIntro hero={routeHeroes.haltech} />
      <section className="page-placeholder">
        <p>Placeholder for curated Haltech collections, product cards, and inquiry guidance.</p>
      </section>
    </>
  );
}
