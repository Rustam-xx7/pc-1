import React, { useEffect } from "react";

const navbar = () => {
  useEffect(() => {
    alert("Hey I will run only on the first render of navbar!");

    return () => {
      alert("Component was unmounted");
    };
  }, []);

  return <div>I am a Navbar.</div>;
};

export default navbar;
