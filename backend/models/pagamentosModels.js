const connection = require("../connection");

async function getModelAllPagamentos(req, res) {
    const [result] = await connection.execute(
        "SELECT * FROM pagamentos");
    return result
}
async function getModelCreatePagamento(data) {
    const { dataVencimento, dataPagamento, valorParcela, valorPago, idPedidoFK, idFormaPagamentoFK } = data;
    const [result] = await connection.execute(
        "INSERT INTO pagamentos (dataVencimento, dataPagamento, valorParcela,valorPago,idPedidoFK,idFormaPagamentoFK) VALUES (?,?,?,?,?,?)",
        [dataVencimento, dataPagamento, valorParcela, valorPago, idPedidoFK, idFormaPagamentoFK]);
    return result;
}
async function getModelUpdatePagamento(id, data) {
    const { dataPagamento, valorPago, idFormaPagamentoFK } = data;
    const [result] = await connection.execute(
        "UPDATE pagamentos SET dataPagamento = ?, valorPago = ?, idFormaPagamentoFK = ? WHERE idPagamentos = ?",
        [dataPagamento, valorPago, idFormaPagamentoFK, id]);
}
async function getModelDeletePagamento(id) {
    const result = await connection.execute(
        "DELETE  FROM pagamentos WHERE idPagamentos = ? ",
        [id]);
    return result;
}
async function getModelPagamentosEmAbertos() {
    const [result] = await connection.execute(
        "SELECT * FROM pagamentos WHERE valorPago < valorParcela"
    );
    return result;
}
module.exports = { getModelAllPagamentos, getModelCreatePagamento, getModelUpdatePagamento, getModelDeletePagamento, getModelPagamentosEmAbertos }

