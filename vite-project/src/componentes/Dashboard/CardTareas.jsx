import React from "react";

const CardTareas = ({ data }) => {
  const showEditarDiv = (evento, id) => {
    evento.preventDefault();
    window.sessionStorage.setItem("editarTareaId", id);
    window.location.reload();
  };
  return (
    <button
      className="bg-white rounded px-4 w-[100%] py-2 hover:shadow transition-all duration-300"
      onClick={(evento) => showEditarDiv(evento, data._id)}
    >
      <div className="flex item-center justify-between">
        <h1 className="">{data.titulo}</h1>
        <div
          className={`text-sm ${
            data.prioridad === "baja"
              ? "text-[#6CBA5A] bg-[#E7F4E4]"
              : data.prioridad === "media"
              ? "text-[#5BCEC9] bg-[#CEF6F5]"
              : "text-[#F3533B] bg-[#F4CAC4]"
          } px-2 rounded-full`}
        >
          <p>{data.prioridad}</p>
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-sm text-zinc-500  text-left ">{data.descripcion}</p>
    </button>
  );
};

export default CardTareas;
