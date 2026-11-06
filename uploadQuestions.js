const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Load service account key and questions data
const serviceAccount = require('./serviceAccountKey.json');
const questionsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'questions.json'), 'utf8'));

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadData() {
  const collectionRef = db.collection('questions');
  const batchSize = 500; // Firestore maximum batch limit
  let batch = db.batch();
  let count = 0;

  console.log(`Starting upload of ${questionsData.length} questions...`);

  for (const q of questionsData) {
    const docRef = collectionRef.doc();
    batch.set(docRef, q);
    count++;

    // Commit every 500 documents
    if (count % batchSize === 0) {
      await batch.commit();
      console.log(`Uploaded ${count} / ${questionsData.length} questions...`);
      batch = db.batch();
    }
  }

  // Commit remaining documents
  if (count % batchSize !== 0) {
    await batch.commit();
  }

  console.log(`✅ Successfully uploaded all ${count} questions to Firestore!`);
}

uploadData().catch((err) => {
  console.error("❌ Error uploading questions:", err);
});
