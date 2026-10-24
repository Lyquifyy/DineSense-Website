# Current light marketing assets

The homepage's three decorative illustrations live in `assets/`: `meal-illustration.webp` in the hero, `sides-illustration.webp` beside customization and `favorite-illustration.webp` in the closing invitation. Their exact prompts stay in adjacent JSON files. Preserve alpha transparency and do not present them as named restaurant photos.

`light-share.html` is the editable 1200 × 630 source for `assets/share-preview.png`. Serve the website root locally so its relative font and image URLs resolve, open `/marketing/light-share.html` at a 1200 × 630 viewport with device scale 1, wait for both local fonts and images, then capture the page as PNG. Verify its PNG signature and exact 1200 × 630 dimensions before replacing the asset. Keep the current ivory/green colors, light icon and original hero illustration; do not copy an old dark film poster over this file.

See `../assets/SOURCES.md` for the screenshot origins and release boundary. The active previews show the upcoming whole-meal update; public app 1.1.0 is unchanged. `release-motion/` and `assets/video/` retain historical dark films and posters and are not loaded by the current homepage.
