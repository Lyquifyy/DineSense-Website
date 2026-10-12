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

- Added an 8-second 1000 × 1120 screen-only loop, a wide user-initiated full demo, transcript, video-load recovery message and section names without numbers. Existing static walkthrough, pilot email actions and support/privacy pages are preserved.
- Chromium checks passed: hero playback advances; manual pause survives scrolling; resume works; the hero pauses offscreen and when the full demo plays. The full demo is not requested before playback, then loads with the expected 22-second duration and 1600 × 900 dimensions.
- Reduced motion and data saver do not fetch the loop. Changing the motion preference restores the poster. Explicit playback remains available. With JavaScript disabled, the hero poster and all eight walkthrough stages remain available.
- Simulated failed media requests restore the hero poster and expose the full demo's download/transcript recovery message. HTTP byte ranges return 206 with the expected bytes. Both tracked social exports are reachable.
- No horizontal overflow at 320, 390 or 768 pixels. Visually checked desktop 1440 × 1000 and mobile 390 × 844, then confirmed the corrected exports in the user's in-app browser. No browser errors were observed.
- Fixed a browser full-range color mismatch by using PNG intermediate frames and BT.709 limited-range video. Final ffprobe checks confirm all four MP4s are H.264 / yuv420p / BT.709, with the expected dimensions and 8 / 22 / 12 / 10-second durations. Website loop is about 454 KB; full demo about 2.18 MB.
- TypeScript, Remotion ESLint, JavaScript syntax and Git whitespace checks pass. Impeccable's mechanical detector ran in degraded regex mode because optional parser modules were unavailable; brand/type-scale advisories are not a clean accessibility audit. Retained the user-approved Fraunces identity and validated layout/playback in the browser.
- GitHub Pages was confirmed to publish from `main` at `/`. This work is delivered for PR review; no merge, public website deployment, social posting or App Store submission was performed.

Final website assets are tracked in `assets/video/`; social MP4s and posters in this folder's `exports/`. Ignored `out/web-ready/` holds regeneratable exports; ignored `review/` holds QA frames, screenshots and the integration-check script. Source provenance is in `SOURCES.md`. `run.ps1 website` serves the integrated website at localhost:3122; `run.ps1 serve` serves the authoring review at localhost:3121.
