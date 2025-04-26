const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  registro,
  login,
  logout,
  detallesUsuario,
} = require("../servicios/user");

router.post("/registro", registro);
router.post("/login", login);
router.post("/logout", logout);
router.get("/detallesUsuario", authMiddleware, detallesUsuario);

module.exports = router;
