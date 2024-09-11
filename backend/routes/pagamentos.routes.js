const express = require("express");
const {getAllPagamentos, getCreatePagamento, getUpdatePagamento, getDeletePagamento, getPagamentosEmAbertos} = require("../controllers/pagamentosController");
const router = express.Router();

router.get("/", getAllPagamentos);
router.get("/abertos", getPagamentosEmAbertos);
router.post("/", getCreatePagamento);
router.put("/:id", getUpdatePagamento);
router.delete("/:id", getDeletePagamento);


module.exports = router
