import { RouteIntro } from "@/components/route-intro";
import { routeHeroes } from "@/lib/site-content";

export default function BuildsPage() {
  return (
    <>
      <RouteIntro hero={routeHeroes.builds} />
      <section className="page-placeholder">
        <p>
          Placeholder for the curated build gallery and featured project treatment outlined in the
          docs.
        </p>
      </section>
    </>
  );
}
