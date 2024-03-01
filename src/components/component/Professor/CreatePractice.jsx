// QuestionForm.js
import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import CreatingQuestions from "@/components/ui/CreatingQuestions";

export default function CreatePractice() {
  return (
    <div className="min-h-screen bg-[#040404] pt-[2vw]">
      <Navbar name="Practice" />
      <CreatingQuestions name="Practice" />
    </div>
  );
}
