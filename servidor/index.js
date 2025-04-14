const express = require("express");
require("dotenv").config();
require("./conexion/mongo");
const usuarioApis = require("./control/user02");

const servidor = express();
servidor.use(express.json());

// middleware
servidor.get("/", (peticion, respuesta) => {
  respuesta.send("estoy creando el backend");
});

servidor.use("/api/v1", usuarioApis);

//FIN middleware

servidor.listen(`${process.env.PORT}`, () => {
  console.log(`el servidor esta funcionando en = ${process.env.PORT}`);
});
