import React from "react";
import { Routes,Route } from "react-router-dom";
import './Screens/Styling/Login.css';
import Cookies from "js-cookie";

import "../src/Screens/Styling/createTeam.css";
import "../src/Screens/Styling/adminTeamList.css";
import "../src/Screens/Styling/addStudent.css";
import "../src/Screens/Styling/joinTeam.css";
import "../src/Screens/Styling/viewTeam.css";
import "../src/Screens/Styling/profile.css";

import Home from "./Screens/Home";
import AdminHome from "./Screens/Admin/AdminHome";
import StudentHome from "./Screens/Student/StudentHome";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import CreateTeam from "./Screens/Admin/CreateTeam.js";
import AdminTeamList from "./Screens/Admin/AdminTeamList.js";
import ViewTeamStudent from "./Screens/Admin/ViewTeamStudent.js";
import AddStudent from "./Screens/Admin/AddStudent.js";
import JoinTeam from "./Screens/Student/JoinTeam.js";
import ViewTeam from "./Screens/Student/ViewTeam.js";
import Profile from "./Screens/Profile.js";

const App = ()=>{
 return (
  <div>
  <Routes>

  <Route path="/" element={<Home type="home"/>} />
  <Route path="/student" element={<StudentHome type="student" />} />
  <Route path="/admin" element={<AdminHome type="admin" />} />
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/login" element={<Login/>}/>

  <Route path="/createTeam" element={<CreateTeam />} />
  <Route path="/manageTeam" element={<AdminTeamList />}/>
  <Route path="/team/manageStudent/:teamId" element={<ViewTeamStudent/>}/>
  <Route path="/teams/:teamId/add-student" element={<AddStudent />}/>

  <Route path="/joinTeam" element={<JoinTeam/>} />
  <Route path="/viewTeam" element={<ViewTeam/>} />

  <Route path="/profile" element={<Profile />} />
  </Routes>
  </div>
 )
};

export default App;
