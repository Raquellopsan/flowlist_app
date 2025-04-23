import React from "react";
import { IoAddCircleOutline, IoLogOutOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex px-12 py-4 items-center justify-between border-b">
      <div>
        <h1 className="text-2xl text-[#815BCE] font-semibold">Flowlist</h1>
      </div>
      <div className="flex gap-8">
        <button className="text-2xl text-[#636262] hover:text-[#FA9F42] transition-all duration-300">
          <IoAddCircleOutline />
        </button>
        <button className=" text-2xl text-[#636262]  hover:text-red-800 transition-all duration-300">
          <IoLogOutOutline />
        </button>
      </div>
    </div>
  );
};

export default Header;
