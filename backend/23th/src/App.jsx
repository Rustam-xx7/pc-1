import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2); // Simullating network delay.
    let r = await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data , res);
    // if (data.username !== "rustam") {
    //   setError("myform", { message: "Your credentials are invalid !" });
    // }
    // if (data.username === "guddu") {
    //   setError("blocked", { message: "Sorry this user is Blocked !" });
    // }
  };
 
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: { value: true, message: " This feild is required." },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
            placeholder="username"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            {...register("password", {
              minLength: { value: 6, message: "Min length is 6" },
            })}
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" name="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && 
            <div className="red">{errors.blocked.message}</div>
          }
        </form>
      </div>
    </>
  );
}

export default App;
