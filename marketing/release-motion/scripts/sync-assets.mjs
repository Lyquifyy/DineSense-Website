import {copyFileSync, existsSync, mkdirSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const website = resolve(root, '../..');
const output = join(root, 'out/web-ready');
const files = [
  ['dinesense-loop.mp4', 'assets/video/dinesense-loop.mp4'],
  ['dinesense-loop-poster.jpg', 'assets/video/dinesense-loop-poster.jpg'],
  ['dinesense-hero.mp4', 'assets/video/dinesense-demo.mp4'],
  ['dinesense-hero-poster.jpg', 'assets/video/dinesense-demo-poster.jpg'],
  ['dinesense-numbers.mp4', 'marketing/release-motion/exports/dinesense-numbers.mp4'],
  ['dinesense-numbers-poster.jpg', 'marketing/release-motion/exports/dinesense-numbers-poster.jpg'],
  ['dinesense-meal-styles.mp4', 'marketing/release-motion/exports/dinesense-meal-styles.mp4'],
  ['dinesense-meal-styles-poster.jpg', 'marketing/release-motion/exports/dinesense-meal-styles-poster.jpg'],
];
for (const [source] of files) {
  if (!existsSync(join(output, source))) throw new Error(`Missing ${source}. Run the renderer first.`);
}
for (const [source, destination] of files) {
  const target = join(website, destination);
  mkdirSync(dirname(target), {recursive: true});
  copyFileSync(join(output, source), target);
  console.log(`Updated ${destination}`);
}
