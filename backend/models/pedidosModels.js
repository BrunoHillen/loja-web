const connection = require("../connection");

async function getModelAllPedidos() {
    const [result] = await connection.execute("SELECT * FROM pedido");
    return result;

}

async function getModelAllPedidosCompra(){
    const [result] = await connection.execute("SELECT * FROM pedido where operacao = 'Compra' ");
    return result;
}

async function getModelPedidoIdUsuario(id) {
    const [result] = await connection.execute("SELECT * FROM pedido where idUsuarioFK = ? ",
        [id]);
    return result;
}

async function getModelLastPedido(){
    const [result] = await connection.execute("SELECT idPedido FROM pedido ORDER BY idPedido DESC LIMIT 1");
    return result;
}

async function getModelCreatePedido() {
    const { operacao, notaFiscal, idUsuarioFK } = data;
    const [result] = await connection.execute(
        "INSERT INTO pedido (operacao, notaFiscal, idUsuarioFK) VALUES (?,?,?)",
        [operacao, notaFiscal, idUsuarioFK]);
    return result;
}

async function getModelUpdatePedido(id, data) {
    const {dataPedido, horaPedido, operacao, notaFiscal, idUsuarioFK} = data;
    const [result] = await connection.execute(
        "UPDATE  pedido SET dataPedido = ?, horaPedido = ?, operacao = ?, notaFiscal = ?, idUsuarioFK = ?  WHERE idPedido = ? ",
        [dataPedido, horaPedido, operacao, notaFiscal,idUsuarioFK, id]
     )
    return result;
}

module.exports = { getModelAllPedidos, getModelPedidoIdUsuario, getModelCreatePedido, getModelUpdatePedido, getModelAllPedidosCompra, getModelLastPedido } 