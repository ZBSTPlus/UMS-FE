/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/A28iY5ckrQF
 */
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./ProfessorPage.css";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Logo from "../../../assets/Logo/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewDetails from "@/components/component/Professor/ViewDetails"; // Update the path as needed


const calculateSlidesPerView = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1024) {
    return 3;
  } else if (windowWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
};

export default function ProfessorPage({ classes }) {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());
 
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-auto">
          <header className="mb-8 bg-[#040404] text-white shadow">
            <div className="flex items-center justify-between px-4 py-5 sm:px-6">
              <div className="flex gap-2 items-center justify-center">
                <div className="h-10 w-10 md:h-[60px] md:w-[60px] flex items-center justify-center relative overflow-hidden cursor-pointer">
                  <img className="object-cover" src={Logo} alt="" />
                </div>
                <div className="flex flex-col justify-start px-4">
                  <h1
                    className="text-xl md:text-2xl font-semibold py-2 text-[#B3CCC2] rounded-md"
                    id="teacherdashboard"
                  >
                    Teacher Dashboard
                  </h1>
                  <div className="flex md:flex-row md:items-center gap-2">
                    <p className="font-bold text-lg text-[#B3CCC2]">Name:</p>
                    <p className="text-lg font-semibold">Jane Doe</p>
                  </div>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9 md:h-12 md:w-12">
                    <AvatarImage
                      alt="User avatar"
                      src="https://imgs.search.brave.com/J0ixr3aHGA8aitBrET8u4exc5KcrQl8PWXGrvAdsUY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
                    />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <UserIcon className="w-4 h-4" />
                      John Doe
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <MailIcon className="w-4 h-4" />
                      ums@gmail.com
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <LogOutIcon className="w-4 h-4" />
                      Logout
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="px-4 py-5 sm:p-6">
            <section className="mb-8" id="assignedcourses">
              <h2 className="mb-2 text-2xl font-bold leading-6 text-gray-900 ">
                Assigned Courses
              </h2>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper p-3"
                slidesPerView={slidesPerView}
                spaceBetween={30}
              >
                {classes.map((course) => (
                  <SwiperSlide className=" rounded-[50px]" key={course.id}>
                    <Card className="w-full shadow-lg  rounded-[30px]">
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                     
                        <Progress className="w-full" value={course.value} />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                         <Link to = "/ViewDetails">
                          {" "}
                        <Button className="mt-4 bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]">
                          View Details
                        </Button>
                          </Link>
                        
                      </CardFooter>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            <section className="mb-8" id="practicequestions">
              <div className="flex items-center justify-between gap-5">
                <h2 className="mb-2 text-2xl font-bold leading-6 text-gray-900">
                  Student Practice Questions
                </h2>
                <Link to="/cp">
                  {" "}
                  <Button className="bg-[#040404] text-[#B3CCC2]">
                    Create Practice
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Algebra Practice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Set of 15 Algebra Questions</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <div className="bg-[#B3CCC2] text-secondary-foreground  p-1.5 rounded-md px-2 text-[15px] flex gap-2 items-center">
                      <span className="font-semibold">Assigned</span>
                      <span>
                        <CheckCircleIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Geometry Practice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Set of 10 Geometry Questions</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <div className="bg-[#B3CCC2] text-secondary-foreground  p-1.5 rounded-md px-2 text-[15px] flex gap-2 items-center">
                      <span className="font-semibold">Assigned</span>
                      <span>
                        <CheckCircleIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Grammar Practice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Set of 20 Grammar Questions</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <div className="bg-[#B3CCC2] text-secondary-foreground  p-1.5 rounded-md px-2 text-[15px] flex gap-2 items-center">
                      <span className="font-semibold">Assigned</span>
                      <span>
                        <CheckCircleIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </section>
            <section className="mb-8" id="studentquizes">
              <div className="flex items-center justify-between gap-5">
                <h2 className="mb-2 text-2xl font-bold leading-6 text-gray-900">
                  Quizes
                </h2>
                <Link to="/cq">
                  {" "}
                  <Button className="bg-[#040404] text-[#B3CCC2]">
                    Create Quiz
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Weekly Quiz</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>10 Questions - Multiple Choice</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <div className="bg-[#B3CCC2] text-secondary-foreground  p-1.5 rounded-md px-2 text-[15px] flex gap-2 items-center">
                      <span className="font-semibold">Assigned</span>
                      <span>
                        <CheckCircleIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </section>
            <section id="studentassessments">
              <div className="flex items-center justify-between gap-5">
                <h2 className="mb-2 text-2xl font-bold leading-6 text-gray-900">
                  Assessments
                </h2>
                <Link to="/ca">
                  {" "}
                  <Button className="bg-[#040404] text-[#B3CCC2]">
                    Create Assessments
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Unit Test</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>20 Questions - Mix of Types</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <div className="bg-[#B3CCC2] text-secondary-foreground  p-1.5 rounded-md px-2 text-[15px] flex gap-2 items-center">
                      <span className="font-semibold">Assigned</span>
                      <span>
                        <CheckCircleIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
function ActivityIcon(props) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
