import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Studentui from "./components/component/Student/Studentui";

import React from "react";

import Detailspage from "./components/component/Student/Detailspage";
import Question from "./components/component/Student/Question";

import Instructionpage from "./components/component/Student/Instructionpage";

import ProfessorPage from "./components/component/Professor/ProfessorPage";
import CreateAssessment from "./components/component/Professor/CreateAssessment";

import CreateQuiz from "./components/component/Professor/CreateQuiz";
import CreatePractice from "./components/component/Professor/CreatePractice";
import QuizPage from "./components/component/Student/QuizPage";
import AssessmentPage from "./components/component/Student/AssessmentPage";

import BA from "./components/component/Auth/BaseAuth"
import { AuthenticationGuard } from "./components/component/Auth/AuthenticationGuard";

function App() {
  const classes = [
    {
      id: 1,
      title: "Mathematics",
      value: "30",
      units: [
        {
          id: "1",
          name: "Addition",
          operator: "+",
        },
        {
          id: "2",
          name: "Subtraction",
          operator: "-",
        },
        {
          id: "3",
          name: "Multiplication",
          operator: "*",
        },
        {
          id: "4",
          name: "Division",
          operator: "/",
        },
      ],
    },
    {
      id: 2,
      title: "Digital Logic Design",
      value: "50",
      units: [
        {
          id: "1",
          name: "Flipflops",
        },
        {
          id: "2",
          name: "UpDown Counters",
        },
        {
          id: "3",
          name: "Hexa to Octa",
        },
      ],
    },
    {
      id: 3,
      title: "DBMS",
      value: "75",
      units: [
        {
          id: "1",
          name: "Database",
        },
        {
          id: "2",
          name: "MySQL",
        },
        {
          id: "3",
          name: "DBMS",
        },
      ],
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/ca" element={<CreateAssessment />} />
          <Route path="/cp" element={<CreatePractice />} />
          <Route path="/cq" element={<CreateQuiz />} />

          <Route
            path="/professorpage"
            element={<AuthenticationGuard component={ProfessorPage} classes={classes} allowed={"Sir"} />}
          />

          <Route
            path="/detailspage/:subject"
            element={<Detailspage classes={classes} />}
          />
          <Route path="/" element={<BA />} />
          <Route
            path="/studentui"
            element={<AuthenticationGuard component={Studentui} classes={classes} />}
          />
          <Route
            path="/practicepage/:subject/:unit"
            element={<Question classes={classes} />}
          />
          <Route
            path="/quizpage/:subject/:unit"
            element={<QuizPage classes={classes} />}
          />
          <Route
            path="/assessmentpage/:assessment"
            element={<AssessmentPage classes={classes} />}
          />
          <Route
            path="/instructionpage/:assessment"
            element={<Instructionpage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
