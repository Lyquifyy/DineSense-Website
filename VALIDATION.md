# Website overhaul validation

Validated locally on October 11, 2026. This record covers the static website, not a published release.

## Source and capture evidence

- Current SwiftUI Debug app built successfully from `b783e95` for iPhone 17 Pro Max / iOS 26.5 Simulator. No app source changes were made.
- Ten fresh app/Lock Screen views use deterministic `find` and `simple` demo scenarios and dark appearance. The Lock Screen is a real ActivityKit Live Activity, with the system wallpaper. It was ended after capture; the temporary status-bar override was cleared.
- The bowl remains consistent: suggestion without cheese, then extra chicken and no sour cream or cheese, ending at 700 cal / 76P / 62C / 20F across ticket, pick and Lock Screen. Restaurant figures and source URLs are demo fixtures, not live nutrition claims.
- Twenty responsive WebP files (440 / 880 widths), about 1.1 MiB total, plus the current app mark. Explicit dimensions reserve image space; the main hero image has high priority and a responsive preload, later images use lazy loading. Fonts remain licensed and self-hosted.
- `assets/SOURCES.md` and per-image JSON/EXIF metadata record provenance and refresh instructions. An origin scan found 22 raster assets and no missing provenance, including the unused historical hero.

## Local browser checks

Codex in-app browser, served from the existing static files at `http://127.0.0.1:8765/`.

| Viewport   | Result                                                                                |
| ---------- | ------------------------------------------------------------------------------------- |
| 1440 × 900 | Desktop hero and sticky walkthrough; order, Lock Screen and nutrition crops inspected |
| 1024 × 768 | Two-column hero; desktop enhancement enabled                                          |
| 390 × 844  | Stacked mobile layout; hero, source crops, Support and Privacy inspected              |
| 320 × 740  | Narrow layout, wrapped controls, no horizontal overflow                               |
| 844 × 390  | Landscape reflow; static walkthrough                                                  |
| 720 × 450  | Reflow equivalent to a 1440 × 900 viewport at 200%; static walkthrough                |
| 506 × 776  | User pane layout; stacked previews                                                    |

- All listed viewport widths had zero horizontal document overflow. Images reserved their space during the inspected loads; no persistent blank image or visible layout jump remained. No quantitative CLS or throttled-network benchmark was recorded.
- Direct numbered chapter navigation selects the correct preview and focuses its heading. Native Page Down followed by Page Up changed `adjust-order → exact-order → adjust-order`. Direct Lock Screen navigation selected the handoff preview.
- Keyboard Tab reveals the skip link; Enter focuses the H1. Enter opens the native FAQ disclosure and retains a visible focus outline.
- JavaScript-absent fixture: zero script elements, eight original scenes displayed without clipping, all copy retained, chapter anchors work. This tests the authored fallback without changing browser-wide JavaScript settings.
- Reduced-motion fixture: the preference branch was forced in an ignored local test page; all original scenes remained static, the sticky enhancement was off, animation was `none` and scrolling was `auto`. The actual `prefers-reduced-motion` CSS and listener were inspected. OS-level preference switching was not exercised.
- No browser warnings or errors were recorded during the functional checks.
- Main foreground/background contrast: cream 16.54:1; muted copy on warm black 8.64:1 and on the source surface 7.84:1; brass 8.22:1; primary button text 10.20:1.
- One H1 per page, logical H2/H3 order, descriptive app-image alternatives, decorative clones hidden from accessibility, explicit navigation labels and native FAQ semantics checked. This is not a complete screen-reader audit.

## Static checks and product review

- `node --check script.js` passed; `git diff --check` passed.
- All local page, anchor, font, icon, screenshot and script references resolve. Pilot links consistently use the existing inbox, prefilled subject and optional city/iPhone fields. No email was sent.
- Support and Privacy navigation was exercised locally. External provider links were preserved; external destination availability was not audited.
- The ten substantive privacy sections were compared with the original Git version after normalizing markup whitespace: unchanged. Support's report button name matches the current SwiftUI app.
- Claims were compared against the current app product brief and Find, Dish, Build, Saved, Settings, Health and demo implementations: iPhone/iOS 26, account/Pro, meal styles and numeric targets, manual tracker copying, optional read-only Health, provenance and estimated components. No public release, Android, food diary, automatic tracker logging or restaurant ordering claim is made.
- One design detector pass ran in degraded regex-only mode; its sole font-saturation warning conflicts with the user's explicitly pinned Fraunces system and was retained intentionally. A fresh, read-only finish reviewer inspected twelve desktop/mobile/section captures and returned **ship**, with no material fixes. The review covered visuals/source, not independent interaction execution.

## Delivery and remaining release evidence

