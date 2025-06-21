import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  const getAdjective = useCallback(() => {
    // setAdjective( "another");
    return "another" + count;
  }, [count]); // count change na hole fun frize thakbe . otherwise freez.
  // normal func rerender er sathe new hoye jay ,so props change ,,, navbar rerender . to avoid  this use useCallback(). this will frize the funcn

  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
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
        <button onClick={() => setCount((count) => count + 1)}>
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
