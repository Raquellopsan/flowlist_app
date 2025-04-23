const router = require("express").Router();
const { registro, login } = require("../servicios/user");

router.post("/registro", registro);
router.post("/login", login);

module.exports = router;
