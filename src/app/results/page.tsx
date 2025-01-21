"use client";
import { useEffect, useState } from "react";
import { calculateResults } from "../utils/calculateResults";
import { loveLanguageColors } from "../data/questions";
import { useRouter } from "next/navigation";
import { getLoveLanguageDescription } from "../data/questions";

export default function Results() {
  const router = useRouter();
  const [results, setResults] = useState<Record<string, number>>({});
  const [selectedLoveLanguage, setSelectedLoveLanguage] = useState<keyof typeof loveLanguageColors | null>(null);

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers") || "{}");
    setResults(calculateResults(storedAnswers));
  }, []);

  const copyToClipboard = async () => {
    const resultsText = Object.entries(results)
      .sort((a, b) => b[1] - a[1])
      .map(([key, value]) => `${key}: ${Math.round((value / Object.values(results).reduce((a, b) => a + b, 0)) * 100)}%`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(resultsText);
      alert("Results copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy results to clipboard. Please try again.");
    }
  };

  const restartQuiz = () => {
    if (confirm("Are you sure you want to restart the quiz?")) {
      localStorage.removeItem("quizAnswers");
      router.push("/quiz");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-gray-900">Your Love Language Results</h1>
        <ul className="list-disc pl-0">
          {Object.entries(results)
            .sort((a, b) => b[1] - a[1])
            .map(([key, value]) => {
              const typedKey = key as keyof typeof loveLanguageColors;
              return (
                <li
                  key={key}
                  className={`w-full p-2 mb-2 border rounded-lg text-black ${loveLanguageColors[typedKey]}`}
                  style={{ listStyleType: "none", position: "relative" }}
                  onClick={() => setSelectedLoveLanguage(key as keyof typeof loveLanguageColors)}
                >
                  <span className="font-bold">{key}</span>
                        <span
                        className={`px-2 py-1 rounded-full cursor-pointer ${loveLanguageColors[typedKey]} text-right`}
                        >
                      {`${Math.round((value / Object.values(results).reduce((a, b) => a + b, 0)) * 100)}%`}
                      </span>
                </li>
              );
            })}
        </ul>
        {selectedLoveLanguage && (
          <div className="mt-4 p-4 bg-white border rounded-lg shadow-md text-black">
            <h2 className="text-lg font-bold mb-2">{selectedLoveLanguage}</h2>
            <p>{getLoveLanguageDescription(selectedLoveLanguage as keyof typeof loveLanguageColors)}</p>
          </div>
        )}
        <div className="flex justify-between w-full mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={copyToClipboard}
            title="Copy results to clipboard"
          >
            📋
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={restartQuiz}
            title="Restart the quiz"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}