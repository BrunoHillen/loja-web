const express = require("express");

const { getAllProdutos, getProdutoId, createProduto, updateProduto, deleteProduto,getProdutoCodBarra, getProdutoNome } = require("../controllers/produtosController"); 
const  router  = express.Router();

router.get("/", getAllProdutos);
router.get("/:id", getProdutoId);
router.get("/cod/:codBarra", getProdutoCodBarra);
router.get("/nomeProduto/:nome", getProdutoNome);
router.post("/", createProduto);
router.put("/:id", updateProduto)
router.delete("/:id", deleteProduto)

module.exports = router
