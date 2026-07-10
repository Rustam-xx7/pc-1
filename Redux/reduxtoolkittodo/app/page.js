import Image from "next/image";
import AddTodo from "./components/AddTodo";
import Todos from "@/app/components/Todos";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-neutral-800">
        <h1>Redux Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}
