import React, { useState } from "react";
import Header from "../src/componentes/Dashboard/Header";
import AñadirTarea from "../src/componentes/Dashboard/AñadirTarea";
import Titulo from "../src/componentes/Dashboard/Titulo";
import SinComenzar from "../src/componentes/Dashboard/SinComenzar";
import EnProceso from "../src/componentes/Dashboard/EnProceso";
import Completadas from "../src/componentes/Dashboard/Completadas";

const Dashboard = () => {
  const [AñadirTareaDiv, setAñadirTareaDiv] = useState("hidden");
  return (
    <div className="w-full relative">
      <div className="bg-white">
        <Header setAñadirTareaDiv={setAñadirTareaDiv} />
      </div>

      <div className="px-12 py-4 flex gap-12 bg-white min-h-[89vh]">
        <div className="w-1/3">
          <Titulo title={"Sin Comenzar"} />
          <div className="pt-2">
            <SinComenzar />
          </div>
        </div>
        <div className="w-1/3">
          <Titulo title={"En Proceso"} />
          <div className="pt-2">
            <EnProceso />
          </div>
        </div>
        <div className="w-1/3">
          <Titulo title={"Completadas"} />
          <div className="pt-2">
            <Completadas />
          </div>
        </div>
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
