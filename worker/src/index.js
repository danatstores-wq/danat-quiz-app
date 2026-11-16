import { getAdMobAccessToken, listAdMobAccounts, generateAdMobNetworkReport } from "./admob-report.js";
import { buildRevenueReconciliation } from "./revenue-reconciliation.js";
const FIREBASE_PROJECT_ID = "danat-quiz-app";
const FIREBASE_ISSUER = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
const FIREBASE_JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
const ADMOB_KEYS_URL = "https://www.gstatic.com/admob/reward/verifier-keys.json";
const AD_UNITS_BY_PLACEMENT = {
  life: new Set([
    "ca-app-pub-1622329571366129/5894243820",
    "ca-app-pub-1622329571366129/9787267701"
  ]),
  points: new Set([
    "ca-app-pub-1622329571366129/4581162153",
    "ca-app-pub-1622329571366129/8282614340"
  ])
};
const encoder = new TextEncoder();
let firebaseAccessTokenCache = null;

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers }
  });
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const allowedOrigins = new Set([
    env.APP_ORIGIN,
    "https://localhost",
    "http://localhost",
    "capacitor://localhost"
  ].filter(Boolean));
  if (!origin || !allowedOrigins.has(origin)) return {};
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "authorization, content-type",
    "vary": "Origin"
  };
}

function decodeBase64Url(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - normalized.length % 4) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function encodeBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeJsonPart(value) {
  return JSON.parse(new TextDecoder().decode(decodeBase64Url(value)));
}

async function verifyFirebaseIdToken(request) {
  const authorization = request.headers.get("Authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  if (!match) throw new Error("Missing bearer token");

  const token = match[1];
  if (token.length > 8192) throw new Error("Token too large");
  const parts = token.split(".");
  if (parts.length !== 3 || parts.some((part) => !part)) throw new Error("Malformed token");

  const header = decodeJsonPart(parts[0]);
  const claims = decodeJsonPart(parts[1]);
  if (header.alg !== "RS256" || !header.kid) throw new Error("Unsupported token");

  const now = Math.floor(Date.now() / 1000);
  if (claims.iss !== FIREBASE_ISSUER ||
      claims.aud !== FIREBASE_PROJECT_ID ||
      typeof claims.sub !== "string" || claims.sub.length === 0 ||
      claims.sub.length > 128 ||
      typeof claims.exp !== "number" || claims.exp <= now ||
      typeof claims.iat !== "number" || claims.iat > now + 60 ||
      claims.iat < now - 3600 - 60 ||
      claims.exp - claims.iat > 3600 + 60 ||
      typeof claims.auth_time !== "number" ||
      claims.auth_time > now + 60 ||
      claims.auth_time > claims.iat + 60) {
    throw new Error("Invalid token claims");
  }

  const response = await fetch(FIREBASE_JWKS_URL, {
    cf: { cacheTtl: 3600, cacheEverything: true }
  });
  if (!response.ok) throw new Error("Unable to retrieve Firebase signing keys");
  const jwks = await response.json();
  const jwk = jwks.keys?.find((key) => key.kid === header.kid && key.use === "sig");
  if (!jwk) throw new Error("Unknown Firebase signing key");

  const publicKey = await crypto.subtle.importKey(
    "jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]
  );
  const signedData = encoder.encode(`${parts[0]}.${parts[1]}`);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", publicKey, decodeBase64Url(parts[2]), signedData);
  if (!valid) throw new Error("Invalid Firebase token signature");

  return { uid: claims.sub, isAnonymous: claims.firebase?.sign_in_provider === "anonymous" };
}

function pemToBytes(pem) {
  const body = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, "");
  return Uint8Array.from(atob(body), (c) => c.charCodeAt(0));
}

