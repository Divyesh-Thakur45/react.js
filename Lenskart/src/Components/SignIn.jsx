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
        <div className="sign-in-card">
          <button className="close-btn" onClick={() => setclose(!close)}>
            &times;
          </button>
          <div className="image-container">
            <img
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="Sign In"
            />
          </div>
          <form className="form-container" onSubmit={(e) => HandleSubmite(e)}>
            <h2>Sign In</h2>
            <div className="SignInInputs">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="whatsapp-updates" />
              <label htmlFor="whatsapp-updates">Get updates on WhatsApp</label>
              <span className="whatsapp-icon">📱</span>
            </div>
            <button className="sign-in-btn">Sign In</button>
            <p>
              New member? <a href="#">Create an Account</a>
            </p>
          </form>
          <GoogleButton
            className="GoogleButton"
            onClick={() => {
              
              signInWithPopup(auth , provider)
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
