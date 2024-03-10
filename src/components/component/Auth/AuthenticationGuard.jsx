import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const AuthenticationGuard = ({ component, classes, allowed }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <p>Loading.....</p>
      </div>
    ),
  });

  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  console.log(user?.name);
  if (!allowed || user?.name.endsWith(allowed)) {
    return <Component classes={classes} />;
  } else {
    return <>UnAuthorized Access</>;
  }
};
