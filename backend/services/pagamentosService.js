const { getModelAllPagamentos, getModelCreatePagamento, getModelUpdatePagamento, getModelDeletePagamento, getModelPagamentosEmAbertos } = require("../models/pagamentosModels");

async function getServiceAllPagamentos(req, res){
    const result = await getModelAllPagamentos();
    return result;
}
async function getServiceCreatePagamento(data){
    const result = await getModelCreatePagamento(data);
    return result;
}
async function getServiceUpdatePagamento(id, data){
    const result = await getModelUpdatePagamento(id, data);
    return result;
}
async function getServiceDeletePagamento(id){
    const result = await getModelDeletePagamento(id);
    return result;
}
async function getServicePagamentosEmAbertos(res){
    const result = await getModelPagamentosEmAbertos();
    return result;
}
module.exports = { getServiceAllPagamentos, getServiceCreatePagamento, getServiceUpdatePagamento, getServiceDeletePagamento, getServicePagamentosEmAbertos }