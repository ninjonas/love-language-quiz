"use client"; 
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Welcome to the Love Languages Quiz</h1>
        <p className="mb-4 text-black">Discover how you give and receive love best.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => router.push("/quiz")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
