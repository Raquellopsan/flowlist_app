import React from "react";

const Titulo = ({ title }) => {
  return (
    <div className="border-b pb-2">
      <h1 className="font-semibold text-[#636262] text-center">{title}</h1>
    </div>
  );
};

export default Titulo;
