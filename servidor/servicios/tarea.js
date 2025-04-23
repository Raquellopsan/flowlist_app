const tarea = require("../models/tareas");

// crear nuevas tareas
const añadirTarea = async (peticion, respuesta) => {
  try {
    const { titulo, descripcion, prioridad, estado } = peticion.body;
    const { user } = peticion.user;
    if (!titulo || !descripcion) {
      return respuesta
        .status(400)
        .json({ error: "Debes rellenar todos los campos" });
    }
    if (titulo.length < 6) {
      return respuesta
        .status(400)
        .json({ error: "El título debe tener mínimo 6 caractere" });
    }

    if (descripcion.length < 6) {
      return respuesta
        .status(400)
        .json({ error: "La descripción debe tener mínimo 6 caractere" });
    }

    const nuevaTarea = new tarea({ titulo, descripcion, prioridad, estado });
    await nuevaTarea.save();
    user.tareas.push(nuevaTarea._id);
    await user.save();
    return respuesta.status(200).json({ success: "Tarea añadida con éxito" });
  } catch (error) {
    return respuesta.status(404).json({ error: "error interno del servidor" });
  }
};

//editar las tareas ya existentes
const editarTarea = async (peticion, respuesta) => {
  try {
    const { id } = peticion.params;
    const { titulo, descripcion, prioridad, estado } = peticion.body;
    //const { user } = peticion.user;
    if (!titulo || !descripcion) {
      return respuesta
        .status(400)
        .json({ error: "Debes rellenar todos los campos" });
    }
    if (titulo.length < 6) {
      return respuesta
        .status(400)
        .json({ error: "El título debe tener mínimo 6 caractere" });
    }

    if (descripcion.length < 6) {
      return respuesta
        .status(400)
        .json({ error: "La descripción debe tener mínimo 6 caractere" });
    }

    await tarea.findByIdAndUpdate(id, {
      titulo,
      descripcion,
      prioridad,
      estado,
    });
    return respuesta.status(200).json({ success: "Tarea actualizada" });
  } catch (error) {
    return respuesta.status(404).json({ error: "error interno del servidor" });
  }
};

//conseguir tarea
const buscarTarea = async (peticion, respuesta) => {
  try {
    const { id } = peticion.params;
    const detallesTarea = await tarea.findById(id);

    return respuesta.status(200).json({ detallesTarea });
  } catch (error) {
    return respuesta.status(404).json({ error: "Tarea no encontrada" });
  }
};

//eliminar tarea
const eliminarTarea = async (peticion, respuesta) => {
  try {
    const { id } = peticion.params;
    await tarea.findByIdAndDelete(id);

    return respuesta.status(200).json({ succes: "Tarea eliminada" });
  } catch (error) {
    return respuesta.status(404).json({ error: "error interno del servidor" });
  }
};

module.exports = { añadirTarea, editarTarea, buscarTarea, eliminarTarea };
