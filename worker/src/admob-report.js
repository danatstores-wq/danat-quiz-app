const TOKEN_URL = "https://oauth2.googleapis.com/token";
const ADMOB_API = "https://admob.googleapis.com/v1";

function requireSecret(value, name) {
  if (typeof value !== "string" || !value.trim()) {
    const diagnosticCode = `missing_${name.toLowerCase()}`;
    throw Object.assign(new Error(`Missing ${name}`), { status: 503, diagnosticCode });
  }
  return value.trim();
}

function parseIsoDate(value, name) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`Invalid ${name}`);
  }
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    throw new Error(`Invalid ${name}`);
  }
  return { year, month, day };
}

async function readJsonResponse(response, label) {
  let data;
  try {
    data = await response.json();
  } catch {
    if (!response.ok) {
      throw Object.assign(new Error(`${label} request failed`), {
        status: response.status === 401 ? 401 : 503,
        diagnosticCode: "http_" + response.status + "_non_json_response"
      });
    }
    throw Object.assign(new Error(`${label} returned invalid JSON`), { status: 502 });
  }
  if (!response.ok) {
    // Surface only a sanitized Google error identifier, never its message or response body.
    const rawCode = data?.error?.status || data?.error?.errors?.[0]?.reason || data?.error;
    const safeCode = typeof rawCode === "string"
      ? rawCode.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 48)
      : "";
    const diagnosticCode = safeCode ? `http_${response.status}_${safeCode}` : `http_${response.status}`;
    throw Object.assign(new Error(`${label} request failed`), {
      status: response.status === 401 ? 401 : 503,
      diagnosticCode
    });
  }
  return data;
}

export async function getAdMobAccessToken(env, fetchImpl = fetch) {
  const clientId = requireSecret(env.ADMOB_OAUTH_CLIENT_ID, "ADMOB_OAUTH_CLIENT_ID");
  const clientSecret = requireSecret(env.ADMOB_OAUTH_CLIENT_SECRET, "ADMOB_OAUTH_CLIENT_SECRET");
  const refreshToken = requireSecret(env.ADMOB_REFRESH_TOKEN, "ADMOB_REFRESH_TOKEN");
  const response = await fetchImpl(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token"
    })
  });
  if (!response.ok) {
    let oauthError = "unknown_oauth_error";
    try {
      const body = await response.json();
      const candidate = typeof body?.error === "string" ? body.error : "";
      if (/^[a-z_]{2,48}$/.test(candidate)) oauthError = candidate;
    } catch {}
    throw Object.assign(new Error("Google OAuth refresh failed"), {
      status: response.status === 401 ? 401 : 503,
      diagnosticCode: oauthError
    });
  }
  const data = await readJsonResponse(response, "Google OAuth refresh");
  if (typeof data.access_token !== "string" || !data.access_token || !Number.isFinite(Number(data.expires_in))) {
    throw Object.assign(new Error("Google OAuth returned an incomplete token response"), { status: 502 });
  }
  return { accessToken: data.access_token, expiresIn: Number(data.expires_in) };
}

export async function listAdMobAccounts(accessToken, fetchImpl = fetch) {
  if (typeof accessToken !== "string" || !accessToken) throw new Error("Missing AdMob access token");
  const accounts = [];
  let pageToken = "";
  do {
    const url = new URL(`${ADMOB_API}/accounts`);
    url.searchParams.set("pageSize", "100");
    if (pageToken) url.searchParams.set("pageToken", pageToken);
    const response = await fetchImpl(url, {
      headers: { authorization: `Bearer ${accessToken}` }
    });
    const data = await readJsonResponse(response, "AdMob account listing");
    if (Array.isArray(data.accounts)) accounts.push(...data.accounts);
    pageToken = typeof data.nextPageToken === "string" ? data.nextPageToken : "";
  } while (pageToken);
  return accounts;
}

export async function generateAdMobNetworkReport({
  accessToken, publisherId, startDate, endDate, fetchImpl = fetch
}) {
  if (typeof accessToken !== "string" || !accessToken) throw new Error("Missing AdMob access token");
  if (typeof publisherId !== "string" || !/^pub-\d+$/.test(publisherId)) throw new Error("Invalid AdMob publisher ID");
  const start = parseIsoDate(startDate, "start date");
  const end = parseIsoDate(endDate, "end date");
  const startKey = Date.UTC(start.year, start.month - 1, start.day);
  const endKey = Date.UTC(end.year, end.month - 1, end.day);
  if (startKey > endKey) throw new Error("Report start date must not be after end date");

  const response = await fetchImpl(
    `${ADMOB_API}/accounts/${encodeURIComponent(publisherId)}/networkReport:generate`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        reportSpec: {
          dateRange: { startDate: start, endDate: end },
          dimensions: ["DATE", "AD_UNIT"],
          metrics: ["ESTIMATED_EARNINGS"],
          localizationSettings: { currencyCode: "USD", languageCode: "en-US" }
        }
      })
    }
  );
  const data = await readJsonResponse(response, "AdMob network report");
  const messages = Array.isArray(data) ? data : [data];
  const header = messages.find((item) => item?.header)?.header;
  const footer = messages.find((item) => item?.footer)?.footer;
  const rows = messages.filter((item) => item?.row);
  if (!header || !footer) {
    throw Object.assign(new Error("AdMob report stream is incomplete"), { status: 502 });
  }
  return { header, footer, rows };
}
