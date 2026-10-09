# Call Keeper — Android APK build

This project wraps the supplied `Call Keeper 3.0.html` as a local Android app using Capacitor.
The scoring logic and UI are kept in `www/index.html`; no React rewrite is needed.

## Build an APK online (no Android Studio)

1. Create a GitHub repository, for example `call-keeper-android`.
2. Upload the contents of this ZIP (not the ZIP file itself) to the repository.
3. Open **Actions**.
4. Select **Build Call Keeper Android APK**.
5. Click **Run workflow** (or push to the `main` branch to build automatically).
6. When the workflow succeeds, open the run and download the artifact **Call-Keeper-Android-APK**.
7. Extract the artifact ZIP; it contains `app-debug.apk`.
8. Transfer `app-debug.apk` to your Android phone and install it. You may need to allow installation from that source.

## What is included

- `www/index.html`: the original standalone HTML app.
- `capacitor.config.ts`: Android app ID and display name.
- `.github/workflows/build-android.yml`: cloud build workflow.

## Data storage

The app uses browser `localStorage` for saved player names, match history, and tournament history.
Inside the Android app, this data is stored locally on that app installation/device. Clearing app storage or uninstalling the app may delete it. This initial build does not sync data across devices.

## Before publishing to Google Play

This workflow creates a **debug APK for testing**, not a signed production release.
For Play Store publishing, generate a signed release AAB/APK, configure a signing key securely, add a proper app icon/screenshots/privacy policy, and test on multiple Android versions.
