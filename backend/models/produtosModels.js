const connection = require("../connection");

async function getModelAllProdutos(req, res) {
    const [result] = await connection.execute("SELECT * FROM produtos")
    return result;
}
async function getModelProdutoId(id) {
    const [result] = await connection.execute("SELECT * FROM produtos WHERE idProduto = ?",
        [id]);
    return result;
}

async function getModelProdutoCodBarra(codBarra){
    const [result] = await connection.execute("SELECT * FROM produtos WHERE codigoBarra = ?",
        [codBarra]);
    return result;
}

async function getModelProdutoNome(nome){
    const [result] = await connection.execute("SELECT * FROM produtos WHERE nomeProduto like ?",
        [`%${nome}%`] );
        
    return result;    
}

async function modelCreateProduto(nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado, codigoBarra, escaninho, idTipo, url) {
    const [result] = await connection.execute(
        "INSERT INTO produtos (nomeProduto,estoqueMinimo,preco,precoAtacado,quantidadeAtacado,codigoBarra,escaninho,idTipo, url) VALUES (?,?,?,?,?,?,?,?,?)",
        [nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado, codigoBarra, escaninho, idTipo,url]
    );
    return result;
}
async function modelUpdateProduto(id, data) {
    const { nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado,codigoBarra, escaninho, idTipo, url } = data;
    const [result] = await connection.execute(
        "UPDATE produtos SET nomeProduto = ?, estoqueMinimo = ?, preco = ?, precoAtacado = ?, quantidadeAtacado = ?, codigoBarra = ?, escaninho = ?, idTipo = ?, url = ? WHERE idProduto = ?",
        [nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado,codigoBarra, escaninho, idTipo,url,id]);
    return result;
}
async function modelDeleteProduto(id,res){
    const[result] = await connection.execute("DELETE FROM produtos WHERE idProduto = ?",
    [id]);
    //res.json(result);
    return result;
}
module.exports = { getModelAllProdutos, getModelProdutoId, modelCreateProduto, modelUpdateProduto, modelDeleteProduto,getModelProdutoCodBarra,getModelProdutoNome}