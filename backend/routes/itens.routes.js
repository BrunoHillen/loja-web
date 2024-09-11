const express = require("express");
const { getAllItens, getItemId, createItem, deleteItem } = require("../controllers/itensController");

const router = express.Router();



router.get("/", getAllItens);
router.get("/:id", getItemId);
router.post("/", createItem);
router.delete("/:id", deleteItem);


module.exports =  router 


/*const connection = require("../connection");

async function getItens(req, res) {

    const { operacao, startDate, endDate } = req.body;


    const [result] = await connection.execute(
        `SELECT 
            SUM(i.preco * i.quantidadeVenda) / SUM(i.quantidadeVenda) AS precoMedio,
            SUM(i.quantidadeVenda) AS quantidadeVendida,
            SUM(i.preco * i.quantidadeVenda) AS Valor,
            p.nomeProduto AS nomeProduto
        FROM 
            pedido AS ped
        INNER JOIN 
            itens AS i ON ped.idPedido = i.idPedidoFK
        INNER JOIN 
            produtos AS p ON p.idProduto = i.idProdutoFK
        WHERE 
            ped.operacao = ? 
            AND ped.dataPedido BETWEEN ? AND ?
        GROUP BY 
            p.nomeProduto;`,

        [operacao, startDate, endDate]);

    res.json(result);


}
     
module.exports = { getItens }*/