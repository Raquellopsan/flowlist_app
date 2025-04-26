import React, { useState, useEffect } from "react";
import Header from "../src/componentes/Dashboard/Header";
import AñadirTarea from "../src/componentes/Dashboard/AñadirTarea";
import Titulo from "../src/componentes/Dashboard/Titulo";
import SinComenzar from "../src/componentes/Dashboard/SinComenzar";
import EnProceso from "../src/componentes/Dashboard/EnProceso";
import Completadas from "../src/componentes/Dashboard/Completadas";
import axios from "axios";
import EditarTarea from "../src/componentes/Dashboard/EditarTarea";

const Dashboard = () => {
  const [añadirTareaDiv, setAñadirTareaDiv] = useState("hidden");
  const [editarTareasDiv, setEditarTareasDiv] = useState("hidden");
  const [tareaActual, setTareaActual] = useState(null);
  const [tareasSinComenzar, setTareasSinComenzar] = useState([]);
  const [tareasEnProceso, setTareasEnProceso] = useState([]);
  const [tareasCompletadas, setTareasCompletadas] = useState([]);
  const [EditarTareaId, setEditarTareaId] = useState();

  const handleClickEditarTarea = (tarea) => {
    setTareaActual(tarea);
    setEditarTareasDiv("");
  };

  const fetDetallesUsuario = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:4000/api/v1/detallesUsuario",
        { withCredentials: true }
      );
      console.log(respuesta.data.tareas);

      setTareasSinComenzar(respuesta.data.tareas.sinComenzar || []);
      setTareasEnProceso(respuesta.data.tareas.enProceso || []);
      setTareasCompletadas(respuesta.data.tareas.completadas || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetDetallesUsuario();
    if (window.sessionStorage.getItem("editarTareaId")) {
      setEditarTareasDiv("block");
      setEditarTareaId(window.sessionStorage.getItem("editarTareaId"));
    }
  }, []);

  return (
    <div className="w-full relative">
      <div className="bg-white">
        <Header setAñadirTareaDiv={setAñadirTareaDiv} />
      </div>

      <div className="px-12 py-4 flex gap-12 bg-white min-h-[89vh]">
        <div className="w-1/3">
          <Titulo title="Sin Comenzar" />
          <div className="pt-2">
            <SinComenzar
              tarea={tareasSinComenzar}
              handleClickEditarTarea={handleClickEditarTarea}
            />
          </div>
        </div>
        <div className="w-1/3">
          <Titulo title="En Proceso" />
          <div className="pt-2">
            <EnProceso
              tarea={tareasEnProceso}
              handleClickEditarTarea={handleClickEditarTarea}
            />
          </div>
        </div>
        <div className="w-1/3">
          <Titulo title="Completadas" />
          <div className="pt-2">
            <Completadas
              tarea={tareasCompletadas}
              handleClickEditarTarea={handleClickEditarTarea}
            />
          </div>
        </div>
      </div>

      {/* Fondo negro para añadir tarea */}
      <div
        className={`w-full ${añadirTareaDiv} block h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}
      ></div>
      <div
        className={`w-full ${añadirTareaDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}
      >
        <AñadirTarea
          setAñadirTareaDiv={setAñadirTareaDiv}
          recargarTareas={fetDetallesUsuario}
        />
      </div>

      {/* Fondo negro para editar tarea */}
      <div
        className={`w-full ${editarTareasDiv} block h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}
      ></div>
      <div
        className={`w-full ${editarTareasDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}
      >
        {tareaActual && (
          <EditarTarea
            setEditarTareasDiv={setEditarTareasDiv}
            tareaActual={tareaActual}
            EditarTareaId={EditarTareaId}
            recargarTareas={fetDetallesUsuario}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
