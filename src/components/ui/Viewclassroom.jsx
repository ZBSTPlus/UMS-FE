

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ApKTfsGrqz1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableCell, TableRow, TableBody, Table, TableHead, TableHeader } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Input } from '@/components/ui/input'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar"

const Viewclassroom = ()=> {

  const [studentID, setStudentID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]); // Array to hold student data
  const [studentsList, setStudentsList] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);

 
  const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
  };

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };
   
  const handleNewStudent = () => {
    setShowAddCard(!showAddCard); // Toggle the visibility of the card
  };
  
  const handleAddStudent = () => {
    // Add the new student data to the studentsList array
    const newStudent = { id: studentID, name: studentName };
    setStudentsList([...studentsList,newStudent]);
    // Clear the input fields after adding the student
    setStudentID('');
    setStudentName('');
  };
  
 
  return (
    <div className="min-h-screen bg-[#040404] pt-[2vw] text-white">
    <Navbar name="Classroom" />
    <Card className="w-full mb-4 mx-auto px-6 ">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-bold">Classroom</CardTitle> 
        
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium font-bold"> Name</TableCell>
              <TableCell>CS101</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium font-bold">Professor</TableCell>
              <TableCell>John Doe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium font-bold">Course</TableCell>
              <TableCell>Mathematics</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardContent className="p-0">
        <CardTitle className="text-2xl text-left font-bold flex items-center justify-between mt-3"> 
        <span>Students</span>
        <div className="flex items-end gap-2">
          
    <Button
      size="sm"
      className="mt-4 bg-[#040404]  text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] sticky rounded-md border border-white-400 font-bold"
      onClick={handleNewStudent}
    >
      {showAddCard ? 'Hide': 'New'}
    </Button>
  </div>
  </CardTitle>
  {showAddCard && (
  <Card className="mt-2 max-w-[600px] mx-auto">
  <div className="grid  grid-cols-3 gap-4 m-6">
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
           
            <div className="flex flex-col gap-1.5 items-start w-3/4 justify-end">
            <Button
             size="sm" className="w-[100px] px-8 mt-4 bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md border border-white-400 font-bold"
             onClick={handleAddStudent}>Add</Button>
             </div>
             
             
          </div>
          
          
          </Card>
          )}

<Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {studentsList.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
            </TableRow>
          ))}
        
        <TableRow>
              <TableCell className="font-medium">1200CCC01</TableCell>
              <TableCell>Alice Johnson</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1200CCC02</TableCell>
              <TableCell>Chadwick</TableCell>
            </TableRow>

            </TableBody>
      </Table>


        
         
           
            
      </CardContent>
    </Card>
    </div>
  );
};
export default Viewclassroom;

