import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <div>
      <nav className="bg-purple-700  w-full flex justify-between px-4 py-2 ">
        <span className=" text-2xl font-bold ">Rustam</span>
        <ul className="flex justify-center items-center gap-4 ml-4">
          <li><Link href="/"> Home </Link></li>
          <li><Link href="/about"> About</Link></li>
          <li><Link href="/contact"> Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;

