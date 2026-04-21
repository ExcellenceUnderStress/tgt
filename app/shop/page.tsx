import { RouteIntro } from "@/components/route-intro";
import { routeHeroes } from "@/lib/site-content";

export default function ShopPage() {
  return (
    <>
      <RouteIntro hero={routeHeroes.shop} />
      <section className="page-placeholder">
        <p>
          Placeholder for the curated shop landing split between merch and Haltech with restrained
          product density.
        </p>
      </section>
    </>
  );
}
