const authMiddleware = require("../middleware/authMiddleware");
const {
  añadirTarea,
  editarTarea,
  buscarTarea,
  eliminarTarea,
} = require("../servicios/tarea");
const router = require("express").Router();

router.post("/anadirTarea", authMiddleware, añadirTarea);
router.post("/editarTarea/:id", authMiddleware, editarTarea);
router.post("/buscarTarea/:id", authMiddleware, buscarTarea);
router.post("/eliminarTarea/:id", authMiddleware, eliminarTarea);

module.exports = router;
