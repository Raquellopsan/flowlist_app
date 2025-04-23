import React from "react";

const AñadirTarea = () => {
  return (
    <div className="bg-white rounded px-4 py-4 w-[40%]">
      <h1 className="text-center font-semibold text-xl text-[#636262] ">
        Añadir tarea
      </h1>
      <hr className="mb-4 mt-2 border-[#636262]" />
      <form action="POST" className="flex flex-col gap-4">
        <input
          type="text"
          className="border px px-2 py-1 rounded border-zinc-300 outline-none"
          placeholder="Título"
          name="title"
        />
        <div className="flex items-center justify-between gap-4">
          <div className="w-full">
            <h3 className="mb-2"> Selecciona la prioridad</h3>
            <select
              name="prioridad"
              id=""
              className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
            >
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className="mb-2"> Selecciona el estado</h3>
            <select
              name="estado"
              id=""
              className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
            >
                <option value="sinComenzar">Sin comenzar </option>
                <option value="enProceso">En proceso</option>
                <option value="completadas">Completadas</option>
            </select>
          </div>
          <textarea name="" id=""></textarea>
          
        </div>
      </form>
    </div>
  );
};

export default AñadirTarea;
