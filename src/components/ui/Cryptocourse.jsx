// import React, { useState, useEffect } from "react";
// import Navbar from "../ui/Navbar";

// const Cryptocourse = (props) => {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [caesarShift, setCaesarShift] = useState(0);

//   useEffect(() => {
//     generateQuestion();
//   }, []);

//   const generateQuestion = () => {
//     const newQuestion = generateSingleQuestion();
//     setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
//   };

//   const generateSingleQuestion = () => {
//     const questionText = "Encrypt the following text using Caesar Cipher:";
//     const plainText = "HELLO";
//     const encryptedText = encryptCaesar(plainText);
//     const options = generateOptions(encryptedText);
//     const correctOption = encryptedText;
//     return { question: `${questionText} ${plainText}`, options, correctOption };
//   };

//   const encryptCaesar = (text) => {
//     return text
//       .toUpperCase()
//       .split("")
//       .map((char) => {
//         if (char.match(/[A-Z]/)) {
//           const code = char.charCodeAt(0);
//           return String.fromCharCode(((code - 65 + caesarShift) % 26) + 65);
//         }
//         return char;
//       })
//       .join("");
//   };

//   const decryptCaesar = (text) => {
//     return text
//       .toUpperCase()
//       .split("")
//       .map((char) => {
//         if (char.match(/[A-Z]/)) {
//           const code = char.charCodeAt(0);
//           return String.fromCharCode(
//             ((code - 65 - caesarShift + 26) % 26) + 65
//           );
//         }
//         return char;
//       })
//       .join("");
//   };

//   const getRandomNumber = (min, max) => {
//     if (min > max) {
//       [min, max] = [max, min];
//     }

//     const range = max - min + 1;

//     const byteArray = new Uint8Array(1);
//     window.crypto.getRandomValues(byteArray);

//     const randomValue = byteArray[0] % range;

//     const randomNumber = min + randomValue;

//     return randomNumber;
//   };

//   const generateOptions = (correctResult) => {
//     const options = [];
//     const correctIndex = getRandomNumber(0, 3); // Randomly select an index for the correct option
//     for (let i = 0; i < 4; i++) {
//       if (i === correctIndex) {
//         options.push(correctResult);
//       } else {
//         let randomOption;
//         do {
//           randomOption = encryptCaesar("RANDOM"); // Generate random options within a range
//         } while (
//           options.includes(randomOption) ||
//           randomOption === correctResult
//         ); // Ensure uniqueness and not equal to the correct answer
//         options.push(randomOption);
//       }
//     }
//     return options;
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextQuestion = () => {
//     if (questionIndex === questions.length - 1) {
//       generateQuestion();
//     }
//     setQuestionIndex((prevIndex) => prevIndex + 1);
//     setSelectedOption("");
//     setSubmitted(false);
//   };

//   const handlePreviousQuestion = () => {
//     setQuestionIndex((prevIndex) => prevIndex - 1);
//     setSelectedOption("");
//     setSubmitted(false);
//   };

//   const handleSubmit = () => {
//     if (selectedOption === questions[questionIndex].correctOption) {
//       setScore((prevScore) => prevScore + 1);
//     } else {
//       setScore((prevScore) => prevScore - 1);
//     }
//     setSubmitted(true);
//   };

//   const currentQuestion = questions[questionIndex];

//   return (
//     <div className="min-h-screen bg-[#040404] dark:bg-gray-900 relative">
//       <div className="w-[100%] flex flex-col bg-[#040404]">
//         <Navbar name="Practice" />
//         <div className="w-[100%] p-4 space-y-4 flex justify-center transition-all">
//           {currentQuestion && (
//             <div className="w-[100%] flex flex-col p-6 bg-[#fff] rounded-lg shadow-md dark:bg-gray-800">
//               <h1 className="mb-0 text-2xl font-bold text-center text-[#040404] dark:text-white">
//                 Practice Questions
//               </h1>
//               <br />
//               <h2 className="text-lg font-bold text-gray-700 dark:text-white">{`Question ${
//                 questionIndex + 1
//               }`}</h2>
//               <p className="mt-2 text-lg text-[#040404] dark:text-gray-400">
//                 {currentQuestion.question}
//               </p>
//               <div className="mt-4 space-y-2">
//                 {currentQuestion.options.map((option, index) => (
//                   <label
//                     key={index}
//                     className={`block bg-[#E6F5FA] text-[#040404] font-semibold text-left dark:bg-gray-700 rounded-md p-3 cursor-pointer ${
//                       submitted
//                         ? option === currentQuestion.correctOption
//                           ? "bg-green-300"
//                           : selectedOption === option
//                           ? "bg-red-300"
//                           : ""
//                         : ""
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       className="mr-2"
//                       value={option}
//                       checked={option === selectedOption}
//                       onChange={() => handleOptionSelect(option)}
//                       disabled={submitted}
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//               {submitted && (
//                 <div
//                   className={`mt-4 ${
//                     selectedOption === currentQuestion.correctOption
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {selectedOption === currentQuestion.correctOption
//                     ? "Correct!"
//                     : `Wrong! The correct answer is: ${currentQuestion.correctOption}`}
//                 </div>
//               )}
//               <div className="flex justify-between mt-6 space-x-4">
//                 <button
//                   onClick={handleSubmit}
//                   className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md focus:outline-none ${
//                     selectedOption === null
//                       ? " opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//                   disabled={selectedOption === "" || submitted}
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={handlePreviousQuestion}
//                   disabled={questionIndex === 0}
//                   className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md focus:outline-none ${
//                     selectedOption === null
//                       ? " opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNextQuestion}
//                   className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md focus:outline-none`}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//           <br />
//         </div>
//         <div className="flex items-center justify-center">
//           <div className="w-[25%] flex items-center justify-center gap-2 py-4 bg-zinc-200 rounded-md">
//             <p className="text-2xl font-semibold">Score :</p>
//             <p
//               className={`font-semibold text-2xl pt-[1px] ${
//                 score >= 0 ? `text-green-500` : `text-red-500`
//               } `}
//             >
//               {score}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cryptocourse;
