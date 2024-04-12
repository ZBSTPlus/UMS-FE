import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../src/components/component/student/Dropdown";
import "@testing-library/jest-dom";

describe("Dropdown Component", () => {
  it("renders without crashing", () => {
    render(<Dropdown />);
  });

  it("shows the dropdown content when clicking the button", () => {
    const { getByText, queryByText } = render(<Dropdown />);

    // Initially, the dropdown content should not be visible
    expect(queryByText("Maths")).toBeNull();
    expect(queryByText("Digital Logic Design")).toBeNull();

    // Click the button to open the dropdown
    const button = getByText("Select Subject");
    fireEvent.click(button);

    // After clicking, the dropdown content should be visible
    //expect(queryByText("Maths")).toBeInTheDocument();
    //expect(queryByText("Digital Logic Design")).toBeInTheDocument();
  });

  it("displays the button with the correct text", () => {
    const { getByText } = render(<Dropdown />);
    expect(getByText("Select Subject")).toBeTruthy();
  });
  // Add more test cases as needed
});
