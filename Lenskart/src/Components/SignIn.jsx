import React, { useState } from "react";
import "../Style/SignIn.css";
import { auth, provider } from "./Service/firebase"; // Adjust the path as needed
import { signInWithPopup } from "firebase/auth";
// import { AuthErrorCodes } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const [close, setclose] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const HandleSubmite = (e) => {
    e.preventDefault();
    alert("form submitted");
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        alert("form submitted");
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong");
      });
  };
  return (
    <div>
      <div
        className="sign-in-container"
        style={{ display: close ? "none" : "block" }}
      >
        <div
          className={`sign-in-card bg-white shadow-lg p-6 rounded-lg mx-auto ${
            close ? "hidden" : "block"
          } max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
        >
          <button
            className="close-btn text-gray-500 text-2xl font-bold float-right"
            onClick={() => setclose(!close)}
          >
            &times;
          </button>

          <div className="image-container flex justify-center mt-4">
            <img
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="Sign In"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
            />
          </div>

          <form
            className="form-container space-y-4"
            onSubmit={(e) => HandleSubmite(e)}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-center">
              Sign In
            </h2>

            <div className="SignInInputs space-y-4">
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="checkbox-container flex items-center space-x-2">
              <input
                type="checkbox"
                id="whatsapp-updates"
                className="form-checkbox"
              />
              <label htmlFor="whatsapp-updates" className="text-sm">
                Get updates on WhatsApp
              </label>
              <span className="whatsapp-icon text-xl sm:text-2xl">📱</span>
            </div>

            <button className="sign-in-btn w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Sign In
            </button>

            <p className="text-center text-sm">
              New member?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Create an Account
              </a>
            </p>
          </form>

          <GoogleButton
            className="GoogleButton w-full mt-4"
            onClick={() => {
              signInWithPopup(auth, provider)
                .then((result) => {
                  console.log(result);
                  alert("You have successfully signed in with Google");
                })
                .catch((error) => {
                  console.log(error);
                  alert("Something went wrong");
                });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
