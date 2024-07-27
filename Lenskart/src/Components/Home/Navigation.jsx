import React, { useEffect, useState } from "react";
import "../../Style/Navigation.css";
import SignIn from "../SignIn";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [show, setshow] = useState(false);
  // const [signUp, setsignUp] = useState( true );
  // const HandleShow = () => {

  //   alert("Hii")
  // };

  return (
    <div>
      <header className="navbar">
        <div className="top-bar">
          <div className="left-links">
            <a href="#">Do More, Be More |</a>
            <a href="#">Tryin3D |</a>
            <a href="#">StoreLocator |</a>
            <a href="#">Singapore |</a>
            <a href="#">UAE |</a>
            <a href="#">John Jacobs |</a>
            <a href="#">Aqualens |</a>
            <a href="#">Cobrowsing |</a>
            <a href="#">Engineering Blog |</a>
            <a href="#">Partner With Us </a>
          </div>
          <div className="right-links">
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="main-bar">
          <div className="logo flex items-center">
          <NavLink to={"/"}>
            <img
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="Lenskart Logo"
            />
            </NavLink>
            <span>1800-202-4444</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="What are you looking for?" />
          </div>
          <div className="account-links">
            <a href="#">Track Order</a>
            <a href="#">
              <span onClick={() => setshow(!show)}>Sign In </span>
            </a>
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
          </div>
        </div>
        <div className="flex justify-between items-center bottom-bar-main">
          <div className="bottom-bar">
            <NavLink to="/eyeglassespage">EYEGLASSES</NavLink>
            <NavLink to="/screenglasses">SCREEN GLASSES</NavLink>
            <NavLink to="/kidsglasses">KIDS GLASSES</NavLink>
            <NavLink to="/contactlenses">CONTACT LENSES</NavLink>
            <NavLink to="/sunglasses">SUNGLASSES</NavLink>
            <NavLink to="/homeeyetest">HOME EYE-TEST</NavLink>
            <NavLink to="/storelocator">STORE LOCATOR</NavLink>
          </div>
          <div className="main-bar-img p-10 bottom-bar flex">
          
            <img
              src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
              alt=""
              width={100}
            />
            <img
              src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
              alt=""
              width={100}
            />
            <img
              src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"
              alt=""
              width={100}
            />
          </div>
        </div>
        {show ? <SignIn /> : ""}
      </header>
    </div>
  );
};

export default Navigation;
