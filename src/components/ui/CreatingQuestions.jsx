import React, { useState } from "react";

function CreatingQuestions(props) {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
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
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <div className="w-full md:w-[90%] p-6 bg-[#F3F4F6] rounded shadow-md md:px-10 mt-5">
          <h2 className="mb-4 text-3xl font-bold text-center text-[#040404]">
            Create {props.name} Questions
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
          <button
            onClick={addQuestion}
            className="w-full py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase"
          >
            Add Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatingQuestions;
