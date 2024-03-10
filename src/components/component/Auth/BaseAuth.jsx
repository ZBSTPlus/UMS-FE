import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "@/components/ui/Loader/Loader.jsx";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function BaseAuth() {
  const [typeEffect] = useTypewriter({
    words: ["Welcome To The UMS", "Connect With Your Classroom "],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 70,
  });
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  let history = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      const name = user.name;

      if (name.endsWith("Sir")) {
        history("/professorpage");
      } else if (name.endsWith("AD")) {
        history("/adminui");
      } else if (name.endsWith("_")) {
        history("/studentui");
      }
    }
  }, [isAuthenticated, user, history]);

  if (isLoading) {
    return (
      <div className="bg-[#040404] h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="h-screen bg-[#040404] text-white flex items-center justify-center">
        <div className=" text-center px-10 py-10 box">
          <h1 className="text-[5vw] font-bold leading-none text-[#ffd11abe]">
            {typeEffect}

            <span>
              <Cursor />
            </span>
          </h1>
          <h1 className="text-[3vw] font-semibold text-zinc-400 leading-none mt-5">
            University Management System
          </h1>
          <div className=" flex items-center justify-center">
            <h2 className="text-[1vw] mt-10 text-zinc-500 w-[600px] text-center">
              The Best Platform for learning and managing their classrooms.
              Connect with it and get your learning done
            </h2>
          </div>

          <div className="flex items-center justify-center mt-10">
            <button
              className="bg-[#ffd11aab] hover:bg-[#FFD31A] text-black outline-none px-20 py-3 rounded-md font-semibold text-xl"
              onClick={() => loginWithRedirect()}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BaseAuth;
