"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-center h-screen">
        <div>hey it's my home page . count is {count}</div>
        <br/>
        <button onClick={() => setCount(count + 1)} className="border p-2">Increment</button>
      </div>
    </>
  );
}
