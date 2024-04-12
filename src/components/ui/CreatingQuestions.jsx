// import React, { useState } from "react";

// function CreatingQuestions(props) {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState("");


 


//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length + 1,
//         question: "",
//         optionA: "",
//         optionB: "",
//         optionC: "",
//         optionD: "",
//       },
//     ]);
//   };
//   const deleteLastQuestion = () => {
//     if (questions.length === 0) return;
//     setQuestions(questions.slice(0, -1));
//   };

//   const handleSubmit = async () => {
//     const isEmpty = questions.some(
//       (q) =>
//         q.question.trim() === "" ||
//         q.optionA.trim()===""||
//         q.optionB.trim()===""||
//         q.optionC.trim()===""||
//         q.optionD.trim()===""||
//         q.answer.trim() === ""
//     );
  

//     if (isEmpty) {
//       setError("Please fill in all fields");
//       return;
//     }

//     setError("");
//     try {
//       const response = await fetch('your-api-endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(questions),
//       });
//       if (response.ok) {
//         console.log('Questions saved successfully');
//       } else {
//         console.error('Failed to save questions:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error while saving questions:', error);
//     }
    
//   };


//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center gap-5 ">
//         <div className="w-full md:w-[90%] p-6 bg-[#F3F4F6] rounded shadow-md md:px-10 mt-5">
//           <h2 className="mb-4 text-3xl font-bold text-center text-[#040404]">
//             Create {props.name} Questions
//           </h2>
//           <br />
//           {questions.map((q) => (
//             <div key={q.id}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="question"
//                   className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
//                 >
//                   Question : {q.id}
//                 </label>
//                 <input
//                   type="text"
//                   id="question"
//                   name={q.question}
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="option1"
//                   className="block text-[#262D3E] font-semibold"
//                 >
//                   Option A
//                 </label>
//                 <input
//                   type="text"
//                   id="option1"
//                   name={q.optionA}
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="option2"
//                   className="block text-[#262D3E] font-semibold"
//                 >
//                   Option B
//                 </label>
//                 <input
//                   type="text"
//                   id="option2"
//                   name={q.optionB}
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="option3"
//                   className="block text-[#262D3E] font-semibold"
//                 >
//                   Option C
//                 </label>
//                 <input
//                   type="text"
//                   id="option3"
//                   name={q.optionC}
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="option4"
//                   className="block text-[#262D3E] font-semibold"
//                 >
//                   Option D
//                 </label>
//                 <input
//                   type="text"
//                   id="option4"
//                   name={q.optionD}
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
//                 />
//               </div>

//               <br />

//               <hr className="h-[1.5vw]  w-full border-[#B3CCC2]" />
//             </div>
//           ))}
//          <div className="flex justify-between">
//           <button
//             onClick={addQuestion}
//             className="w-[150px] h-12 py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase"
//           >
//             Add Question
//           </button>
//           {questions.length > 0 && ( // Only show the Delete Question button if there's at least one question
//             <button
//               onClick={deleteLastQuestion}
//               className="w-[150px] h-12 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md focus:outline-none uppercase"
//             >
//               Delete Question
//             </button>
//           )}
          
//           {questions.length>0 && (
//           <button
//             onClick={handleSubmit}
//             className="w-[150px] h-12 py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase mt-4"
//           >
//             Save Questions
//           </button>
//           )}

//           {submitenable && <button
//             onClick={onSubmit}
//             className="m-2 w-full py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase"
//           >
//             Submit
//           </button>}
//          </div>
                
//           {error && <p className="text-red-500 mt-2">{error}</p>}
        
        
         
      

//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreatingQuestions;


import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";

