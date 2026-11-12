import fs from 'fs';
import pkg from 'google-translate-api-x';
const { translate } = pkg;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translateQuestions() {
  console.log('📂 Reading questions.json...');
  const filePath = './questions.json';
  
  if (!fs.existsSync(filePath)) {
    console.error('❌ Error: questions.json not found in the current directory!');
    return;
  }

  const fileData = fs.readFileSync(filePath, 'utf8');
  let questions;
  
  try {
    questions = JSON.parse(fileData);
  } catch (err) {
    console.error('❌ Error parsing JSON:', err.message);
    return;
  }

  console.log(`🚀 Found ${questions.length} questions. Scanning for missing translations from q311 onwards...`);

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    
    // Extract the numeric part of the ID (e.g., "q311" -> 311)
    const qNum = parseInt(q.id.replace('q', ''), 10);

    // Only process from q311 and higher
    if (isNaN(qNum) || qNum < 311) {
      continue;
    }

    // Check if it already has complete French translations
    const hasFrench = q.question?.fr && q.options?.fr && q.correctAnswer?.fr;
    if (hasFrench) {
      console.log(`[${i + 1}/${questions.length}] Skipped (already translated): ${q.id}`);
      continue;
    }

    console.log(`🔄 Translating ${q.id} (${i + 1}/${questions.length})...`);

    try {
      const translatedQuestion = await translate(q.question.en, { to: 'fr' });
      q.question.fr = translatedQuestion.text;

      q.options.fr = [];
      for (const opt of q.options.en) {
        const translatedOpt = await translate(opt, { to: 'fr' });
        q.options.fr.push(translatedOpt.text);
      }

      const translatedAnswer = await translate(q.correctAnswer.en, { to: 'fr' });
      q.correctAnswer.fr = translatedAnswer.text;

      console.log(`✅ Successfully translated: ${q.id}`);

      // Save progress every 5 questions to be extra safe
      if ((i + 1) % 5 === 0) {
        fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
        console.log('💾 Progress saved to questions.json');
      }

      // Safe delay to prevent server rate-limiting (429 errors)
      await sleep(2500);

    } catch (error) {
      console.error(`❌ Error translating question ID ${q.id}:`, error.message);
      fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
      console.log('💾 Progress saved up to this point. You can re-run the script to resume.');
      break;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
  console.log('✨ All translations completed and saved successfully!');
}

translateQuestions();