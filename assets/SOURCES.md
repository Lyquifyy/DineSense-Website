# Website asset sources and refresh procedure

## Active app previews — upcoming update

The homepage uses six actual SwiftUI screens from the `codex/whole-meal` working tree based on merge commit `7701928`, captured October 24, 2026 with deterministic demo data. This is an upcoming app update; the public release remains **1.1.0**. The hero makes that distinction visible. Captures demonstrate UI, not current live coverage, deployed schema acceptance, real-account behavior or successful StoreKit transactions.

`previews/*-{440,880}.webp` are direct resized screenshots at two widths, WebP quality 90. The app's words, totals, estimate/source labels and screen furniture are unretouched. The JSON sidecars and the table below are the authoritative per-asset capture record. Their `createdAt` is derivative creation time, not the original capture time. All times below are America/Chicago on October 24.

| Active asset | Original capture | Device / moment | Scenario |
| --- | --- | --- | --- |
| `simple` | `.impeccable/review/meal-style-entry.png` | iPhone 17, iOS 26.5; final light-only capture, 12:23 | Choose Lighter, Regular meal or More protein |
| `target` | `apple/launch/whole-meal-carousel/source/carousel-01-find.png` | iPhone 17 Pro, iOS 26.5; light appearance, about 12:06 | Numeric target entry |
| `results` | `apple/launch/whole-meal-carousel/source/carousel-02-results.png` | Same iPhone 17 Pro capture run | Ranked meal results |
| `adjust` | `apple/launch/whole-meal-carousel/source/carousel-03-editor.png` | Same iPhone 17 Pro capture run | Whole-meal editor with servings and extras |
| `edited-order` | `apple/launch/whole-meal-carousel/source/carousel-04-whole-meal.png` | Same iPhone 17 Pro capture run | Main plus two garlic-topped breadsticks, combined total |
| `saved` | `apple/launch/whole-meal-carousel/source/carousel-05-saved.png` | Same iPhone 17 Pro capture run | Saved whole-meal favorite |

Source paths are relative to the DineSense whole-meal worktree. The simple source was exported from `apple/build/light-final.xcresult`; its attachment timestamp is `1792862601.204` (17:23:21 UTC / 12:23:21 CDT). The other five source files preserve the earlier light-appearance run before the final light-only correction. Do not generalize the final iPhone 17 origin to all six images. No screenshot retouching was used to reconcile those capture moments.

The debug Olive Garden scenario uses Shrimp Scampi (490 cal, 29 g protein, 52 g carbs, 18 g fat) and garlic-topped breadsticks (140 cal, 4 g protein, 25 g carbs, 2.5 g fat each), matching the published guide recorded by the app implementation. Two breadsticks bring that example to 770 cal, 37 g protein, 102 g carbs and 23 g fat. This does not establish live coverage or supply Olive Garden drink nutrition. The illustrative drinks on the website are conceptual artwork.

### Refreshing the active set

1. Build the intended SwiftUI Debug revision in the DineSense repository. Record its commit plus uncommitted-build context, simulator model, OS, capture timestamp and appearance. The current app enforces light mode; do not use historical dark-appearance flags as a recipe for this set.
2. Use the deterministic whole-meal carousel scenario for target, results, editor, full order and Saved, and the meal-style scenario for simple. Keep the same main and breadstick quantities through the sequence. Preserve actual menu/source figures and approximation marks.
3. Use real app controls, return each screen to its intended scroll position, and wait for UI and scroll transitions to settle. Capture the simulator itself, or export its original XCTest screenshot attachment. Keep the originals in the app review/carousel source directories.
4. Resize without retouching to 440px and 880px widths, preserving aspect ratio and encoding WebP at quality 90. Update the per-asset JSON sidecars and this mapping with the actual originating device; do not copy generic origin text across different capture sessions.
5. Keep HTML dimensions, responsive sources and alternative descriptions aligned with the captured state. Inspect full images and the website at desktop and narrow mobile widths, including the hero food placement below the phones.
6. Keep the upcoming-update notice until the matching app version ships. A marketing capture does not replace the migration deployment, real-device or StoreKit release gates in the app repository.

