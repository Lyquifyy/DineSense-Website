# Website motion

These are the tracked production exports. The public website needs only these MP4s and JPEG posters; it has no Remotion runtime or external video service.

| Asset | Placement | Format |
| --- | --- | --- |
| `dinesense-loop.mp4` | Silent hero loop | 1000 × 1120, 8 seconds |
| `dinesense-demo.mp4` | User-initiated full demo | 1600 × 900, 22 seconds |

H.264, yuv420p, BT.709; matching posters use the first complete scene. All screens are unchanged app captures animated for marketing. Dark screens show deterministic demo data, including example nutrition and source URLs. They do not establish live menu coverage.

Authoring source, capture provenance, regeneration instructions and social exports are in [marketing/release-motion](../../marketing/release-motion/README.md). Run the renderer, then `run.ps1 assets` there to update these files. Close previews that have the MP4s open if Windows reports a file lock.
