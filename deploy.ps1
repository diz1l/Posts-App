# Vercel Deployment Script for PowerShell
# Run this script from the project root directory

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vercel Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if vercel is installed
Write-Host "Checking Vercel CLI installation..." -ForegroundColor Yellow
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
    Write-Host "Vercel CLI installed successfully!" -ForegroundColor Green
} else {
    Write-Host "Vercel CLI is already installed." -ForegroundColor Green
}

Write-Host ""

# Build the project locally first
Write-Host "Building project locally..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
} else {
    Write-Host "Build failed! Please fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Deploy to Vercel
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Ready to deploy to Vercel!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Please run one of the following commands manually:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  For preview deployment:" -ForegroundColor White
Write-Host "    vercel" -ForegroundColor Green
Write-Host ""
Write-Host "  For production deployment:" -ForegroundColor White
Write-Host "    vercel --prod" -ForegroundColor Green
Write-Host ""
Write-Host "Note: You'll need to login first if you haven't already:" -ForegroundColor Yellow
Write-Host "    vercel login" -ForegroundColor Green
Write-Host ""
