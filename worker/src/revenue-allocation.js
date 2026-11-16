// Pure, deterministic allocation helpers for the AdMob revenue reconciliation job.
// All money is represented as integer micros (1 USD = 1,000,000 micros).
export const PLAYER_SHARE_BPS = 3000;
export const DANAT_SHARE_BPS = 7000;
export const MICROS_PER_DNC = 1_000_000;

export function parseAdMobNetworkReport(payload) {
  const entries = Array.isArray(payload) ? payload : [payload];
  const rows = [];
  for (const entry of entries) {
    const row = entry?.row;
    if (!row) continue;
    const date = row.dimensionValues?.DATE?.value;
    const adUnit = row.dimensionValues?.AD_UNIT?.value;
    const micros = row.metricValues?.ESTIMATED_EARNINGS?.microsValue;
    if (!/^\d{8}$/.test(String(date || ""))) throw new Error("AdMob report row has an invalid DATE");
    if (typeof adUnit !== "string" || !/^ca-app-pub-\d+\/\d+$/.test(adUnit)) {
      throw new Error("AdMob report row has an invalid AD_UNIT");
    }
    const earningsMicros = Number(micros);
    if (!Number.isSafeInteger(earningsMicros) || earningsMicros < 0) {
      throw new Error("AdMob report row has invalid ESTIMATED_EARNINGS micros");
    }
    rows.push({ date: date.slice(0, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6, 8), adUnit, earningsMicros });
  }
  return rows;
}

// Split a daily ad-unit revenue row among players by their verified SSV count.
// Largest-remainder rounding guarantees player credits sum exactly to the 30% pool.
export function allocateRevenueRow({ date, adUnit, earningsMicros, verifiedCounts }) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("Invalid report date");
  if (!Number.isSafeInteger(earningsMicros) || earningsMicros < 0) throw new Error("Invalid earnings micros");
  if (!verifiedCounts || typeof verifiedCounts !== "object" || Array.isArray(verifiedCounts)) {
    throw new Error("verifiedCounts must be a player-to-count object");
  }

  const players = Object.entries(verifiedCounts)
    .map(([uid, count]) => ({ uid, count }))
    .filter(({ uid, count }) => uid && Number.isSafeInteger(count) && count > 0)
    .sort((a, b) => a.uid.localeCompare(b.uid));
  const totalVerifiedAds = players.reduce((sum, player) => sum + player.count, 0);
  const playerPoolMicros = Math.floor((earningsMicros * PLAYER_SHARE_BPS) / 10000);
  const danatShareMicros = earningsMicros - playerPoolMicros;

  if (!totalVerifiedAds || !playerPoolMicros) {
    return { date, adUnit, earningsMicros, totalVerifiedAds, playerPoolMicros: 0,
      danatShareMicros: earningsMicros, allocations: [] };
  }

  const allocations = players.map(({ uid, count }) => {
    const numerator = playerPoolMicros * count;
    return { uid, verifiedAds: count, micros: Math.floor(numerator / totalVerifiedAds),
      remainder: numerator % totalVerifiedAds };
  });
  let undistributed = playerPoolMicros - allocations.reduce((sum, item) => sum + item.micros, 0);
  const byRemainder = [...allocations].sort((a, b) => b.remainder - a.remainder || a.uid.localeCompare(b.uid));
  for (let i = 0; i < undistributed; i++) byRemainder[i].micros += 1;

  return {
    date, adUnit, earningsMicros, totalVerifiedAds, playerPoolMicros, danatShareMicros,
    allocations: allocations.map(({ uid, verifiedAds, micros }) => ({ uid, verifiedAds, micros }))
  };
}
