/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wM8evYhlyal
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/Navbar";
// import DeleteIcon from '@/components/icons/DeleteIcon';

// import "./Createclass.css"

 function CreateClassroom() {
  const [classroomName, setClassroomName] = useState('');
  const [course, setCourse] = useState('');
  const [professor, setProfessor] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]); // Array to hold student data
   const [studentsList, setStudentsList] = useState([]);

  

  const handleCourseChange = (value) => {
    setCourse(value);
  };

  const handleProfessorChange = (value) => {
    setProfessor(value);
    
  };


  const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
    console.log('Student ID:', e.target.value);
  };

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
    console.log('Student Name:', e.target.value);
    
  };

  const handleAddStudent = () => {
    if (studentID && studentName) {
      const newStudent = { id: studentID, name: studentName };
      setStudents([...students, newStudent]);
      setStudentID('');
      setStudentName('');
      console.log('Added Student:', newStudent);
    }
  };
  const handleDelete =(id) =>{
    const updatedStudents = students.filter((student) => student.id !==id);
    setStudents(updatedStudents);
  };

  const handleDone = () => {
    console.log("Done button clicked!");
    alert("Details are Saved")
  };
  
  return (
    <div className="min-h-screen bg-[#040404] pt-[2vw] text-white">
    <Navbar name="Create Classroom" />
     <div key="1" className="  flex flex-col gap-4 m-6">
      
      <div className="flex flex-col gap-4 m-6">
        <div className="flex flex-col  gap-1.5 shadow-lg ">
          <label className="text-m font-bold" htmlFor="classroom-name">
            Classroom Name
          </label>
          <Input id="classroom-name" placeholder="Enter classroom name" className="text-sm text-black font-semibold"/>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-m font-bold"  htmlFor="course">
            Course
          </label>
          <div className="flex text-sm text-black font-semibold w-full items-center rounded-md border border-gray-200 bg-white border-gray-200 dark:border-gray-800 dark:border-gray-800">
            <Select >
              <SelectTrigger id="branch">
                <SelectValue  placeholder="Choose the Course" />
              </SelectTrigger>
              <SelectContent position="popper" >
                <SelectItem value="cs" >Computer Science</SelectItem>
                <SelectItem value="me">Mechanical Engineering</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="cs" >Electronics and Communication </SelectItem>
                <SelectItem value="me">Civil Engineering</SelectItem>
                <SelectItem value="ee">Chemical Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-m font-bold" htmlFor="course">
            Professor
          </label>
          <div className="flex text-black font-semibold text-sm w-full items-center rounded-md border border-gray-200 bg-white border-gray-200 dark:border-gray-800 dark:border-gray-800">
            <Select>
              <SelectTrigger id="branch">
                <SelectValue placeholder="Choose the Professor" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="cs">xyz</SelectItem>
                <SelectItem value="me">pqr</SelectItem>
                <SelectItem value="ee">abx</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 m-6">
  <div className="flex flex-col gap-1.5">
    <label className="text-m font-bold" htmlFor="student-id">
      Student ID
    </label>
    <Input
      className="text-black text-sm font-semibold"
      id="student-id"
      placeholder="Enter student ID"
      value={studentID}
      onChange={handleStudentIDChange}
    />
  </div>
  <div className="flex flex-col gap-1.5">
    <label className="text-m font-bold" htmlFor="student-name">
      Student Name
    </label>
    <Input
      className="text-black text-sm font-semibold"
      id="student-name"
      placeholder="Enter student name"
      value={studentName}
      onChange={handleStudentNameChange}
    />
  </div>
  <div className="flex items-end gap-2">
    <Button
      size="sm"
      className="mt-4 bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] sticky rounded-md border border-white-400 font-bold"
      onClick={handleAddStudent}
    >
      Add
    </Button>
  </div>
</div>
<div className="w-full overflow-auto">
  <table className="w-full text-sm leading-none border-0 border-collapse rounded-lg">
    <thead className="border-0 border-collapse">
      <tr className="border-0 border-collapse">
        <th className="px-4 py-3 text-center font-bold border-0 border-collapse">Student ID</th>
        <th className="px-4 py-3 text-center font-bold border-0 border-collapse">Name</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 border-0 border-collapse">
      {students.map((student) => (
        <tr key={student.id} className="divide-x divide-gray-200 border-0 border-collapse text-center">
          <td className="px-4 py-3 border-0 border-collapse">{student.id}</td>
          <td className="px-4 py-3 border-0 border-collapse">{student.name}</td>
          <td className="px-4 py-3 border-0 border-collapse">
            <Button className="rounded-full bg-black text-white"
             size="icon"
              variant="outline"
              onClick = {() => handleDelete(student.id)}
              >
              <DeleteIcon className="h-4 w-4" />
              <span className="sr-only font-bold text-m">delete</span>
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  <div className="flex text-m font-bold w-full justify-evenly">
  <Button
    className="min-w-[10%] mt-4 bg-[#040404] text-[#B3CCC2] mb-2 hover:bg-[#B3CCC2] hover:text-[#040404] sticky rounded-md border border-white-200"
    onClick={handleDone}
  >
    Done
  </Button> 
</div> 
</div>
</div>
  );
}

export default CreateClassroom;


function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}
