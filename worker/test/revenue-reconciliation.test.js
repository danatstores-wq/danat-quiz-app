import test from "node:test";
import assert from "node:assert/strict";
import { buildRevenueReconciliation } from "../src/revenue-reconciliation.js";

test("groups verified SSV records by AdMob reporting date and ad unit", () => {
  const result = buildRevenueReconciliation({
    timeZone: "America/Los_Angeles",
    reportMessages: [{ row: {
      dimensionValues: {
        DATE: { value: "20261115" },
        AD_UNIT: { value: "ca-app-pub-123/456" }
      },
      metricValues: { ESTIMATED_EARNINGS: { microsValue: "10000000" } }
    }}],
    ledgerDocuments: [
      { fields: { verification: { stringValue: "admob_ssv" }, playerUid: { stringValue: "playerA" },
        adUnit: { stringValue: "ca-app-pub-123/456" }, createdAt: { timestampValue: "2026-11-15T08:30:00.000Z" } } },
      { fields: { verification: { stringValue: "admob_ssv" }, playerUid: { stringValue: "playerB" },
        adUnit: { stringValue: "ca-app-pub-123/456" }, createdAt: { timestampValue: "2026-11-15T08:30:00.000Z" } } },
      { fields: { verification: { stringValue: "client_callback" }, playerUid: { stringValue: "fake" },
        adUnit: { stringValue: "ca-app-pub-123/456" }, createdAt: { timestampValue: "2026-11-15T08:30:00.000Z" } } }
    ]
  });
  assert.equal(result.length, 1);
  assert.equal(result[0].date, "2026-11-15");
  assert.equal(result[0].totalVerifiedAds, 2);
  assert.equal(result[0].playerPoolMicros, 3000000);
  assert.equal(result[0].allocations.reduce((sum, item) => sum + item.micros, 0), 3000000);
});

test("does not count verified views from a different reporting date or ad unit", () => {
  const result = buildRevenueReconciliation({
    timeZone: "UTC",
    reportMessages: [{ row: {
      dimensionValues: { DATE: { value: "20261115" }, AD_UNIT: { value: "ca-app-pub-123/456" } },
      metricValues: { ESTIMATED_EARNINGS: { microsValue: "1000000" } }
    }}],
    ledgerDocuments: [{ verification: "admob_ssv", playerUid: "playerA", adUnit: "ca-app-pub-123/999",
      createdAt: "2026-11-15T12:00:00.000Z" }]
  });
  assert.equal(result[0].totalVerifiedAds, 0);
  assert.deepEqual(result[0].allocations, []);
  assert.equal(result[0].danatShareMicros, 1000000);
});
