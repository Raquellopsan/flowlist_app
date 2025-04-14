const router = require("express").Router();
const { registro } = require("../servicios/user");

router.post("/registro", registro);

module.exports = router;
