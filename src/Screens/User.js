import React from "react";
import NavBar from "../Components/NavBar";

const Home = () =>{
    const username = localStorage.getItem('username');

return(<>
  <div>
    <NavBar type="user" />
   <div>

    Welcome! {username}
   </div>
    </div>
</>)
};

export default Home;