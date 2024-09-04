import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Card from "./Card";
import More from "./More";
import PrivacyPage from "./PrivacyPage";
import Description from "./Description";
import Post from "./Post";
import CreateAccout from "./CreateAccout";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/signup" element={<CreateAccout />} />
        <Route exact path="/Description/:id" element={<Description />} />
        <Route exact path="/Post/:id" element={<Post />} />
        <Route
          exact
          path="/Cart"
          element={
            <PrivacyPage>
              <Card />
            </PrivacyPage>
          }
        />
        <Route
          exact
          path="/More"
          element={
            <PrivacyPage>
              <More />
            </PrivacyPage>
          }
        />
      </Routes>
    </div>
  );
};

export default Routers;
