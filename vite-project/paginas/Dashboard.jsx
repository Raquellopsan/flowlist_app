import React from "react";
import Header from "../src/componentes/Dashboard/Header";
import AñadirTarea from "../src/componentes/Dashboard/AñadirTarea";

const Dashboard = () => {
  return (
    <div className="w-full relative">
      <div className="bg-white">
        <Header />
      </div>
      <div
        className={`w-full block h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}
      ></div>
      <div
        className={`w-full  h-screen fixed top-0 left-0 flex items-center justify-center`}
      >
        <AñadirTarea />
      </div>
    </div>
  );
};

export default Dashboard;
