# Danat Quiz Cloudflare API

This Worker is the trusted backend for Firebase-authenticated app requests and AdMob rewarded-ad server-side verification.

## Routes

- `GET /health` — basic service health.
- `GET /v1/session` — validates a Firebase ID token.
- `POST /v1/life-loss` — deducts one life using a server-side Firestore precondition.
- `POST /v1/timed-lives` — enforces the three-hour cooldown and ten-life daily free-claim cap on the server.
- `POST /v1/ad-session` — creates a one-time, ten-minute rewarded-ad session for the authenticated player.
- `POST /v1/ad-status` — returns pending/completed status for that player's ad session.
- `GET /v1/admob/ssv` — verifies AdMob's signed server-side verification callback.

## Verified-ad security flow

1. The app authenticates the player with Firebase Auth.
2. The app requests a one-time ad session from the Worker using its Firebase ID token.
3. The Worker stores the session in Firestore and returns its opaque ID.
4. The native AdMob SDK sends the Firebase UID and session ID as SSV user/custom data.
5. The Worker verifies the signed query string using Google's current AdMob public key.
6. The Worker validates the approved ad-unit ID, reward item/amount, UID, and unused/unexpired session.
7. A single atomic Firestore commit updates the player profile, creates an immutable `adRewardLedger/{transactionId}` record, and marks the session complete. A repeated transaction cannot grant twice.

Only the signed AdMob callback is proof of a rewarded ad. Client-side ad callbacks and simulated game ad breaks do not count. The ledger records the player UID, ad-unit ID, placement, transaction ID, verification type, and UTC timestamp, which are the source records needed for later daily revenue reconciliation.

## Approved rewarded ad units

| Placement | Platform | Ad unit ID |
|---|---|---|
| Life | Android | `ca-app-pub-1622329571366129/5894243820` |
| Life | iOS | `ca-app-pub-1622329571366129/9787267701` |
| Points | Android | `ca-app-pub-1622329571366129/4581162153` |
| Points | iOS | `ca-app-pub-1622329571366129/8282614340` |

The Worker currently validates life rewards as amount `1`, item `life`; points rewards default to amount `10`, item `points`. The app's currently observed rewarded-ad session flow invokes the life placement. Do not treat points ad units as active until the app actually requests a points session and their AdMob SSV settings have been configured and tested.

For each active production rewarded ad unit, enable Server-side verification and set the callback URL to:

`https://danat-quiz-api.danatcoin.workers.dev/v1/admob/ssv`

Test ad units do not produce production SSV callbacks. Use AdMob's SSV test tool for callback verification, then confirm a production callback creates exactly one ledger record.

## Firebase Worker secret

The Worker needs a Google service-account JSON document stored only as a Cloudflare secret named `FIREBASE_SERVICE_ACCOUNT_JSON`. The service account must belong to Firebase project `danat-quiz-app` and have the **Cloud Datastore User** role.

In Cloudflare, open **Workers & Pages → danat-quiz-api → Settings → Variables and Secrets** and add the complete JSON as a Secret named `FIREBASE_SERVICE_ACCOUNT_JSON`. The JSON must contain `client_email`, `private_key`, and `token_uri`. Never commit it to GitHub or send it in chat.

## DNC advertising-revenue allocation — not yet implemented

The current Worker records verified rewarded-ad events; it does **not** yet import AdMob earnings or issue DNC ad-revenue credits.

The agreed allocation policy for the future revenue job is:

- Use AdMob's reported estimated earnings by UTC date and ad unit as the revenue source.
- Reserve 30% of eligible revenue for players and 70% for Danat.
- Allocate the player pool proportionally to each registered player's verified SSV count for the same date and ad unit.
- Convert the allocated USD amount to DNC at the agreed display rate of 1 DNC = 1 USD.
- Keep ad-revenue credits separate from game points and manual admin credits.
- Write immutable, idempotent allocation ledger records and a daily reconciliation record before updating player balances.
- Never credit from simulated ads, client callbacks, or an unverified report. Do not silently treat estimated earnings as final settled AdMob payouts.

No DNC ad-revenue credits are issued by the current Worker. The AdMob reporting/OAuth integration and scheduled allocation job still need to be added and tested.

## Deployment status

The Worker has previously been deployed to Cloudflare from branch `security/cloudflare-api`. The current source changes on this branch are not merged into `main`. The GitHub Actions workflow `.github/workflows/deploy-worker.yml` deploys this branch when files under `worker/**` change. After any code change, verify the workflow run and `GET /health` before relying on it.
