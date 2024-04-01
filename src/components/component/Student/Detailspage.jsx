/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PZEUK21WTPE
 */
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Logo from "../../../assets/Logo/logo.png";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detailspage({ classes }) {
  const { subject } = useParams();

  const selectedClass = classes.find((c) => c.title.toLowerCase() === subject);
  if (!selectedClass) {
    return <div>Class not found!</div>;
  }

  return (
    <div className="flex items-center bg-[#040404] min-h-screen relative flex-col justify-start gap-4">
      <header className="flex items-center flex-col dark:bg-gray-900 z-[1] w-full sm:px-8">
        <nav className="flex items-center justify-between w-[100%]">
          <div className="flex gap-2">
            <div className=" h-[100px] w-[100px] flex items-center justify-center relative overflow-hidden">
              <Link to="/studentui">
                <img
                  className="object-cover cursor-pointer h-14 w-14  "
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xl font-semibold  py-2 bg-[#040404] text-[#B3CCC2] rounded-md ">
                YOUR CLASSROOM
              </span>
            </div>
          </div>
          <div className="sm:mt-0 px-2">
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
          </div>
        </nav>
      </header>

      {/* Here it starts Subject content which contains units or Topics */}

      <div
        key="1"
        className="flex flex-col gap-6 p-4 lg:p-10 w-[90%] md:w-[95%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] border rounded-[30px] bg-[#fff] mt-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left mb-2 md:mb-0">
            {selectedClass.title}
          </h1>
          <p className="text-base md:text-xl font-semibold text-center md:text-left">
            Estimated Completion : 8 weeks
          </p>
        </div>
        <hr className="mb-2 border-2 border-gray-500 dark:border-gray-800" />

        {selectedClass.units.map((unit) => (
          <Collapsible
            className="border border-[#494b55] rounded-lg dark:border-gray-800 relative bg-[#ECF0F1]"
            key={unit.id}
          >
            <CollapsibleTrigger asChild className="relative">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold">{unit.name}</h2>
                </div>
                <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="flex justify-start gap-2 p-4">
                <Link
                  to={`/practicepage/${subject}/${unit.name.toLowerCase()}`}
                >
                  <Button
                    className="inline-flex items-center gap-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]  w-[150px]"
                    download
                    href="/unit-1.pdf"
                  >
                    Practice Questions
                  </Button>
                </Link>
                <Link to={`/quizpage/${subject}/${unit.name.toLowerCase()}`}>
                  {" "}
                  <Button
                    className="inline-flex items-center gap-2 text-sm font-medium bg-[#B3CCC2] text-[#040404] hover:bg-[#040404] hover:text-[#B3CCC2] w-[150px]"
                    href="/unit-1-quiz"
                  >
                    Quiz
                  </Button>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}

//These below are the used Icons in the above code

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
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
