// QuestionForm.js
import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";


export default function CreateQuiz() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [submitenable, setsubmitenable] = useState(false);
  const [diableque, setDisableque] = useState(false);


  const onSubmit = () => {
    setDisableque(true)
    window.alert("You added ",count);
    window.history.back();
  }

  const addQuestion = () => {
    setCount((prev) => prev + 1);
    console.log(count);
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
      },
    ]);
  };

  useEffect(() => {
    if (count == 10) {
      setsubmitenable(true)
    }
  },[count]);

  return (
    <div className="min-h-screen bg-[#040404] pt-[2vw]">
      <Navbar name="Quiz" />
      <div className="flex flex-col items-center justify-center gap-5 ">
        <div className="w-full max-w-6xl p-6 bg-[#F3F4F6] rounded shadow-md px-10">
          <h2 className="mb-4 text-3xl font-bold text-center text-[#040404]">
            Create Quiz Questions
          </h2>
          <br />
          {questions.map((q) => (
            <div key={q.id}>
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
                >
                  Question : {q.id}
                </label>
                <input
                  required
                  type="text"
                  id="question"
                  name={q.question}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="option1"
                  className="block text-[#262D3E] font-semibold"
                >
                  Option A
                </label>
                <input
                  required
                  type="text"
                  id="option1"
                  name={q.optionA}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="option2"
                  className="block text-[#262D3E] font-semibold"
                >
                  Option B
                </label>
                <input
                  required
                  type="text"
                  id="option2"
                  name={q.optionB}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="option3"
                  className="block text-[#262D3E] font-semibold"
                >
                  Option C
                </label>
                <input
                  required
                  type="text"
                  id="option3"
                  name={q.optionC}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="option4"
                  className="block text-[#262D3E] font-semibold"
                >
                  Option D
                </label>
                <input
                  required
                  type="text"
                  id="option4"
                  name={q.optionD}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>

              <br />

              <hr className="h-[1.5vw]  w-full border-[#B3CCC2]" />
            </div>
          ))}
          {!diableque && <button
            onClick={addQuestion}
            className="m-2 w-full py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase"
          >
            Add Questions
          </button> }

          {submitenable && <button
            onClick={onSubmit}
            className="m-2 w-full py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase"
          >
            Submit
          </button>}
        </div>
      </div>
    </div>
  );
}