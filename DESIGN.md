# DineSense landing page design

## Visual direction

The page uses the approved **“The menu in the margin”** composition: an after-dark restaurant photograph anchors the hero, while a warm paper menu ticket and a smaller daily-budget card sit over it like editorial marginalia. Fraunces headlines, restrained uppercase labels, fine rules, and a single ember accent make the page feel like a considered dining publication. The ticket is a clearly labeled illustrative app preview, not a live ordering interface.

The mood stays warm and composed. Dark surfaces carry the page; parchment is reserved for the dish ticket; color and number styling make published facts, estimates, and sample values easy to distinguish. The budget informs the choice without judging it.

## Page hierarchy and content rules

1. **Header:** DineSense mark and name, one in-page “How it works” link, and the invite-only pilot status.
2. **Hero:** A plain-language product promise, short explanation, links to the flow and estimate explanation, pilot/platform note, and illustrative dish ticket over the restaurant image.
3. **Quick flow:** Three compact outcomes: keep today’s budget in view, compare up to three dishes, and confirm a choice to update the day.
4. **How it works:** The same journey in three moments—before the menu, at the restaurant, and when deciding—with enough detail to explain the optional meal budget and manual/menu-based comparison.
5. **Nutrition estimates:** Explain the source distinction and show published values as published and estimated values as ranges.
6. **Pilot and footer:** Repeat the supported invite-only iPhone and Android status and the “A budget, not a diet” principle.

Keep claims grounded in the current product: it can show the remaining daily budget, optionally apply a meal budget, compare up to three dishes, and update the day after the diner confirms a choice. Existing menu details and manual entry work without AI. Do not imply coaching, scoring, personalization, payments, health outcomes, nutrition precision, or a public download/signup path. Mark all demonstration values and preview UI as illustrative; never present sample nutrition as restaurant data or advice.

## Reusable design tokens

The source of truth for colors, type, and sizing is the **:root** block in **styles.css**.

| Token | Value | Use |
| --- | --- | --- |
| **--night** | **#15110f** | Main page background |
| **--surface** | **#261f1a** | Secondary dark cards |
| **--paper** | **#f4ebdd** | Main text and light surfaces |
| **--muted** | **#b9aa95** | Supporting text |
| **--line** | **#4a3d33** | Dividers and outlines |
| **--ember** | **#ec8a5e** | Primary action, focus ring, and step accents |
| **--ticket** | **#d6cab5** | Paper dish ticket |
| **--ink** | **#29251f** | Text on the ticket |
| **--ticket-muted** | **#554c40** | Secondary ticket text |
| **--serif** | Fraunces, Georgia fallback | Editorial headings and wordmark |
| **--sans** | System sans-serif stack | Body copy, controls, and metadata |
| **--shell** | **1296px** | Maximum shared content width |

Use Fraunces regular and semibold for display hierarchy, with the system sans stack for readable body copy and controls. Small uppercase labels use generous tracking; measurements use tabular numerals. Keep paragraphs short, headings sentence-case, and links/action labels concise. Retain the shared centered shell and fine-line separators instead of introducing extra card styles or accent colors.

## Assets and implementation source

The page is static HTML, CSS, and a small JavaScript file; it has no runtime framework or external font request. The ticket mark is the existing DineSense icon, and the restaurant photograph is the optimized **assets/editorial-table.webp**. Fraunces files are self-hosted in **assets/** with their Open Font License. Provenance and original asset details are recorded in **assets/SOURCES.md**. Keep those local assets and their attribution/license notes with the page; do not replace the mark or imply that the hero image is a real restaurant or app screenshot.

**index.html** defines the semantic sections and sample content, **styles.css** owns layout and visual tokens, and **script.js** moves keyboard focus to in-page destinations. Keep these files as the implementation source of truth.

## Responsive behavior

- At wide widths, keep the hero as a balanced two-column editorial spread, with the ticket overlapping the photo; show the quick flow and three detailed steps in three columns.
- At **980px**, tighten the shared gutters and hero gap while preserving the two-column composition.
- At **700px**, stack the hero copy before its visual, hide the header’s duplicate pilot badge (the pilot note remains in the hero), and stack quick-flow, detailed steps, estimate content, and pilot content in reading order. Keep every product explanation and action available.
- At **370px**, reduce gutters and type/detail spacing, stack hero actions, and allow the footer to wrap.

The ticket, sample budget, and nutrition values must remain legible without horizontal scrolling. Preserve the photo-to-ticket overlap as a visual cue while ensuring the text blocks remain in normal reading order.

## Accessibility and motion

Use the existing header, navigation, main, section, list, and footer landmarks; maintain one page-level **h1** and a logical heading sequence. Keep accessible names on navigation and illustrative groups, meaningful alternative text for the restaurant photo, and empty alt text for the repeated brand mark where the adjacent name already identifies it. The skip link appears on keyboard focus.

All links have a visible ember focus outline. In-page navigation also moves keyboard focus to the destination heading (or section) and removes its temporary tab stop when focus leaves. Preserve readable contrast, text labels alongside color distinctions, and visible language that qualifies sample data.

Respect **prefers-reduced-motion**: disable smooth scrolling and reduce transitions/animations to near zero. Motion is limited to the subtle primary-button hover treatment; do not add autoplay or motion-dependent information.