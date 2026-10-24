# Website asset sources and refresh procedure

## Active app previews — compact Find and whole meals

The homepage uses six actual SwiftUI screenshots from merged app revision `5c8fe8c` (PR #90), captured October 24, 2026 by the release-gate UI tests with deterministic demo data and enforced light appearance. These preview upcoming 1.2.0; the public release remains **1.1.0**. The hero retains that visible distinction. These are UI examples, not live-menu, deployed-backend, real-account or StoreKit evidence.

`previews/*-{440,880}.webp` are direct resized screenshots at two widths, WebP quality 90. App text, totals, source labels and screen furniture are unretouched. JSON sidecars retain the source screenshot hash, commit, device, OS, UTC timestamp and test identity. `createdAt` is derivative generation time. The app repository's `apple/launch/whole-meal-carousel/source/captures.json` records all originals.

| Active asset | Original capture | Device / UTC capture time | Scenario |
| --- | --- | --- | --- |
| `simple` | `apple/launch/whole-meal-carousel/source/carousel-06-meal-style.png` | iPhone 17, iOS 26.5; 2026-10-24T22:03:53.198000+00:00 | Lighter, Regular meal or More protein |
| `target` | `apple/launch/whole-meal-carousel/source/carousel-01-find.png` | iPhone 17, iOS 26.5; 2026-10-24T22:11:17.084000+00:00 | Compact numeric target entry |
| `results` | `apple/launch/whole-meal-carousel/source/carousel-02-results.png` | iPhone 17, iOS 26.5; 2026-10-24T22:11:21.535000+00:00 | Ranked meal results |
| `adjust` | `apple/launch/whole-meal-carousel/source/carousel-03-editor.png` | iPhone 17, iOS 26.5; 2026-10-24T22:11:42.363000+00:00 | Whole-meal editor and quantities |
| `edited-order` | `apple/launch/whole-meal-carousel/source/carousel-04-whole-meal.png` | iPhone 17, iOS 26.5; 2026-10-24T22:11:45.516000+00:00 | Shrimp Scampi plus two garlic-topped breadsticks |
| `saved` | `apple/launch/whole-meal-carousel/source/carousel-05-saved.png` | iPhone 17, iOS 26.5; 2026-10-24T22:11:58.999000+00:00 | Saved whole-meal favorite |

Source paths are relative to the DineSense app worktree. All five order-story captures come from `WholeMealTests.testOliveGardenCarouselEvidence`; Meal style is captured by `SimpleModeTests.testAGoalSearchesInOneTapAndReadsInWords`. These replace the earlier October 24 previews from the pre-merge whole-meal working tree.

The Olive Garden example uses Shrimp Scampi (490 cal, 29 g protein, 52 g carbs, 18 g fat) and garlic-topped breadsticks (140 cal, 4 g protein, 25 g carbs, 2.5 g fat each). Two breadsticks yield 770 cal, 37 g protein, 102 g carbs and 23 g fat, matching the app's published-guide example. This does not establish live coverage or supply Olive Garden drink nutrition. Website food artwork is conceptual and unbranded.

### Refreshing the active set

1. Run the screenshot-producing UI tests on the intended SwiftUI revision. Record the app commit and any uncommitted executable changes, simulator and OS.
2. Export original PNGs with `xcrun xcresulttool export attachments`. Preserve the scenario names, attachment timestamps and test identifiers. Confirm the exact dish/serving sequence and update the app's capture manifest.
3. Resize each original to 440px and 880px widths, preserving aspect ratio, WebP quality 90. Update the JSON sidecars and table above; never retouch UI, nutrition figures or source labels.
4. Bump the preview cache query in `index.html`, preserve dimensions and alternative descriptions, and inspect the updated screens in the actual walkthrough.
5. Keep the upcoming-update notice until the matching app version is released. Simulator images do not replace physical-device or StoreKit acceptance.

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
