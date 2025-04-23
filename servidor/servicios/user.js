const User = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registro = async (peticion, respuesta) => {
  try {
    const { nombreUsuario, email, contraseña } = peticion.body;
    // console.log(nombreUsuario, email, contraseña);
    if (!nombreUsuario || !email || !contraseña) {
      return respuesta
        .status(400)
        .json({ error: "Debe rellenar todos los campos" });
    }

    if (contraseña.length < 6) {
      return respuesta
        .status(400)
        .json({ error: "La contraseña debe tener mínimo 6 caracteres" });
    }

    //buscamos en la base de datos si ya e hay un usuario con el mismo email y con el mismo nombre de usuario. Con el operador $or busca si se cumple una de las dos condicione del array (el ususario o el email), es como utilizar ||. Al final todo esto evita que se registren con dos perfiles iguales

    const checkUser = await User.findOne({
      $or: [{ email }, { nombreUsuario }],
    });

    if (checkUser) {
      return respuesta
        .status(400)
        .json({ error: "¡Tu usuario o email ya existen!" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const contraseñaHash = await bcrypt.hash(contraseña, salt);

      const newUser = new User({
        nombreUsuario,
        email,
        contraseña: contraseñaHash, // ← Guardamos la encriptada
      });

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

const login = async (peticion, respuesta) => {
  try {
    const { email, contraseña } = peticion.body;

    if (!email || !contraseña) {
      return respuesta
        .status(400)
        .json({ error: "Debe rellenar todos los campos" });
    }
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return respuesta.status(404).json({ error: "Usuario no encontrado" });
    }

    // ✅ Comparamos contraseña encriptada con bcrypt
    const contraseñaValida = await bcrypt.compare(
      contraseña,
      checkUser.contraseña
    );
    if (!contraseñaValida) {
      return respuesta.status(401).json({ error: "Contraseña incorrecta" });
    }

    // ✅ Creamos el token JWT
    const token = jwt.sign(
      { id: checkUser._id, email: checkUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    // ✅ Enviamos el token como cookie
    respuesta.cookie("flowlistUserToken", token, {
      httpOnly: true,
      sameSite: "lax", // o "none" si usas HTTPS
      secure: false, // true si usas HTTPS en producción
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 días
    });

    return respuesta
      .status(200)
      .json({ success: "Has iniciado sesión correctamente" });
  } catch (error) {
    return respuesta.status(200).json({ error: "Error en el servidor" });
  }
};

module.exports = { registro, login };
