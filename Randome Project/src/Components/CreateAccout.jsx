import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../Image/login_img_c4a81e.png";
import { auth } from "./server/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const CreateAccout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const HandleClick = (e) => {
    e.preventDefault();
    alert("form submitted");
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
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
          <form onSubmit={(e) => HandleClick(e)}>
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
            <button>Sign Up</button>
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

export default CreateAccout;
