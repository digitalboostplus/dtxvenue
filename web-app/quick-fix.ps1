# Quick fix script - Run this after authenticating gcloud
# First run: gcloud auth login automations@digitalboostplus.io
# Then run this script

$ErrorActionPreference = "Continue"

Write-Host "Enabling required APIs for Firebase deployment..." -ForegroundColor Cyan

$apis = @(
    "firebaseextensions.googleapis.com",
    "cloudbuild.googleapis.com", 
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "cloudfunctions.googleapis.com",
    "eventarc.googleapis.com",
    "pubsub.googleapis.com"
)

foreach ($api in $apis) {
    Write-Host "Enabling $api..." -ForegroundColor Yellow
    gcloud services enable $api --project=dtx-venue-2025
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✓ Enabled" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Failed (may already be enabled or need permissions)" -ForegroundColor Red
    }
}

Write-Host "`nGranting service account permissions..." -ForegroundColor Cyan

$projectNumber = "59987482952"

# Cloud Build Service Account
Write-Host "Setting up Cloud Build Service Account..." -ForegroundColor Yellow
gcloud projects add-iam-policy-binding dtx-venue-2025 `
    --member="serviceAccount:$projectNumber@cloudbuild.gserviceaccount.com" `
    --role="roles/cloudbuild.builds.builder" `
    2>&1 | Out-Null

if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✓ Cloud Build permissions granted" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Cloud Build SA may not exist yet (will be created on first build)" -ForegroundColor Yellow
}

# Firebase Service Account  
Write-Host "Setting up Firebase Service Account..." -ForegroundColor Yellow
gcloud projects add-iam-policy-binding dtx-venue-2025 `
    --member="serviceAccount:$projectNumber@cloudservices.gserviceaccount.com" `
    --role="roles/editor" `
    2>&1 | Out-Null

if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✓ Firebase Service Account permissions granted" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Firebase SA may need to be created" -ForegroundColor Yellow
}

Write-Host "`n✓ Setup complete! Waiting 30 seconds for propagation..." -ForegroundColor Green
Start-Sleep -Seconds 30

Write-Host "`nReady to deploy. Run:" -ForegroundColor Cyan
Write-Host "  firebase deploy --only hosting" -ForegroundColor White

