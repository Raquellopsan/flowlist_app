import React, { useState } from "react";
import axios from "axios";

const AñadirTarea = ({ setAñadirTareaDiv }) => {
  const [Valor, setValor] = useState({
    titulo: "",
    descripcion: "",
    prioridad: "baja",
    estado: "sinComenzar",
  });
  const change = (evento) => {
    const { name, value } = evento.target;
    setValor({ ...Valor, [name]: value });
  };
  const añadirTarea = async (evento) => {
    evento.preventDefault();
    try {
      // console.log("Enviando datos de tarea:", Valor);
      const respuesta = await axios.post(
        "http://localhost:4000/api/v1/anadirTarea",
        Valor,
        { withCredentials: true }
      );
      // console.log("Respuesta del servidor:", respuesta.data);
      // Si la respuesta es exitosa, muestra la alerta de éxito
      if (respuesta.data.success) {
        alert(respuesta.data.success); // Mostramos el mensaje de éxito
        // Aquí podrías cerrar el formulario si es necesario
        setAñadirTareaDiv("hidden");
      }
    } catch (error) {
      if (error.response) {
        // Si el servidor responde con un error
        alert(error.response.data.error || "Error al añadir tarea");
      } else if (error.request) {
        // Si no se recibe respuesta del servidor
        alert("No se recibió respuesta del servidor.");
      } else {
        // Otro tipo de error (como errores en la configuración)
        alert("Error desconocido: " + error.message);
      }
    }
  };
  return (
    <div className="bg-white rounded px-4 py-4 w-full sm:w-3/4 md:w-2/3 lg:w-[40%] mx-auto">
      <h1 className="text-center font-semibold text-xl text-[#636262]">
        Añadir tarea
      </h1>
      <hr className="mb-4 mt-2 border-[#636262]" />
      <form className="flex flex-col gap-4" onSubmit={añadirTarea}>
        <input
          type="text"
          className="border px-2 py-1 rounded border-zinc-300 outline-none"
          placeholder="Título"
          name="titulo"
          value={Valor.titulo}
          onChange={change}
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full">
            <h3 className="mb-2 text-[#636262]">Selecciona la prioridad</h3>
            <select
              name="prioridad"
              className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
              onChange={change}
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className="mb-2 text-[#636262]">Selecciona el estado</h3>
            <select
              name="estado"
              className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
              onChange={change}
            >
              <option value="sinComenzar">Sin comenzar</option>
              <option value="enProceso">En proceso</option>
              <option value="completadas">Completadas</option>
            </select>
          </div>
        </div>
        <textarea
          name="descripcion"
          placeholder="¿Cuál es la tarea?"
          className="border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]"
          value={Valor.descripcion}
          onChange={change}
        ></textarea>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            className="bg-[#FA9F42] border border-[#FA9F42] text-white py-2 rounded hover:bg-[#FFB972] hover:border-[#FFB972] transition-all duration-300 w-full"
          >
            Añadir
          </button>
          <button
            type="button"
            className="w-full border border-black py-2 hover:bg-zinc-100 transition-all duration-300 rounded"
            onClick={() => setAñadirTareaDiv("hidden")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AñadirTarea;
