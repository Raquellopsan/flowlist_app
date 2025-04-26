import React from "react";
import CardTareas from "../Dashboard/CardTareas";

const SinComenzar = ({ tarea, handleClickEditarTarea }) => {
  // Validación para asegurar que `tarea` es un array
  if (!Array.isArray(tarea)) {
    return <p>No hay tareas para mostrar</p>; // Puedes personalizar este mensaje
  }

  return (
    <div className="flex flex-col gap-2">
      {tarea.map((items) => (
        <div
          key={items._id || items.titulo} // Usamos _id o un fallback con el título
          className="  cursor-pointer "
          onClick={() => handleClickEditarTarea(items)} // Pasamos el objeto de tarea
        >
          <CardTareas key={items._id || items.titulo} data={items} />
        </div>
      ))}
    </div>
  );
};

export default SinComenzar;
