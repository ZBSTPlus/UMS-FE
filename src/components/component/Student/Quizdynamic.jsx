import Navbar from "@/components/ui/Navbar";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Quizdynamic({ classes }) {
  const { subject } = useParams();
  const { unit } = useParams();
  const selectedClass = classes.find((c) => c.title.toLowerCase() === subject);
  const selectedUnit = selectedClass.units.find(
    (u) => u.name.toLowerCase() === unit
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState([]); // Store individual scores for each question
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const numberOfQuestions = 20; // Number of questions

  const generateQuestions = () => {
    const newQuestions = Array(numberOfQuestions)
      .fill()
      .map((_, index) => {
        const a = getNumber();
        const b = getNumber();

        let result;
        let op;

        switch (selectedUnit.operator) {
          case "+":
            result = a + b;
            op = "+";
            break;
          case "-":
            result = a - b;
            op = "-";
            break;
          case "*":
            result = a * b;
            op = "x";
            break;
          case "/":
            result = (a / b).toFixed(3);
            op = "÷";
            break;
          default:
            console.error("Invalid operator:", selectedUnit.operator);
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
    setSubmitted(false); // Reset submitted state for the next question
    if (selectedOption === questions[questionIndex].correctOption) {
      // If the selected option is correct, add 1 to scores array
      setScores((prevScores) => [...prevScores, 1]);
      setCorrectAnswers((prevCount) => prevCount + 1);
    } else if (selectedOption !== "") {
      // If an option is selected but incorrect, add -1 to scores array
      setScores((prevScores) => [...prevScores, -1]);
      setIncorrectAnswers((prevCount) => prevCount + 1);
    }
    setQuestionIndex((prevIndex) => prevIndex + 1); // Move to the next question
    setSelectedOption(""); // Reset selected option for the next question
  };

  const handlePreviousQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedOption("");
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true); // Mark the quiz as submitted
    const currentQuestion = questions[questionIndex];
    if (selectedOption === currentQuestion.correctOption) {
      setScores((prevScores) => [...prevScores, 1]); // If the selected option is correct, add 1 to scores array
      setCorrectAnswers((prevCount) => prevCount + 1);
    } else if (selectedOption !== "") {
      setScores((prevScores) => [...prevScores, -1]); // If an option is selected but incorrect, add -1 to scores array
      setIncorrectAnswers((prevCount) => prevCount + 1);
    }
  };

  const currentQuestion = questions[questionIndex];

  // Calculate total score by summing up all scores in the array
  const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
  return (
    <div>
      <div className="bg-[#040404] min-h-screen text-white">
        <Navbar name="Quiz" />
        {!submitted && (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Quiz Questions
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
            <h3 className="font-bold text-2xl">Quiz completed!</h3>

            <p className="mt-3 font-semibold text-xl">Your Score: </p>
            <span
              className={`font-medium ${
                totalScore >= 0 ? `text-green-500` : `text-red-500`
              }`}
            >
              {totalScore}
            </span>
            <p className="mt-3 font-semibold text-xl">Correct Answers: </p>
            <span className="font-medium text-green-500 mt-3">
              {correctAnswers}
            </span>
            <p className="mt-3 font-semibold text-xl">Incorrect Answers: </p>
            <span className="text-red-500 font-medium mt-3">
              {incorrectAnswers}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quizdynamic;
