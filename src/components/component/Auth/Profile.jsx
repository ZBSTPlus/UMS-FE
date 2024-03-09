import React, { useCallback, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();

 let logC = useCallback(async () => {
      console.log(user,"user")
      console.log(isLoading)
      console.log(await getIdTokenClaims(),"claims")
  },[isLoading])
  useEffect(()=> {logC()},[logC])
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div className="container">
				<p className="userInfo" id="userInfo1">
					Name: {user.name}</p>
				<p className="userInfo" id="userInfo2">
					Given Name: {user.given_name}</p>
				<p className="userInfo" id="userInfo3">
					Family Name: {user.family_name}</p>
				<p className="userInfo" id="userInfo4">
					Email: {user.email}</p>
				<p className="userInfo" id="userInfo5">
					Sub: {user.sub}</p>
			</div>

      </div>
    )
  );
};

export default Profile;