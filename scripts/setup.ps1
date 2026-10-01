Param(
  [switch]$pnpm,
  [switch]$bun
)

Write-Host "Bootstrapping project..." -ForegroundColor Cyan

if (Test-Path .env -PathType Leaf) {
  Write-Host ".env already exists" -ForegroundColor Yellow
} elseif (Test-Path .env.example -PathType Leaf) {
  Copy-Item .env.example .env
  Write-Host "Created .env from .env.example" -ForegroundColor Green
}

$cmd = "npm i"
if ($pnpm) { $cmd = "pnpm i" }
if ($bun)  { $cmd = "bun i" }

Write-Host "Installing dependencies with: $cmd" -ForegroundColor Cyan
cmd /c $cmd

Write-Host "Starting dev server..." -ForegroundColor Cyan
cmd /c "npm run dev"
