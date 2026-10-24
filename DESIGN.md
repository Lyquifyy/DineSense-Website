---
name: DineSense website
description: A light editorial introduction to DineSense and its upcoming whole-meal update.
colors:
  bg: "#f6f5f2"
  surface: "#ffffff"
  raised: "#e9efe7"
  text: "#18271e"
  muted: "#536154"
  line: "#d3d9cf"
  sage: "#216545"
  green: "#184d33"
  forest: "#e5eedd"
  forest-edge: "#aec5ac"
  on-forest: "#465a49"
  olive: "#f0edd8"
  olive-edge: "#d0c797"
  brass: "#8a6425"
  button-text: "#ffffff"
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
    textColor: "{colors.button-text}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.button-text}"
---

# Design System: DineSense website

## Overview

**Creative North Star: "Fresh Plate, on the web"**

The website pairs the app's light ivory and botanical green with editorial Fraunces headlines, warm ink and real app screens. The plate-and-spark mark, the connected scroll walkthrough and three distinct original food illustrations make the order feel welcoming. The screens carry the proof; the artwork is decorative and unbranded. Both meal styles and numeric targets retain full stages.

This records the user's final light-only direction of October 24, 2026 and supersedes the earlier dark cinematic presentation. Runtime authority is [styles.css](styles.css), [index.html](index.html), [script.js](script.js) and [guides/guides.css](guides/guides.css). Product and release boundaries live in [PRODUCT.md](PRODUCT.md); the surface brief is [.impeccable/review/BRIEF.md](.impeccable/review/BRIEF.md). Support, Privacy, shared orders and restaurant guides share this light palette. The native app uses system type; Fraunces remains the website's display face.

**Key Characteristics:**

- Light ivory and warm ink, with botanical green actions and pale green/olive plate fields.
- Six real light app scenes with meaningful alternative text and an explicit upcoming-update qualification.
- Three distinct food illustrations, used as decorative accents around the product evidence.
- Large serif promises, compact sans-serif explanation, fine rules and generous space.
- Native scrolling, a progressively enhanced walkthrough and complete static scenes.

## Colors

Frontmatter records the implemented CSS palette. `color-scheme: light` fixes the website's appearance; there is no dark alternative.

### Primary

Botanical green (`sage`, retained as the CSS token name) is the filled action, link hover, focus outline and meal/order emphasis. White text remains on filled actions; the deeper `green` shade supplies hover feedback. The closing action uses the same green-and-white pairing.

### Secondary

Muted brass identifies the wordmark, plate-and-spark details and the nearby-results chapter. Its pale olive plate is an editorial chapter cue, not a nutrition status code.

### Neutral

Ivory is the page ground, white the phone frame and surface, warm ink the text and a muted green-grey the supporting copy. Light rules separate sections. Pale forest and olive fields frame the screenshots; edge tokens draw their rims. The nutrition band and closing invitation use the pale forest field with dark text. The closing sweep briefly reveals a white surface.

**The Evidence Rule.** Preserve screenshot figures, source labels and approximation marks; color and artwork never supply a nutrition claim.

## Typography

Self-hosted Fraunces regular and semibold pair with the system sans-serif stack. Fonts and their Open Font License stay in `assets/`; there is no external font request.

- **Display and headlines:** Fraunces regular and tight tracking. The hero's main phrase has a deliberate two-line composition, capped at 96px, with “to order” in sage. Its coda, “before you get in line,” is 28–40px with balanced wrapping. The mobile main phrase scales from 56px at the narrowest breakpoint to 88px. Chapter headlines stay short enough to read alongside a phone. The closing invitation uses 44–76px type on desktop and 40–58px on phones.
- **Subheadings:** Fraunces regular at `clamp(30px, 3.2vw, 44px)`, with the same heading line height and tracking. Page-specific responsive overrides live in CSS.
- **Body:** the default role above; hero explanation uses 18px/1.7 and a 420px maximum width. Story paragraphs use a 440px maximum; general paragraphs are capped at 65ch.
- **Navigation and availability:** compact system sans labels, generally 11–14px on desktop. Section labels use names only. Repetitive screenshot captions and demo descriptors are omitted; the visible upcoming-update notice remains.
- **Wordmark:** Fraunces semibold, 26px on desktop. Small screens reduce its size alongside the mark.
- **Shared-order data:** the `/o/` order script uses the system monospace stack at 16px/1.8 to distinguish literal ordering lines. Nutrition tables and macro totals use tabular numerals. This is an existing data-reading role, not the general editorial typeface.

## Layout

The shared centered shell has a 1240px maximum and 56px side gutters. The desktop hero pairs its promise and actions with a brief reveal of actual app captures. “Explore the app” leads straight into four chapters and six stages, each with one short paragraph:

| Chapter     | First stage                                      | Second stage                               |
| ----------- | ------------------------------------------------ | ------------------------------------------ |
| Your meal   | Meal styles: Lighter, Regular meal, More protein | Numeric target entry |
| What fits   | Ranked dishes and suggested changes              |                                            |
| Your order  | Add menu extras and change servings               | Exact whole-meal order and combined total   |
| Ready to go | Saved whole-meal favorite                         |                                            |

