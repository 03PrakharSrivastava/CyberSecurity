import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/submitLogin", formData);

      if (response.status === 200) {
        const userType = response.data.user.userType;
        const authToken = response.data.authToken;

        const options = {
          expires: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000),
          secure: true,
        };

        Cookies.set("authToken", authToken, options);
        localStorage.setItem("username", formData.username);

        if (userType === "user") {
          navigate("/user");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.status === 400) {
        alert("Invalid Email or Password");
      } else {
        alert("Error submitting form. Please try again later.");
      }
    }
  };

  return (
    <div>
      <NavBar type="default" />

      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input name="username" type="text" id="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" id="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div>
          <p>
            Not registered yet? <Link to={"/signup"}>Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
