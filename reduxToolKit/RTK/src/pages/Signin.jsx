import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLogout, setToken } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const { isLoading, token, isError } = useSelector((state) => state.Auth); // Correctly selecting the state

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (!email) {
            setErrorEmail("Email is required");
        }
        if (!password) {
            setErrorPassword("Password is required");
        }
        e.preventDefault();
        axios
            .post("https://reqres.in/api/login", { email, password })
            .then((res) => {
                toast("Login successfully 🎉");
                dispatch(setToken(res.data.token)),
                    localStorage.setItem("token", JSON.stringify(token)),
                    navigate("/about")
            })
            .catch((err) => {
                toast("Invalid email or password ⚠️");
                console.error(err);
                dispatch(setError()); // Handle error state
            });
    };
    const logout = (e) => {
        e.preventDefault(); // Prevent form submission
        toast("Logout Successfully !👍");
        localStorage.removeItem("token"); // Remove token from localStorage
        dispatch(setLogout()); // Reset Redux state
        navigate("/signin");
    }

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login Page
                    </h1>
                    <form className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errorEmail && !email && <p style={{ color: "red" }}>{errorEmail}</p>}
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errorPassword && !password && <p style={{ color: "red" }}>{errorPassword}</p>}
                        </div>
                        <div className="flex">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full mx-5 bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            >
                                Login
                            </button>
                            <ToastContainer />
                            <button
                                type="logout"
                                onClick={(e) => logout(e)}
                                className="w-full mx-5 bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                            >
                                logout
                            </button>
                            <ToastContainer />
                        </div>
                    </form>
                    {/* {isLoading && <p>Loading...</p>} */}
                    {/* {isError && <p>Error occurred during login</p>}
                    {token && <p>Logged in! Token: {token}</p>} */}
                </div>
            </div>
        </div>
    );
};

export default Signin;
