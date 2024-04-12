import React, { useState, useEffect } from "react";
import Navbar from "../ui/Navbar";

const PracticeDynamic = ({ classParam, topic }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, [classParam, topic]);

  const generateQuestion = () => {
    const newQuestion = generateSingleQuestion(classParam, topic);
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const generateSingleQuestion = (classParam, topic) => {
    let questionString, correctOption;

    if (classParam === "digital logic design") {
      if (topic === "binarytodecimal") {
        const binaryNumber = getRandomBinaryNumber();
        if (binaryNumber) {
          questionString = `Convert ${binaryNumber} from binary to decimal.`;
          correctOption = parseInt(binaryNumber, 2).toString();
        }
      } else if (topic === "binarytooctal") {
        const binaryNumber = getRandomBinaryNumber();
        if (binaryNumber) {
          questionString = `Convert ${binaryNumber} from binary to octal.`;
          correctOption = parseInt(binaryNumber, 2).toString(8);
        }
      } else if (topic === "binarytohexadecimal") {
        const binaryNumber = getRandomBinaryNumber();
        if (binaryNumber) {
          questionString = `Convert ${binaryNumber} from binary to hexadecimal.`;
          correctOption = parseInt(binaryNumber, 2).toString(16).toUpperCase();
        }
      } else if (topic === "decimaltobinary") {
        const decimalNumber = getRandomNumber(1, 100);
        if (decimalNumber !== undefined && decimalNumber !== null) {
          questionString = `Convert ${decimalNumber} from decimal to binary.`;
          correctOption = decimalNumber.toString(2);
        }
      }
    } else if (classParam === "mathematics") {
      const a = getRandomNumber(1, 100);
      const b = getRandomNumber(1, 100);
      let operator;

      if (topic === "addition") {
        operator = "+";
      } else if (topic === "subtraction") {
        operator = "-";
      } else if (topic === "multiplication") {
        operator = "*";
      } else if (topic === "division") {
        operator = "/";
      } else {
        console.error("Invalid topic for mathematics:", topic);
      }

      const result = evaluateExpression(a, b, operator);

      questionString = `${a} ${operator} ${b}`;
      correctOption = result.toString();
    }

    const options = generateOptions(correctOption, classParam);

    return { question: questionString, options, correctOption };
  };

  const getRandomBinaryNumber = () => {
    let binaryNumber = "";
    for (let i = 0; i < 8; i++) {
      binaryNumber += Math.random() < 0.5 ? "0" : "1";
    }
    return binaryNumber;
  };

  const getRandomNumber = (min, max) => {
    if (min > max) {
      [min, max] = [max, min];
    }

    const range = max - min + 1;
    return min + Math.floor(Math.random() * range);
  };

  const evaluateExpression = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return (a / b).toFixed(3);
      default:
        console.error("Invalid operator:", operator);
        return null;
    }
  };

  const generateOptions = (correctResult, classParam) => {
    const options = [];
    const correctIndex = getRandomNumber(0, 3);
    for (let i = 0; i < 4; i++) {
      if (i === correctIndex) {
        options.push(correctResult.toString());
      } else {
        let randomOption;
        if (classParam === "digital logic design") {
          if (topic === "binarytodecimal") {
            randomOption = getRandomNumber(1, 100).toString();
          } else if (topic === "binarytooctal") {
            randomOption = getRandomNumber(1, 100).toString(8);
          } else if (topic === "binarytohexadecimal") {
            randomOption = getRandomNumber(1, 100).toString(16).toUpperCase();
          } else if (topic === "decimaltobinary") {
            randomOption = getRandomBinaryNumber();
          }
        } else if (classParam === "mathematics") {
          randomOption = getRandomNumber(0, 200).toString();
        }
        options.push(randomOption);
      }
    }
    return options;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (questionIndex === questions.length - 1) {
      generateQuestion();
    }
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
    if (selectedOption === questions[questionIndex].correctOption) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
    setSubmitted(true);
  };

  const currentQuestion = questions[questionIndex];

  return (
    <div className="min-h-screen bg-[#040404] dark:bg-gray-900 relative">
      <div className="w-[100%] flex flex-col bg-[#040404]">
        <Navbar name="Practice" />
        <div className="w-[100%] p-4 space-y-4 flex justify-center transition-all">
          {currentQuestion && (
            <div className="w-[100%] flex flex-col p-6 bg-[#fff] rounded-lg shadow-md dark:bg-gray-800">
              <h1 className="mb-0 text-2xl font-bold text-center text-[#040404] dark:text-white">
                Practice Questions
              </h1>
              <br />
              <h2 className="text-lg font-bold text-gray-700 dark:text-white">{`Question ${
                questionIndex + 1
              }`}</h2>
              <p className="mt-2 text-lg text-[#040404] dark:text-gray-400">
                {currentQuestion.question} = ?
              </p>
              <div className="mt-4 space-y-2">
                {currentQuestion.options.map((option, index) => (
                  <label
                    key={index}
                    className={`block bg-[#E6F5FA] text-[#040404] font-semibold text-left dark:bg-gray-700 rounded-md p-3 cursor-pointer ${
                      submitted
                        ? option === currentQuestion.correctOption
                          ? "bg-green-300"
                          : selectedOption === option
                          ? "bg-red-300"
                          : ""
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      className="mr-2"
                      value={option}
                      checked={option === selectedOption}
                      onChange={() => handleOptionSelect(option)}
                      disabled={submitted}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {submitted && (
                <div
                  className={`mt-4 ${
                    selectedOption === currentQuestion.correctOption
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedOption === currentQuestion.correctOption
                    ? "Correct!"
                    : `Wrong! The correct answer is: ${currentQuestion.correctOption}`}
                </div>
              )}
              <div className="flex justify-between mt-6 space-x-4">
                <button
                  onClick={handleSubmit}
                  className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md focus:outline-none ${
                    selectedOption === null
                      ? " opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={selectedOption === "" || submitted}
                >
                  Submit
                </button>
                <button
                  onClick={handlePreviousQuestion}
                  disabled={questionIndex === 0}
                  className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md focus:outline-none ${
                    selectedOption === null
                      ? " opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md focus:outline-none`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          <br />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[25%] flex items-center justify-center gap-2 py-4 bg-zinc-200 rounded-md">
            <p className="text-2xl font-semibold">Score :</p>
            <p
              className={`font-semibold text-2xl pt-[1px] ${
                score >= 0 ? `text-green-500` : `text-red-500`
              } `}
            >
              {score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeDynamic;
