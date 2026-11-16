import { allocateRevenueRow, parseAdMobNetworkReport } from "./revenue-allocation.js";

function reportDateForTimestamp(timestamp, timeZone) {
  const date = new Date(timestamp);
  if (!Number.isFinite(date.getTime())) throw new Error("Invalid verified-ad timestamp");
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function buildRevenueReconciliation({ reportMessages, ledgerDocuments, timeZone }) {
  if (typeof timeZone !== "string" || !timeZone) throw new Error("AdMob reporting time zone is required");
  // Force validation of the IANA timezone before processing any records.
  new Intl.DateTimeFormat("en-US", { timeZone });
  if (!Array.isArray(ledgerDocuments)) throw new Error("Verified-ad ledger records must be an array");

  const verifiedCounts = new Map();
  for (const document of ledgerDocuments) {
    const fields = document?.fields || document;
    const verification = fields.verification?.stringValue ?? fields.verification;
    const uid = fields.playerUid?.stringValue ?? fields.playerUid;
    const adUnit = fields.adUnit?.stringValue ?? fields.adUnit;
    const timestamp = fields.createdAt?.timestampValue ?? fields.createdAt;
    if (verification !== "admob_ssv") continue;
    if (typeof uid !== "string" || !uid || typeof adUnit !== "string") {
      throw new Error("Verified-ad ledger record is missing its player or ad unit");
    }
    const date = reportDateForTimestamp(timestamp, timeZone);
    const key = `${date}|${adUnit}`;
    if (!verifiedCounts.has(key)) verifiedCounts.set(key, {});
    const counts = verifiedCounts.get(key);
    counts[uid] = (counts[uid] || 0) + 1;
  }

  const reportRows = parseAdMobNetworkReport(reportMessages);
  return reportRows.map((row) => allocateRevenueRow({
    ...row,
    verifiedCounts: verifiedCounts.get(`${row.date}|${row.adUnit}`) || {}
  }));
}
