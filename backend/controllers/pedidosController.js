const { getServiceAllPedidos, getServiceCreatePedido, getServiceUpdatePedido,getServiceAllPedidosCompra, getServiceLastPedido } = require("../services/pedidosServices");


async function getAllPedidos(req, res) {

    const result = await getServiceAllPedidos();

    const data = {
        "resultados": result,
        "total": result.length
    }
    res.json(data);
    
}

async function getAllPedidosCompra(req, res){
    const result = await getServiceAllPedidosCompra();
    const data = {
        "resultados": result,
        "total": result.length
    }
    res.json(data);
}

async function getLastPedido(req, res){
    const result = await getServiceLastPedido();
    const data = {
        "resultado": result,
        "total": result.length
    }
    res.json(data);
}

async function getCreatePedido(req, res) {
    data = req.body;
    const result = await getServiceCreatePedido(data);
    res.json({resposta:"pedido inserido com sucesso!"})
    
}

async function getUpdatePedido(req, res){
    const { id } = req.params;
    const data = req.body;
    const result = await getServiceUpdatePedido(id,data);
    res.json({resposta:"pedido atualizado com sucesso!"});
}

module.exports = { getAllPedidos, getCreatePedido, getUpdatePedido, getAllPedidosCompra, getLastPedido }