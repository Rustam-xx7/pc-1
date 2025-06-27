import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
} from "./redux/counter/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const disoatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => {
          disoatch(decrement());
        }}>-</button>
        Currently count is : {count} .<button onClick={() => {
          disoatch(increment());
        }}>+</button>
        <button onClick={() => {
          disoatch(multiply());
        }}>*2</button>
      </div>
    </>
  );
}

export default App;
