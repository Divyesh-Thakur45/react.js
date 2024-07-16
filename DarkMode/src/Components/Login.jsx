import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../Image/login_img_c4a81e.png";
import axios from "axios";

const Login = () => {
    const UserInfo = {
        email: "",
        password: ""
    }
    
    const [Obj,setObj] = useState(UserInfo)

    // D-Structural Properties
    const {email, password} = Obj

    console.log(Obj)
    const HandleChange = (e) => {
        setObj({...Obj , [e.target.name] : e.target.value})
    }


    const HandleClick = (e) => {
        e.preventDefault();
        alert(`Email: ${Obj.email}, Password: ${Obj.password}`);
        console.log(Obj);

        axios.post('https://reqres.in/api/login',Obj)
        .then((response) => {
            // alert(response.data);
            console.log(response.data.token);
            localStorage.setItem("Token", JSON.stringify(response.data.token));
        })
        .catch((error) => {
            alert(error);
        });
    }

    const HandleClickLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("Token");
        alert("Logged Out Successfully");
        window.location.href = "/"
    }


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <img src={LoginImage} alt="login-graphic" />
        </div>
        <div className="login-right">
          <form onSubmit={(e)=>HandleClick(e)}>
            <input type="email" name="email" value={email} onChange={HandleChange} placeholder="Enter Email " />
            <input type="password" name="password" value={password} onChange={HandleChange} placeholder="Enter Password" />
            <button>Login</button>
            <button onClick={HandleClickLogout}>Logout</button>
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
