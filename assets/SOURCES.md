# Website asset sources and refresh procedure

## Current app previews

Captured October 11, 2026 from the DineSense SwiftUI source at commit `b783e95`, built locally in Debug for iPhone 17 Pro Max / iOS 26.5. Full original captures are 1320 × 2868. All app screens use dark appearance. The iOS Lock Screen retains its system wallpaper. No production account, actual customer data, or live nutrition lookup was used. Nearby's Apple Maps basemap is system-rendered; the restaurant data is the demo fixture.

`previews/*-{440,880}.webp` are direct, resized app screenshots at two widths, WebP quality 90. No app text, totals, source labels, or screen furniture was retouched. Their EXIF ImageDescription records origin. Approximation marks and demo source URLs (including example.com) are intentionally preserved. Every screenshot demonstrates the UI with **demo data**, not current restaurant nutrition, real local coverage, or deployed-backend acceptance.

| Asset              | Scenario / state                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simple`           | `simple`: the three meal styles                                                                                                                   |
| `target`           | `find`: saved Dinner target, then Change target; 650 calories, 50 g protein                                                                       |
| `results`          | `find`: search Dinner; chicken burrito bowl is suggested with no cheese, 630 cal / 46P / 64C / 22F                                                |
| `nearby`           | `find`: Nearby with the last numeric target, map and demo restaurants                                                                             |
| `adjust`           | `find`: bowl → Change your order → Extra chicken on, Sour cream off; cheese remains off                                                           |
| `edited-order`     | Same edited bowl: 700 cal / 76P / 62C / 20F; full ticket, also placed on the Lock Screen                                                          |
| `picked`           | Same edited bowl after I’ll have this, with Picked seal and tracker/Lock Screen actions                                                           |
| `lock-screen`      | Actual ActivityKit Live Activity on the simulator's Lock Screen, for that same edited bowl                                                        |
| `published-source` | Edited bowl → How the numbers add up, scrolled to ingredient arithmetic and source; CSS crops this screenshot                                     |
| `estimated-parts`  | `find`, `-DineSenseBreakdown ready`: Grilled salmon → How the numbers add up; ~840 calories counted as salmon and rice; CSS crops this screenshot |

### Refreshing the set

1. Build the current SwiftUI Debug app from the sibling `DineSense` repository. Record its commit and simulator/iOS version here. App source changes are not needed for captures.
2. Launch with `-DineSenseDemo find -dinesense.appearance dark -DineSenseTourSeen YES -DineSenseAIConsent YES -dinesense.aimOffered YES -DineSenseTips hide -DineSenseSavedTargets present -DineSenseFind normal -DineSenseLocation allowed -DineSenseBreakdown ready`. Use `-DineSenseDemo simple` for meal styles. The other flags avoid stale launch preferences from past UI tests.
3. Use the saved Dinner target. Keep the same chicken bowl throughout the result, editor, ticket, pick, and Live Activity; extra chicken on, sour cream and cheese off. Do not change source figures for marketing.
4. Use iOS's status-bar tap to return a ticket to the actual top; a dismissed editor can leave its title under the navigation material. Wait for scrolling to settle. Confirm the Picked seal, source labels and footer are visible in the captures where expected.
5. Use the app’s real Keep it on the Lock Screen action and the simulator Lock control. Allow the demo Live Activity when asked. Capture the real iOS screen. End the temporary activity afterward.
6. Capture through `xcrun simctl io <device-id> screenshot <path>.png`. An optional `simctl status_bar` override normalizes 9:41/battery; clear it afterward.
7. Resize, preserving aspect ratio, to 440 and 880 pixels wide; export WebP at quality 90 with origin metadata. Keep explicit image dimensions and srcset entries aligned if the device aspect ratio changes.
8. Check each screenshot at readable size. Check website crops after replacement, especially nutrition source and part rows. Update this table, the commit and date. Demo captures do not replace app release, backend or real-device checks.

## Brand and fonts

- `dinesense-mark.webp`: current dark DineSense app icon, from `apple/DineSense/Assets.xcassets/AppIcon.appiconset/icon-dark.png` at `b783e95`, resized to 160 × 160, WebP quality 95. Origin is embedded in EXIF.
- `fraunces-regular.ttf`, `fraunces-semibold.ttf`: existing self-hosted Fraunces fonts from the official Google Fonts distribution. `FRAUNCES-OFL.txt` retains the Open Font License. The site makes no external font request.
- `editorial-table.webp`: historical, unused website asset retained in the repository. Generated for the original website, not a restaurant photo or screenshot. Its original provenance is retained in Git history. It is not loaded by this redesign.

### Original unused photography provenance

- `editorial-table.webp` — optimized copy of the original image generated with the built-in image generation tool for the DineSense composition round. Exact prompt: “Use case: photorealistic-natural. Asset type: shared restaurant photography for a DineSense landing-page composition round. Primary request: a single original editorial photograph of a beautiful plate of handmade rigatoni at a neighborhood Italian restaurant at night. Scene/backdrop: lived-in restaurant table with softly suggested room and candle glow in the background, evening dining scene. Subject: the pasta dish and a small portion of the table; no people in the focal plane. Style/medium: high-end natural food editorial photography, tactile and believable, not glossy commercial stock. Composition/framing: wide landscape image with the plate concentrated on the right half and calm dark negative space on the left, suitable for cropping in both wide and split-hero web layouts. Lighting/mood: low warm candlelight with gentle natural falloff and visible texture in the food; intimate, confident, after-dark. Color palette: warm browns, deep olive, parchment highlights and quiet ember tones; let the image look naturally lit rather than color graded. Materials/textures: handmade pasta, ceramic plate, linen napkin, wood tabletop. Constraints: no lettering, logos, UI, watermark, artificial blur, or impossible food details. Do not make this resemble a chain restaurant advertisement.” The original PNG remains locally as the comp source and is excluded from the deployed repository; the page loads the optimized WebP.
