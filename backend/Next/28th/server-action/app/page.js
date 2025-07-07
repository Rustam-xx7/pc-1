"use client";
import { submitAction } from "@/action/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  
  return (
    <div>
      <div className="aligen-center w-full h-screen flex flex-col justify-center items-center">

      <form ref={ref} action={ (e) => {submitAction(e); ref.current.reset()}} className="border border-amber-50 p-4">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="text-black bg-amber-50 border m-2" id="name" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input type="text" name="add" className="text-black bg-amber-50 border m-2" id="add" />
        </div>
        <button className="border border-white w-full bg-amber-200 text-black">Submit</button>
      </form>
      </div>
    </div>
  );
}