async function getFirebaseAccessToken(env) {
  const now = Math.floor(Date.now() / 1000);
  if (firebaseAccessTokenCache && firebaseAccessTokenCache.exp > now + 60) return firebaseAccessTokenCache.token;
  // Accept the original lowercase Cloudflare secret name as well as the
  // documented uppercase name, so existing deployments do not need a secret
  // to be re-created just to match casing.
  const serviceAccountJson = env.FIREBASE_SERVICE_ACCOUNT_JSON || env.firebase_service_account;
  if (!serviceAccountJson) throw Object.assign(new Error("Firebase service account secret is not configured"), { status: 503 });

  const account = JSON.parse(serviceAccountJson);
  if (!account.client_email || !account.private_key || !account.token_uri) throw new Error("Invalid Firebase service account secret");

  const header = encodeBase64Url(encoder.encode(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const claims = encodeBase64Url(encoder.encode(JSON.stringify({
    iss: account.client_email,
    scope: "https://www.googleapis.com/auth/datastore",
    aud: account.token_uri,
    iat: now,
    exp: now + 3600
  })));
  const unsigned = `${header}.${claims}`;
  const privateKey = await crypto.subtle.importKey(
    "pkcs8", pemToBytes(account.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]
  );
  const signature = new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", privateKey, encoder.encode(unsigned)));
  const assertion = `${unsigned}.${encodeBase64Url(signature)}`;
  const response = await fetch(account.token_uri, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });
  if (!response.ok) throw Object.assign(new Error("Google OAuth token exchange failed"), { status: 503 });
  const data = await response.json();
  firebaseAccessTokenCache = { token: data.access_token, exp: now + Number(data.expires_in || 3600) };
  return data.access_token;
}

function firestoreValue(value) {
  if (typeof value === "string") return { stringValue: value };
  if (typeof value === "number") return { integerValue: String(value) };
  if (typeof value === "boolean") return { booleanValue: value };
  if (value instanceof Date) return { timestampValue: value.toISOString() };
  return { nullValue: null };
}

function firestoreFields(values) {
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, firestoreValue(value)]));
}

function documentPath(collection, id) {
  return `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/${collection}/${id}`;
}

async function firestoreRequest(env, path, options = {}) {
  const accessToken = await getFirebaseAccessToken(env);
  return fetch(`https://firestore.googleapis.com/v1/${path}`, {
    ...options,
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      ...(options.headers || {})
    }
  });
}

async function createAdSession(env, uid, placement) {
  const sessionId = crypto.randomUUID().replace(/-/g, "");
  const now = new Date();
  const response = await firestoreRequest(env, `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents:commit`, {
    method: "POST",
    body: JSON.stringify({
      writes: [{
        update: {
          name: documentPath("adRewardSessions", sessionId),
          fields: firestoreFields({ uid, placement, status: "pending", createdAt: now })
        },
        currentDocument: { exists: false }
      }]
    })
  });
  if (!response.ok) throw new Error("Could not create ad reward session");
  return sessionId;
}

function derToRaw(der) {
  let offset = 0;
  if (der[offset++] !== 0x30) throw new Error("Invalid DER signature");
  let sequenceLength = der[offset++];
  if (sequenceLength & 0x80) {
    const count = sequenceLength & 0x7f;
    sequenceLength = 0;
    for (let i = 0; i < count; i++) sequenceLength = (sequenceLength << 8) | der[offset++];
  }
  if (offset + sequenceLength !== der.length || der[offset++] !== 0x02) throw new Error("Invalid DER sequence");
  const rLength = der[offset++];
  let r = der.slice(offset, offset + rLength);
  offset += rLength;
  if (der[offset++] !== 0x02) throw new Error("Invalid DER integer");
  const sLength = der[offset++];
  let s = der.slice(offset, offset + sLength);
  const trim = (bytes) => bytes.length === 33 && bytes[0] === 0 ? bytes.slice(1) : bytes;
  r = trim(r); s = trim(s);
  if (r.length > 32 || s.length > 32) throw new Error("Invalid ECDSA integer size");
  const raw = new Uint8Array(64);
  raw.set(r, 32 - r.length);
  raw.set(s, 64 - s.length);
  return raw;
}

