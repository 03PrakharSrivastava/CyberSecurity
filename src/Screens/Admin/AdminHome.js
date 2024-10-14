import React from "react";
import NavBar from "../../Components/NavBar";

const AdminHome = () => {
const username = localStorage.getItem('username');

return (
    <div>
    <NavBar type="admin" />
   <div>

    Welcome! {username}
   </div>
    </div>
)
}

export default AdminHome;