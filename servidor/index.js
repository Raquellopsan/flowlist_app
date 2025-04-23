const express = require("express");
const servidor = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./conexion/mongo");
const usuarioApis = require("./control/user02");
const tareaApis = require("./control/tarea02");

servidor.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

servidor.use(express.json());
servidor.use(cookieParser());

servidor.use("/api/v1", usuarioApis);
servidor.use("/api/v1", tareaApis);

// middleware
servidor.get("/", (peticion, respuesta) => {
  respuesta.send("estoy creando el backend");
});

//FIN middleware

servidor.listen(`${process.env.PORT}`, () => {
  console.log(`el servidor esta funcionando en = ${process.env.PORT}`);
});
