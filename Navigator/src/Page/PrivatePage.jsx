import React, { useContext } from "react";
import { FormContext } from "../ContextAPI/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const { user } = useContext(FormContext);
  if (!user.isAuth) {
    return <Navigate to={'/Login'} />;
  }
  return children;
}