export default function CreatingQuestions() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [submitEnable, setSubmitEnable] = useState(false);
 

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
        answer: "", // New answer field
      },
    ]);
  };
  
  const deleteLastQuestion = () => {
    if (questions.length === 0) return;
    setQuestions(questions.slice(0, -1));
  };

  const handleSubmit = async () => {
    const isEmpty = questions.some(
      (q) =>
        q.question.trim() === "" ||
        q.optionA.trim()===""||
        q.optionB.trim()===""||
        q.optionC.trim()===""||
        q.optionD.trim()===""||
        q.answer.trim() === ""
    );
  

    if (isEmpty) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questions),
      });
      if (response.ok) {
        console.log('Questions saved successfully');
      } else {
        console.error('Failed to save questions:', response.statusText);
      }
    } catch (error) {
      console.error('Error while saving questions:', error);
    }
    
  };
  const onSubmit = () => {
    // Handle submission logic
    alert("submitted")
  };

  return (
    <div className="min-h-screen bg-[#040404] pt-[2vw]">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <div className="w-full max-w-6xl p-6 bg-[#F3F4F6] rounded shadow-md px-10">
          <h2 className="mb-4 text-3xl font-bold text-center text-[#040404]">
            Create  Questions
          </h2>
          <br />
          {questions.map((q) => (
            <div key={q.id}>
              <div className="mb-4">
                <label
                  htmlFor={`question${q.id}`}
                  className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
                >
                  Question : {q.id}
                </label>
                <input
                  type="text"
                  id={`question${q.id}`}
                  name={`question${q.id}`}
                  value={q.question}
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((prevQ) =>
                        prevQ.id === q.id
                          ? { ...prevQ, question: e.target.value }
                          : prevQ
                      )
                    )
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`optionA${q.id}`}
                  className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
                >
                  Option A
                </label>
                <input
                  type="text"
                  id={`optionA${q.id}`}
                  name={`optionA${q.id}`}
                  value={q.optionA}
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((prevQ) =>
                        prevQ.id === q.id
                          ? { ...prevQ, optionA: e.target.value }
                          : prevQ
                      )
                    )
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`optionB${q.id}`}
                  className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
                >
                  Option B
                </label>
                <input
                  type="text"
                  id={`optionB${q.id}`}
                  name={`optionB${q.id}`}
                  value={q.optionB}
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((prevQ) =>
                        prevQ.id === q.id
                          ? { ...prevQ, optionB: e.target.value }
                          : prevQ
                      )
                    )
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`optionC${q.id}`}
                  className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
                >
                  Option C
                </label>
                <input
                  type="text"
                  id={`optionC${q.id}`}
                  name={`optionC${q.id}`}
                  value={q.optionC}
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((prevQ) =>
                        prevQ.id === q.id
                          ? { ...prevQ, optionC: e.target.value }
                          : prevQ
                      )
                    )
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`optionD${q.id}`}
                  className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
                >
                  Option D
                </label>
                <input
                  type="text"
                  id={`optionD${q.id}`}
                  name={`optionD${q.id}`}
                  value={q.optionD}
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((prevQ) =>
                        prevQ.id === q.id
                          ? { ...prevQ, optionD: e.target.value }
                          : prevQ
                      )
                    )
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                />
              </div>
              {/* Similar input fields for options A, B, C, D */}
              {/* ... */}
              <div className="mb-4">
                <label
                  htmlFor={`answer${q.id}`}
                  className="block text-[#262D3E] font-bold text-xl mb-[0.5vw]"
                >
                  Answer
                </label>
                <select
                  id={`answer${q.id}`}
                  name={`answer${q.id}`}
                  value={q.answer}
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((prevQ) =>
                        prevQ.id === q.id
                          ? { ...prevQ, answer: e.target.value }
                          : prevQ
                      )
                    )
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#B3CCC2]"
                >
                  <option value="">Select Answer</option>
                  <option value="A">{q.optionA}</option>
                  <option value="B">{q.optionB}</option>
                  <option value="C">{q.optionC}</option>
                  <option value="D">{q.optionD}</option>
                </select>
              </div>
              <br />
              <hr className="h-[1.5vw]  w-full border-[#B3CCC2]" />
            </div>
          ))}
         
          <div className="flex justify-between flex-wrap">
          <button
            onClick={addQuestion}
            className="w-[150px] h-12 py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase"
          >
            Add Question
          </button>
          {questions.length > 0 && ( // Only show the Delete Question button if there's at least one question
            <button
              onClick={deleteLastQuestion}
              className="w-[150px] h-12 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md focus:outline-none uppercase"
            >
              Delete Question
            </button>
          )}
          
          {questions.length>0 && (
          <button
            onClick={handleSubmit}
            className="w-[150px] h-12 py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase "
          >
            Save Questions
          </button>
          )}
          </div>
          
          {submitEnable && <Button
            onClick={onSubmit}
            className="w-[150px] h-12 py-2 bg-[#040404] text-[#B3CCC2] hover:bg-opacity-80  rounded-md  focus:outline-none uppercase"
          >
            Submit
          </Button>}
         
                
          {error && <p className="text-red-500 mt-2">{error}</p>}
        
        
        </div>
      </div>
    </div>
  );
}
