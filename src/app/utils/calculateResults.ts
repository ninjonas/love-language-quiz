import { questions } from "../data/questions";
import { LOVE_LANGUAGES } from "../data/questions";

export function calculateResults(answers: Record<number, string>): Record<string, number> {
  const scores: Record<string, number> = {
    [LOVE_LANGUAGES.WORDS_OF_AFFIRMATION]: 0,
    [LOVE_LANGUAGES.ACTS_OF_SERVICE]: 0,
    [LOVE_LANGUAGES.RECEIVING_GIFTS]: 0,
    [LOVE_LANGUAGES.QUALITY_TIME]: 0,
    [LOVE_LANGUAGES.PHYSICAL_TOUCH]: 0,
  };

  // Count each love language based on user's answers
  Object.entries(answers).forEach(([questionIndex, optionId]) => {
    const question = questions[parseInt(questionIndex)];
    const selectedOption = question.options.find((opt) => opt.id === optionId);

    if (selectedOption) {
      scores[selectedOption.loveLanguage] += 1;
    }
  });

  return scores;
}
