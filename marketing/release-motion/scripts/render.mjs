import {bundle} from '@remotion/bundler';
import {getCompositions, openBrowser, renderMedia, renderStill} from '@remotion/renderer';
import {existsSync, mkdirSync, readdirSync} from 'node:fs';
import {join, resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const cache = process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, 'ms-playwright');
const installed = cache && existsSync(cache)
  ? readdirSync(cache).filter(n => n.startsWith('chromium_headless_shell-')).sort((a, b) => b.localeCompare(a, undefined, {numeric: true}))
    .map(n => join(cache, n, 'chrome-headless-shell-win64', 'chrome-headless-shell.exe')).find(existsSync)
  : undefined;
const browserExecutable = process.env.BROWSER_EXECUTABLE || installed;
const stillsOnly = process.argv.includes('--stills');
const outputDir = join(root, 'out', 'web-ready');
mkdirSync(outputDir, {recursive: true});
mkdirSync(join(root, 'review'), {recursive: true});
console.log('Bundling DineSense marketing compositions…');
const serveUrl = await bundle({entryPoint: join(root, 'src/index.ts'), publicDir: join(root, 'public')});
const browser = await openBrowser('chrome', {browserExecutable});
try {
  const compositions = await getCompositions(serveUrl, {puppeteerInstance: browser});
  const jobs = [
    {id: 'HeroLoop', file: 'dinesense-loop', frames: [0, 85, 145, 205, 239]},
    {id: 'WebsiteHero', file: 'dinesense-hero', frames: [65, 185, 320, 470, 600]},
    {id: 'SocialNumbers', file: 'dinesense-numbers', frames: [65, 185, 300]},
    {id: 'SocialMealStyles', file: 'dinesense-meal-styles', frames: [65, 170, 270]},
  ];
  for (const job of jobs) {
    const only = process.argv.find(arg => arg.startsWith('--only='))?.slice(7);
    if (only && job.id !== only) continue;
    const composition = compositions.find(c => c.id === job.id);
    if (!composition) throw new Error(`Missing composition: ${job.id}`);
    for (const [i, frame] of job.frames.entries()) {
      await renderStill({serveUrl, composition, puppeteerInstance: browser, frame,
        output: join(root, 'review', `${job.file}-${i + 1}.png`), imageFormat: 'png', logLevel: 'error'});
    }
    await renderStill({serveUrl, composition, puppeteerInstance: browser, frame: job.frames[0],
      output: join(outputDir, `${job.file}-poster.jpg`), imageFormat: 'jpeg', jpegQuality: 90, logLevel: 'error'});
    console.log(`Checked ${job.id}: ${composition.width}×${composition.height}, ${composition.durationInFrames / composition.fps}s`);
    if (!stillsOnly && !process.argv.includes(`--skip=${job.id}`)) {
      let last = -1;
      await renderMedia({serveUrl, composition, puppeteerInstance: browser, codec: 'h264', crf: 20,
        pixelFormat: 'yuv420p', imageFormat: 'png', colorSpace: 'bt709', concurrency: 3,
        outputLocation: join(outputDir, `${job.file}.mp4`),
        logLevel: 'error', onProgress: ({progress}) => {
          const stage = Math.floor(progress * 4);
          if (stage > last) {last = stage; console.log(`${job.id}: ${Math.round(progress * 100)}%`);}
        },
      });
      console.log(`Exported ${job.file}.mp4`);
    }
  }
} finally {
  await browser.close({silent: true});
}
