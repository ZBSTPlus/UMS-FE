import React, { useState, useEffect } from "react";

import Navbar from "../../ui/Navbar";
import { Link } from "react-router-dom";
const Assessmentdynamic = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const numberOfQuestions = 25; // Number of questions

  const generateQuestions = () => {
    const newQuestions = Array(numberOfQuestions)
      .fill()
      .map((_, index) => {
        const a = getNumber();
        const b = getNumber();
        const operation = getNumber(5); // Generating a number between 0 and 4 for operation

        let result;
        let op;

        switch (operation) {
          case 0:
            result = a + b;
            op = "+";
            break;
          case 1:
            result = a - b;
            op = "-";
            break;
          case 2:
            result = a * b;
            op = "×";
            break;
          case 3:
            if (b !== 0) {
              result = (a / b).toFixed(3);
              op = "÷";
            } else {
              // If b is 0, regenerate the question
              return generateQuestions();
            }
            break;
          case 4:
            result = a % b;
            op = "%";
            break;
          default:
            break;
        }

        const questionString = `${a} ${op} ${b}`;
        const correctOption = result.toString();
        const options = generateOptions(result);

        return {
          questionNumber: index + 1,
          question: questionString,
          options,
          correctOption,
        };
      });
    setQuestions(newQuestions);
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  const getNumber = (max = 100) => {
    return Math.floor(Math.random() * max);
  };

  const generateOptions = (correctResult) => {
    const options = [];
    const correctIndex = Math.floor(Math.random() * 4); // Randomly select an index for the correct option
    for (let i = 0; i < 4; i++) {
      if (i === correctIndex) {
        options.push(correctResult.toString());
      } else {
        let randomOption;
        do {
          randomOption = getNumber(200); // Generate random options within a range
        } while (
          options.includes(randomOption.toString()) ||
          randomOption === correctResult
        ); // Ensure uniqueness and not equal to the correct answer
        options.push(randomOption.toString());
      }
    }
    return options;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption("");
    setSubmitted(false);
  };

  const handlePreviousQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedOption("");
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const currentQuestion = questions[questionIndex];
  return (
    <div>
      <div className="bg-[#040404] min-h-screen text-white">
        <Navbar name="Assessment" />
        {!submitted && (
          <div className="max-w-7xl mx-auto ">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Assessment Questions
            </h2>
            {currentQuestion && (
              <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
                <p className="mb-4 font-bold text-xl">
                  Question {currentQuestion.questionNumber}
                  <br />
                </p>
                <span className="mt-5 font-semibold">
                  {currentQuestion.question} = ?
                </span>
                <ul className="mt-5">
                  {currentQuestion.options.map((option, index) => (
                    <li
                      key={index}
                      className="mb-2 bg-[#ECF0F1] p-3 rounded-md cursor-pointer"
                      onClick={() => handleOptionSelect(option)}
                    >
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={option === selectedOption}
                          onChange={() => handleOptionSelect(option)}
                          disabled={submitted}
                          className="form-radio text-green-500"
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4">
                  {/* Previous Button */}
                  <button
                    onClick={handlePreviousQuestion}
                    disabled={questionIndex === 0}
                    className={`px-4 py-2 rounded-md border font-medium ${
                      questionIndex === 0
                        ? "bg-[#040404] text-zinc-300"
                        : "bg-[#B3CCC2] text-zinc-900"
                    } mr-4`}
                  >
                    Prev
                  </button>

                  {/* Next or Submit Button */}
                  {questionIndex < numberOfQuestions - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 bg-[#040404] text-zinc-300 rounded-md font-medium"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-[#FFD31A] text-zinc-900 rounded-md font-medium"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {submitted && (
          <div className="max-w-7xl mx-auto bg-zinc-100 text-[#040404] flex flex-col justify-center items-center p-10 rounded-md">
            <h3 className="font-bold text-4xl text-green-500">
              Assessment completed!
            </h3>
            <p className="mt-3 text-xl font-semibold">
              Thank you for completing the assessment.
            </p>
            <div className="mt-10">
              <Link to="/studentui">
                <button className="px-6 py-3 text-lg  font-semibold rounded-md  bg-[#96b1a7] text-[#040404] hover:bg-[#040404] hover:text-[#ECF0F1] focus:outline-none">
                  Back To Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessmentdynamic;
