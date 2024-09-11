const { getServiceAllPagamentos, getServiceCreatePagamento, getServiceUpdatePagamento, getServiceDeletePagamento, getServicePagamentosEmAbertos } = require("../services/pagamentosService");

async function getAllPagamentos(req, res){
    const result = await getServiceAllPagamentos();
    res.json(result);
}
async function getCreatePagamento(req, res){
    const data = req.body;
    const result = await getServiceCreatePagamento(data);
    res.json("pagamento feito com sucesso!")
}
async function getUpdatePagamento(req, res){
    const { id } = req.params;
    const data = req.body;
    const result = await getServiceUpdatePagamento(id, data);
    res.json("pagamento alterado com sucesso!");
}
async function getDeletePagamento(req, res){
    const { id } = req.params;
    const result = await getServiceDeletePagamento(id);
    res.json("pagamento excluido com sucesso!");
}
async function getPagamentosEmAbertos(req, res){
    const result = await getServicePagamentosEmAbertos();
    res.json(result);
}
module.exports = { getAllPagamentos, getCreatePagamento, getUpdatePagamento, getDeletePagamento, getPagamentosEmAbertos }