# TurboGixxer V2 Booking Flow

## Booking Goal

The booking system should qualify people before the schedule is committed. The business is not a generic appointment business, so intake quality matters more than raw calendar access.

## Recommended Model

Use a qualification-first flow.

Visitors choose one of three paths:

- Dyno
- Remote
- Project Review

## High-Level Flow

1. User enters booking page.
2. User selects service path.
3. User completes structured intake.
4. User submits request.
5. Schedule or submit path-specific next action after qualification.

## Path Logic

### Dyno

Best for:
- local customers
- vehicles that appear ready for a dyno session

Flow:
1. Select Dyno
2. Fill intake
3. Choose preferred timeframe or request calendar availability
4. Submit booking request

Possible next actions:
- manual confirmation
- approval before actual calendar booking
- direct calendar access later if business wants it

### Remote

Best for:
- out-of-area customers
- supported platforms
- revision-based work

Flow:
1. Select Remote
2. Fill intake
3. Submit for review

Possible next actions:
- manual response
- follow-up for compatibility
- quote or process confirmation

### Project Review

Best for:
- unclear path
- unusual builds
- customers needing guidance first

Flow:
1. Select Project Review
2. Fill intake
3. Submit inquiry

Possible next actions:
- customer receives contact follow-up
- then routed into dyno or remote later

## Required Intake Fields

- Name
- Email
- Phone
- Vehicle year
- Vehicle make
- Vehicle model
- ECU or platform
- Full modification summary
- Fuel type
- Primary goal
- Service path

## Recommended Additional Fields

- Current issues or concerns
- Turbo or supercharger details
- Injector and fuel system details
- Preferred timeframe
- Preferred contact method
- Current location

## Service-Specific Conditional Fields

### Dyno

- local or traveling
- preferred booking window
- mechanical readiness confirmation

### Remote

- logging capability
- tuning software/platform
- can send datalogs
- current calibration status

### Project Review

- biggest question or uncertainty

## Form UX Rules

- Keep the first step simple.
- Reveal deeper fields after service selection.
- Use section grouping so the form does not feel chaotic.
- Prioritize clarity over flashy motion in the form itself.

## Scheduling Strategy

Recommended V2:

- intake form first
- no fully open self-serve calendar for all users

Reason:
- some jobs are not ready
- some jobs are wrong-fit
- the shop needs enough context before committing schedule time

## Future Scheduling Options

### Option A: Manual Review Only

Pros:
- safest
- easiest to launch

Cons:
- more admin work

### Option B: Hybrid Review + Calendar

Pros:
- best long-term fit
- qualified users can move faster

Cons:
- more implementation effort

### Option C: Open Self-Serve Calendar

Pros:
- lowest friction for users

Cons:
- highest chance of bad-fit bookings

Recommended option:

`Option B`, but launch with `Option A` if needed.

## Confirmation States

Each path should have a custom success state.

### Dyno Success

Message:
Request received. The shop will review your build details and follow up about availability and next steps.

### Remote Success

Message:
Remote intake received. The shop will review the setup and respond on fit, process, and next steps.

### Project Review Success

Message:
Project review request received. The shop will follow up and point you toward the correct path.

## Data Handling Recommendation

At minimum, store:

- service path
- contact details
- vehicle details
- build details
- preferred timing
- notes

Any future content system should hold booking page content and settings, not actual appointment logic.

## Booking Page Section Outline

1. Intro
2. Service path selector
3. Intake form
4. SCHEDULE OR SUBMIT
5. Expectations / notes
6. Success state

## Non-Goals For V2

- full calendar backend
- payment during booking
- overly complex multi-step wizard
- excessive motion inside form fields
