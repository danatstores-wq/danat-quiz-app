// Pure, deterministic allocation helpers for the AdMob revenue reconciliation job.
// All money is represented as integer micros (1 USD = 1,000,000 micros).
export const PLAYER_SHARE_BPS = 3000;
export const DANAT_SHARE_BPS = 7000;
export const MICROS_PER_DNC = 1_000_000;

function validDateParts(value) {
  if (!/^\\d{8}$/.test(String(value || ""))) return false;
  const y = Number(value.slice(0, 4));
  const m = Number(value.slice(4, 6));
  const d = Number(value.slice(6, 8));
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

export function parseAdMobNetworkReport(payload) {
  const entries = Array.isArray(payload) ? payload : [payload];
  const rows = [];
  for (const entry of entries) {
    const row = entry?.row;
    if (!row) continue;
    const date = row.dimensionValues?.DATE?.value;
    const adUnit = row.dimensionValues?.AD_UNIT?.value;
    const micros = row.metricValues?.ESTIMATED_EARNINGS?.microsValue;
    if (!validDateParts(date)) throw new Error("AdMob report row has an invalid DATE");
    if (typeof adUnit !== "string" || !/^ca-app-pub-\\d+\\/\\d+$/.test(adUnit)) {
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
// BigInt arithmetic avoids floating-point loss; largest-remainder rounding makes
// player allocations sum exactly to the 30% pool.
export function allocateRevenueRow({ date, adUnit, earningsMicros, verifiedCounts }) {
  if (typeof date !== "string" || !/^\\d{4}-\\d{2}-\\d{2}$/.test(date)) throw new Error("Invalid report date");
  const [year, month, day] = date.split("-").map(Number);
  const checkDate = new Date(Date.UTC(year, month - 1, day));
  if (checkDate.getUTCFullYear() !== year || checkDate.getUTCMonth() !== month - 1 || checkDate.getUTCDate() !== day) {
    throw new Error("Invalid report date");
  }
  if (!Number.isSafeInteger(earningsMicros) || earningsMicros < 0) throw new Error("Invalid earnings micros");
  if (!verifiedCounts || typeof verifiedCounts !== "object" || Array.isArray(verifiedCounts)) {
    throw new Error("verifiedCounts must be a player-to-count object");
  }

  const players = Object.entries(verifiedCounts).map(([uid, count]) => {
    if (!uid || !Number.isSafeInteger(count) || count < 0) {
      throw new Error("Each player must have a non-empty UID and a non-negative safe integer count");
    }
    return { uid, count };
  }).filter(({ count }) => count > 0).sort((a, b) => a.uid.localeCompare(b.uid));

  const totalBig = players.reduce((sum, player) => sum + BigInt(player.count), 0n);
  if (totalBig > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error("Total verified ad count is too large");
  const totalVerifiedAds = Number(totalBig);
  const earnings = BigInt(earningsMicros);
  const playerPoolBig = (earnings * BigInt(PLAYER_SHARE_BPS)) / 10000n;
  const danatShareMicros = Number(earnings - playerPoolBig);
  const playerPoolMicros = Number(playerPoolBig);

  if (!totalVerifiedAds || !playerPoolMicros) {
    return { date, adUnit, earningsMicros, totalVerifiedAds, playerPoolMicros: 0,
      danatShareMicros: earningsMicros, allocations: [] };
  }

  const allocations = players.map(({ uid, count }) => {
    const numerator = playerPoolBig * BigInt(count);
    return { uid, verifiedAds: count, micros: Number(numerator / totalBig), remainder: numerator % totalBig };
  });
  let undistributed = playerPoolMicros - allocations.reduce((sum, item) => sum + item.micros, 0);
  const byRemainder = [...allocations].sort((a, b) =>
    a.remainder === b.remainder ? a.uid.localeCompare(b.uid) : (a.remainder > b.remainder ? -1 : 1));
  for (let i = 0; i < undistributed; i++) byRemainder[i].micros += 1;

  return {
    date, adUnit, earningsMicros, totalVerifiedAds, playerPoolMicros, danatShareMicros,
    allocations: allocations.map(({ uid, verifiedAds, micros }) => ({ uid, verifiedAds, micros }))
  };
}
