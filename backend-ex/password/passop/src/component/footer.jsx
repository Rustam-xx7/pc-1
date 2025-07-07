import React from "react";

const footer = () => {
  return (
    <div className="bg-[#070410] text-white h-[10vh] flex justify-center items-center font-semibold text-lg py-4  w-full gap-2 flex-col fixed bottom-0">
      <div className="logo font-bold text-2xl">
        <span className="text-green-400">&lt;</span>
        Pass
        <span className="text-green-400">Op/&gt;</span>
      </div>
      <span>Created in TimePass ❤️</span>
    </div>
  );
};

export default footer;
