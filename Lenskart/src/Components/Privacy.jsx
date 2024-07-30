import React from "react";
import SignIn from "./SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "./Service/firebase";

const Privacy = ({ children }) => {
   const [user] = useAuthState(auth) // const isAuth = true;
   console.log(user)
  if (!user) {
    alert("Please Login First );");
    return <SignIn />;
  } else {
    return children;
  }
};

export default Privacy;
