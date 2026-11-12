import fs from 'fs';
import pkg from 'google-translate-api-x';
const { translate } = pkg;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function resumeTranslation() {
  console.log('📂 Reading questions.json...');
  const filePath = './questions.json';
  
  if (!fs.existsSync(filePath)) {
    console.error('❌ Error: questions.json not found!');
    return;
  }

  const fileData = fs.readFileSync(filePath, 'utf8');
  let questions = JSON.parse(fileData);

  console.log(`🚀 Resuming translation from q311 onwards (skipping already completed ones)...`);

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const qNum = parseInt(q.id.replace('q', ''), 10);

    if (isNaN(qNum) || qNum < 311) {
      continue;
    }

    // If it already has French translations, skip it!
    const hasFrench = q.question?.fr && q.options?.fr && q.options.fr.length > 0 && q.correctAnswer?.fr;
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

      // Save progress every 5 questions
      if ((i + 1) % 5 === 0) {
        fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
        console.log('💾 Progress saved to questions.json');
      }

      await sleep(2500);

    } catch (error) {
      console.error(`❌ Error translating question ID ${q.id}:`, error.message);
      fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
      console.log('💾 Progress saved. Re-run script when ready.');
      break;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
  console.log('✨ All translations completed and saved successfully!');
}

resumeTranslation();