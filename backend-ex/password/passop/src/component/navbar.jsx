import React from "react";


const navbar = () => {
  return (
    <nav className="text-white px-4 py-2 flex justify-between items-center font-semibold h-[6vh]">
      <div className="logo font-bold text-2xl">
        <span className="text-green-400">&lt;</span>
        Pass
        <span className="text-green-400">Op/&gt;</span>
        </div>
      <ul className="flex  gap-8">
      </ul>
    </nav>
  );
};

export default navbar;
