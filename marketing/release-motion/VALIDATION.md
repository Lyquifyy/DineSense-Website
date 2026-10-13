# Marketing pack validation

October 12, 2026. App source unchanged; website integration based on `aa4fe37`, on `codex/website-release-motion`.

- TypeScript and ESLint passed. `git diff --check` passed.
- Rendered and visually inspected representative frames from all five hero scenes and all three scenes of each social cut. Corrected vertical screenshot spacing and removed a caption that overlapped the app navigation before final exports.
- Exported H.264 / yuv420p MP4s: hero 1600 × 900 / 22s; numbers 1080 × 1920 / 12s; meal styles 1080 × 1920 / 10s. Matching posters included.
- Headless Chromium loaded all three videos with expected dimensions/durations, no media errors, and no browser errors. Hero playback advanced successfully. HTTP byte-range playback passed.
- Review page had no horizontal overflow at 1440, 390 and 320 pixels. No autoplay; native controls, text transcripts and visible demo/pilot disclosures.
- No iPhone build, fresh screen recording, social posting, website publication or App Store submission was performed.
- Section labels now contain only their names, with no sequence numbers or slash prefixes. Refreshed all MP4s and posters; versioned preview asset URLs prevent older media from being reused after reloading the page.

## Website integration

- Added an 8-second 1000 × 1120 screen-only loop and section names without numbers. Existing static walkthrough, pilot email actions and support/privacy pages are preserved. The separate “Watch DineSense” video-player section was removed after review. “Explore the app” links directly to the walkthrough; the full film is retained only as a marketing asset.
- Chromium checks passed: hero playback advances; manual pause survives scrolling; resume works; the hero pauses offscreen.
- Reduced motion and data saver do not fetch the loop. Changing the motion preference restores the poster. Explicit playback remains available. With JavaScript disabled, the hero poster and all eight walkthrough stages remain available.
- Simulated failed media requests restore the hero poster. HTTP byte ranges return 206 with the expected bytes. Both tracked social exports are reachable.
- No horizontal overflow at 320, 390 or 768 pixels. Visually checked desktop 1440 × 1000 and mobile 390 × 844, then confirmed the corrected exports in the user's in-app browser. No browser errors were observed.
- Fixed a browser full-range color mismatch by using PNG intermediate frames and BT.709 limited-range video. Final ffprobe checks confirm all four MP4s are H.264 / yuv420p / BT.709, with the expected dimensions and 8 / 22 / 12 / 10-second durations. Website loop is about 454 KB; full demo about 2.18 MB.
- After removing the player, refreshed both website preview tabs. Rechecked desktop 1440 × 1000 and mobile 390 × 844: no demo section or native video controls, exactly one silent looping hero video, working “Explore the app” destination and no horizontal overflow. Hero pause/resume controls and offscreen pause still work. Screenshot evidence is in `review/website-no-demo.jpg`.
- TypeScript and Remotion ESLint passed during integration. JavaScript syntax and Git whitespace checks passed again after removing the player. Impeccable's mechanical detector ran in degraded regex mode because optional parser modules were unavailable; brand/type-scale advisories are not a clean accessibility audit. Retained the user-approved Fraunces identity and validated layout/playback in the browser.
- GitHub Pages was confirmed to publish from `main` at `/`. This work is delivered for PR review; no merge, public website deployment, social posting or App Store submission was performed.

Final website assets are tracked in `assets/video/`; social MP4s and posters in this folder's `exports/`. Ignored `out/web-ready/` holds regeneratable exports; ignored `review/` holds QA frames, screenshots and the integration-check script. Source provenance is in `SOURCES.md`. `run.ps1 website` serves the integrated website at localhost:3122; `run.ps1 serve` serves the authoring review at localhost:3121.

## Distilled landing page — October 13, 2026

The landing page now omits visible demo-data descriptors, repeated screenshot captions and playback controls. It uses only the first 4.5 seconds of the existing hero MP4, once, then holds the edited-order frame. The underlying eight-second MP4 and social exports are unchanged. The authoring review remains a separate internal page.

Browser checks observed the hero paused at 4.50–4.51 seconds with no loop, media errors or restart after navigation. Six walkthrough stages and three FAQ answers remain. Keyboard navigation and FAQ expansion passed; no horizontal overflow at 320/390/768/1440px and no console errors were observed. Static syntax/format/whitespace checks passed. Reduced-motion, data-saver and failure paths were inspected in source, without an OS preference toggle or network-failure simulation in this pass. See the root VALIDATION.md for the full distill scope and ignored `review/distill-*.jpg` for screenshots.
