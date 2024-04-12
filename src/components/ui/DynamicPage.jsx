// DynamicQuizPage.js

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";

const DynamicPage = ({ classes, isAssessment }) => {
  const { subject, unit } = useParams();
  const selectedClass = classes.find((c) => c.title.toLowerCase() === subject);
  const selectedUnit = !isAssessment
    ? selectedClass.units.find((u) => u.name.toLowerCase() === unit)
    : null;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");



  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState([]);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const numberOfQuestions = 20;

  const [selectedOptions, setSelectedOptions] = useState(
    Array(numberOfQuestions).fill("")
  );


  const generateQuestions = () => {
    const newQuestions = Array.from(
      { length: numberOfQuestions },
      (_, index) => {
        let a, b, operation, result, op;

        do {
          a = getRandomNumber(1, 100);
          b = getRandomNumber(1, 100);
          operation = getRandomNumber(0, 3);


          if (isAssessment || !selectedUnit) {
            switch (operation) {
              case 0:
                op = "+";
                result = a + b;
                break;
              case 1:
                op = "-";
                result = a - b;
                break;
              case 2:
                op = "x";
                result = a * b;
                break;
              case 3:
                if (b !== 0) {
                  op = "÷";
                  result = (a / b).toFixed(3);
                }
                break;
              case 4:
                op = "%";
                result = a % b;
                break;
              default:
                break;
            }
          } else {
            op = selectedUnit.operator;
            switch (op) {
              case "+":
                result = a + b;
                break;
              case "-":
                result = a - b;
                break;
              case "*":
                result = a * b;
                break;
              case "/":
                if (b !== 0) result = (a / b).toFixed(3);
                break;
              case "%":
                result = a % b;
                break;
              default:
                break;
            }
          }
        } while ((operation === 3 && b === 0) || (op === "/" && b === 0));

        const questionString = `${a} ${op} ${b}`;
        const correctOption = result.toString();
        const options = generateOptions(result);

        return {
          questionNumber: index + 1,
          question: questionString,
          options,
          correctOption,
        };
      }
    );

    setQuestions(newQuestions);
  };

  const getRandomNumber = (min, max) => {
    if (min > max) {
      [min, max] = [max, min];
    }

    const range = max - min + 1;

    const byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    const randomValue = byteArray[0] % range;

    const randomNumber = min + randomValue;

    return randomNumber;
  };

  useEffect(() => {
    generateQuestions();
  }, [isAssessment, selectedUnit]);

  const generateOptions = (correctResult) => {
    const options = [];

    const correctIndex = getRandomNumber(0, 3); // Change from 4 to 3

    for (let i = 0; i < 4; i++) {
      let randomOption;

      if (i === correctIndex) {
        randomOption = correctResult;
      } else {
        // Generate slightly greater or lesser values for incorrect options
        const deviation = getRandomNumber(1, 10); // Adjust the range as needed
        randomOption =
          i % 2 === 0 ? correctResult + deviation : correctResult - deviation;
      }

      if (options.includes(randomOption.toString())) {

        i--;
      } else {
        options.push(randomOption.toString());
      }
    }

    return options;
  };


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
  
    setSubmitted(false);
    setSelectedOption(selectedOptions[questionIndex + 1]);


    if (!isAssessment) {
      if (selectedOption === questions[questionIndex].correctOption) {
        setScores((prevScores) => [...prevScores, 1]);
        setCorrectAnswers((prevCount) => prevCount + 1);
      } else if (selectedOption !== "") {
        setScores((prevScores) => [...prevScores, -1]);
        setIncorrectAnswers((prevCount) => prevCount + 1);
      }
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption("");
  };


  
  const handlePreviousQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedOption(selectedOptions[questionIndex - 1]);

    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);

    if (!isAssessment) {
      const currentQuestion = questions[questionIndex];
      if (selectedOption === currentQuestion.correctOption) {
        setScores((prevScores) => [...prevScores, 1]);
        setCorrectAnswers((prevCount) => prevCount + 1);
      } else if (selectedOption !== "") {
        setScores((prevScores) => [...prevScores, -1]);
        setIncorrectAnswers((prevCount) => prevCount + 1);
      }
    }
  };

  const currentQuestion = questions[questionIndex];
  const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <div className="bg-[#040404] min-h-screen text-white">
        <Navbar name={isAssessment ? "Assessment" : "Quiz"} />
        {!submitted && (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {isAssessment ? "Assessment Questions" : "Quiz Questions"}
            </h2>
            {currentQuestion && (
              <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
                <p className="mb-4 font-bold text-xl">
                  Question {currentQuestion.questionNumber}
                  <br />{" "}
                </p>{" "}
                <span className="mt-5 font-semibold">
                  {currentQuestion.question} = ?{" "}
                </span>{" "}
                <ul className="mt-5">
                  {" "}
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
                <div className="mt-4">
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
            <h3 className="font-bold text-2xl text-green-500">
              {isAssessment ? "Assessment completed!" : "Quiz completed!"}
            </h3>

            {isAssessment ? (
              <div>
                <p className="mt-3 text-xl font-semibold">
                  Thank you for completing the assessment.
                </p>
                <div className="mt-10 flex justify-center items-center">
                  <Link to="/studentui">
                    <button className="px-6 py-3 text-lg  font-semibold rounded-md  bg-[#96b1a7] text-[#040404] hover:bg-[#040404] hover:text-[#ECF0F1] focus:outline-none">
                      Back To Home
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
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
                <p className="mt-3 font-semibold text-xl">
                  Incorrect Answers:{" "}
                </p>
                <span className="text-red-500 font-medium mt-3">
                  {incorrectAnswers}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicPage;