Review captures are local, ignored files under `.impeccable/review/`; the primary ones are `desktop.jpg` and `mobile.jpg`. `PRODUCT.md`, `DESIGN.md` and `assets/SOURCES.md` are tracked documentation.

Actual browser-level 200% zoom could not be controlled by the in-app browser; the equivalent CSS viewport reflow was checked instead. Native browser zoom, OS reduced-motion toggling, physical-device Safari/VoiceOver, and deployed hosting/cache behavior remain release checks. No deployed-site or physical-device evidence is claimed. No backend, public API, signup service or analytics was added. Publishing remains a separate action.

## Release marketing motion — October 12, 2026

Added the approved marketing motion in the website repository only: an optional 8-second hero loop and two tracked vertical social exports. Removed the separate “Watch DineSense” video-player section after review; “Explore the app” now links directly to the guided walkthrough. The full product film is retained as a marketing asset without a landing-page player or link. All section labels use names only. App source remains unchanged.

Desktop/mobile visual inspection and Chromium integration checks passed, including manual pause/resume, offscreen pause, reduced motion, data saver, no-JavaScript fallback, failed-media recovery, byte-range playback and 320/390/768px overflow checks. After removing the player, refreshed both website preview tabs and rechecked the walkthrough link, hero controls and absence of the demo section at desktop 1440px and mobile 390px, with no horizontal overflow. JavaScript syntax and Git whitespace checks passed again. Final exports use H.264 / yuv420p / BT.709 to match the approved stills. TypeScript and Remotion ESLint passed during integration. Detailed evidence is in [marketing/release-motion/VALIDATION.md](marketing/release-motion/VALIDATION.md).

The delivery is a website PR. GitHub Pages publishes from `main`; no merge, production publication, social posting or App Store submission was performed.

## Delight and bolder refinement — October 13, 2026

Based on the published `427f54e` revision, this refinement concentrates on the hero and final pilot invitation. The headline retains its original words with stronger hierarchy, sage emphasis and a brief brass plate-and-spark drawing. The closing invitation reverses the existing cream and warm-black palette. Direction arrows respond to hover and keyboard focus. The walkthrough, app screenshots, silent hero loop, availability claims, pilot email actions, support and privacy content remain intact. The separate video-player section remains absent. App source is untouched.

Inspected the hero and closing invitation together at desktop 1440 × 1000 and mobile 390 × 844. Overflow checks passed at 320, 390, 768 and 1440px. Keyboard activation of “Explore the app” reaches the walkthrough and focuses its heading; the two primary email destinations match. No console errors were observed. Adjusted the flourish spacing after the first inspection, then confirmed desktop and mobile in one final round. The closing action retains a visible dark keyboard focus outline. New text/focus palette pairs have contrast ratios of 10.98:1 or greater. JavaScript syntax and Git whitespace checks passed. Reduced-motion behavior is covered by CSS media rules and the existing hero controller; no physical-device or OS preference toggle is claimed.

The design detector ran once in degraded regex mode because its optional HTML parser modules were unavailable. It reported two warnings for the user-pinned Fraunces family and advisory token/type-scale differences; it did not provide computed contrast coverage. The palette and new type roles are documented in DESIGN.md. Browser evidence is stored locally in the ignored `marketing/release-motion/review/delight-*.jpg` files. This refinement is for review and has not been merged or published.

## Distill refinement — October 13, 2026

Per the user's direction, removed visible demo descriptors, playback controls, screenshot captions, side notes, repeated example numbers/order text, the redundant introduction and closing helper text. Reduced the walkthrough from eight stages to six and the FAQ from seven answers to three. Both meal-style and numeric-target paths retain a full stage. Condensed the nutrition section to its source/estimate distinction. The approximate body-copy count, including collapsed FAQ answers and navigation, falls from 941 words to 292 (69%). Screenshot assets and app source are unchanged; capture provenance remains in the repository.

The hero now reveals the first 4.5 seconds once and holds the edited-order frame. Browser checks observed it paused at 4.50–4.51 seconds, without looping or playback controls; navigating away and back did not restart it. Reduced-motion/data-saver and failed-playback poster paths remain in the controller. Source inspection confirmed those paths; no OS motion-preference toggle or network-failure simulation was performed in this refinement.

Refreshed both website preview tabs and checked the desktop composition and mobile hero/invitation. No horizontal overflow at 320, 390, 768 or 1440px. Confirmed six source stages, six decorative clones, three FAQ rows, no demo descriptors or playback controls, working keyboard chapter navigation and FAQ expansion, and no observed console errors. JavaScript syntax, HTML/CSS formatting and Git whitespace checks passed. The detector ran once in degraded regex mode, reporting the pinned Fraunces warnings and advisory style differences. Evidence is in the ignored `marketing/release-motion/review/distill-*.jpg` files. PR #6 is updated for review; this revision is not published.
