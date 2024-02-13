/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Vuc2uhVhuIR
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Studentui.css";
import Dropdown from "./Dropdown";

import Logo from "../../../assets/Logo/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { Link } from "react-router-dom";
import Leaderboard from "../../../assets/leaderboard.json";

export default function Studentui({ classes, assessments }) {
  // Below are the references used for GSAP animations

  const links = useRef(null);
  const logoRef = useRef(null);
  const CardRef = useRef(null);
  const classroomRef = useRef(null);
  const assessmentref = useRef(null);
  const leaderboardRef = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(links.current, {
      x: -500,
      duration: 0.5,
      stagger: 0.3,
    });

    tl.from(logoRef.current, {
      y: -200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
    tl.from(CardRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
    tl.from(classroomRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });

    tl.from(assessmentref.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
    tl.from(leaderboardRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
  });

  // Actual Student Page starts Here

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-1 overflow-hidden">
        {/* It is a side navbar written below as aside */}

        <aside className="w-60 bg-[#040404] min-h-screen flex flex-col items-center py-4 space-y-4 px-24 ">
          <div className="flex flex-col items-center">
            <img
              className="object-cover h-40 rounded-full cursor-pointer w-51"
              src={Logo}
              alt=""
              ref={logoRef}
            />
            <div
              className="flex flex-col justify-start gap-6 mt-8 scroll-smooth"
              ref={links}
            >
              <a
                className="flex items-center gap-2 px-3 py-2 text-lg font-semibold text-white rounded dark:hover:bg-gray-700"
                href="#studentdetails"
              >
                {/* <FlagIcon className="hover:text-white  text-[#A8ABBA] h-8 w-8 " /> Home */}
                <HomeIcon className="w-6 h-6 text-[#A8ABBA]" />
                <span className="text-[#A8ABBA]  hover:text-[#ECF0F1]">
                  Home
                </span>
              </a>
              <a
                className="flex items-center gap-2 px-3 py-2 text-lg font-semibold text-white rounded dark:hover:bg-gray-700"
                href="#completedcourses"
              >
                {/* <LayoutDashboardIcon className=" h-6 w-6 hover:text-white  text-[#A8ABBA]" /> */}
                <SchoolIcon className="w-6 h-6 text-[#A8ABBA]" />
                <span className="text-[#A8ABBA]  hover:text-[#ECF0F1]">
                  Classrooms
                </span>
              </a>

              <a
                className="flex items-center gap-2 px-3 py-2 text-lg font-semibold text-white rounded dark:hover:bg-gray-700"
                href="#upcomingassessments"
              >
                {/* <SettingsIcon className=" h-6 w-6 hover:text-white  text-[#A8ABBA]" /> */}
                <ActivityIcon className="w-6 h-6 text-[#A8ABBA]" />
                <span className="text-[#A8ABBA]  hover:text-[#ECF0F1]">
                  Assessments
                </span>
              </a>

              <a
                className="flex items-center gap-2 px-3 py-2 text-lg font-semibold text-white rounded dark:hover:bg-gray-700"
                href="#analyticsboard"
              >
                {/* <SignalIcon className=" h-6 w-6 hover:text-white  text-[#A8ABBA] " /> */}
                <PieChartIcon className="w-6 h-6 text-[#A8ABBA]" />
                <span className="text-[#A8ABBA] hover:text-[#ECF0F1]">
                  Analytics
                </span>
              </a>
            </div>
          </div>
        </aside>

        {/* This is the main Content which right side of aside(side navbar) */}

        <main className="flex-1 p-6 overflow-auto bg-[#F3F4F6] text-[#040404]">
          {/* This is the Header Content which contains student dashboard name and Profile */}

          <header className="flex items-center h-16 mb-8 dark:bg-gray-900">
            <nav className="flex items-center justify-between w-full px-2 py-5 bg-white">
              <div className="flex items-center space-x-4">
                <span className="text-xl font-semibold px-32 py-2 bg-[#040404] text-[#A8ABBA] rounded-md ">
                  Student Dashboard
                </span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9">
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
            </nav>
          </header>

          {/* It is the student details card */}

          <section className="mb-8" id="studentdetails" ref={CardRef}>
            <h2 className="mb-2 text-2xl font-bold">Student Details</h2>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <Card className="p-2 bg-[#fff] shadow-lg flex justify-between items-center">
                <div>
                  <CardHeader>
                    <CardTitle>John Doe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-1">
                      <div>
                        <span className="text-[#111129] font-bold">
                          Registered ID
                        </span>
                        : CS102
                      </div>
                      <div>
                        <span className="text-[#111129] font-bold">
                          Mail ID
                        </span>
                        : ums@gmail.com
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div className="w-[100px] h-[100px] mx-20">
                  <img
                    src="https://imgs.search.brave.com/J0ixr3aHGA8aitBrET8u4exc5KcrQl8PWXGrvAdsUY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
                    alt=""
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* The below code related to the Classroom cards which contains different classrooms */}

          <section className="mb-8" id="completedcourses">
            <h2 className="mb-2 text-2xl font-bold">Class Rooms</h2>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="px-3 py-3 mySwiper"
              slidesPerView={3}
              spaceBetween={30}
              ref={classroomRef}
            >
              {classes.map((subject) => (
                <SwiperSlide className=" rounded-[50px]" key={subject.id}>
                  <Card className="p-4 bg-[#fff] shadow-lg w-[100%] rounded-[30px]">
                    <CardHeader>
                      <CardTitle>{subject.title}</CardTitle>
                      {/* <CardDescription>{card.description}</CardDescription> */}
                    </CardHeader>
                    <Link to={`/detailspage/${subject.title.toLowerCase()}`}>
                      <Button className="mt-4 bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]">
                        View Details
                      </Button>
                    </Link>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* The below code contains the cards related to the Assessments */}
          <section className="mb-8" id="upcomingassessments">
            <h2 className="mb-2 text-2xl font-bold">Upcoming Assessments</h2>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="px-3 py-3 mySwiper"
              slidesPerView={3}
              spaceBetween={30}
              ref={assessmentref}
            >
              {assessments.map((assessment) => (
                <SwiperSlide key={assessment.id} className="rounded-[50px]">
                  <Card className="p-4 bg-[#fff] shadow-lg w-[100%] rounded-[30px]">
                    <CardHeader>
                      <CardTitle>{assessment.title}</CardTitle>
                      <CardDescription>
                        {assessment.description}
                      </CardDescription>
                    </CardHeader>
                    <br />
                    <Link to={`/instructionpage/${assessment.id}`}>
                      {" "}
                      <Button className="  bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]">
                        Start
                      </Button>
                    </Link>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/*  This below sections related to the Leaderboard and Analyticboard  */}

          <div className="flex gap-7" ref={leaderboardRef}>
            <section className="flex-1 mb-6" id="analyticsboard">
              <div className="flex gap-9">
                <h2 className="mb-2 text-2xl font-bold">Analytics Board</h2>

                <Dropdown />
              </div>

              <br />
              <div className="grid grid-cols-1 gap-4">
                <LineChart className="w-full h-[300px]" />
              </div>
            </section>
            <section className="flex-1 mb-8" id="leaderboard">
              <div className="flex gap-9">
                <h2 className="mb-2 text-2xl font-bold">Leader Board</h2>

                <Dropdown />
              </div>
              <br />
              <div className="h-[300px] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#fff]">
                      <TableHead className="text-[#111129]">Rank</TableHead>
                      <TableHead className="text-[#111129]">Name</TableHead>
                      <TableHead className="text-right text-[#111129]">
                        Score
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="bg-[#040404] text-[#B3CCC2] ">
                    {Leaderboard.map((value, index) => (
                      <TableRow key={index}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell className="text-right">
                          {value.score}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* <Button className="mt-4  bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] mx-auto md:ml-auto">
                View More
              </Button>  */}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
//   This below are the functions for icons used in the above code
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

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PieChartIcon(props) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function SchoolIcon(props) {
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
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Quiz1", y: 43 },
              { x: "Quiz2", y: 95 },
              { x: "Quiz3", y: 61 },
              { x: "Quiz4", y: 90 },
              { x: "Quiz5", y: 26 },
              { x: "Quiz6", y: 100 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#82717C", ""]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
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

//Student Page code Ends Here//