One compact nutrition-source band follows the journey, then three practical FAQ answers, the App Store action and footer. Both meal-style and numeric-target audiences retain a full stage. The six active images are simple, target, results, adjust, edited-order and saved. The earlier map, picked, Lock Screen and nutrition-detail images are retained as unused history.

The final download invitation is a rectangular pale-green field inside the shell, with a distinct favorite-bowl illustration above its headline. Its headline sits opposite the free-first-search-and-order qualification and one App Store action. At 650px and below it becomes a single column. There is no repeated email address or decorative closing mark. The shared footer and walkthrough remain on ivory. The existing pilot-named CSS classes style this download section; they do not indicate pilot availability.

The authored walkthrough is complete static content. JavaScript enables the sticky chapter navigation and single preview column only at **at least 960px wide AND at least 740px tall**, with `IntersectionObserver` available, reduced motion off and data saver off. Each enhanced stage occupies at least 82vh; the preview sits 115px below the top, and the chapter bar sits at the top. Native scrolling selects the stage nearest the viewport midpoint. The preview column clips decorative rotation with a 32px paint allowance, preventing horizontal page overflow.

At smaller widths, short viewport heights, with reduced motion or data saver, or without JavaScript/observer support, each original screenshot stays beside its own copy in normal document flow, over a static colored plate. At 959px and below gutters become 32px; at 650px and below they become 20px, the hero and stages stack, the chapter links form two columns, and nutrition/FAQ/download content stacks. At 370px and below gutters are 16px and the phones and key headings shrink further. Mobile keeps every scene and the App Store action available. At 650px and below the hero artwork sits below the phone stage at `top: calc(100% + 12px)`; the stage reserves 110px of bottom margin so the food does not cover the order controls.

Support and Privacy use the same header, footer, type, palette and focus treatment, with an 800px maximum reading column. Guides inherit that reading page and widen its maximum to 900px. They retain the shared responsive gutters, with paragraphs capped at 68ch. Guide articles remain in normal document flow, with no walkthrough script or new motion. Section spacing is 3.5rem, reducing to 2.6rem at 650px and below.

## Elevation & Depth

**Motion thesis — set the table, then take your order.** Real screens fan from a compact stack onto a pale-green plate. The meal-target and meal-style paths remain behind the finished ticket at −14°, 12° and 5°. The foreground briefly shows results before resolving to the edited order. A brass rim traces the composition and ends at the brand spark. All content has an already-visible, fully composed default.

**Focal budget.** The arrival finishes within 1.8 seconds, once per page load. Phones use transforms, the screen change uses opacity, and one SVG path draws its stroke. The plate uses a solid fill and offset shadow, with no blur filter, shader, canvas or dependency. The hero now uses existing WebP captures directly, replacing the MP4 download. High-density screens may select the 880px foreground image. Historical dark marketing MP4 exports are not embedded by this page and must not be represented as the current light update.

**Continuity.** Desktop walkthrough scenes pass left and right through a short 0.4s opacity / 0.7s perspective transition. The plate turns 62° with each scene, keeping the sequence spatially connected; the chapter color changes with the labeled chapter. A thin line beneath navigation follows scroll progress without a counter or extra label. Animation frames are requested only after scroll/resize/navigation events, and geometry work stops outside the walkthrough. Scrolling remains native.

**Feedback and conclusion.** Fine-pointer movement tilts the hero within ±5° vertically and ±6° horizontally, returning to rest on exit. There is no idle movement. CTA arrows retain their brief directional hover/focus response. The closing invitation performs one 1.1s white-to-pale-green clip sweep, with its text and App Store action visible throughout.

**Fallbacks and interruptions.** Entrance animations pause offscreen or when the document is hidden. Returning resumes an unfinished entrance without replaying a completed one. Reduced motion and data saver keep a composed hero and static walkthrough; changing either setting cancels the decorative entrance. Reduced motion also removes transitions, pointer depth and smooth scrolling. Without JavaScript or observer support, complete static scenes and native links remain available. There is no video element, play/pause UI or repeating animation.

## Shapes

Buttons use modest corners; screenshots use rounded phone frames with 6px inset padding and a thin border. At mobile widths, frames use 36px corners, 30px screen corners and 5px padding. The brand mark has a small rounded-square silhouette. Editorial text sections use rules rather than a repeated card grid.

## Components

**App Store action.** “Get DineSense” is the primary CTA in the header, hero and final section. The hero and closing invitation use botanical green with white text. Both have a 55px minimum height and a decorative arrow. They open `https://apps.apple.com/us/app/dinesense/id6816440061`. Guide articles use “Get DineSense for iPhone” below the calculation and qualifications. Support and Contact remain email links. There is no submission form or simulated success state. The secondary hero link, “Explore the app,” is an understated underlined anchor with an authored SVG direction arrow.

