# DineSense website

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users and purpose

People deciding what to order at restaurants, equally including people who bring a meal's calories and macros from a tracker and people who choose Lighter, Regular meal, or More protein without setting numbers. The website explains the SwiftUI iPhone app, explicitly previews the upcoming light whole-meal update, and links to its U.S. App Store listing. The public release remains 1.1.0 until a separate app release is completed. Public restaurant order guides also help visitors inspect a complete order, its counted servings and its published nutrition source.

## Capabilities and constraints

The app finds and ranks dishes near the phone, shows nutrition provenance, supports order changes, keeps saved dishes and picks, copies numbers into a tracker, and displays an order on the Lock Screen. Published nutrition and estimates stay visibly distinct. DineSense keeps no food diary. Apple Health is optional and read-only. An account is required. The first search and order are free; continued use requires DineSense Pro. Pricing and current terms are shown in the app. It is available in the U.S. on iPhone with iOS 26 or later at https://apps.apple.com/us/app/dinesense/id6816440061. Do not claim Android availability, automatic tracker sync, restaurant ordering/payment, or universal menu coverage.

The upcoming app supports one main item plus up to seven extras from the restaurant's available nutrition menu, with one through ten whole servings each. Totals include each serving once; source and estimate qualifications travel with saved orders. Unsupported drinks or sides are not invented, and an item's figures may already include sides. Whole-meal sharing uses a card and complete text because the legacy compact link cannot encode extras. Watch, Arrival reminders and Point at the menu remain removed. The website does not claim that these upcoming capabilities have shipped: the app migration, real-device checks and StoreKit acceptance remain separate release work.

The guide index at /guides/ links to Chipotle, Chick-fil-A and Panda Express examples. Each guide gives an exact order, a standard-serving nutrition calculation, published source links and a checked date, exclusions and portion qualifications, a shared-order link and an App Store action. These are order examples, not personal nutrition recommendations or measurements of the meal served. Restaurant portions and menus can change. Restaurant names are attributed to their owners, without implying endorsement.

Product truth comes from the current DineSense SwiftUI implementation, PRODUCT.md, and release records in the sibling DineSense repository. The old website's daily-budget, three-dish comparison, and Android descriptions are retired.

## Evidence

Website previews use six real light screens from merged app revision `5c8fe8c` (PR #90), captured by the release-gate UI tests on iPhone 17 / iOS 26.5 with deterministic demo data. Both compact Find modes and the whole-meal order sequence are current to that revision. The hero visibly labels this as the next update; public release 1.1.0 remains separate. Capture provenance stays in assets/SOURCES.md and per-image sidecars. These screenshots demonstrate UI, not live menu coverage, deployed-backend or real-device acceptance. Keep the app's original figures, source labels and approximation marks intact. Do not invent testimonials, adoption figures, endorsements or nutrition accuracy guarantees.

Guide arithmetic is generated from the same published component rows used by the app. The generator checks expected totals and shared-order encode/decode round trips. Sources, serving sizes, exclusions and checked dates are visible in each guide; the build also writes guide-evidence.json. Keep these published figures distinct from the homepage’s deterministic demo captures. Local guide finish captures support visual review only, not deployed-site, live-backend or real-device release acceptance.

## Brand commitments

DineSense's plate-and-spark mark, warm ivory, botanical green actions, warm ink and restrained brass. The website retains Fraunces display type; the native app uses system type. The user's final direction is light-only for both app and website, superseding the earlier dark cinematic presentation. Warm, exact, unhurried copy, actual app previews and native guided scroll motion remain. Three distinct original conceptual food illustrations support the hero, customization and closing invitation; they do not represent named restaurant dishes. Both audiences receive equal prominence.

## Delivery

Static HTML, CSS, and JavaScript on the existing hosting setup. Keep index.html, privacy.html, support.html, the shared-order route /o/, CNAME, and .nojekyll. Add the guide index and its three nested article routes, with guides/guides.css. Homepage, Support and Privacy footers link to the guides. Download actions open the App Store listing; support and contact actions continue to open email to dinesense.feedback@gmail.com. No submission backend or analytics SDK. Guide download links use Apple’s generated `guide_restaurant` campaign URL; reporting is aggregate and subject to Apple’s thresholds. Support, Privacy and guides inherit the shared appearance; substantive privacy disclosures are preserved.

Guide content and standard-serving totals live in apple/launch/guides.json and scripts/seed/components/ in the sibling DineSense repository. scripts/build-launch-guides.mjs generates the guide pages and evidence artifact. Review a changed source row, expected total and article copy together before publishing.
