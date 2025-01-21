"use client"; 
import { useState } from "react";
import { questions } from "../data/questions";
import ProgressBar from "../components/ProgressBar";
import { useRouter } from "next/navigation";
import { loveLanguageColors } from "../data/questions";


export default function Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [, setAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const handleAnswer = (optionId: string): void => {
    setAnswers((prev) => {
      const newAnswers = { ...prev, [currentQuestion]: optionId };
      localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
      return newAnswers;
    });
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      {quizCompleted ? (
      <div>
      <h1 className="text-xl font-bold mb-4 text-black">Quiz Completed!</h1>
      <p className="text-black">Your results are ready.</p>
        <a className="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" 
        onClick={() => router.push("/results")}>View Results</a>
      
      </div>
      ) : (
      <>
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
      <h1 className="text-xl font-bold mb-4 text-center text-black">{questions[currentQuestion].question}</h1>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option) => (
        <button
        key={option.id}
        className={`w-full p-2 border rounded-lg text-black ${loveLanguageColors[option.loveLanguage]}`}
        onClick={() => handleAnswer(option.id)}
        >
        {option.text}
        </button>
        ))}
      </div>
      </>
      )}
      </div>
    </div>
  );
}