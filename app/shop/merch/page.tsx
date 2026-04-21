import { RouteIntro } from "@/components/route-intro";
import { routeHeroes } from "@/lib/site-content";

export default function MerchPage() {
  return (
    <>
      <RouteIntro hero={routeHeroes.merch} />
      <section className="page-placeholder">
        <p>Placeholder for curated merch items and their external purchase links.</p>
      </section>
    </>
  );
}