async function verifyAdMobSignature(request) {
  const rawQuery = new URL(request.url).search.slice(1);
  const signatureMarker = "&signature=";
  const signatureIndex = rawQuery.lastIndexOf(signatureMarker);
  if (signatureIndex < 0 || !/&key_id=[^&]+$/.test(rawQuery)) throw new Error("Malformed SSV query");
  const signedQuery = rawQuery.slice(0, signatureIndex);
  const tail = rawQuery.slice(signatureIndex + 1);
  const tailParams = new URLSearchParams(tail);
  const signatureText = tailParams.get("signature");
  const keyId = tailParams.get("key_id");
  if (!signatureText || !keyId || [...tailParams.keys()].join(",") !== "signature,key_id") throw new Error("Missing SSV signature fields");

  const params = new URLSearchParams(signedQuery);
  const required = ["ad_unit", "custom_data", "reward_amount", "reward_item", "timestamp", "transaction_id", "user_id"];
  for (const name of required) if (!params.has(name)) throw new Error(`Missing SSV field: ${name}`);
  let timestamp = Number(params.get("timestamp"));
  if (timestamp > 1e14) timestamp /= 1000;
  if (!Number.isFinite(timestamp) || Math.abs(Date.now() - timestamp) > 10 * 60 * 1000) throw new Error("Stale SSV callback");

  const keyResponse = await fetch(ADMOB_KEYS_URL, { cf: { cacheTtl: 3600, cacheEverything: true } });
  if (!keyResponse.ok) throw Object.assign(new Error("Unable to retrieve AdMob verification keys"), { status: 503 });
  const keyData = await keyResponse.json();
  const key = keyData.keys?.find((entry) => String(entry.keyId) === keyId);
  if (!key?.base64) throw new Error("Unknown AdMob key ID");

  const keyBytes = Uint8Array.from(atob(key.base64), (c) => c.charCodeAt(0));
  const publicKey = await crypto.subtle.importKey(
    "spki", keyBytes, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]
  );
  const signature = derToRaw(decodeBase64Url(signatureText));
  const valid = await crypto.subtle.verify(
    { name: "ECDSA", hash: "SHA-256" }, publicKey, signature, encoder.encode(signedQuery)
  );
  if (!valid) throw new Error("Invalid AdMob signature");

  return params;
}

