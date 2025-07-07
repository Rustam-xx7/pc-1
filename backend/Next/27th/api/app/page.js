"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Rustam",
      age: 25,
      massage: " send from cliet side ! "
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
  }
   return (
    <div>
      <h1 className="text-xl font-bold">Next.js API route demo .</h1>
      <button onClick={handleClick} className="border p-2 font-bold text-sm border-purple-700 bg-gray-900">Click me</button>
    </div>
  );
}