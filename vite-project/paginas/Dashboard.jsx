import React, { useState } from "react";
import Header from "../src/componentes/Dashboard/Header";
import AñadirTarea from "../src/componentes/Dashboard/AñadirTarea";

const Dashboard = () => {
  const [AñadirTareaDiv, setAñadirTareaDiv] = useState("hidden");
  return (
    <div className="w-full relative">
      <div className="bg-white">
        <Header setAñadirTareaDiv={setAñadirTareaDiv} />
      </div>
      <div
        className={`w-full ${AñadirTareaDiv} block h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}
      ></div>
      <div
        className={`w-full ${AñadirTareaDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}
      >
        <AñadirTarea setAñadirTareaDiv={setAñadirTareaDiv} />
      </div>
    </div>
  );
};

export default Dashboard;
