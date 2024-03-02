import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Logo from "../../assets/Logo/logo.png";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

const PracticeDynamic = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const newQuestion = generateSingleQuestion();
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const generateSingleQuestion = () => {
    // Generate a single addition question
    const a = getNumber();
    const b = getNumber();

    let result;

    switch (props.operator) {
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
        result = (a / b).toFixed(3);
        break;
      default:
        console.error("Invalid operator:", props.operator);
    }

    const operator = props.operator;

    const questionString = `${a} ${operator} ${b}`;
    const correctOption = result.toString();
    const options = generateOptions(result);

    return { question: questionString, options, correctOption };
  };

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040404] dark:bg-gray-900 relative">
      <div className="w-[100%] flex flex-col justify-start items-center bg-[#040404]">
        <header className="flex  h-10 mb-5 dark:bg-gray-900 w-[95%] fixed top-12">
          <nav className="flex items-center justify-between w-[100%]  px-10 py-0">
            <div className="flex gap-4">
              <div className="h-10 w-10 md:h-[60px] md:w-[60px] flex items-center justify-center relative overflow-hidden cursor-pointer">
                <Link to="/studentui">
                  <img
                    className="object-cover cursor-pointer "
                    src={Logo}
                    alt=""
                  />
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-xl font-semibold  py-2  text-[#B3CCC2] rounded-md ">
                  PRACTICE
                </span>
                <span className="text-xl font-semibold  py-2  text-[#B3CCC2] rounded-md ">
                  : {props.topic}
                </span>
              </div>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      alt="User avatar"
                      src="https://imgs.search.brave.com/J0ixr3aHGA8aitBrET8u4exc5KcrQl8PWXGrvAdsUY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
                    />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserIcon className="w-4 h-4" />
                    John Doe
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MailIcon className="w-4 h-4" />
                    ums@gmail.com
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOutIcon className="w-4 h-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </header>
        <div className="w-[95%] p-4 space-y-4 transition-all mt-16">
          {currentQuestion && (
            <div className="flex flex-col p-6 bg-[#fff] rounded-lg shadow-md dark:bg-gray-800">
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
                  className={`px-4 py-2 text-sm font-medium  bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md  focus:outline-none ${
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
                  className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]  rounded-md  focus:outline-none ${
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

        <div className="w-[25%] flex items-center justify-center gap-2 py-4 bg-zinc-200 rounded-md">
          <p className="font-semibold text-2xl">Score :</p>
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
  );
};

export default PracticeDynamic;

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
