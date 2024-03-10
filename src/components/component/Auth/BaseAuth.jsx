import LoginButton from "./LoginComponent";
import LogoutButton from "./LogOutComponent";
// import Profile from './Profile';
import Logo from "../../../assets/Logo/logo.png";

function BA() {
  return (
    <>
      <div className="h-screen bg-[#040404] text-white flex items-center justify-center">
        {/* <div className="w-[40%] h-screen bg-slate-400 text-black">
          <img src={Logo} alt="" />
        </div>
        <div className="w-[60%] h-screen bg-slate-800 text-white">
          <div className="flex gap-4">
            <LoginButton />

            <LogoutButton />
          </div>
        </div> */}
        <div className=" text-center px-10 py-10">
          <h1 className="text-[5vw] font-bold leading-none">
            Welcome to the <span className="text-[#FFD31A]">UMS</span>
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
            <LoginButton />
          </div>
        </div>
      </div>

      {/* <Profile /> */}
    </>
  );
}

export default BA;