async function readFirestoreDocument(env, collection, id) {
  const response = await firestoreRequest(env, `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/${collection}/${encodeURIComponent(id)}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Firestore read failed");
  return response.json();
}

async function getAdSessionStatus(env, uid, sessionId) {
  if (typeof sessionId !== "string" || !/^[a-f0-9]{32}$/i.test(sessionId)) {
    throw Object.assign(new Error("Invalid session ID"), { status: 400 });
  }
  const session = await readFirestoreDocument(env, "adRewardSessions", sessionId);
  if (!session || session.fields?.uid?.stringValue !== uid) {
    throw Object.assign(new Error("Ad session not found"), { status: 404 });
  }
  const status = session.fields?.status?.stringValue;
  if (status !== "completed") return { status: "pending" };
  const placement = session.fields?.placement?.stringValue;
  const player = await readFirestoreDocument(env, "users", uid);
  if (!player) throw Object.assign(new Error("Player profile unavailable"), { status: 503 });
  const result = {
    status: "completed",
    placement,
    verifiedRewardedAdsTotal: Number(player.fields?.verifiedRewardedAdsTotal?.integerValue || 0),
    verifiedRewardedAdsWeek: Number(player.fields?.verifiedRewardedAdsWeek?.integerValue || 0)
  };
  if (placement === "life") {
    const livesValue = player.fields?.livesBalance;
    const livesBalance = Number(livesValue?.integerValue ?? livesValue?.doubleValue ?? 0);
    result.livesBalance = Number.isFinite(livesBalance) ? livesBalance : 0;
  }
  return result;
}

async function processAdMobReward(request, env) {
  const params = await verifyAdMobSignature(request);
  const adUnit = params.get("ad_unit");
  const uid = params.get("user_id");
  const sessionId = params.get("custom_data");
  const transactionId = params.get("transaction_id");
  const amount = params.get("reward_amount");
  const rewardItem = params.get("reward_item");

  if (!/^[a-f0-9]{32}$/i.test(sessionId) || !/^[a-f0-9]{16,128}$/i.test(transactionId)) {
    throw new Error("Malformed AdMob reward identifiers");
  }
  let session;
  try { session = await readFirestoreDocument(env, "adRewardSessions", sessionId); }
  catch { throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 }); }
  if (!session) throw new Error("Unknown ad reward session");
  const fields = session.fields || {};
  const placement = fields.placement?.stringValue;
  const allowedUnits = AD_UNITS_BY_PLACEMENT[placement];
  const expectedAmount = placement === "life" ? (env.LIFE_REWARD_AMOUNT || "1") :
    placement === "points" ? (env.POINTS_REWARD_AMOUNT || "10") : null;
  const expectedItem = placement === "life" ? (env.LIFE_REWARD_ITEM || "life") :
    placement === "points" ? (env.POINTS_REWARD_ITEM || "points") : null;
  if (!allowedUnits?.has(adUnit) || amount !== expectedAmount || rewardItem !== expectedItem) {
    throw new Error("SSV reward does not match the configured ad placement");
  }
  const sessionCreatedAt = Date.parse(fields.createdAt?.timestampValue || "");
  if (fields.uid?.stringValue !== uid || fields.status?.stringValue !== "pending" ||
      !Number.isFinite(sessionCreatedAt) || Date.now() - sessionCreatedAt > 10 * 60 * 1000 ||
      sessionCreatedAt > Date.now() + 60 * 1000) {
    let existing;
    try { existing = await readFirestoreDocument(env, "adRewardLedger", transactionId); }
    catch { throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 }); }
    if (existing) return { duplicate: true };
    throw new Error("Ad reward session is invalid or already used");
  }
  let playerProfile;
  try { playerProfile = await readFirestoreDocument(env, "users", uid); }
  catch { throw Object.assign(new Error("Player profile lookup failed"), { status: 503 }); }
  if (!playerProfile?.updateTime) throw new Error("Player profile does not exist or cannot be updated");

  const now = new Date();
  const weekStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const weekday = weekStart.getUTCDay();
  weekStart.setUTCDate(weekStart.getUTCDate() - ((weekday + 6) % 7));
  const weekStartKey = weekStart.toISOString().slice(0, 10);
  const playerFields = playerProfile.fields || {};
  const previousWeek = playerFields.verifiedRewardedAdsWeekStart?.stringValue;
  const previousWeekCount = Number(playerFields.verifiedRewardedAdsWeek?.integerValue || 0);
  const totalCount = Number(playerFields.verifiedRewardedAdsTotal?.integerValue || 0) + 1;
  const weeklyCount = previousWeek === weekStartKey ? previousWeekCount + 1 : 1;
  const currentLives = Number(playerFields.livesBalance?.integerValue ?? playerFields.livesBalance?.doubleValue ?? 3);
  const ledgerFields = firestoreFields({ playerUid: uid, transactionId, adUnit, rewardItem,
    rewardAmount: Number(amount), placement, verification: "admob_ssv", createdAt: now, weekStart: weekStartKey });
  const updatedFields = {
    verifiedRewardedAdsTotal: totalCount, verifiedRewardedAdsWeek: weeklyCount,
    verifiedRewardedAdsWeekStart: weekStartKey, lastVerifiedRewardedAdAt: now, rewardedAdsWatched: totalCount
  };
  const mask = ["verifiedRewardedAdsTotal", "verifiedRewardedAdsWeek", "verifiedRewardedAdsWeekStart",
    "lastVerifiedRewardedAdAt", "rewardedAdsWatched"];
  if (placement === "life") { updatedFields.livesBalance = currentLives + 1; mask.push("livesBalance"); }
  const userUpdate = {
    update: { name: documentPath("users", uid), fields: firestoreFields(updatedFields) },
    updateMask: { fieldPaths: mask },
    currentDocument: { updateTime: playerProfile.updateTime }
  };
  let commitResponse;
  try {
    commitResponse = await firestoreRequest(env, "projects/" + FIREBASE_PROJECT_ID + "/databases/(default)/documents:commit", {
      method: "POST", body: JSON.stringify({ writes: [
        userUpdate,
        { update: { name: documentPath("adRewardLedger", transactionId), fields: ledgerFields }, currentDocument: { exists: false } },
        { update: { name: documentPath("adRewardSessions", sessionId),
          fields: firestoreFields({ status: "completed", transactionId, completedAt: now }) },
          updateMask: { fieldPaths: ["status", "transactionId", "completedAt"] },
          currentDocument: { updateTime: session.updateTime } }
      ] })
    });
  } catch { throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 }); }
  if (!commitResponse.ok) {
    let existing;
    try { existing = await readFirestoreDocument(env, "adRewardLedger", transactionId); }
    catch { throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 }); }
    if (existing) return { duplicate: true };
    throw Object.assign(new Error("Firestore reward commit failed; callback may be retried"), { status: 503 });
  }
  return { duplicate: false, placement, verifiedRewardedAdsTotal: totalCount, verifiedRewardedAdsWeek: weeklyCount };
}

function isAdMobAdmin(uid, env) {
  const allowed = (env.ADMOB_ADMIN_UIDS || "").split(",").map((value) => value.trim()).filter(Boolean);
  return allowed.includes(uid);
}

async function queryVerifiedAdLedger(env, startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00.000Z`);
  const end = new Date(`${endDate}T00:00:00.000Z`);
  // AdMob's account reporting timezone can differ from UTC. Query a safe
  // surrounding UTC window, then bucket every event using reportingTimeZone.
  start.setUTCDate(start.getUTCDate() - 2);
  end.setUTCDate(end.getUTCDate() + 3);
  const response = await firestoreRequest(env,
    `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents:runQuery`, {
      method: "POST",
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: "adRewardLedger" }],
          where: { compositeFilter: { op: "AND", filters: [
            { fieldFilter: { field: { fieldPath: "createdAt" }, op: "GREATER_THAN_OR_EQUAL", value: { timestampValue: start.toISOString() } } },
            { fieldFilter: { field: { fieldPath: "createdAt" }, op: "LESS_THAN", value: { timestampValue: end.toISOString() } } }
          ] } },
          orderBy: [{ field: { fieldPath: "createdAt" }, direction: "ASCENDING" }],
          limit: 10000
        }
      })
    });
  if (!response.ok) throw Object.assign(new Error("Could not read verified-ad ledger"), { status: 503 });
  const results = await response.json();
  const documents = Array.isArray(results) ? results.map((item) => item.document).filter(Boolean) : [];
  if (documents.length >= 10000) {
    throw Object.assign(new Error("Verified-ad query reached its safety limit; narrow the report date range"), { status: 413 });
  }
  return documents;
}

