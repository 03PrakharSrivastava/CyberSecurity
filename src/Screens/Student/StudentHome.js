import React from "react";
import NavBar from "../../Components/NavBar";

const STudentHome = () =>{
    const username = localStorage.getItem('username');

return (
    <div>
        <NavBar type="student"/>
         <div>
           <h4>Welcome! {username}</h4>
         </div>
    </div>
)
}

export default STudentHome;