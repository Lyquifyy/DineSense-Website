# DineSense launch motion

Marketing authoring source for the website hero and vertical social clips, plus a full product film retained for marketing review. App source is unchanged. The website integration is static HTML, CSS and JavaScript.

## Finished assets and preview

The reviewed files are tracked in the repository:

| File | Use | Format | Length |
| --- | --- | --- | --- |
| `../../assets/video/dinesense-loop.mp4` | Original hero film, retained for marketing reuse | 1000 × 1120 | 8 seconds |
| `../../assets/video/dinesense-demo.mp4` | Marketing film, not embedded on the website | 1600 × 900 | 22 seconds |
| `exports/dinesense-numbers.mp4` | Macro-target social cut | 1080 × 1920 | 12 seconds |
| `exports/dinesense-meal-styles.mp4` | Meal-style social cut | 1080 × 1920 | 10 seconds |

Silent H.264 / yuv420p / BT.709, with matching JPEG posters. Section labels contain names only, without sequence numbers or slash prefixes.

Run `./run.ps1 website`, then open http://localhost:3122 for the integrated website. The current hero uses the existing WebP app captures directly: three phones fan over a green plate, the foreground resolves to the edited order, and the entrance settles within 1.8 seconds. Fine-pointer depth and the chapter transitions respond to visitor movement; the final invitation sweeps from cream to sage once. Reduced motion, data saver and no JavaScript retain complete static compositions. The website downloads no MP4 and has no player controls, separate video-player section or visible demo descriptor. The film exports below remain useful independently of this live composition.

Run `./run.ps1 serve`, then open http://localhost:3121 for the authoring film review after rendering. That page reads ignored `out/web-ready/` files. The website and tracked social handoff do not depend on that directory.

## Direction

“Know what to order.” Preserve Fraunces, warm black, cream, sage and brass. Real screens carry the proof. Motion provides framing and screen changes, with no invented taps, fake UI or fabricated recording. The light social cut uses release listing captures; dark films use the website’s documented demo set.

The full demo follows the same chicken bowl through results, changes, edited order and Lock Screen. Both numeric targets and meal styles appear in the opening. The screen-only loop pairs the meal target with meal style, results, edited ticket and pick, returning to its opening frame. Social cuts each lead with one audience and end with the pilot URL.

## Edit and regenerate

Node 22+ recommended. On this Windows machine, `run.ps1` chooses bundled Node 24 because the global Node/npm versions conflict. On another machine, install pinned packages with `npm ci`.

```powershell
.\run.ps1 studio  # http://localhost:3120/WebsiteHero
.\run.ps1 check   # TypeScript + ESLint
.\run.ps1 stills  # QA frames and posters
.\run.ps1 render  # Four MP4s, QA frames and posters
.\run.ps1 assets  # Copy exports to tracked website/social locations
.\run.ps1 website # http://localhost:3122
.\run.ps1 serve   # http://localhost:3121 authoring review
```

Portable equivalents: `npm run dev`, `npm run lint`, `node scripts/render.mjs`, `npm run assets`, `npm run serve:website`. The renderer reuses installed Playwright headless Chromium on Windows. Otherwise Remotion obtains its supported browser; `BROWSER_EXECUTABLE` can specify an existing Chromium. Use `node scripts/render.mjs --only=HeroLoop` for one composition.

Compositions: `src/Root.tsx`. Screen-only loop: `src/HeroLoop.tsx`. Full demo scenes: `src/scenes/`. Social cuts: `src/Social.tsx`. Animations use Remotion frames. PNG intermediates and BT.709 encoding preserve dark tones in browser playback. Regenerate after edits, then sync the assets. Close preview tabs first if Windows reports locked media files.

## Website delivery

The website uses the existing WebP app captures with static HTML, CSS and JavaScript. Keep the concise meal walkthrough, pilot email actions and privacy/support pages. Capture provenance stays in the repository; the landing page omits demo descriptors and repetitive captions per the user's distill direction. `index.html` contains the hero and guided walkthrough; `script.js` gates motion by visibility and visitor preferences; `styles.css` handles choreography, color and responsive layout. Both MP4 films are retained for marketing review, without a player or link on the landing page. No new analytics, backend or public app-download claim is introduced.

GitHub Pages currently publishes `main` at the repository root. Deliver changes through the website PR; merging it updates the public site. Social files remain a handoff for native platform upload.

## Boundaries

See `SOURCES.md`. Release-readiness was inspected at `7f4dd78`, with listing captures extracted directly from Git. No app working-copy files, native source, backend data or subscription settings were edited. No social posting, messages or App Store changes were performed.

These are screenshot animations, not fresh recordings. No Xcode/iPhone build was performed on Windows. Demo values demonstrate UI, not current nutrition or live coverage. Preserve approximation marks and source labels. Do not imply automatic tracker sync, ordering/payment, universal coverage or public availability.