async function createAdMobReconciliationPreview(request, env, uid) {
  if (!isAdMobAdmin(uid, env)) throw Object.assign(new Error("Admin access required"), { status: 403 });
  const url = new URL(request.url);
  const startDate = url.searchParams.get("startDate");
  const endDate = url.searchParams.get("endDate");
  if (!startDate || !endDate) throw Object.assign(new Error("startDate and endDate are required"), { status: 400 });

  let diagnosticStage = "oauth_refresh";
  try {
  const { accessToken } = await getAdMobAccessToken(env);
  diagnosticStage = "admob_account_listing";
  const accounts = await listAdMobAccounts(accessToken);
  const publisherId = env.ADMOB_PUBLISHER_ID || (accounts.length === 1 ? accounts[0]?.publisherId : "");
  const account = accounts.find((item) => item.publisherId === publisherId);
  if (!account || !account.reportingTimeZone) {
    throw Object.assign(new Error("AdMob publisher account is missing or ambiguous; configure ADMOB_PUBLISHER_ID"), {
      status: 503,
      diagnosticCode: accounts.length === 0 ? "admob_no_publisher_accounts" : "admob_publisher_id_missing_or_ambiguous"
    });
  }
  diagnosticStage = "admob_report_generation";
  const report = await generateAdMobNetworkReport({
    accessToken, publisherId, startDate, endDate
  });
  diagnosticStage = "firestore_verified_ad_ledger";
  const ledgerDocuments = await queryVerifiedAdLedger(env, startDate, endDate);
  diagnosticStage = "revenue_reconciliation";
  const reconciliation = buildRevenueReconciliation({
    reportMessages: [report.header, ...report.rows, report.footer],
    ledgerDocuments,
    timeZone: account.reportingTimeZone
  });
  return {
    status: "preview_only",
    creditingEnabled: false,
    earningsType: "estimated",
    currencyCode: "USD",
    reportingTimeZone: account.reportingTimeZone,
    publisherId,
    startDate,
    endDate,
    rows: reconciliation.map((row) => ({
      ...row,
      earningsUsd: row.earningsMicros / 1_000_000,
      playerPoolUsd: row.playerPoolMicros / 1_000_000,
      danatShareUsd: row.danatShareMicros / 1_000_000,
      allocations: row.allocations.map((allocation) => ({
        ...allocation,
        dnc: allocation.micros / 1_000_000
      }))
    }))
  };
  } catch (error) {
    error.diagnosticStage = diagnosticStage;
    throw error;
  }
}

