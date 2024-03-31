import Navbar from "@/components/ui/Navbar";
import CreatingQuestions from "@/components/ui/CreatingQuestions";

export default function CreateQuiz() {
  return (
    <div className="min-h-screen bg-[#040404] pt-[2vw]">
      <Navbar name="Quiz" />
      <CreatingQuestions name="Quiz" />
    </div>
  );
}
