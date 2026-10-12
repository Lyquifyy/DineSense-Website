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
    fontSize: "clamp(48px, 6.1vw, 84px)"
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: "-0.035em"
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
  source-crop: "10px"
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

The implemented world is warm, exact and unhurried: dark SwiftUI app screens sit inside a spacious editorial page, with cream Fraunces headlines, sage actions and restrained brass details. Real app evidence carries the story. The approved direction and product boundaries are summarized in [PRODUCT.md](PRODUCT.md).

This is a code-first implementation of the user-pinned cinematic app-preview direction. No image composition or random concept seed is its visual authority. The source of truth is [styles.css](styles.css), [index.html](index.html) and [script.js](script.js); this document records that implementation. [PRODUCT.md](PRODUCT.md) owns product boundaries. Support and Privacy share the visual system without changing the substance of privacy disclosures.

**Key Characteristics:**

- Warm black and cream, with sage for action and brass for identity.
- Actual dark app screenshots, readable captions and explicit demo disclosures.
- Large serif promises, compact sans-serif explanation, fine rules and generous space.
- Native scrolling, a progressively enhanced walkthrough and complete static scenes.

## Colors

The frontmatter records implemented color values; CSS remains the runtime authority.

- **Primary — sage:** filled pilot actions, link hover, focus outlines, current chapter and the order quotation. The hover shade lightens the filled action while its ink stays dark.
- **Secondary — brass:** the Fraunces wordmark. It is a restrained identifying detail.
- **Neutral — warm black, cream, muted and line:** page ground, primary text, supporting copy and thin separators. The nutrition section introduces a quiet green-tinted ground defined in CSS.
- Source labels and approximation marks remain legible in the original screenshots; color alone never carries the published-versus-estimated distinction.

## Typography

Self-hosted Fraunces regular and semibold pair with the system sans-serif stack. Fonts and their Open Font License stay in `assets/`; there is no external font request.

- **Display and headlines:** Fraunces regular, balanced wrapping and tight tracking. The hero is capped at 10ch on desktop; chapter headlines stay short enough to read alongside a phone.
- **Subheadings:** Fraunces regular at `clamp(30px, 3.2vw, 44px)`, with the same heading line height and tracking. Page-specific responsive overrides live in CSS.
- **Body:** the default role above; hero explanation uses 18px/1.7 and a 420px maximum width. Story paragraphs use a 440px maximum; general paragraphs are capped at 65ch.
- **Labels and captions:** system sans, generally 11–14px on desktop, with muted color and visible qualifying language. The example target uses tabular numerals. Section labels use names only.
- **Wordmark:** Fraunces semibold, 26px on desktop. Small screens reduce its size alongside the mark.

## Layout

The shared centered shell has a 1240px maximum and 56px side gutters. The desktop hero pairs its promise and actions with an eight-second screen-only loop of actual app captures. A wide, user-initiated 22-second product demo follows, with native controls, a transcript and a visible demo disclosure. A fine-rule introduction then leads into four chapters and eight stages:

| Chapter     | First stage                                      | Second stage                               |
| ----------- | ------------------------------------------------ | ------------------------------------------ |
| Your meal   | Meal styles: Lighter, Regular meal, More protein | Numeric target: 650 calories, 50 g protein |
| What fits   | Ranked dishes and suggested changes              | Nearby restaurants and map                 |
| Your order  | Supported ingredient changes                     | Exact edited order ticket                  |
| Ready to go | Pick, copy numbers and save                      | Actual iOS Lock Screen Live Activity       |

The nutrition provenance section follows the journey with paired published-source and estimated-parts crops, then practical FAQs, a repeated pilot action and the footer. Both meal-style and numeric-target audiences receive a full stage.

The authored walkthrough is complete static content. JavaScript enables the sticky chapter navigation and single preview column only at **at least 960px wide AND at least 740px tall**, with `IntersectionObserver` available and reduced motion off. Each enhanced stage occupies at least 82vh; the preview sits 115px below the top, and the chapter bar sits at the top. Native scrolling selects the stage nearest the viewport midpoint.

At smaller widths, short viewport heights, with reduced motion, or without JavaScript/observer support, each original screenshot stays beside its own copy in normal document flow. At 959px and below gutters become 32px; at 650px and below they become 20px, the hero and stages stack, the chapter links form two columns, and nutrition/FAQ/pilot content stacks. At 370px and below gutters are 16px and the phones and key headings shrink further. Mobile keeps every scene and the pilot action available.

Support and Privacy use the same header, footer, type, palette and focus treatment, with an 800px maximum reading column.

## Elevation & Depth

