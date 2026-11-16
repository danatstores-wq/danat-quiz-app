import test from "node:test";
import assert from "node:assert/strict";
import {
  getAdMobAccessToken,
  listAdMobAccounts,
  generateAdMobNetworkReport
} from "../src/admob-report.js";

test("refreshes an AdMob access token without exposing credentials", async () => {
  let request;
  const result = await getAdMobAccessToken({
    ADMOB_OAUTH_CLIENT_ID: "client-id",
    ADMOB_OAUTH_CLIENT_SECRET: "client-secret",
    ADMOB_REFRESH_TOKEN: "refresh-token"
  }, async (url, options) => {
    request = { url: String(url), options };
    return Response.json({ access_token: "short-lived-token", expires_in: 3600 });
  });
  assert.equal(result.accessToken, "short-lived-token");
  assert.equal(result.expiresIn, 3600);
  assert.equal(request.url, "https://oauth2.googleapis.com/token");
  assert.equal(new URLSearchParams(request.options.body).get("refresh_token"), "refresh-token");
});

test("discovers all AdMob accounts across pages", async () => {
  let calls = 0;
  const accounts = await listAdMobAccounts("access-token", async (url) => {
    calls++;
    if (String(url).includes("pageToken=next")) {
      return Response.json({ account: [{ publisherId: "pub-222" }] });
    }
    return Response.json({ account: [{ publisherId: "pub-111" }], nextPageToken: "next" });
  });
  assert.equal(calls, 2);
  assert.deepEqual(accounts.map((account) => account.publisherId), ["pub-111", "pub-222"]);
});

test("requests daily ad-unit earnings in USD and validates stream envelope", async () => {
  let request;
  const report = await generateAdMobNetworkReport({
    accessToken: "access-token",
    publisherId: "pub-123456",
    startDate: "2026-11-14",
    endDate: "2026-11-15",
    fetchImpl: async (url, options) => {
      request = { url: String(url), options };
      return Response.json([
        { header: { localizationSettings: { currencyCode: "USD" } } },
        { row: { dimensionValues: { DATE: { value: "20261114" } } } },
        { footer: { matchingRowCount: "1" } }
      ]);
    }
  });
  const body = JSON.parse(request.options.body);
  assert.equal(body.reportSpec.localizationSettings.currencyCode, "USD");
  assert.deepEqual(body.reportSpec.dimensions, ["DATE", "AD_UNIT"]);
  assert.deepEqual(body.reportSpec.metrics, ["ESTIMATED_EARNINGS"]);
  assert.equal(report.rows.length, 1);
});

test("rejects invalid publisher IDs and incomplete report streams", async () => {
  await assert.rejects(() => generateAdMobNetworkReport({
    accessToken: "token", publisherId: "not-a-publisher",
    startDate: "2026-11-14", endDate: "2026-11-15"
  }));
  await assert.rejects(() => generateAdMobNetworkReport({
    accessToken: "token", publisherId: "pub-123",
    startDate: "2026-11-14", endDate: "2026-11-15",
    fetchImpl: async () => Response.json([{ row: {} }])
  }), /incomplete/);
});
