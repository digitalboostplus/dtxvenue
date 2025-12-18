# Firebase CLI Fix Commands

Run these commands in order to fix the permissions issue:

## Step 1: Authenticate gcloud
```powershell
gcloud auth login automations@digitalboostplus.io
```
This will open a browser - complete the authentication there.

## Step 2: Set the project
```powershell
gcloud config set project dtx-venue-2025
```

## Step 3: Enable required APIs
```powershell
gcloud services enable firebaseextensions.googleapis.com --project=dtx-venue-2025
gcloud services enable cloudbuild.googleapis.com --project=dtx-venue-2025
gcloud services enable run.googleapis.com --project=dtx-venue-2025
gcloud services enable artifactregistry.googleapis.com --project=dtx-venue-2025
gcloud services enable cloudfunctions.googleapis.com --project=dtx-venue-2025
gcloud services enable eventarc.googleapis.com --project=dtx-venue-2025
gcloud services enable pubsub.googleapis.com --project=dtx-venue-2025
```

## Step 4: Grant service account permissions
```powershell
# Cloud Build Service Account
gcloud projects add-iam-policy-binding dtx-venue-2025 --member="serviceAccount:59987482952@cloudbuild.gserviceaccount.com" --role="roles/cloudbuild.builds.builder"

# Firebase Service Account (for Extensions API)
gcloud projects add-iam-policy-binding dtx-venue-2025 --member="serviceAccount:59987482952@cloudservices.gserviceaccount.com" --role="roles/editor"
```

## Step 5: Wait and deploy
Wait 30-60 seconds for changes to propagate, then:
```powershell
cd web-app
firebase deploy --only hosting
```

## Alternative: Run the automated script
After authenticating gcloud (Step 1), you can run:
```powershell
cd web-app
.\quick-fix.ps1
```

