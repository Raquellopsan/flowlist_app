const router = require("express").Router();
const {
  registro,
  login,
  logout,
  detallesUsuario,
} = require("../servicios/user");

router.post("/registro", registro);
router.post("/login", login);
router.post("/logout", logout);
router.get("/detallesUsuario", detallesUsuario);

module.exports = router;
