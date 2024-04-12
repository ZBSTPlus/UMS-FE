import { useParams } from "react-router-dom";
import PracticeDynamic from "@/components/ui/PracticeDynamic";

export default function Question({ classes }) {
  const { subject } = useParams();
  const { unit } = useParams();
  const selectedClass = classes.find((c) => c.title.toLowerCase() === subject);
  const selectedUnit = selectedClass.units.find(
    (u) => u.name.toLowerCase() === unit
  );

  const classParam = subject;
  const topic = unit;

  return (
    <div>
      <PracticeDynamic classParam={classParam} topic={topic} />
    </div>
  );
}
