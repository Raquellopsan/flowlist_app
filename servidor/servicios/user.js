const registro = async (peticion, respuesta) => {
  try {
    const { nombreUsuario, email, contraseña } = peticion.body;
    console.log(nombreUsuario, email, contraseña);
    // if (!nombreUsuario || !email || !contraseña) {
    //   respuesta.status(404).json({ error: "debe rellenar todos los campos" });
    // }
  } catch (error) {
    console.log(error);
    // return respuesta.status(404).json({ error: "error en el servidor" });
  }
};

module.exports = { registro };
