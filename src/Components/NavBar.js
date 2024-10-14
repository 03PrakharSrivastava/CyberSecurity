import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = (props) => {

  const navigate  = useNavigate();
  const userType = props.type;
  const handleLogOut = () => {
    localStorage.removeItem("username");
    Cookies.remove('authToken');
   //write here a line to navigate and reload the page at the same time
   window.location.href = '/';
}

 const authTokenExists = Cookies.get('authToken') ;
  

  return (  
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a>

            

            {props.type === 'home' && (
                        <>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
            </ul>
                        </>
                    )}
                    {props.type === 'admin' && (
                        <>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/admin" className="nav-link px-2 text-secondary">Home</a></li>
            </ul>
                        </>
                    )}
                    {props.type === 'student' && (
                        <>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/student" className="nav-link px-2 text-secondary">Home</a></li>
            </ul>
                        </>
                    )}

           {props.type==="home" && 
            <div className="text-end">
            <Link to={"/login"}><button type="button" className="btn ">Login</button></Link>
            <Link to={"/signup"}><button type="button" className="btn btn-warning">Sign-up</button></Link>
            </div>
           }

           {authTokenExists && 

            <div className="text-end">
            {props.type==="student" && (
            <> 
            <Link to={"/viewTeam"}><button type="button" className="btn ">View Team</button></Link>
            <Link to={"/joinTeam"}><button type="button" className="btn ">Join Team</button></Link>
            <Link to={"/profile"}><button type="button" className="btn ">Profile</button></Link>
            <a href="/"><button type="button" className="btn btn-warning" onClick={handleLogOut}>LogOut</button></a>
              </>
            )}

            {props.type==="admin" && (
              <>
              <Link to={"/manageTeam"}><button type="button" className="btn ">Manage Team</button></Link>
              <Link to={"/createTeam"}><button type="button" className="btn ">Create Team</button></Link>
            <Link to={"/profile"}><button type="button" className="btn ">Profile</button></Link>
            <a href="/"><button type="button" className="btn btn-warning" onClick={handleLogOut}>LogOut</button></a>
              </>
            )}
            </div>
           }
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
