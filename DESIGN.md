---
name: DineSense website
description: A dark cinematic introduction to the current iPhone app.
colors:
  bg: "#0f0e0c"
  text: "#f2ede3"
  muted: "#b3ada1"
  line: "#39372f"
  sage: "#9ccfae"
  brass: "#c9a45c"
  button-ink: "#0c1a12"
  sage-hover: "#bae0c7"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(64px, 7.1vw, 96px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(38px, 4.2vw, 58px)"
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: "-0.035em"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "17px"
    lineHeight: 1.65
rounded:
  button: "5px"
  phone: "38px"
  screen: "32px"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.button-ink}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.sage-hover}"
    textColor: "{colors.button-ink}"
---

# Design System: DineSense website

## Overview

**Creative North Star: "The app, after dark."**

The implemented world is warm, exact and unhurried: dark SwiftUI app screens sit inside a spacious editorial page, with cream Fraunces headlines, sage actions and restrained brass details. Real app evidence carries the story. The opening puts “Know what to order” at full strength; a cream invitation gives the pilot action a distinct closing moment. The approved direction and product boundaries are summarized in [PRODUCT.md](PRODUCT.md).

This is a code-first implementation of the user-pinned cinematic app-preview direction. No image composition or random concept seed is its visual authority. The source of truth is [styles.css](styles.css), [index.html](index.html) and [script.js](script.js); this document records that implementation. [PRODUCT.md](PRODUCT.md) owns product boundaries. Support and Privacy share the visual system without changing the substance of privacy disclosures.

**Key Characteristics:**

- Warm black and cream, with sage for action and brass for identity.
- Actual dark app screenshots with meaningful alternative text and minimal surrounding copy.
- Large serif promises, compact sans-serif explanation, fine rules and generous space.
- Native scrolling, a progressively enhanced walkthrough and complete static scenes.

## Colors

The frontmatter records implemented color values; CSS remains the runtime authority.

- **Primary — sage:** filled pilot actions, link hover, focus outlines and current chapter. The hover shade lightens the filled action while its ink stays dark.
- **Secondary — brass:** the Fraunces wordmark and the plate-and-spark flourish beneath “to order.” Both are identifying details.
- **Neutral — warm black, cream, muted and line:** page ground, primary text, supporting copy and thin separators. The nutrition section introduces a quiet green-tinted ground defined in CSS. The closing invitation reverses the same warm black and cream, with dark supporting text, a dark action and a matching dark focus outline.
- Source labels and approximation marks remain legible in the original screenshots; color alone never carries the published-versus-estimated distinction.

## Typography

Self-hosted Fraunces regular and semibold pair with the system sans-serif stack. Fonts and their Open Font License stay in `assets/`; there is no external font request.

- **Display and headlines:** Fraunces regular and tight tracking. The hero's main phrase has a deliberate two-line composition, capped at 96px, with “to order” in sage. Its coda, “before you get in line,” is 28–40px with balanced wrapping. The mobile main phrase scales from 56px at the narrowest breakpoint to 88px. Chapter headlines stay short enough to read alongside a phone. The closing invitation uses 44–76px type on desktop and 40–58px on phones.
- **Subheadings:** Fraunces regular at `clamp(30px, 3.2vw, 44px)`, with the same heading line height and tracking. Page-specific responsive overrides live in CSS.
- **Body:** the default role above; hero explanation uses 18px/1.7 and a 420px maximum width. Story paragraphs use a 440px maximum; general paragraphs are capped at 65ch.
- **Navigation and availability:** compact system sans labels, generally 11–14px on desktop. Section labels use names only. Screenshot captions, duplicate examples and demo descriptors are omitted.
- **Wordmark:** Fraunces semibold, 26px on desktop. Small screens reduce its size alongside the mark.

## Layout

The shared centered shell has a 1240px maximum and 56px side gutters. The desktop hero pairs its promise and actions with a brief reveal of actual app captures. “Explore the app” leads straight into four chapters and six stages, each with one short paragraph:

| Chapter     | First stage                                      | Second stage                               |
| ----------- | ------------------------------------------------ | ------------------------------------------ |
| Your meal   | Meal styles: Lighter, Regular meal, More protein | Numeric target: 650 calories, 50 g protein |
| What fits   | Ranked dishes and suggested changes              |                                            |
| Your order  | Supported ingredient changes                     | Exact edited order ticket                  |
| Ready to go | Lock Screen order and manual tracker copying     |                                            |

One compact nutrition-source band follows the journey, then three practical FAQ answers, the pilot action and footer. Both meal-style and numeric-target audiences retain a full stage. Removed the redundant introduction, map and picked-order stages, screenshot captions, side notes, example numbers and repeated order quotation.

The final pilot invitation is a rectangular cream field inside the shell. Its headline sits opposite one email action. At 650px and below it becomes a single column. There is no repeated email address, helper sentence or decorative closing mark. The shared footer and walkthrough remain on warm black.

The authored walkthrough is complete static content. JavaScript enables the sticky chapter navigation and single preview column only at **at least 960px wide AND at least 740px tall**, with `IntersectionObserver` available and reduced motion off. Each enhanced stage occupies at least 82vh; the preview sits 115px below the top, and the chapter bar sits at the top. Native scrolling selects the stage nearest the viewport midpoint.

At smaller widths, short viewport heights, with reduced motion, or without JavaScript/observer support, each original screenshot stays beside its own copy in normal document flow. At 959px and below gutters become 32px; at 650px and below they become 20px, the hero and stages stack, the chapter links form two columns, and nutrition/FAQ/pilot content stacks. At 370px and below gutters are 16px and the phones and key headings shrink further. Mobile keeps every scene and the pilot action available.

