import { BookingFormShell } from "@/components/booking-form-shell";
import { RouteIntro } from "@/components/route-intro";
import { routeHeroes } from "@/lib/site-content";

export default function BookPage() {
  return (
    <>
      <RouteIntro hero={routeHeroes.booking} />
      <BookingFormShell />
    </>
  );
}
