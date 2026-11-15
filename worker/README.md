# Danat Quiz API (Cloudflare Worker)

This Worker is the first security-backend foundation for Danat Quiz.

## Implemented
- `GET /health`: deployment health check.
- `GET /v1/session`: verifies a Firebase Authentication ID token signature and core claims using Google's published Firebase Secure Token JWK set. Returns only the authenticated UID and basic account type.
- CORS is denied unless the exact frontend origin is configured in the Worker variable `APP_ORIGIN`.

## Not implemented yet
This is deliberately not connected to gameplay or Firestore writes yet. Quiz-answer validation, points/lives transactions, timed life claims, AdMob SSV, and admin DNC adjustments must be added before client-side reward writes are disabled or Firestore rules are deployed.

## Cloudflare configuration
Set `APP_ORIGIN` to the exact origin of the deployed Danat Quiz frontend (scheme + hostname, no path). Do not put service-account keys, private keys, or API tokens in source control.

## Test
- `GET https://danat-quiz-api.danatcoin.workers.dev/health`
- After setting `APP_ORIGIN`, call `GET /v1/session` with an up-to-date Firebase ID token in the Authorization Bearer header.
