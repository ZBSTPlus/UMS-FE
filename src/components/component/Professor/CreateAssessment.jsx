// QuestionForm.js
import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import CreatingQuestions from "@/components/ui/CreatingQuestions";

export default function CreateAssessment() {
  return (
    <div className="min-h-screen bg-[#040404] pt-[2vw]">
      <Navbar name="Assessment" />
      <CreatingQuestions name="Assessment" />
    </div>
  );
}
