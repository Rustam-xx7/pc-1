// "use client";
import Image from "next/image";

export default function Home() {
  console.log("ID:", process.env.ID); 
  console.log("SECRET:", process.env.SECRET); 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div>Home page</div>
      <div>The id is : {process.env.NEXT_PUBLIC_ID}</div>
      <div>The id is : {process.env.NAME}</div>
    </div>
  );
}
