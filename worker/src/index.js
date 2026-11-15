const FIREBASE_PROJECT_ID = "danat-quiz-app";
const FIREBASE_ISSUER = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
const FIREBASE_JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers }
  });
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const allowed = env.APP_ORIGIN;
  if (!origin || !allowed || origin !== allowed) return {};
  return {
    "access-control-allow-origin": allowed,
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

function decodeJsonPart(value) {
  return JSON.parse(new TextDecoder().decode(decodeBase64Url(value)));
}

async function verifyFirebaseIdToken(request) {
  const authorization = request.headers.get("Authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  if (!match) throw new Error("Missing bearer token");

  const token = match[1];
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Malformed token");

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
      typeof claims.auth_time !== "number" || claims.auth_time > now + 60) {
    throw new Error("Invalid token claims");
  }

  const response = await fetch(FIREBASE_JWKS_URL, {
    cf: { cacheTtl: 3600, cacheEverything: true }
  });
  if (!response.ok) throw new Error("Unable to retrieve signing keys");
  const jwks = await response.json();
  const jwk = jwks.keys?.find((key) => key.kid === header.kid && key.use === "sig");
  if (!jwk) throw new Error("Unknown signing key");

  const publicKey = await crypto.subtle.importKey(
    "jwk",
    jwk,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const signedData = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
  const signature = decodeBase64Url(parts[2]);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", publicKey, signature, signedData);
  if (!valid) throw new Error("Invalid token signature");

  return { uid: claims.sub, email: claims.email || null, isAnonymous: claims.firebase?.sign_in_provider === "anonymous" };
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
      return json({ status: "ok", service: "danat-quiz-api", version: 1 });
    }

    if (url.pathname === "/v1/session" && request.method === "GET") {
      try {
        const user = await verifyFirebaseIdToken(request);
        return json({ authenticated: true, user }, 200, cors);
      } catch {
        return json({ error: "unauthorized" }, 401, cors);
      }
    }

    return json({ error: "not_found" }, 404, cors);
  }
};
