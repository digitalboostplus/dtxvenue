# PowerShell script to fix Firebase deployment permissions
# Run this script to enable required APIs and verify service accounts

Write-Host "Setting up Firebase project permissions..." -ForegroundColor Cyan

# Set the project
Write-Host "`n1. Setting gcloud project..." -ForegroundColor Yellow
gcloud config set project dtx-venue-2025

# Authenticate (this will open a browser)
Write-Host "`n2. Authenticating gcloud..." -ForegroundColor Yellow
Write-Host "   IMPORTANT: A browser window will open for authentication." -ForegroundColor Cyan
Write-Host "   Please complete the sign-in in your browser, then return here." -ForegroundColor Gray
Write-Host "   Press any key to start authentication..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
gcloud auth login automations@digitalboostplus.io

# Enable required APIs
Write-Host "`n3. Enabling required APIs..." -ForegroundColor Yellow
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
    Write-Host "   Enabling $api..." -ForegroundColor Gray
    gcloud services enable $api --project=dtx-venue-2025
}

# Grant Cloud Build Service Account permissions
Write-Host "`n4. Granting Cloud Build Service Account permissions..." -ForegroundColor Yellow
$projectNumber = "59987482952"
$cloudBuildSA = "$projectNumber@cloudbuild.gserviceaccount.com"
$cloudServicesSA = "$projectNumber@cloudservices.gserviceaccount.com"

Write-Host "   Granting Cloud Build Service Account role to $cloudBuildSA..." -ForegroundColor Gray
gcloud projects add-iam-policy-binding dtx-venue-2025 `
    --member="serviceAccount:$cloudBuildSA" `
    --role="roles/cloudbuild.builds.builder" `
    2>&1 | Out-Null

Write-Host "   Granting Editor role to $cloudServicesSA..." -ForegroundColor Gray
gcloud projects add-iam-policy-binding dtx-venue-2025 `
    --member="serviceAccount:$cloudServicesSA" `
    --role="roles/editor" `
    2>&1 | Out-Null

Write-Host "`n5. Verifying service accounts..." -ForegroundColor Yellow
$buildSAExists = gcloud iam service-accounts describe $cloudBuildSA --project=dtx-venue-2025 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✓ Cloud Build Service Account exists" -ForegroundColor Green
} else {
    Write-Host "   ⚠ Cloud Build Service Account will be created automatically on first build" -ForegroundColor Yellow
}

$servicesSAExists = gcloud iam service-accounts describe $cloudServicesSA --project=dtx-venue-2025 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✓ Firebase Service Account exists" -ForegroundColor Green
} else {
    Write-Host "   ⚠ Firebase Service Account may need to be created" -ForegroundColor Yellow
}

Write-Host "`n✓ Setup complete! Waiting 30 seconds for changes to propagate..." -ForegroundColor Green
Start-Sleep -Seconds 30

Write-Host "`nYou can now try deploying again:" -ForegroundColor Cyan
Write-Host "   firebase deploy --only hosting" -ForegroundColor White