async function stageAdMobReconciliation(request, env, uid) {
  const preview = await createAdMobReconciliationPreview(request, env, uid);
  if (preview.rows.length > 400) {
    throw Object.assign(new Error("Report contains too many rows to stage safely"), { status: 413 });
  }
  let created = 0;
  let alreadyStaged = 0;
  const staged = [];
  for (const row of preview.rows) {
    const fingerprintInput = JSON.stringify({
      date: row.date, adUnit: row.adUnit, earningsMicros: row.earningsMicros,
      playerPoolMicros: row.playerPoolMicros, danatShareMicros: row.danatShareMicros,
      totalVerifiedAds: row.totalVerifiedAds, allocations: row.allocations
    });
    const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(fingerprintInput)));
    const fingerprint = [...digest].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    const reportId = `report-${row.date}-${fingerprint}`;
    const fields = firestoreFields({
      date: row.date,
      adUnit: row.adUnit,
      publisherId: preview.publisherId,
      currencyCode: "USD",
      earningsType: "estimated",
      earningsMicros: row.earningsMicros,
      playerPoolMicros: row.playerPoolMicros,
      danatShareMicros: row.danatShareMicros,
      totalVerifiedAds: row.totalVerifiedAds,
      allocationsJson: JSON.stringify(row.allocations),
      status: "pending_review",
      creditsIssued: false,
      reportingTimeZone: preview.reportingTimeZone,
      createdAt: new Date()
    });
    const response = await firestoreRequest(env,
      `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents:commit`, {
        method: "POST",
        body: JSON.stringify({ writes: [{
          update: { name: documentPath("adMobDailyReconciliations", reportId), fields },
          currentDocument: { exists: false }
        }] })
      });
    if (response.ok) {
      created++;
      staged.push({ reportId, date: row.date, adUnit: row.adUnit, status: "pending_review" });
    } else {
      const existing = await readFirestoreDocument(env, "adMobDailyReconciliations", reportId);
      if (!existing) throw Object.assign(new Error("Could not stage reconciliation row"), { status: 503 });
      alreadyStaged++;
      staged.push({ reportId, date: row.date, adUnit: row.adUnit, status: existing.fields?.status?.stringValue || "pending_review" });
    }
  }
  return {
    status: "staged_for_manual_review",
    creditingEnabled: false,
    created,
    alreadyStaged,
    staged
  };
}

