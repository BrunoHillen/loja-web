const express = require("express");
const { getAllPedidos, getCreatePedido, getUpdatePedido, getAllPedidosCompra, getLastPedido } = require("../controllers/pedidosController");
const router = express.Router();

router.get("/", getAllPedidos);
router.get("/compras", getAllPedidosCompra);
router.get("/lastPedido", getLastPedido);
router.post("/", getCreatePedido);
router.put("/:id", getUpdatePedido);

module.exports = router;



/*

async function getPedidosBetween(req, res) {
    const { operacao, startDate, endDate } = req.body;

    if (!endDate || !startDate || !operacao) {
        return res.json({ "Erro": "Uma das variaveis não exite endDate, startDatde ou operacao" })
    } else {
       
          const [result] = await connection.execute("SELECT * FROM pedido where operacao = ? and dataPedido between  ? and ? ",
          [operacao, startDate, endDate]);
        
        if (result.length === 0) {
            if (startDate > endDate) {
                return res.json({ "ERRO": "DATA INICIAL MAIOR QUE A FINAL" })
            } else {
                return res.json({ "MSG": `NÃO HOUVE ${operacao} NESSE PERIODO` })
            }
        } else {
           res.json(result);
           
        }
    }
}

async function getVendas(req, res) {
    const [result] = await connection.execute("SELECT * FROM pedido WHERE operacao = 'venda'");
    res.json(result);
}

async function getcompras(req, res) {
    const [result] = await connection.execute("SELECT * FROM pedido WHERE operacao = 'compra'");
    res.json(result);
}

async function getpedidoId(req, res) {
    const { id } = req.params;
    const [result] = await connection.execute("SELECT * FROM pedido WHERE idPedido = ?",
        [id]);
    if (result.length === 0) {
        res.json({ "Erro:": "Usuario não existe" });

    } else {
        res.json(result);
    }

}

module.exports = { gettAllpedidos, getPedidosBetween, getVendas, getcompras, getpedidoId }*/