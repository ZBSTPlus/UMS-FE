import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loader from "@/components/ui/Loader/Loader.jsx";

export const AuthenticationGuard = ({ component, classes, allowed }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="bg-[#040404] h-screen flex items-center justify-center">
        <Loader />
      </div>
    ),
  });

  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="bg-[#040404] h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  console.log(user?.name);
  if (!allowed || user?.name.endsWith(allowed)) {
    return <Component classes={classes} />;
  } else {
    return <>UnAuthorized Access</>;
  }
};