Support and Privacy use the same header, footer, type, palette and focus treatment, with an 800px maximum reading column.

## Elevation & Depth

Thin rules and tonal ground changes define the editorial structure. Phone frames provide the principal raised element with `0 25px 55px #0006` shadows; they are evidence displays, not interactive app simulations. The hero layers a dimmed meal-target screen behind meal style, results and edited-order screens, rotated −7° and 4° respectively.

Hero screens crossfade for up to 4.5 seconds of playback, then settle on the complete edited-order screen. The reveal runs once per page load, only while visible and the document is active; scrolling away pauses it and returning resumes only its remaining time. It never loops or exposes play/pause controls. Reduced motion, data saver, unavailable autoplay and no JavaScript keep the poster. Switching reduced motion or data saver on during playback also restores the poster. Enhanced walkthrough previews use short 0.4s opacity crossfades and 0.55s, 12px/0.98-scale settling; outgoing visibility is delayed to let the fade finish. There is no scroll hijacking. Reduced motion removes transitions and smooth scrolling and restores the static walkthrough.

**Delight thesis:** choosing dinner should feel like arriving with your order already in mind. A small brass plate line completes beneath “to order,” ending in the brand's spark. This is a single 700ms authored entrance with a 500ms spark fade, using existing exponential easing and an already-visible default. It does not replay on scroll. Reduced motion shows the finished drawing immediately. Hero and closing action arrows move 4px toward their destination on hover or keyboard focus; the explore arrow moves 3px downward. These 180ms responses disappear with reduced motion. No new dependencies or media files are required.

## Shapes

Buttons use modest corners; screenshots use rounded phone frames with 6px inset padding and a thin border. At mobile widths, frames use 36px corners, 30px screen corners and 5px padding. The brand mark has a small rounded-square silhouette. Editorial text sections use rules rather than a repeated card grid.

## Components

**Pilot action.** “Request pilot access” is the primary CTA in the header, hero and final section. The hero uses sage with dark ink; the closing invitation uses warm black with cream text. Both have a 55px minimum height and a decorative arrow. They open a prefilled email to `dinesense.feedback@gmail.com`; Contact remains available in the footer. There is no submission form or simulated success state. The secondary hero link, “Explore the app,” is an understated underlined anchor with an authored SVG direction arrow.

**Brand flourish.** The inline plate-and-spark drawing is authored for the website from its existing identity. It is a decorative SVG with a rounded, nonscaling 1.5px stroke and `aria-hidden`, separate from the actual app captures. No screenshot content is retouched.

**Navigation and focus.** Keep the skip link, semantic navigation landmarks, native anchors and visible 2px sage focus outlines with 6px offsets. Script-assisted anchors move focus to the destination heading without replacing native scrolling, then remove temporary tab stops on blur. The current enhanced chapter has sage text, an underline and `aria-current="step"`. Mobile hides duplicate header links while preserving the pilot action.

**App scenes.** Original figures carry meaningful alternative descriptions of the actual screen state. There are no repeated visible captions or demo-data descriptors. In enhanced mode those originals are visually hidden, not removed from accessibility; the sticky copies sit in an `aria-hidden` container, have empty alt text and no copied controls or IDs. Preserve the screenshot descriptions when updating captures. The website never exposes fake meal-style, order-editor or tracker controls.

**Nutrition source.** A compact band explains that published nutrition links to its source and estimates remain marked. Approximation marks and source information within the original app screenshots stay intact. Detailed capture provenance remains in assets/SOURCES.md.

**FAQ.** Three native `details`/`summary` rows cover requirements, tracker copying and menu coverage. They work without JavaScript and retain keyboard focus styling. Support and Privacy remain linked for more detail.

**Capture and refresh.** The current set was captured October 11, 2026 from app commit **`b783e95`**, in a local Debug build on iPhone 17 Pro Max / iOS 26.5 Simulator. Original captures are 1320 × 2868; the page uses direct 440px and 880px WebP derivatives with explicit dimensions and responsive sources. Screens use dark appearance; the real iOS Lock Screen retains its system wallpaper.

Follow [assets/SOURCES.md](assets/SOURCES.md) for the authoritative capture recipe, flags, scenario mapping, processing and refresh checks. Keep one consistent bowl through result, edit, ticket, pick and Live Activity. Record the new commit, capture date and simulator version there; check the full screens and website crops at readable size after replacement. Keep app text, totals, source URLs and approximation marks intact. Refresh guidance belongs in that source record so launch commands are not duplicated here.

All captures show **demo data**. They establish what the app UI looks like, not current restaurant nutrition, live local coverage, deployed-backend acceptance or real-device release evidence. The user explicitly requested removal of visible demo descriptors; provenance remains in the repository. Retain the original screens, their approximation marks and font licenses with the assets.

## Do's and Don'ts

- **Do** preserve the dark cinematic app-preview world, the plate-and-spark identity and the equal depth given to meal styles and numeric targets.
- **Do** keep meaningful alternative screen descriptions, source information and approximation marks within the original captures, and provenance in the repository.
- **Do** retain the complete static document and native email, anchor and disclosure behavior.
- **Do** keep availability explicit: a small invite-only TestFlight pilot for iPhone with iOS 26 or later; requirements and access details follow PRODUCT.md.
- **Don't** restore the retired restaurant-photo hero, paper preview construction, daily-budget narrative or Android availability claims.
- **Don't** retouch screenshots into marketing UI, invent app controls, hide estimation marks or present demo figures as current restaurant facts.
- **Don't** imply public download access, guaranteed invitations, automatic tracker logging, restaurant ordering/payment or universal menu coverage.
- **Don't** introduce scroll hijacking, motion-dependent information or new runtime services to this static site.
