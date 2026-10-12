param([ValidateSet('studio','check','stills','render','serve','website','assets')][string]$Action = 'serve')
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$taskNode = if (Test-Path -LiteralPath $bundledNode) { $bundledNode } else { (Get-Command node).Source }
switch ($Action) {
  'studio' { & $taskNode node_modules/@remotion/cli/remotion-cli.js studio --no-open --port=3120 }
  'check' {
    & $taskNode node_modules/typescript/bin/tsc
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    & $taskNode node_modules/eslint/bin/eslint.js src
  }
  'stills' { & $taskNode scripts/render.mjs --stills }
  'render' { & $taskNode scripts/render.mjs }
  'serve' { & $taskNode scripts/serve.mjs }
  'website' { & $taskNode scripts/serve.mjs --website }
  'assets' { & $taskNode scripts/sync-assets.mjs }
}
exit $LASTEXITCODE
