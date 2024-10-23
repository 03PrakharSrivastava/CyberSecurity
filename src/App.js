import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Screens/Styling/Login.css";
import Cookies from "js-cookie";

import "../src/Screens/Styling/profile.css";

import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";
import User from "./Screens/User";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home type="home" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
