const User = require("../models/usuario");

const registro = async (peticion, respuesta) => {
  try {
    const { nombreUsuario, email, contraseña } = peticion.body;
    // console.log(nombreUsuario, email, contraseña);
    if (!nombreUsuario || !email || !contraseña) {
      return respuesta
        .status(404)
        .json({ error: "Debe rellenar todos los campos" });
    }

    if (contraseña.length < 6) {
      return respuesta
        .status(404)
        .json({ error: "La contraseña debe tener mínimo 6 caracteres" });
    }

    //buscamos en la base de datos si ya e hay un usuario con el mismo email y con el mismo nombre de usuario. Con el operador $or busca si se cumple una de las dos condicione del array (el ususario o el email), es como utilizar ||. Al final todo esto evita que se registren con dos perfiles iguales

    const checkUser = await User.findOne({
      $or: [{ email }, { nombreUsuario }],
    });

    if (checkUser) {
      return respuesta
        .status(404)
        .json({ error: "¡Tu usuario o email ya existen!" });
    } else {
      const newUser = new User({ nombreUsuario, email, contraseña });
      await newUser.save();
      return respuesta
        .status(200)
        .json({ success: "Te has registrado con éxito" });
    }
  } catch (error) {
    // console.log(error);
    return respuesta.status(404).json({ error: "Error en el servidor" });
  }
};

module.exports = { registro };
