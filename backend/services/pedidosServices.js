const { getModelAllPedidos, getModelCreatePedido, getModelUpdatePedido,getModelAllPedidosCompra, getModelLastPedido } = require("../models/pedidosModels");

async function getServiceAllPedidos(){
   const result =   await getModelAllPedidos();
    return result

}
async function getServiceAllPedidosCompra(){
    const result =   await getModelAllPedidosCompra();
    return result;
}

async function getServiceLastPedido(){
    const result = await getModelLastPedido();
    return result;
}

async function getServiceCreatePedido(){
    const {operacao, notaFiscal, idUsuarioFK   } = data;
    const result = await getModelCreatePedido(data);
    return result;
}

async function getServiceUpdatePedido(id, data){
    const result = await getModelUpdatePedido(id,data);
    return result;
}
module.exports = { getServiceAllPedidos, getServiceCreatePedido, getServiceUpdatePedido, getServiceAllPedidosCompra, getServiceLastPedido }