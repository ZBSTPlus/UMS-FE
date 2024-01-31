/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/J6nloxr3ynN
 */

import React, { useState } from "react";
import { data1 } from "@/assets/data1";
import New from "./New";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Logo from "../../../assets/Logo/logo.png";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";

export default function Quiz({ classes }) {
  const { subject, unit } = useParams();
  const selectedClass = classes.find((c) => c.title.toLowerCase() === subject);
  const selectedUnit = selectedClass.units.find(
    (u) => u.name.toLowerCase() === unit
  );

  const NUM_QUESTIONS = data1.length;
  const [questionStatus, setQuestionsStatus] = useState(
    new Array(NUM_QUESTIONS).fill(null)
  );
  const [statistics, setStatistics] = useState({
    correctCount: 0,
    incorrectCount: 0,
    skippedCount: 0,
  });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const changeHandler = (isCorrect, index) => {
    setQuestionsStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = isCorrect;
      return newStatus;
    });
  };
  const handleSubmit = () => {
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;
    questionStatus.forEach((status) => {
      if (status == 1) {
        correctCount++;
      } else if (status == 0) {
        incorrectCount++;
      } else {
        skippedCount++;
      }
    });
    let score = correctCount;
    setStatistics({ score, correctCount, incorrectCount, skippedCount });
    setIsPopoverOpen(true);
  };
  const handleDone = () => {
    setIsPopoverOpen(false);
  };
  const imgRef = useRef(null);
  const profRef = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from([imgRef.current, profRef.current], {
      y: -100,
      duration: 0.5,
      stagger: 0.3,
      opacity: 0,
    });
  });
  return (
    <div key="1" className="bg-[#040404] min-h-screen">
      {/* <nav className="bg-blue-400 shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div
                className="text-3xl font-bold text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                <h2>QUIZ</h2>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <header className="flex  h-10 mb-5 dark:bg-gray-900 w-[95%]">
        <nav className="flex items-center justify-between w-[100%] sticky top-24 px-10 py-0 h-[100%] mt-10">
          <div className="flex gap-4" ref={imgRef}>
            <div className=" h-[100px] w-[100px] flex items-center justify-center relative overflow-hidden">
              <img className=" object-cover cursor-pointer" src={Logo} alt="" />
            </div>

            <div className="flex items-center space-x-4">
              {/* <LayoutDashboardIcon className="w-6 h-6" /> */}
              <span className="text-xl font-semibold  py-2 text-[#B3CCC2] rounded-md ">
                QUIZ
              </span>
              <span className="text-xl font-semibold  py-2 text-[#B3CCC2] rounded-md ">
                : {selectedUnit.name}
              </span>
            </div>
          </div>
          <div ref={profRef}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    alt="User avatar"
                    src="https://imgs.search.brave.com/J0ixr3aHGA8aitBrET8u4exc5KcrQl8PWXGrvAdsUY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
                  />
                  {/* <AvatarFallback>JD</AvatarFallback> */}
                </Avatar>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </nav>
      </header>
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6 mt-24">
        {data1.map((question, index) => (
          <New
            question={question.question}
            id={question.id}
            option1={question.option1}
            option2={question.option2}
            option3={question.option3}
            option4={question.option4}
            ans={question.ans}
            index={index}
            changeHandler={changeHandler}
          />
        ))}
        <Popover>
          <PopoverTrigger>
            <button
              className="mt-4 px-4 py-2 bg-[#3399ff] text-white rounded hover:bg-blue-600 focus:bg-blue-600 focus:text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div
              key="1"
              className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-800"
            >
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-gray-700">
                <p className="text-lg font-semibold text-gray-700 dark:text-white">
                  Quiz Results
                </p>
              </div>
              <div className="px-10 py-6">
                <div className="flex justify-between pb-5 border-b-2" />
                <div className="mt-3">
                  <div className="flex justify-between py-2">
                    <p className="text-gray-700 dark:text-gray-200">
                      Total Questions
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                      {data1.length}
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p className="text-gray-700 dark:text-gray-200">Score</p>
                    <p className="text-gray-700 dark:text-gray-200">
                      {statistics.score}
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p className="text-gray-700 dark:text-gray-200">
                      Correct Questions
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                      {statistics.correctCount}
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p className="text-gray-700 dark:text-gray-200">
                      Incorrect Questions
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                      {statistics.incorrectCount}
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p className="text-gray-700 dark:text-gray-200">
                      Skipped Questions
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                      {statistics.skippedCount}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                    onClick={handleDone}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}