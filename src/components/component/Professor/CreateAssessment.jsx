// QuestionForm.js
import React from "react";

export default function CreateAssessment() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-center">
          Create Assessment Question
        </h2>
        <br />
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Question Number</label>
            <input
              type="text"
              name="question"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Question</label>
            <input
              type="text"
              name="question"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Option A</label>
            <input
              type="text"
              name="option1"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Option B</label>
            <input
              type="text"
              name="option2"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Option C</label>
            <input
              type="text"
              name="option3"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Option D</label>
            <input
              type="text"
              name="option4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            ADD
          </button>
          <br />
          <br />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Create Assessment
          </button>
        </form>
      </div>
    </div>
  );
}
