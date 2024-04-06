import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Instructionpage from "../src/components/component/student/Instructionpage";
import "@testing-library/jest-dom";

describe("Instructionpage Component", () => {
  test("renders instruction content", () => {
    // Render Instructionpage component within a Router
    render(
      <Router>
        <Instructionpage />
      </Router>
    );

    // Assert that the instruction content is present
    expect(screen.getByText("Assessment Instructions")).toBeInTheDocument();
    expect(
      screen.getByText("Read each question carefully before answering.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Choose the best answer for each question.")
    ).toBeInTheDocument();
    expect(
      screen.getByText('There is a "TIMER" for assessment.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Each question has "ONE MINUTE" to submit their answer.')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Click the "SUBMIT" button to submit your answer for next question.'
      )
    ).toBeInTheDocument();
  });

  //   test("uses assessment parameter in link", () => {
  //     const mockAssessment = "mockAssessmentId";
  //     render(
  //       <MemoryRouter initialEntries={[`/instructionpage/${mockAssessment}`]}>
  //         <Instructionpage />
  //       </MemoryRouter>
  //     );

  //     const startQuizButton = screen.getByText("Start Quiz");
  //     expect(startQuizButton).toHaveAttribute(
  //       "href",
  //       `/assessmentpage/${mockAssessment}`
  //     );
  //   });
});
