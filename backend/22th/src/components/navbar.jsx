import React from "react";
import { memo } from "react";

const navbar = ({ adjective , getAdjective}) => {
  console.log("navbar is rendered");
  return(
    <div>
        I am a {adjective} Navbar.
        <button onClick={()=> {getAdjective()}}>{getAdjective()}</button>
    </div> 
  )
};

export default memo(navbar);
