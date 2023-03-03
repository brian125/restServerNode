const { Router } = require("express");
const {
  getUsuarios,
  postUsuarios,
  deleteUsuarios,
  patchUsuarios,
  putUsuarios,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", getUsuarios);
router.post("/", postUsuarios);
router.put("/:id", putUsuarios);
router.patch("/", patchUsuarios);
router.delete("/", deleteUsuarios);

module.exports = router;
