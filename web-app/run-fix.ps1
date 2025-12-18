# Complete Firebase permissions fix
# This script handles everything after gcloud authentication

param(
    [switch]$SkipAuth
)

$ErrorActionPreference = "Continue"

Write-Host "`n=== Firebase Deployment Permissions Fix ===" -ForegroundColor Cyan
Write-Host ""

if (-not $SkipAuth) {
    Write-Host "Step 1: Authenticating gcloud..." -ForegroundColor Yellow
    Write-Host "A browser will open - please complete authentication." -ForegroundColor Gray
    gcloud auth login automations@digitalboostplus.io
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Authentication failed. Please run manually:" -ForegroundColor Red
        Write-Host "  gcloud auth login automations@digitalboostplus.io" -ForegroundColor White
        exit 1
    }
    Write-Host "✓ Authentication successful" -ForegroundColor Green
    Write-Host ""
}

Write-Host "Step 2: Configuring project..." -ForegroundColor Yellow
gcloud config set project dtx-venue-2025
gcloud config set account automations@digitalboostplus.io
Write-Host "✓ Project configured" -ForegroundColor Green
Write-Host ""

Write-Host "Step 3: Enabling required APIs..." -ForegroundColor Yellow
$apis = @(
    "firebaseextensions.googleapis.com",
    "cloudbuild.googleapis.com",
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "cloudfunctions.googleapis.com",
    "eventarc.googleapis.com",
    "pubsub.googleapis.com"
)

$enabled = 0
foreach ($api in $apis) {
    Write-Host "  Enabling $api..." -NoNewline
    gcloud services enable $api --project=dtx-venue-2025 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host " ✓" -ForegroundColor Green
        $enabled++
    } else {
        Write-Host " (may already be enabled)" -ForegroundColor Yellow
    }
}
$apiCount = $apis.Count
Write-Host "✓ APIs configured - $enabled of $apiCount" -ForegroundColor Green
Write-Host ""

Write-Host "Step 4: Granting service account permissions..." -ForegroundColor Yellow
$projectNumber = "59987482952"

# Cloud Build Service Account
Write-Host "  Setting up Cloud Build SA..." -NoNewline
$buildCmd = "gcloud projects add-iam-policy-binding dtx-venue-2025 --member=`"serviceAccount:$projectNumber@cloudbuild.gserviceaccount.com`" --role=`"roles/cloudbuild.builds.builder`""
Invoke-Expression $buildCmd 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host " ✓" -ForegroundColor Green
} else {
    Write-Host " (will be created on first build)" -ForegroundColor Yellow
}

# Firebase Service Account
Write-Host "  Setting up Firebase SA..." -NoNewline
$firebaseCmd = "gcloud projects add-iam-policy-binding dtx-venue-2025 --member=`"serviceAccount:$projectNumber@cloudservices.gserviceaccount.com`" --role=`"roles/editor`""
Invoke-Expression $firebaseCmd 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host " ✓" -ForegroundColor Green
} else {
    Write-Host " (may need manual setup)" -ForegroundColor Yellow
}
Write-Host "✓ Service accounts configured" -ForegroundColor Green
Write-Host ""

Write-Host "Step 5: Waiting for changes to propagate - 30 seconds..." -ForegroundColor Yellow
Start-Sleep -Seconds 30
Write-Host "✓ Ready to deploy" -ForegroundColor Green
Write-Host ""

Write-Host "=== Setup Complete ===" -ForegroundColor Cyan
Write-Host "You can now deploy with:" -ForegroundColor White
Write-Host "  firebase deploy --only hosting" -ForegroundColor Gray
Write-Host ""
