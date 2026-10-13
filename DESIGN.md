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
  forest: "#203d2c"
  forest-edge: "#49684f"
  on-forest: "#c6d4c6"
  olive: "#343b25"
  olive-edge: "#797a4c"
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

The implemented world is warm and cinematic: dark SwiftUI app screens sit inside a spacious editorial page, with cream Fraunces headlines, sage actions and brass details. Real app evidence carries the story. The opening fans three phones over a forest-green place setting; the walkthrough turns the same plate motif as the order takes shape. A cream-to-sage sweep gives the pilot invitation its closing moment. The approved direction and product boundaries are summarized in [PRODUCT.md](PRODUCT.md).

This is a code-first implementation of the user-pinned cinematic app-preview direction. No image composition or random concept seed is its visual authority. The source of truth is [styles.css](styles.css), [index.html](index.html) and [script.js](script.js); this document records that implementation. [PRODUCT.md](PRODUCT.md) owns product boundaries. Support and Privacy share the visual system without changing the substance of privacy disclosures.

**Key Characteristics:**

- Warm black and cream, with sage for action and brass for identity.
- Actual dark app screenshots with meaningful alternative text and minimal surrounding copy.
- Large serif promises, compact sans-serif explanation, fine rules and generous space.
- Native scrolling, a progressively enhanced walkthrough and complete static scenes.

## Colors

The frontmatter records implemented color values; CSS remains the runtime authority.

- **Primary — sage:** hero action, link hover, focus outlines, meal/order emphasis and the closing invitation field. The hover shade lightens the filled action while its ink stays dark.
- **Secondary — brass:** the wordmark, the plate-and-spark drawings, and the nearby-results chapter. Its olive plate marks the discovery part of the journey; it is not a nutrition status code.
- **Atmosphere — forest and olive:** solid, deep plate fields place the real screens in the brand's dining world. Edge tokens draw their rims. Forest also owns the nutrition band, with cream headings and a pale green `on-forest` body color.
- **Neutral — warm black, cream, muted and line:** page ground, primary text, supporting copy and separators. The closing invitation uses dark text, a dark action with cream text, and a dark focus outline on sage. Its brief cream sweep has equally readable dark text throughout.
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

The final pilot invitation is a rectangular sage field inside the shell. Its headline sits opposite one email action. At 650px and below it becomes a single column. There is no repeated email address, helper sentence or decorative closing mark. The shared footer and walkthrough remain on warm black.

The authored walkthrough is complete static content. JavaScript enables the sticky chapter navigation and single preview column only at **at least 960px wide AND at least 740px tall**, with `IntersectionObserver` available, reduced motion off and data saver off. Each enhanced stage occupies at least 82vh; the preview sits 115px below the top, and the chapter bar sits at the top. Native scrolling selects the stage nearest the viewport midpoint. The preview column clips decorative rotation with a 32px paint allowance, preventing horizontal page overflow.

At smaller widths, short viewport heights, with reduced motion or data saver, or without JavaScript/observer support, each original screenshot stays beside its own copy in normal document flow, over a static colored plate. At 959px and below gutters become 32px; at 650px and below they become 20px, the hero and stages stack, the chapter links form two columns, and nutrition/FAQ/pilot content stacks. At 370px and below gutters are 16px and the phones and key headings shrink further. Mobile keeps every scene and the pilot action available.

Support and Privacy use the same header, footer, type, palette and focus treatment, with an 800px maximum reading column.

## Elevation & Depth

**Motion thesis — set the table, then take your order.** Real screens fan from a compact stack onto a forest-green plate. The meal-target and meal-style paths remain behind the finished ticket at −14°, 12° and 5°. The foreground briefly shows results before resolving to the edited order. A brass rim traces the composition and ends at the brand spark. All content has an already-visible, fully composed default.

**Focal budget.** The arrival finishes within 1.8 seconds, once per page load. Phones use transforms, the screen change uses opacity, and one SVG path draws its stroke. The plate uses a solid fill and offset shadow, with no blur filter, shader, canvas or dependency. The hero now uses existing WebP captures directly, replacing the MP4 download. Four 440px derivatives total about 130 KB; high-density screens may select the 880px foreground image. Marketing MP4 exports remain available for other uses.

**Continuity.** Desktop walkthrough scenes pass left and right through a short 0.4s opacity / 0.7s perspective transition. The plate turns 62° with each scene, keeping the sequence spatially connected; the chapter color changes with the labeled chapter. A thin line beneath navigation follows scroll progress without a counter or extra label. Animation frames are requested only after scroll/resize/navigation events, and geometry work stops outside the walkthrough. Scrolling remains native.

**Feedback and conclusion.** Fine-pointer movement tilts the hero within ±5° vertically and ±6° horizontally, returning to rest on exit. There is no idle movement. CTA arrows retain their brief directional hover/focus response. The closing invitation performs one 1.1s cream-to-sage clip sweep, with its text and email action visible throughout.

**Fallbacks and interruptions.** Entrance animations pause offscreen or when the document is hidden. Returning resumes an unfinished entrance without replaying a completed one. Reduced motion and data saver keep a composed hero and static walkthrough; changing either setting cancels the decorative entrance. Reduced motion also removes transitions, pointer depth and smooth scrolling. Without JavaScript or observer support, complete static scenes and native links remain available. There is no video element, play/pause UI or repeating animation.

## Shapes

Buttons use modest corners; screenshots use rounded phone frames with 6px inset padding and a thin border. At mobile widths, frames use 36px corners, 30px screen corners and 5px padding. The brand mark has a small rounded-square silhouette. Editorial text sections use rules rather than a repeated card grid.

## Components

**Pilot action.** “Request pilot access” is the primary CTA in the header, hero and final section. The hero uses sage with dark ink; the closing invitation uses warm black with cream text. Both have a 55px minimum height and a decorative arrow. They open a prefilled email to `dinesense.feedback@gmail.com`; Contact remains available in the footer. There is no submission form or simulated success state. The secondary hero link, “Explore the app,” is an understated underlined anchor with an authored SVG direction arrow.

**Brand flourish.** The inline plate-and-spark drawing is authored for the website from its existing identity. It is a decorative SVG with a rounded, nonscaling 1.5px stroke and `aria-hidden`, separate from the actual app captures. No screenshot content is retouched.

**Navigation and focus.** Keep the skip link, semantic navigation landmarks, native anchors and visible 2px sage focus outlines with 6px offsets. Script-assisted anchors move focus to the destination heading without replacing native scrolling, then remove temporary tab stops on blur. The current enhanced chapter has accented text, an underline and `aria-current="step"`; labels and position retain meaning independently of color. Mobile hides duplicate header links while preserving the pilot action.

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