**Brand artwork.** The plate-and-spark drawings frame the app screens in the hero and walkthrough. Three original alpha-transparent illustrations are placed separately: pasta, breadsticks and a drink in the hero (`meal-illustration.webp`); sides and lemonade below customization copy (`sides-illustration.webp`); and a colorful favorite bowl in the final invitation (`favorite-illustration.webp`). They are conceptual food art, not photographs or promises of menu coverage. They are decorative and hidden from accessibility, separate from the actual app captures. The main headline has no circle, star or underline ornament. No screenshot content is retouched.

**Navigation and focus.** Keep the skip link, semantic navigation landmarks, native anchors and visible 2px sage focus outlines with 6px offsets. Script-assisted anchors move focus to the destination heading without replacing native scrolling, then remove temporary tab stops on blur. The current enhanced chapter has accented text, an underline and `aria-current="step"`; labels and position retain meaning independently of color. Mobile hides duplicate header links while preserving the App Store action.

**App scenes.** Original figures carry meaningful alternative descriptions of the actual screen state. There are no repeated visible captions or demo-data descriptors. In enhanced mode those originals are visually hidden, not removed from accessibility; the sticky copies sit in an `aria-hidden` container, have empty alt text and no copied controls or IDs. Preserve the screenshot descriptions when updating captures. The website never exposes fake meal-style, order-editor or tracker controls.

**Nutrition source.** A compact band explains that published nutrition links to its source and estimates remain marked. Approximation marks and source information within the original app screenshots stay intact. Detailed capture provenance remains in assets/SOURCES.md.

**FAQ.** Three native `details`/`summary` rows cover requirements, tracker copying and menu coverage. The requirements answer states that an account is required, the first search and order are free, and continued use requires Pro. They work without JavaScript and retain keyboard focus styling. Support and Privacy remain linked for more detail.

**Guide articles and index.** The index uses three text-led article links separated by fine rules. Articles begin with a back link, a Fraunces title at `clamp(2.6rem, 6vw, 4.5rem)` / 1.08, and an introductory paragraph at 1.15rem. Section headings use `clamp(1.7rem, 4vw, 2.4rem)` / 1.2. The complete order uses 1.2rem warm-ink body text, followed by semibold tabular figures and a native “Open this order” link to the shared-order route. The final download section has a top rule and 2rem top padding. Reuse the current brand mark and local fonts; guides introduce no new raster imagery.

**Guide nutrition table.** A semantic table shows ingredient and serving, calories, protein, carbs and fat, followed by a total row. Ingredient labels align left, figures right, and all numbers use tabular forms. Serving sizes sit beneath ingredients in muted text. Fine rules separate rows; there are no colored nutrition badges. A 580px minimum table width sits in a native horizontal scroll region with an accessible name and keyboard tab stop. At 650px and below, the visible instruction “Scroll the table to see all nutrition columns.” appears above it. Guide focus outlines remain sage, 2px wide with a 5px offset. Keep the caption, row/column headers, source links, checked date and serving qualifications as visible text.

**Capture and refresh.** The six active previews are direct 440px and 880px WebP derivatives of the merged compact Find/whole-meal app at `5c8fe8c` (PR #90), captured October 24 on iPhone 17 / iOS 26.5 in the release-gate UI tests. My numbers, Meal style and results reflect the compact Find layout; the remaining frames preserve the exact Olive Garden whole-meal sequence.

[assets/SOURCES.md](assets/SOURCES.md), each image's JSON sidecar and the app's `source/captures.json` record the original screenshot, timestamp, test, commit and hash. App text, totals, source labels and approximation marks are unretouched. These demo screens preview 1.2.0, not the public 1.1.0 release or real-device/StoreKit acceptance. Keep the visible upcoming-update qualification until the matching public app ships.

The social image is a genuine 1200 × 630 PNG, rendered from [marketing/light-share.html](marketing/light-share.html), using the light icon and original hero food artwork. Historical dark previews, films and posters are retained but unused by the current homepage. Font licenses and image-generation prompts remain with the assets.

## Do's and Don'ts

- **Do** preserve the light ivory and botanical green world, the plate-and-spark identity and equal depth for meal styles and numeric targets.
- **Do** keep meaningful alternative screen descriptions, source information and approximation marks within the original captures, and per-asset provenance in the repository.
- **Do** keep the upcoming-update notice visible while the public app remains 1.1.0, and keep the three original artwork placements distinct.
- **Do** retain the complete static document and native App Store, email, anchor, table-scroll and disclosure behavior.
- **Do** keep availability explicit: the U.S. App Store release for iPhone with iOS 26 or later; an account is required, the first search and order are free, and continued use requires Pro. Requirements and access details follow PRODUCT.md.
- **Don't** restore the retired dark presentation, restaurant-photo hero, daily-budget narrative or Android availability claims.
- **Don't** retouch screenshots into marketing UI, invent app controls, hide estimation marks or present demo figures as current restaurant facts.
- **Don't** imply Android availability, automatic tracker logging, restaurant ordering/payment or universal menu coverage.
- **Don't** introduce scroll hijacking, motion-dependent information or new runtime services to this static site.
