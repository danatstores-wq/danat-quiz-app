const fs = require('fs');
const { translate } = require('google-translate-api-x');

// Helper function to delay between requests to avoid rate limits
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

  console.log(`🚀 Found ${questions.length} questions. Starting translation to French...`);

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    
    // Skip if French translation already exists to save time/requests
    if (q.question.fr && q.options.fr && q.correctAnswer.fr) {
      console.log(`[${i + 1}/${questions.length}] Skipped (already translated): ${q.id}`);
      continue;
    }

    try {
      // 1. Translate the question text from English ('en') to French ('fr')
      const translatedQuestion = await translate(q.question.en, { to: 'fr' });
      q.question.fr = translatedQuestion.text;

      // 2. Translate each option in the options array
      q.options.fr = [];
      for (const opt of q.options.en) {
        const translatedOpt = await translate(opt, { to: 'fr' });
        q.options.fr.push(translatedOpt.text);
      }

      // 3. Translate the correct answer string
      const translatedAnswer = await translate(q.correctAnswer.en, { to: 'fr' });
      q.correctAnswer.fr = translatedAnswer.text;

      console.log(`[${i + 1}/${questions.length}] Successfully translated: ${q.id}`);

      // Save progress to the file every 10 questions so you don't lose work if interrupted
      if ((i + 1) % 10 === 0) {
        fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
        console.log('💾 Progress saved to questions.json');
      }

      // Small delay to prevent hitting translation rate limits
      await sleep(300);

    } catch (error) {
      console.error(`❌ Error translating question ID ${q.id}:`, error.message);
      // Save current progress before exiting on error
      fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
      break;
    }
  }

  // Final save
  fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
  console.log('✨ All translations completed and saved successfully!');
}

translateQuestions();