## Active original artwork

These are AI-generated, original conceptual illustrations with real alpha transparency. They are decorative and unbranded, not restaurant photography or menu-availability evidence. Exact generation prompts and creation records remain in the adjacent `.webp.json` sidecars; the prompt is not rewritten when the brand direction changes.

| Asset | Current placement | Source meaning |
| --- | --- | --- |
| `meal-illustration.webp` | Hero and light social image | Pasta, breadsticks and a drink; original food still life shared with the app |
| `sides-illustration.webp` | Under whole-meal customization copy | Separate breadsticks, vegetables and lemonade composition |
| `favorite-illustration.webp` | Closing App Store invitation | A colorful favorite bowl with napkin and fork |

The three compositions remain distinct. The hero image's original prompt mentions the earlier tomato accent; the generated artwork is preserved, while current app and website controls follow the implemented green palette.

## Active brand, social image and fonts

- `dinesense-mark.webp`: the light DineSense app icon from `apple/DineSense/Assets.xcassets/AppIcon.appiconset/icon-light.png` in the whole-meal working tree based on `7701928`, resized to 160px wide. Its JSON sidecar records the origin.
- `share-preview.png`: genuine PNG, 1200 × 630, rendered from `marketing/light-share.html`. It uses the light icon, local Fraunces and original hero food artwork. It is a marketing composition, not an app screenshot. See `marketing/LIGHT-ASSETS.md` for regeneration.
- `fraunces-regular.ttf`, `fraunces-semibold.ttf`: self-hosted fonts from the official Google Fonts distribution. `FRAUNCES-OFL.txt` retains the Open Font License. There is no external font request.

## Historical assets retained but unused by the current homepage

The old `nearby`, `picked`, `lock-screen`, `published-source` and `estimated-parts` derivatives retain their original dark captures from October 11, 2026, app commit `b783e95`, iPhone 17 Pro Max / iOS 26.5, 1320 × 2868 originals. They are not part of the active six-image walkthrough. The old Lock Screen uses its actual system wallpaper. Their original demo figures and source labels remain intact.

`assets/video/` films and posters and `marketing/release-motion/` exports document the earlier dark marketing work. The current homepage contains no video element and does not load these films or posters; do not describe them as the new light update. Their original authoring and refresh notes remain in those directories.

`editorial-table.webp` is the unused generated restaurant-table image from the original composition round. Its provenance remains in Git history and its original record; it is not a restaurant photograph sourced from a named business. It is not loaded by the current site.

### Original unused photography provenance

- `editorial-table.webp` — optimized copy of the original image generated with the built-in image generation tool for the DineSense composition round. Exact prompt: “Use case: photorealistic-natural. Asset type: shared restaurant photography for a DineSense landing-page composition round. Primary request: a single original editorial photograph of a beautiful plate of handmade rigatoni at a neighborhood Italian restaurant at night. Scene/backdrop: lived-in restaurant table with softly suggested room and candle glow in the background, evening dining scene. Subject: the pasta dish and a small portion of the table; no people in the focal plane. Style/medium: high-end natural food editorial photography, tactile and believable, not glossy commercial stock. Composition/framing: wide landscape image with the plate concentrated on the right half and calm dark negative space on the left, suitable for cropping in both wide and split-hero web layouts. Lighting/mood: low warm candlelight with gentle natural falloff and visible texture in the food; intimate, confident, after-dark. Color palette: warm browns, deep olive, parchment highlights and quiet ember tones; let the image look naturally lit rather than color graded. Materials/textures: handmade pasta, ceramic plate, linen napkin, wood tabletop. Constraints: no lettering, logos, UI, watermark, artificial blur, or impossible food details. Do not make this resemble a chain restaurant advertisement.” The original PNG remains locally as the comp source and is excluded from the deployed repository; the optimized WebP is retained but the current page does not load it.
