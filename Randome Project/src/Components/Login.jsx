import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../Image/login_img_c4a81e.png";
import axios from "axios";
import GoogleButton from "react-google-button";
import { auth, provider } from "./server/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const HandleSubmite = (e) => {
    e.preventDefault();
    alert("form submitted");
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
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <img src={LoginImage} alt="login-graphic" />
        </div>
        <div className="login-right">
          <form onSubmit={(e) => HandleSubmite(e)}>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email "
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />

            {/* LOGIN */}
            <button>Login</button>
            <GoogleButton
              className="GoogleButton"
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
          </form>
          <p>
            By continuing, you agree to Flipkart's <a href="#">Terms of Use</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </p>
          <a href="#">New to Flipkart? Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