async function updatePlayerLifeLoss(env, uid) {
  const player = await readFirestoreDocument(env, "users", uid);
  if (!player?.updateTime) throw Object.assign(new Error("Player profile unavailable"), { status: 404 });
  const storedLives = player.fields?.livesBalance;
  const lives = Number(storedLives?.integerValue ?? storedLives?.doubleValue ?? 3);
  if (!Number.isInteger(lives) || lives <= 0) throw Object.assign(new Error("No lives remaining"), { status: 409 });

  const write = storedLives
    ? {
        update: { name: documentPath("users", uid), fields: {} },
        updateMask: { fieldPaths: [] },
        updateTransforms: [{ fieldPath: "livesBalance", increment: { integerValue: "-1" } }],
        currentDocument: { updateTime: player.updateTime }
      }
    : {
        update: { name: documentPath("users", uid), fields: firestoreFields({ livesBalance: lives - 1 }) },
        updateMask: { fieldPaths: ["livesBalance"] },
        currentDocument: { updateTime: player.updateTime }
      };

  const response = await firestoreRequest(env, "projects/" + FIREBASE_PROJECT_ID + "/databases/(default)/documents:commit", {
    method: "POST",
    body: JSON.stringify({ writes: [write] })
  });
  if (!response.ok) throw Object.assign(new Error("Life update conflict"), { status: 409 });
  return { livesBalance: lives - 1 };
}

