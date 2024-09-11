const connection = require("../connection");

async function getModelAllItens() {
    const [result] = await connection.execute(
        "SELECT * FROM itens"
    );
    return result;
}
async function getModelItemId(id) {
    const [result] = await connection.execute(
        "SELECT * FROM itens WHERE idItens = ?",
        [id]);
    return result;
}
async function ModelCreateItem(data) {
    const { quantidadeVenda, quantidadeCompra, preco, custoMedio, idProdutoFK, idPedidoFK } = data;
    const [result] = await connection.execute(
        "INSERT INTO itens (quantidadeVenda,quantidadeCompra,preco,custoMedio,idProdutoFK,idPedidoFK) VALUES (?,?,?,?,?,?)",
        [quantidadeVenda, quantidadeCompra, preco, custoMedio, idProdutoFK, idPedidoFK]);
        return result
}
async function ModelDeleteItem(id){
    const [result] = await connection.execute("DELETE FROM itens WHERE idItens = ?",
        [id]);
    
     return result;  
}

module.exports = { getModelAllItens, getModelItemId, ModelCreateItem, ModelDeleteItem }