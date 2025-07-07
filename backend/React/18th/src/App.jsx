import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({email:"hello", phone:""});

  const handleClick = () => {
    alert(" Button is clicked!");
  };

  const handleMouseOver = () => {};
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        I am red div
      </div>

      <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="email"></input>
      <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="phone no"></input>
      <div className="text">{form.email},{form.phone}</div>
    </>
  );
}

export default App;