Thin rules and tonal ground changes define the editorial structure. Phone frames provide the principal raised element with `0 25px 55px #0006` shadows; they are evidence displays, not interactive app simulations. The hero layers a dimmed meal-target screen behind a sequence of meal style, results, edited-order and picked screens, rotated −7° and 4° respectively.

Hero screens crossfade in the rendered loop. It runs only while visible and the document is active, with a visible pause control. Reduced motion and data saver retain the poster until explicit playback. Manual pause survives scrolling. The full demo loads when played and pauses when the tab becomes hidden. Enhanced walkthrough previews use short 0.4s opacity crossfades and 0.55s, 12px/0.98-scale settling; outgoing visibility is delayed to let the fade finish. There is no scroll hijacking. Reduced motion removes transitions and smooth scrolling, retains the composed hero poster and restores the static walkthrough.

## Shapes

Buttons use modest corners; screenshots use rounded phone frames with 6px inset padding and a thin border. At mobile widths, frames use 36px corners, 30px screen corners and 5px padding. The brand mark has a small rounded-square silhouette. Source crops use a thin border, rounded corners and a fixed 1.7 aspect ratio. Editorial text sections use rules rather than a repeated card grid.

## Components

**Pilot action.** “Request pilot access” is the primary CTA in the header, hero and final section. Filled versions are sage with dark ink, a 55px minimum height and a decorative arrow. They open a prefilled email to `dinesense.feedback@gmail.com`; the closing block says it opens email and exposes the address. There is no submission form or simulated success state. The secondary hero link, “Explore the app,” is an understated underlined anchor.

**Navigation and focus.** Keep the skip link, semantic navigation landmarks, native anchors and visible 2px sage focus outlines with 6px offsets. Script-assisted anchors move focus to the destination heading without replacing native scrolling, then remove temporary tab stops on blur. The current enhanced chapter has sage text, an underline and `aria-current="step"`. Mobile hides duplicate header links while preserving the pilot action.

**App scenes.** Original figures carry meaningful descriptions of the actual screen state and a visible caption. In enhanced mode those originals are visually hidden, not removed from accessibility; the sticky copies sit in an `aria-hidden` container, have empty alt text and no copied controls or IDs. Preserve the screenshot descriptions when updating captures. The website never exposes fake meal-style, order-editor or tracker controls.

**Nutrition evidence.** Two cropped real screens show source arithmetic and approximate plate parts. Their current CSS offsets are −28% and −69%; those offsets are crop choices, not image retouching. Keep source links, “~” marks and component rows visible when refreshing. Published and estimated explanations retain separate headings and text.

**FAQ.** Native `details`/`summary` rows use fine dividers and a decorative plus/minus marker. They work without JavaScript and retain keyboard focus styling.

**Capture and refresh.** The current set was captured October 11, 2026 from app commit **`b783e95`**, in a local Debug build on iPhone 17 Pro Max / iOS 26.5 Simulator. Original captures are 1320 × 2868; the page uses direct 440px and 880px WebP derivatives with explicit dimensions and responsive sources. Screens use dark appearance; the real iOS Lock Screen retains its system wallpaper.

Follow [assets/SOURCES.md](assets/SOURCES.md) for the authoritative capture recipe, flags, scenario mapping, processing and refresh checks. Keep one consistent bowl through result, edit, ticket, pick and Live Activity. Record the new commit, capture date and simulator version there; check the full screens and website crops at readable size after replacement. Keep app text, totals, source URLs and approximation marks intact. Refresh guidance belongs in that source record so launch commands are not duplicated here.

All captures show **demo data**. They establish what the app UI looks like, not current restaurant nutrition, live local coverage, deployed-backend acceptance or real-device release evidence. Keep “Actual app screens · demo data” and the walkthrough's nutrition qualification visible. Retain provenance and font licenses with the assets.

## Do's and Don'ts

- **Do** preserve the dark cinematic app-preview world, the plate-and-spark identity and the equal depth given to meal styles and numeric targets.
- **Do** keep actual screen descriptions, captions, source labels, approximation marks and demo disclosures with their evidence.
- **Do** retain the complete static document and native email, anchor and disclosure behavior.
- **Do** keep availability explicit: a small invite-only TestFlight pilot for iPhone with iOS 26 or later; requirements and access details follow PRODUCT.md.
- **Don't** restore the retired restaurant-photo hero, paper preview construction, daily-budget narrative or Android availability claims.
- **Don't** retouch screenshots into marketing UI, invent app controls, hide estimation marks or present demo figures as current restaurant facts.
- **Don't** imply public download access, guaranteed invitations, automatic tracker logging, restaurant ordering/payment or universal menu coverage.
- **Don't** introduce scroll hijacking, motion-dependent information or new runtime services to this static site.
