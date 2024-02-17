import React, { useState } from "react";
import { useQuestionContext } from "@/components/contexts/QuestionContext";
export default function CreateAssessment() {
  const { addQuestion } = useQuestionContext();
  const [question, setQuestion] = useState("");

  const handleAddQuestion = (event) => {
    event.preventDefault();
    addQuestion({ question });
    setQuestion("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-center">
          Create Assessment Question
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Question Number</label>
            <input
              type="text"
              id="question1"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Question</label>
            <input
              type="text"
              name="questionText"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700"></label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
