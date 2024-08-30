import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { token, loading, isError } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    LoginFun(userData);
  };

  const LoginFun = (userData) => {
    dispatch({ type: "RequestToLoading" });
    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => {
        console.log(res.data.token);
        dispatch({ type: "RequestToToken", payload: res.data.token });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "RequestToError" });
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
