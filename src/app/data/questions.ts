export const LOVE_LANGUAGES = {
    WORDS_OF_AFFIRMATION: "Words of Affirmation",
    ACTS_OF_SERVICE: "Acts of Service",
    RECEIVING_GIFTS: "Receiving Gifts",
    QUALITY_TIME: "Quality Time",
    PHYSICAL_TOUCH: "Physical Touch",
  } as const;

export const loveLanguageColors: Record<typeof LOVE_LANGUAGES[keyof typeof LOVE_LANGUAGES], string> = {
    [LOVE_LANGUAGES.WORDS_OF_AFFIRMATION]: "bg-purple-200 hover:bg-purple-300",
    [LOVE_LANGUAGES.ACTS_OF_SERVICE]: "bg-green-200 hover:bg-green-300",
    [LOVE_LANGUAGES.RECEIVING_GIFTS]: "bg-yellow-200 hover:bg-yellow-300",
    [LOVE_LANGUAGES.QUALITY_TIME]: "bg-blue-200 hover:bg-blue-300",
    [LOVE_LANGUAGES.PHYSICAL_TOUCH]: "bg-red-200 hover:bg-red-300",
};

export function getLoveLanguageDescription(key: typeof LOVE_LANGUAGES[keyof typeof LOVE_LANGUAGES]): string {
    const descriptions: Record<typeof LOVE_LANGUAGES[keyof typeof LOVE_LANGUAGES], string> = {
      [LOVE_LANGUAGES.WORDS_OF_AFFIRMATION]: "Expressing affection through spoken words, praise, or appreciation.",
      [LOVE_LANGUAGES.ACTS_OF_SERVICE]: " Actions, rather than words, are used to show and receive love.",
      [LOVE_LANGUAGES.RECEIVING_GIFTS]: "Gifting is symbolic of love and affection.",
      [LOVE_LANGUAGES.QUALITY_TIME]: "Expressing affection with undivided, undistracted attention.",
      [LOVE_LANGUAGES.PHYSICAL_TOUCH]: "Physical expressions of love, such as holding hands, hugging, or kissing.",
    };
    return descriptions[key] || "No description available.";
}

  
export const questions = [
    {
        id: 1,
        question: "How do you feel most appreciated?",
        options: [
            { id: "A", text: "Hearing kind and encouraging words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving a thoughtful and meaningful gift", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time with someone special", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Someone helping me with important tasks", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving a warm and comforting hug", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 2,
        question: "What makes you feel loved?",
        options: [
            { id: "A", text: "Receiving heartfelt compliments", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show thoughtfulness", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Having uninterrupted quality time together", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone assist me with my chores", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving affectionate physical touch", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 3,
        question: "What do you value most?",
        options: [
            { id: "A", text: "Hearing encouraging and supportive words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving surprise gifts that show you care", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Engaging in deep and meaningful conversations", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Experiencing acts of kindness and service", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving physical expressions of love", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 4,
        question: "What makes you feel special?",
        options: [
            { id: "A", text: "Receiving genuine praise and recognition", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving presents that show thought and care", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending uninterrupted time together", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone help me with my tasks", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Holding hands and other physical gestures", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 5,
        question: "What do you appreciate most?",
        options: [
            { id: "A", text: "Hearing kind and thoughtful words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that are meaningful", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time with loved ones", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone assist me with work", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving physical touch like hugs", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 6,
        question: "What makes you feel cared for?",
        options: [
            { id: "A", text: "Hearing encouraging and uplifting words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show you are thought of", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending dedicated time together", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone help me with my tasks", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving affectionate hugs and touches", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 7,
        question: "What makes you feel valued?",
        options: [
            { id: "A", text: "Hearing positive and affirming words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show appreciation", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time with someone", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone help me with chores", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving physical affection like hugs", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 8,
        question: "What makes you feel important?",
        options: [
            { id: "A", text: "Receiving sincere compliments", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show you are valued", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time with loved ones", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone perform acts of service for me", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving warm and loving hugs", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 9,
        question: "What makes you feel loved?",
        options: [
            { id: "A", text: "Hearing kind and loving words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show thoughtfulness", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time together", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone help me with tasks", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving physical touch like hugs", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 10,
        question: "What makes you feel appreciated?",
        options: [
            { id: "A", text: "Hearing encouraging and kind words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show appreciation", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time with someone special", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone help me with work", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving warm and loving hugs", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 11,
        question: "What makes you feel happy?",
        options: [
            { id: "A", text: "Hearing positive and uplifting words", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show you are cared for", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time with loved ones", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone perform acts of kindness for me", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving physical affection like hugs", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
    {
        id: 12,
        question: "What makes you feel good?",
        options: [
            { id: "A", text: "Receiving heartfelt compliments", loveLanguage: LOVE_LANGUAGES.WORDS_OF_AFFIRMATION },
            { id: "B", text: "Receiving gifts that show thoughtfulness", loveLanguage: LOVE_LANGUAGES.RECEIVING_GIFTS },
            { id: "C", text: "Spending quality time with someone special", loveLanguage: LOVE_LANGUAGES.QUALITY_TIME },
            { id: "D", text: "Having someone help me with tasks", loveLanguage: LOVE_LANGUAGES.ACTS_OF_SERVICE },
            { id: "E", text: "Receiving warm and loving hugs", loveLanguage: LOVE_LANGUAGES.PHYSICAL_TOUCH },
        ],
    },
];