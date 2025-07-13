import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Manager from "./component/manager";
import Footer from "./component/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      
      <div className="background absolute inset-0 -z-10 h-fit w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">

      <Manager />
      
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
