const express = require("express");
require("dotenv").config();
require("./conexion/mongo");

const servidor = express();

// middleware
servidor.get("/", (peticion, respuesta) => {
  //respuesta.send("estoy creando el backend");
});

//FIN middleware

servidor.listen(`${process.env.PORT}`, () => {
  console.log(`el servidor esta funcionando en = ${process.env.PORT}`);
});
