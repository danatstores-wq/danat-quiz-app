const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();

const db = getFirestore();
const ADMIN_UID = "4ZOJfbUjq8MYKb0fgOcoQAbEUOl";
const MAX_CREDIT_PER_OPERATION = 1000000;
const DECIMAL_SCALE = 100000000;

exports.adminAdjustDncBalance = onCall(
  { enforceAppCheck: false },
  async (request) => {
    if (!request.auth || request.auth.uid !== ADMIN_UID) {
      throw new HttpsError("permission-denied", "Only the authorized administrator can adjust DNC balances.");
    }

    const playerUid = typeof request.data?.playerUid === "string"
      ? request.data.playerUid.trim()
      : "";
    const amount = request.data?.amount;
    const note = typeof request.data?.note === "string"
      ? request.data.note.trim()
      : "";

    if (!playerUid || playerUid.length > 128) {
      throw new HttpsError("invalid-argument", "A valid player UID is required.");
    }
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount === 0 ||
        Math.abs(amount) > MAX_CREDIT_PER_OPERATION ||
        !Number.isSafeInteger(Math.round(amount * DECIMAL_SCALE))) {
      throw new HttpsError("invalid-argument", "Amount must be non-zero, within the allowed limit, and have at most 8 decimal places.");
    }
    if (note.length > 240) {
      throw new HttpsError("invalid-argument", "The note must be 240 characters or fewer.");
    }

    const normalizedAmount = Math.round(amount * DECIMAL_SCALE) / DECIMAL_SCALE;
    const playerRef = db.collection("users").doc(playerUid);
    const ledgerRef = db.collection("dncLedger").doc();

    try {
      const result = await db.runTransaction(async (transaction) => {
        const playerSnap = await transaction.get(playerRef);
        if (!playerSnap.exists) {
          throw new HttpsError("not-found", "The selected player account does not exist.");
        }

        const currentBalance = Number(playerSnap.get("dncBalance") ?? 0);
        if (!Number.isFinite(currentBalance) || currentBalance < 0) {
          throw new HttpsError("failed-precondition", "The player's stored DNC balance is invalid.");
        }

        const nextBalance = Math.round((currentBalance + normalizedAmount) * DECIMAL_SCALE) / DECIMAL_SCALE;
        if (nextBalance < 0) {
          throw new HttpsError("failed-precondition", "This adjustment would make the player's DNC balance negative.");
        }

        transaction.update(playerRef, { dncBalance: nextBalance });
        transaction.create(ledgerRef, {
          playerUid,
          amount: normalizedAmount,
          type: normalizedAmount > 0 ? "manual_credit" : "manual_adjustment",
          createdAt: FieldValue.serverTimestamp(),
          adminUid: request.auth.uid,
          note
        });

        return { previousBalance: currentBalance, newBalance: nextBalance };
      });

      return { success: true, ...result };
    } catch (error) {
      if (error instanceof HttpsError) throw error;
      console.error("DNC balance transaction failed:", error);
      throw new HttpsError("internal", "The DNC balance could not be updated. No change was made.");
    }
  }
);
