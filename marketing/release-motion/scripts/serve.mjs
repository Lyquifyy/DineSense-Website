import {createServer} from 'node:http';
import {createReadStream, statSync} from 'node:fs';
import {dirname, extname, resolve, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const website = process.argv.includes('--website');
const root = resolve(dirname(fileURLToPath(import.meta.url)), website ? '../../..' : '..');
const port = website ? 3122 : 3121;
const mime = {'.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.mp4':'video/mp4', '.jpg':'image/jpeg', '.png':'image/png', '.webp':'image/webp', '.ttf':'font/ttf'};
createServer((req, res) => {
  let file;
  try {file = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));}
  catch {res.writeHead(400).end(); return;}
  if (file === root) file = resolve(root, website ? 'index.html' : 'preview.html');
  if (!file.startsWith(root + sep)) {res.writeHead(403).end(); return;}
  let stat;
  try {stat = statSync(file); if (!stat.isFile()) throw new Error();}
  catch {res.writeHead(404).end(); return;}
  const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
  const start = range ? Number(range[1]) : 0;
  const end = range?.[2] ? Math.min(Number(range[2]), stat.size - 1) : stat.size - 1;
  if (start > end || start >= stat.size) {res.writeHead(416, {'Content-Range': `bytes */${stat.size}`}).end(); return;}
  res.writeHead(range ? 206 : 200, {'Content-Type': mime[extname(file)] || 'application/octet-stream',
    'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1, 'Cache-Control': 'no-store',
    ...(range ? {'Content-Range': `bytes ${start}-${end}/${stat.size}`} : {})});
  if (req.method === 'HEAD') {res.end(); return;}
  createReadStream(file, {start, end}).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`${website ? 'Website' : 'Marketing'} preview: http://localhost:${port}`));
