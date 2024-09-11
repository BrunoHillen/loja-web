const express = require("express");
const { getAlltiposproduto, getTipoId, createTipo, updateTipo, deleteTipo } = require("../controllers/tiposController");
const router = express.Router();

router.get("/", getAlltiposproduto);
router.get("/:id", getTipoId);
router.post("/", createTipo);
router.put("/:id", updateTipo);
router.delete("/:id", deleteTipo);


module.exports = router