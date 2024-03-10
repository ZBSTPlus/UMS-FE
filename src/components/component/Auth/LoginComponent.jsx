import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button
        className="bg-[#ffd11aab] hover:bg-[#FFD31A] text-black outline-none px-6 py-3 rounded-md font-semibold text-xl"
        onClick={() => loginWithRedirect()}
      >
        Log in
      </button>
    </>
  );
};

export default LoginButton;
