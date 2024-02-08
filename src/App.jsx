import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Studentui from "./components/component/Student/studentui";

import React from "react";

import Detailspage from "./components/component/Student/detailspage";
import Question from "./components/component/Student/Question";
import Assessmentpage from "./components/component/Student/Assessmentpage";
import Instructionpage from "./components/component/Student/instructionpage";
import Quiz from "./components/component/Student/Quiz";
import Professorui from "./components/component/Professor/professorui";

function App() {
  const classes = [
    {
      id: 1,
      title: "Mathematics",
      units: [
        {
          id: "1",
          name: "Addition",
        },
        {
          id: "2",
          name: "Subtraction",
        },
        {
          id: "3",
          name: "Division",
        },
      ],
    },
    {
      id: 2,
      title: "Digital Logic Design",
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

  const assessments = [
    {
      id: "lcmandhcf",
      title: "LCM and HCF",
      description: "Duration: 1hour",
    },
    {
      id: "conversion",
      title: "Conversions",
      description: "Duration: 1hour",
    },
    {
      id: "algebra",
      title: "Algebra",
      description: "Duration: 1hour",
    },
    {
      id: "equations",
      title: "Linear Equations",
      description: "Duration: 1hour",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/professorui" element={<Professorui />} />

          <Route
            path="/detailspage/:subject"
            element={<Detailspage classes={classes} />}
          />
          <Route
            path="/"
            element={<Studentui classes={classes} assessments={assessments} />}
          />
          <Route
            path="/studentui"
            element={<Studentui classes={classes} assessments={assessments} />}
          />
          <Route
            path="/practicepage/:subject/:unit"
            element={<Question classes={classes} />}
          />
          <Route
            path="/quizpage/:subject/:unit"
            element={<Quiz classes={classes} />}
          />
          <Route
            path="/assessmentpage/:assessment"
            element={<Assessmentpage assessments={assessments} />}
          />
          <Route
            path="/instructionpage/:assessment"
            element={<Instructionpage assessments={assessments} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
