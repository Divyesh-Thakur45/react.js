import React, { useContext, useState } from "react";
import axios from "axios";
import { FormContext } from "../ContextAPI/AuthContext";

export default function Login() {
  let formObj = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formObj);
  const { email, password } = formData;
  const { logIn } = useContext(FormContext);
  const HandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const SubmitForm = (event) => {
    event.preventDefault();
    const PostData = async () => {
      try {
        let response = await axios.post("https://reqres.in/api/login", {
          email: formData.email,
          password: formData.password,
        });
        alert("Login Successfully!");
        logIn(response.data.token);
      } catch (error) {
        console.log(error.message);
        alert("Login failed. Please try again.")
      }
    };
    PostData();
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        data-testid="auth_form"
        onSubmit={(event) => SubmitForm(event)}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <input
          type="email"
          name="email"
          value={email}
          data-testid="email"
          placeholder="Enter Email"
          onChange={(e) => HandleInputChange(e)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          value={password}
          data-testid="password"
          placeholder="Enter password"
          onChange={(e) => HandleInputChange(e)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-200"
        />
      </form>
    </div>
  );
}