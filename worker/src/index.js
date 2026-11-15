const FIREBASE_PROJECT_ID = "danat-quiz-app";
const FIREBASE_ISSUER = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
const FIREBASE_JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
const ADMOB_KEYS_URL = "https://www.gstatic.com/admob/reward/verifier-keys.json";
const LIFE_AD_UNITS = new Set([
  "ca-app-pub-1622329571366129/5894243820",
  "ca-app-pub-1622329571366129/9787267701"
]);
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
  if (!origin || origin !== env.APP_ORIGIN) return {};
  return {
    "access-control-allow-origin": env.APP_ORIGIN,
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
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) throw new Error("Firebase service account secret is not configured");

  const account = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT_JSON);
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
  if (!response.ok) throw new Error("Google OAuth token exchange failed");
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

async function createAdSession(env, uid) {
  const sessionId = crypto.randomUUID().replace(/-/g, "");
  const now = new Date();
  const response = await firestoreRequest(env, `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents:commit`, {
    method: "POST",
    body: JSON.stringify({
      writes: [{
        update: {
          name: documentPath("adRewardSessions", sessionId),
          fields: firestoreFields({ uid, placement: "life", status: "pending", createdAt: now })
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
  const timestamp = Number(params.get("timestamp"));
  if (!Number.isFinite(timestamp) || Math.abs(Date.now() - timestamp) > 10 * 60 * 1000) throw new Error("Stale SSV callback");

  const keyResponse = await fetch(ADMOB_KEYS_URL, { cf: { cacheTtl: 3600, cacheEverything: true } });
  if (!keyResponse.ok) throw new Error("Unable to retrieve AdMob verification keys");
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

async function processAdMobReward(request, env) {
  const params = await verifyAdMobSignature(request);
  const adUnit = params.get("ad_unit");
  const uid = params.get("user_id");
  const sessionId = params.get("custom_data");
  const transactionId = params.get("transaction_id");
  const amount = params.get("reward_amount");
  const rewardItem = params.get("reward_item");

  if (!LIFE_AD_UNITS.has(adUnit) || !/^[a-f0-9]{32}$/i.test(sessionId) ||
      !/^[a-f0-9]{16,128}$/i.test(transactionId) || amount !== (env.LIFE_REWARD_AMOUNT || "1") ||
      rewardItem !== (env.LIFE_REWARD_ITEM || "life")) {
    throw new Error("SSV reward does not match the configured life reward");
  }

  let session;
  try {
    session = await readFirestoreDocument(env, "adRewardSessions", sessionId);
  } catch {
    throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 });
  }
  if (!session) throw new Error("Unknown ad reward session");
  const fields = session.fields || {};
  const sessionCreatedAt = Date.parse(fields.createdAt?.timestampValue || "");
  if (fields.uid?.stringValue !== uid || fields.placement?.stringValue !== "life" ||
      fields.status?.stringValue !== "pending" || !Number.isFinite(sessionCreatedAt) ||
      Date.now() - sessionCreatedAt > 10 * 60 * 1000 || sessionCreatedAt > Date.now() + 60 * 1000) {
    let existing;
    try {
      existing = await readFirestoreDocument(env, "adRewardLedger", transactionId);
    } catch {
      throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 });
    }
    if (existing) return { duplicate: true };
    throw new Error("Ad reward session is invalid or already used");
  }

  const now = new Date();
  const ledgerFields = firestoreFields({
    playerUid: uid,
    transactionId,
    adUnit,
    rewardItem,
    rewardAmount: Number(amount),
    placement: "life",
    createdAt: now
  });
  let commitResponse;
  try {
    commitResponse = await firestoreRequest(env, `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents:commit`, {
    method: "POST",
    body: JSON.stringify({
      writes: [
        {
          update: { name: documentPath("users", uid), fields: {} },
          updateMask: { fieldPaths: [] },
          updateTransforms: [
            { fieldPath: "livesBalance", increment: { integerValue: "1" } },
            { fieldPath: "rewardedAdsWatched", increment: { integerValue: "1" } }
          ],
          currentDocument: { exists: true }
        },
        {
          update: { name: documentPath("adRewardLedger", transactionId), fields: ledgerFields },
          currentDocument: { exists: false }
        },
        {
          update: {
            name: documentPath("adRewardSessions", sessionId),
            fields: firestoreFields({ status: "completed", transactionId, completedAt: now })
          },
          updateMask: { fieldPaths: ["status", "transactionId", "completedAt"] },
          currentDocument: { exists: true }
        }
      ]
    })
    });
  } catch {
    throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 });
  }

  if (!commitResponse.ok) {
    let existing;
    try {
      existing = await readFirestoreDocument(env, "adRewardLedger", transactionId);
    } catch {
      throw Object.assign(new Error("Reward storage temporarily unavailable"), { status: 503 });
    }
    if (existing) return { duplicate: true };
    throw Object.assign(new Error("Firestore reward commit failed"), { status: 503 });
  }
  return { duplicate: false };
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
      return json({ status: "ok", service: "danat-quiz-api", version: 2 }, 200, cors);
    }

    if (url.pathname === "/v1/session" && request.method === "GET") {
      try {
        const user = await verifyFirebaseIdToken(request);
        return json({ authenticated: true, user }, 200, cors);
      } catch {
        return json({ error: "unauthorized" }, 401, cors);
      }
    }

    if (url.pathname === "/v1/life-loss" && request.method === "POST") {\n      try {\n        const user = await verifyFirebaseIdToken(request);\n        return json(await updatePlayerLifeLoss(env, user.uid), 200, cors);\n      } catch (error) {\n        return json({ error: "life_update_failed" }, error?.status || 503, cors);\n      }\n    }\n\n    if (url.pathname === "/v1/timed-lives" && request.method === "POST") {\n      try {\n        const user = await verifyFirebaseIdToken(request);\n        return json(await claimTimedLives(env, user.uid), 200, cors);\n      } catch (error) {\n        return json({ error: "timed_life_claim_failed" }, error?.status || 503, cors);\n      }\n    }\n\n    if (url.pathname === "/v1/ad-session" && request.method === "POST") {
      try {
        const user = await verifyFirebaseIdToken(request);
        const body = await request.json();
        if (body?.placement !== "life") return json({ error: "invalid_placement" }, 400, cors);
        const sessionId = await createAdSession(env, user.uid);
        return json({ sessionId, customData: sessionId }, 201, cors);
      } catch (error) {
        return json({ error: "ad_session_unavailable" }, 503, cors);
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
