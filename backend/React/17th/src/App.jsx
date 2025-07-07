import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "i am a good todo.",
    },
    {
      title: "hey another todo",
      desc: "i am a good todo too.",
    },
    {
      title: "hey i am a grocessary todo",
      desc: "i am a good grocessary todo.",
    },
  ]);

  // components in the app page
  const Todo = (todo) => {
    return (
      <>
      <div className="m-4 border-1 border-purple-600">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
      </>
    );
  };

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

      {todos.map(todos=> {
        return <Todo key={todos.title} title = {todos.title} desc = {todos.desc}/>;
      })}
      {/* <Todo title="this is title " desc="this is desc"/> */}

      {/* {showbtn?<button>Button will be shown only when second button is clicked. </button>:""} */}
      {/* this one type , but we have another style */}
      {showbtn && (
        <button className="">
          Showbtn is true.
        </button>
      )}

      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            setshowbtn(!showbtn);
          }}
        >
          count is {count}, toggle showbtn.
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
