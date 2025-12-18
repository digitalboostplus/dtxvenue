# Fix Firebase Deployment Permissions

## Issue
The deployment is failing due to missing permissions on service accounts, which may also cause the Extensions API error.

## Quick Fix Steps

### 1. Cloud Build Service Account
1. Go to: https://console.cloud.google.com/iam-admin/iam?project=dtx-venue-2025
2. Search for: `59987482952@cloudbuild.gserviceaccount.com`
3. If it exists, ensure it has **Cloud Build Service Account** or **Editor** role
4. If it doesn't exist, it will be auto-created on first build - ensure your account has permission to create service accounts

### 2. Firebase Service Account (for Extensions API)
1. In the same IAM page, search for: `59987482952@cloudservices.gserviceaccount.com`
2. Ensure it has **Editor** role
3. If missing, you may need to:
   - Enable Firebase APIs first
   - Wait a few minutes for the service account to be created automatically
   - Or contact Firebase support

### 3. Verify Required APIs
Go to: https://console.cloud.google.com/apis/library?project=dtx-venue-2025

Ensure these APIs are enabled:
- ✅ Firebase Extensions API (`firebaseextensions.googleapis.com`)
- ✅ Cloud Build API (`cloudbuild.googleapis.com`)
- ✅ Cloud Run API (`run.googleapis.com`)
- ✅ Artifact Registry API (`artifactregistry.googleapis.com`)
- ✅ Cloud Functions API (`cloudfunctions.googleapis.com`)
- ✅ Eventarc API (`eventarc.googleapis.com`)
- ✅ Pub/Sub API (`pubsub.googleapis.com`)

### 4. Your Account Permissions
Ensure your account (`automations@digitalboostplus.io`) has:
- **Owner** or **Editor** role on the project
- Permission to enable APIs
- Permission to modify IAM policies (if you need to grant roles)

### 5. After Making Changes
1. Wait 5-10 minutes for changes to propagate
2. Retry deployment: `firebase deploy --only hosting`

## Alternative: Use Firebase Console
You can also try enabling the Extensions API through Firebase Console:
1. Go to: https://console.firebase.google.com/project/dtx-venue-2025/settings/general
2. Check that all required services are enabled
3. Try deploying again

## If Issues Persist
Check the build logs at the URL provided in the error message:
- Example: https://console.cloud.google.com/cloud-build/builds;region=us-central1/[BUILD_ID]?project=59987482952

