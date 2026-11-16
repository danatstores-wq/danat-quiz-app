import test from "node:test";
import assert from "node:assert/strict";
import { allocateRevenueRow, parseAdMobNetworkReport } from "../src/revenue-allocation.js";

test("allocates exactly 30% proportionally and preserves every micro", () => {
  const result = allocateRevenueRow({
    date: "2026-11-15", adUnit: "ca-app-pub-123/456", earningsMicros: 10_000_000,
    verifiedCounts: { playerB: 1, playerA: 2 }
  });
  assert.equal(result.playerPoolMicros, 3_000_000);
  assert.equal(result.danatShareMicros, 7_000_000);
  assert.equal(result.allocations.reduce((sum, item) => sum + item.micros, 0), 3_000_000);
  assert.deepEqual(result.allocations.map(item => item.uid), ["playerA", "playerB"]);
});

test("keeps all revenue with Danat when there are no verified views", () => {
  const result = allocateRevenueRow({
    date: "2026-11-15", adUnit: "ca-app-pub-123/456", earningsMicros: 1_234_567,
    verifiedCounts: {}
  });
  assert.equal(result.playerPoolMicros, 0);
  assert.equal(result.danatShareMicros, 1_234_567);
  assert.deepEqual(result.allocations, []);
});

test("parses AdMob DATE, AD_UNIT, and earnings micros", () => {
  const rows = parseAdMobNetworkReport([{ row: {
    dimensionValues: { DATE: { value: "20261115" }, AD_UNIT: { value: "ca-app-pub-123/456" } },
    metricValues: { ESTIMATED_EARNINGS: { microsValue: "6500000" } }
  }}]);
  assert.deepEqual(rows, [{ date: "2026-11-15", adUnit: "ca-app-pub-123/456", earningsMicros: 6500000 }]);
});

test("rejects malformed report rows instead of silently crediting", () => {
  assert.throws(() => parseAdMobNetworkReport([{ row: { dimensionValues: {}, metricValues: {} } }]));
});
