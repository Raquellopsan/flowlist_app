import React from "react";
import CardTareas from "./CardTareas";

const EnProceso = ({ tarea }) => {
  return (
    <div className="flex flex-col gap-2">
      {tarea && tarea.map((items, i) => <CardTareas key={i} data={items} />)}
    </div>
  );
};

export default EnProceso;
