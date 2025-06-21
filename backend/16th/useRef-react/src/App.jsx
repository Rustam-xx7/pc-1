import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const a = useRef(0); // by using useRef , app rerender hoar sotteo a er value reassign hoy na ,
  // let a = 0; ,,,,, by using let app rerender hole a er value abar 0 set hoye jabe bar bar .

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`rendering and the value of a is ${a.current}`);
  });

  const btnRef = useRef()

  useEffect(() => {
    
    console.log(`First rendering.`);
    btnRef.current.style.backgroundColor = "purple" ;
  }, []);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
