import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo/logo.png";
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

export default function Navbar(props) {
  return (
    <div>
      <header className="flex items-center h-16 mb-5 dark:bg-gray-900  sticky top-5 z-[1] w-full">
        <nav className="flex items-center justify-between w-[100%] p-10">
          <div className="flex gap-4 items-center justify-center">
            <div className="h-10 w-10 md:h-[60px] md:w-[60px] flex items-center justify-center relative overflow-hidden cursor-pointer">
              <Link to="/studentui">
                <img
                  className="object-cover cursor-pointer "
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold  py-2 bg-[#040404] text-[#B3CCC2] rounded-md uppercase mt-3">
                {props.name}
              </h1>
            </div>
          </div>
          <div>
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
