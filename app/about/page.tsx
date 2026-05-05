import Link from "next/link";

import { MediaSlot } from "@/components/media-slot";

import styles from "./about-page.module.css";

const approachItems = [
  "Reliable power over peak numbers.",
  "Throttle response and drivability are part of the tune, not extras.",
  "Tunes start conservative and refine through datalogs.",
  "You'll know what's in your tune and why.",
];

const steps = [
  {
    number: "01",
    title: "Start with a conversation",
    body: "Tell us what you're running, what fuel you're on, and how you actually use the car. Some setups are ready to tune. Some need a few things sorted out first.",
  },
  {
    number: "02",
    title: "In person or remote",
    body: "On the dyno in Auburn, you're welcome to stay during the session. Most customers do. The same approach happens by email — conservative base map first, then revisions built off your logs until the tune is where it should be.",
  },
  {
    number: "03",
    title: "Tuned to what you want",
    body: "Launch control, boost by gear, anti-lag, rev limits, throttle response — set to match how the car gets used. Street, strip, or circuit, the tune fits the job.",
  },
];

const testimonials = [
  {
    body: "He knows what he's doing. Best there is.",
    author: "Steven Nelson",
  },
  {
    body: "One of the greats. Tunes are always on point, strong and safe. Kenny is open to many tuning platforms, not just great in one tuning software — well educated in many.",
    author: "Jason Vasque",
  },
  {
    body: "Amazing customer service, very chill and easy to talk to. Helps you understand what's going on, and best tuner around.",
    author: "Chris Piper",
  },
  {
    body: "Kenny and Tommy are hands down the nicest, most honest, easy people to work with. Years of knowledge and so much experience. I'll never take my cars anywhere else — anything from an STI-swapped buggy to a Honda Civic to vintage BMWs. What they can do is endless.",
    author: "Johnathan Allan",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.section} aria-labelledby="about-hero">
        <div className={styles.heroBlock}>
          <p className={styles.eyebrow}>About</p>
          <h1 id="about-hero" className={styles.headlineLarge}>
            Seventeen years behind the laptop.
          </h1>
          <p className={styles.body}>
            Kenny Sampson has been calibrating EFI systems for seventeen
            years — early years in Florida, four years as primary tuner at
            Speed Factory Racing, and now independently out of Auburn, WA.
          </p>
          <div className={styles.heroCta}>
            <Link className="button-primary" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <MediaSlot
            aspectRatio="21:9"
            type="image"
            label="Shop / dyno hero"
          />
        </div>
      </section>

      <section className={styles.sectionWide} aria-labelledby="about-what">
        <div className={styles.split}>
          <div className={styles.splitText}>
            <h2 id="about-what" className={styles.headline}>
              What TurboGixxer is
            </h2>
            <p className={styles.body}>
              TurboGixxer Tuning is Kenny Sampson's EFI calibration practice —
              built on clean data, disciplined decisions, and finished
              drivability. Years across Honda, domestic, and standalone ECU
              platforms. The goal isn't a hero pull. It's a car that behaves
              properly everywhere you drive it.
            </p>
          </div>
          <MediaSlot
            aspectRatio="4:3"
            type="image"
            label="Kenny tuning"
          />
        </div>
      </section>

      <section className={styles.sectionWide} aria-labelledby="about-approach">
        <p className={styles.eyebrow}>Approach</p>
        <h2 id="about-approach" className={styles.headline}>
          Conservative timing. Drivability first.
        </h2>
        <ul className={styles.bullets}>
          {approachItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.sectionWide} aria-labelledby="about-how">
        <p className={styles.eyebrow} id="about-how">
          How it works
        </p>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li className={styles.step} key={step.number}>
              <p className={styles.stepNumber}>{step.number}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className={styles.howItWorksMedia}>
          <MediaSlot
            aspectRatio="16:9"
            type="video"
            label="Shop / dyno session"
          />
        </div>
      </section>

      <section className={styles.sectionWide} aria-labelledby="about-customers">
        <p className={styles.eyebrow} id="about-customers">
          What customers say
        </p>

        <div className={styles.quotes}>
          {testimonials.map((quote) => (
            <figure className={styles.quote} key={quote.author}>
              <blockquote className={styles.quoteBody}>
                {`"${quote.body}"`}
              </blockquote>
              <figcaption className={styles.quoteAttribution}>
                — {quote.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="about-closing">
        <div className={styles.closingBlock}>
          <h2 id="about-closing" className={styles.headline}>
            Have a build to talk about?
          </h2>
          <p className={styles.body}>
            Tell us what you're running. We'll tell you where to start.
          </p>
          <div className={styles.closingCta}>
            <Link className="button-primary" href="/contact">
              Contact TurboGixxer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
