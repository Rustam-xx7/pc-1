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
      <Manager />
      <Footer/>
    </>
  );
}

export default App;
