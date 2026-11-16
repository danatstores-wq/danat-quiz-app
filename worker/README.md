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
- `GET /v1/admin/admob/reconciliation-preview?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` — admin-only, read-only earnings and verified-view reconciliation preview.
- `POST /v1/admin/admob/reconciliation-stage?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` — admin-only, idempotently stores report rows for manual review; it does not issue DNC.

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

## AdMob earnings import and DNC revenue allocation

The Worker now includes a report client and an admin-only reconciliation preview/staging flow.

### Required Cloudflare secrets

Add these under **Workers & Pages → danat-quiz-api → Settings → Variables and Secrets**:

- `ADMOB_OAUTH_CLIENT_ID` — OAuth client ID.
- `ADMOB_OAUTH_CLIENT_SECRET` — OAuth client secret.
- `ADMOB_REFRESH_TOKEN` — OAuth refresh token with the AdMob reporting scope.
- `ADMOB_ADMIN_UIDS` — comma-separated Firebase Auth UIDs allowed to access the report endpoints.

Optional variable:

- `ADMOB_PUBLISHER_ID` — AdMob publisher ID (format `pub-...`). If omitted, the Worker automatically discovers the AdMob account when exactly one account is available. Multiple accounts require this variable.

Never put OAuth credentials or refresh tokens in GitHub, app code, or chat. Do not reuse any refresh token previously pasted into chat; create a fresh one and store it directly as a Cloudflare secret. Google OAuth apps in Testing mode may have refresh-token lifetime restrictions.

### Report endpoints

Both endpoints require a Firebase ID token belonging to a UID listed in `ADMOB_ADMIN_UIDS`.

- Preview: `GET /v1/admin/admob/reconciliation-preview?startDate=2026-11-15&endDate=2026-11-15`
- Stage: `POST /v1/admin/admob/reconciliation-stage?startDate=2026-11-15&endDate=2026-11-15`

The report requests `DATE` and `AD_UNIT` dimensions and `ESTIMATED_EARNINGS`, localized to USD. The account's AdMob reporting timezone is used to group verified SSV ledger timestamps into the same report dates. The query rejects a ledger result at its 10,000-document safety limit rather than silently allocating from incomplete data.

Staged rows are stored in `adMobDailyReconciliations` with deterministic IDs, an immutable snapshot of per-player allocations, `status: pending_review`, and `creditsIssued: false`. Repeating a staging request does not overwrite an existing row. The stage endpoint is capped at 400 rows per request.

### Allocation policy and safety

- Reserve 30% of reported estimated earnings for players and 70% for Danat.
- Allocate the player pool proportionally to registered players' verified AdMob SSV events for the same report date and ad unit.
- Convert USD to DNC at the agreed display rate of 1 DNC = 1 USD. Values are kept as integer micros to avoid floating-point rounding.
- Only `verification: admob_ssv` records count. Client callbacks and simulated ads are excluded.
- Rows with no verified views allocate zero to players; the full row remains with Danat.
- Keep ad-revenue credits separate from game points and manual admin credits.

**Important:** this implementation only previews and stages estimated earnings for manual review. It does not approve reports, update player DNC balances, create spendable DNC credits, or claim that estimated earnings are final settled payouts. Do not enable credits until report corrections, reconciliation review, immutable credit-ledger writes, and balance-update idempotency have been implemented and tested.

## Deployment status

The Worker has previously been deployed to Cloudflare from branch `security/cloudflare-api`. The current source changes on this branch are not merged into `main`. The GitHub Actions workflow `.github/workflows/deploy-worker.yml` deploys this branch when files under `worker/**` change. After any code change, verify the workflow run and `GET /health` before relying on it.
