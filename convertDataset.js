const fs = require('fs');

console.log("Reading Arabic-SQuAD.json...");
const rawData = JSON.parse(fs.readFileSync('./Arabic-SQuAD.json', 'utf8'));

const questions = [];

// Parse SQuAD structure into multiple-choice quiz format
rawData.data.forEach(article => {
  article.paragraphs.forEach(para => {
    para.qas.forEach(qa => {
      if (qa.answers && qa.answers.length > 0) {
        const correctAnswerText = qa.answers[0].text;
        
        // Generate mock options including the correct answer
        const optionsAr = [
          correctAnswerText,
          "خيار خاطئ 1",
          "خيار خاطئ 2",
          "خيار خاطئ 3"
        ].sort(() => Math.random() - 0.5); // Shuffle options

        const correctIndex = optionsAr.indexOf(correctAnswerText);

        questions.push({
          category: { ar: "عام", en: "General" },
          question: {
            ar: qa.question,
            en: "Translated question placeholder" // SQuAD is Arabic only, can add translation later
          },
          options: {
            ar: optionsAr,
            en: ["Option A", "Option B", "Option C", "Option D"]
          },
          correctAnswer: correctIndex,
          points: 50
        });
      }
    });
  });
});

fs.writeFileSync('questions.json', JSON.stringify(questions, null, 2));
console.log(`✅ Converted ${questions.length} questions into questions.json successfully!`);
