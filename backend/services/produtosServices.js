const { getModelAllProdutos, getModelProdutoId, modelCreateProduto, modelUpdateProduto, modelDeleteProduto, getModelProdutoCodBarra,getModelProdutoNome } = require("../models/produtosModels");
const {getModelAllItens} = require("../models/itensModels");


async function getServiceAllProdutos(req, res){
    const result = await getModelAllProdutos();
    return result;
}

async function getServiceProdutoId(id){
    const result = await getModelProdutoId(id);
    return result;
}
async function getServiceProdutoCodBarra(codBarra){
    const result = await getModelProdutoCodBarra(codBarra);
    return result;
}
async function getServiceProdutoNome(nome){
    const result = await getModelProdutoNome(nome);
    return result;
}
async function serviceCreateProduto(nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado, codigoBarra, escaninho, idTipo, file){
    const image = file.buffer;
    const result = await modelCreateProduto(nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado, codigoBarra, escaninho, idTipo, image);
    return result;
}
async function serviceUpdateProduto(id,data){
    const result = await modelUpdateProduto(id,data);
    return result;
}
async function serviceDeleteProduto(id, res) {

    //const data = await getModelPedidoIdUsuario(id);
    const data = await getModelAllItens();
    const result = data.find((element) => element.idProdutoFK === id)
    if (!result) {
      await modelDeleteProduto(id);
      return true
    } 
    return false
  
  
  }
module.exports = {getServiceAllProdutos, getServiceProdutoId, serviceCreateProduto, serviceUpdateProduto, serviceDeleteProduto, getServiceProdutoCodBarra,getServiceProdutoNome }