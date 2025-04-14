const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("conectado");
  } catch (error) {
    console.log(error);
  }

  //   await mongoose.connect(`${process.env.MONGO_URL}`);
  //   console.log("conectado");
};

conexion();
