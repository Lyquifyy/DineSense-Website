#!/usr/bin/env bash
# Writes sitemap.xml with each page's real modification date: the last commit
# that touched its file, or today if the file has uncommitted changes.
# Run before committing a page change. After the change is live, run with
# --ping to tell IndexNow (Bing, Yandex and others) which URLs changed.
set -euo pipefail
cd "$(dirname "$0")/.."

key=584d01fc2e7e752e3ca7229b76113d0e
pages=(
  "/|index.html"
  "/about.html|about.html"
  "/support.html|support.html"
  "/privacy.html|privacy.html"
  "/guides/|guides/index.html"
  "/guides/chipotle-40g-protein/|guides/chipotle-40g-protein/index.html"
  "/guides/chick-fil-a-under-600-calories/|guides/chick-fil-a-under-600-calories/index.html"
  "/guides/panda-express-under-600-calories/|guides/panda-express-under-600-calories/index.html"
)

lastmod() {
  if [[ -n "$(git status --porcelain -- "$1")" ]]; then
    date +%F
  else
    git log -1 --format=%cs -- "$1"
  fi
}

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  for page in "${pages[@]}"; do
    echo "  <url><loc>https://dinesense.app${page%%|*}</loc><lastmod>$(lastmod "${page#*|}")</lastmod></url>"
  done
  echo '</urlset>'
} > sitemap.xml

if [[ "${1:-}" == "--ping" ]]; then
  urls=$(printf '"https://dinesense.app%s",' "${pages[@]%%|*}")
  curl -fsS -X POST https://api.indexnow.org/indexnow \
    -H 'Content-Type: application/json; charset=utf-8' \
    -d "{\"host\":\"dinesense.app\",\"key\":\"$key\",\"keyLocation\":\"https://dinesense.app/$key.txt\",\"urlList\":[${urls%,}]}"
  echo "IndexNow notified."
fi
