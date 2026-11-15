# Danat Quiz Cloudflare API

This Worker is the trusted backend for Firebase-authenticated app requests and AdMob rewarded-life verification.

## Routes

- `GET /health` — basic service health.
- `GET /v1/session` — validates a Firebase ID token.
- `POST /v1/life-loss` — deducts one life using a server-side Firestore precondition.
- `POST /v1/timed-lives` — enforces the three-hour cooldown and ten-life daily free-claim cap on the server.
- `POST /v1/ad-session` — creates a one-time, ten-minute life-ad session for the authenticated player.
- `POST /v1/ad-status` — returns pending/completed status for that player's ad session; the app uses this to display the server-confirmed life.
- `GET /v1/admob/ssv` — AdMob's signed server-side verification callback.

## Reward security flow

1. The app authenticates the player with Firebase Auth (including anonymous guest accounts).
2. The app requests a one-time ad session using its Firebase ID token.
3. The Worker stores the session in Firestore and returns its opaque ID.
4. The native AdMob SDK sends the Firebase UID and session ID as SSV user/custom data.
5. The Worker verifies the original signed query string using Google's current AdMob public key.
6. The Worker validates the approved Android/iOS life ad-unit IDs, reward item/amount, UID, and unused/unexpired session.
7. A single atomic Firestore commit increments `users/{uid}.livesBalance` and `rewardedAdsWatched`, creates an immutable `adRewardLedger/{transactionId}` record, and marks the session complete using the session's `updateTime` as a compare-and-set precondition. The unique transaction document prevents a repeated callback from granting twice, and the session precondition prevents two distinct callbacks from consuming one session.

Client-side ad callbacks never grant lives. AdMob callbacks that encounter temporary Firestore failures receive HTTP 503 so Google can retry. Invalid callbacks are rejected.

## Required Cloudflare Worker secret

The Worker needs a Google service-account JSON document stored only as a Cloudflare secret named:

`FIREBASE_SERVICE_ACCOUNT_JSON`

The service account must belong to Firebase project `danat-quiz-app` and have the **Cloud Datastore User** role (Firestore data access). Never commit the JSON/private key to GitHub or put it in the app.

The service-account JSON must contain `client_email`, `private_key`, and `token_uri`. The Worker exchanges a short-lived signed assertion for a Google OAuth access token and uses the Firestore REST API. Access tokens are cached only in Worker memory.

## AdMob configuration required

For both rewarded-life ad units below, enable Server-side verification and set the callback URL to:

`https://danat-quiz-api.danatcoin.workers.dev/v1/admob/ssv`

- Android life: `ca-app-pub-1622329571366129/5894243820`
- iOS life: `ca-app-pub-1622329571366129/9787267701`

Configure the reward on each ad unit as amount `1`, item `life` (exact lowercase spelling). Those values are also set in `wrangler.toml`. Do not configure the points ad units as life rewards.

AdMob production callbacks are required for the real SSV flow; test ads do not send production SSV callbacks. Use AdMob's SSV test tool only after the callback URL has been deployed and configured.

## Deployment and setup status

This code is on the `security/cloudflare-api` branch only. It has not been deployed or merged. Before enabling the production ad units, configure the Cloudflare secret, deploy the Worker, verify `/health`, and configure/verify both AdMob callback URLs. Then test with a real production ad and confirm exactly one life and one ledger record are added.

The app currently fails closed: a client ad callback alone does not grant a life. After the ad finishes, the app polls `/v1/ad-status`; it updates the displayed life count only when the Worker reports a completed verified session.