async function claimTimedLives(env, uid) {
  const player = await readFirestoreDocument(env, "users", uid);
  if (!player?.updateTime) throw Object.assign(new Error("Player profile unavailable"), { status: 404 });
  const fields = player.fields || {};
  const now = Date.now();
  const lastClaim = Number(fields.lastSpiritClaimTime?.integerValue || 0);
  const lastReset = Number(fields.lastDailyResetTime?.integerValue || 0);
  let claimedToday = Number(fields.dailyClaimedLives?.integerValue || 0);
  let resetTime = lastReset;

  if (now - lastReset >= 24 * 60 * 60 * 1000) {
    claimedToday = 0;
    resetTime = now;
  }

  const cooldownRemaining = 3 * 60 * 60 * 1000 - (now - lastClaim);
  if (cooldownRemaining > 0) return { claimed: false, reason: "cooldown", retryAfterMs: cooldownRemaining };
  if (claimedToday >= 10) return { claimed: false, reason: "daily_limit" };

  const livesToAdd = Math.min(5, 10 - claimedToday);
  const newClaimed = claimedToday + livesToAdd;
  const currentLives = Number(fields.livesBalance?.integerValue ?? fields.livesBalance?.doubleValue ?? 3);
  const response = await firestoreRequest(env, "projects/" + FIREBASE_PROJECT_ID + "/databases/(default)/documents:commit", {
    method: "POST",
    body: JSON.stringify({
      writes: [{
        update: {
          name: documentPath("users", uid),
          fields: firestoreFields({
            livesBalance: currentLives + livesToAdd,
            lastSpiritClaimTime: now,
            dailyClaimedLives: newClaimed,
            lastDailyResetTime: resetTime
          })
        },
        updateMask: { fieldPaths: ["livesBalance", "lastSpiritClaimTime", "dailyClaimedLives", "lastDailyResetTime"] },
        currentDocument: { updateTime: player.updateTime }
      }]
    })
  });
  if (!response.ok) throw Object.assign(new Error("Timed life claim conflict"), { status: 409 });

  return {
    claimed: true,
    livesGranted: livesToAdd,
    livesBalance: currentLives + livesToAdd,
    lastSpiritClaimTime: now,
    dailyClaimedLives: newClaimed,
    lastDailyResetTime: resetTime
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      if (!cors["access-control-allow-origin"]) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: cors });
    }

    if (url.pathname === "/health" && request.method === "GET") {
      return json({ status: "ok", service: "danat-quiz-api", version: 3 }, 200, cors);
    }

    if (url.pathname === "/v1/session" && request.method === "GET") {
      try {
        const user = await verifyFirebaseIdToken(request);
        return json({ authenticated: true, user }, 200, cors);
      } catch {
        return json({ error: "unauthorized" }, 401, cors);
      }
    }

    if (url.pathname === "/v1/life-loss" && request.method === "POST") {
      try {
        const user = await verifyFirebaseIdToken(request);
        return json(await updatePlayerLifeLoss(env, user.uid), 200, cors);
      } catch (error) {
        return json({ error: "life_update_failed" }, error?.status || 503, cors);
      }
    }

    if (url.pathname === "/v1/timed-lives" && request.method === "POST") {
      try {
        const user = await verifyFirebaseIdToken(request);
        return json(await claimTimedLives(env, user.uid), 200, cors);
      } catch (error) {
        return json({ error: "timed_life_claim_failed" }, error?.status || 503, cors);
      }
    }

    if (url.pathname === "/v1/ad-session" && request.method === "POST") {
      try {
        const user = await verifyFirebaseIdToken(request);
        if (user.isAnonymous) return json({ error: "registered_account_required" }, 403, cors);
        const body = await request.json();
        if (!["life", "points"].includes(body?.placement)) return json({ error: "invalid_placement" }, 400, cors);
        const sessionId = await createAdSession(env, user.uid, body.placement);
        return json({ sessionId, customData: sessionId }, 201, cors);
      } catch (error) {
        return json({ error: "ad_session_unavailable" }, 503, cors);
      }
    }

    if (url.pathname === "/v1/ad-status" && request.method === "POST") {
      try {
        const user = await verifyFirebaseIdToken(request);
        const body = await request.json();
        return json(await getAdSessionStatus(env, user.uid, body?.sessionId), 200, cors);
      } catch (error) {
        return json({ error: "ad_status_unavailable" }, error?.status || 503, cors);
      }
    }

    if (url.pathname === "/v1/admin/admob/reconciliation-stage" && request.method === "POST") {
      try {
        const user = await verifyFirebaseIdToken(request);
        return json(await stageAdMobReconciliation(request, env, user.uid), 200, cors);
      } catch (error) {
        const status = error?.status || 503;
        return json({ error: status === 403 ? "forbidden" : status === 400 ? "invalid_request" :
          status === 413 ? "report_too_large" : "reconciliation_stage_failed" }, status, cors);
      }
    }

    if (url.pathname === "/v1/admin/admob/reconciliation-preview" && request.method === "GET") {
      try {
        const user = await verifyFirebaseIdToken(request);
        return json(await createAdMobReconciliationPreview(request, env, user.uid), 200, cors);
      } catch (error) {
        const status = error?.status || 503;
        console.error("AdMob reconciliation preview failed", {
          stage: error?.diagnosticStage || "authentication_or_request",
          status,
          message: String(error?.message || "unknown").slice(0, 160)
        });
        return json({
          error: status === 403 ? "forbidden" : status === 400 ? "invalid_request" :
            status === 413 ? "report_too_large" : "reconciliation_preview_failed",
          diagnosticStage: error?.diagnosticStage || "authentication_or_request",
          diagnosticCode: error?.diagnosticCode || undefined
        }, status, cors);
      }
    }

    if (url.pathname === "/v1/admob/ssv" && request.method === "GET") {
      try {
        const result = await processAdMobReward(request, env);
        return json({ received: true, duplicate: result.duplicate }, 200);
      } catch (error) {
        return json({ error: "invalid_or_unprocessed_reward" }, error?.status || 400);
      }
    }

    return json({ error: "not_found" }, 404, cors);
  }
};
