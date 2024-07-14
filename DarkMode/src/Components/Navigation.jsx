import React, { useContext } from "react";
import { AiFillMoon } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
import "../Components/Navigation.css";
import { mode } from "../ModeContext";

const Navigation = () => {
  const { Theem, ChangeTheemFun } = useContext(mode);
  console.log(Theem);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="#" onClick={() => ChangeTheemFun()}>
              TheemChanger
            </a>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button type="submit">Search</button>
          </div>
          <div className="nav-links">
            <a href="#">Login</a>
            <a href="#">More</a>
            <a href="#">Cart</a>
          </div>
          <div
            onClick={() => ChangeTheemFun()}
            style={{ margin: "5px 12px 0px 12px", fontSize: "22px" }}
          >
            {Theem == true ? <AiFillSun /> : <AiFillMoon />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
