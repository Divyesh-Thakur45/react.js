import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormContext = createContext();

export function AuthContextProvider({ children }) {
  const [buttonChange, setButtonChange] = useState(true)
  const navigate = useNavigate();
  const UsereObj = {
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  };
  const [user, setUser] = useState(UsereObj);
  const logIn = (value) => {
    setUser({ isAuth: true, loading: false, error: null, token: value });
    navigate('/Products');
    setButtonChange(false)
  };
  const logOut = () => {
    setUser({ isAuth: false, loading: false, error: null, token: "" });
    setButtonChange(true)
  };
  
  return (
    <FormContext.Provider value={{ user, logIn, logOut, buttonChange }}>
      {children}
    </FormContext.Provider>
  );
}