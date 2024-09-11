const { getServiceAllItens, getServiceItemId, ServiceCreateItem, ServiceDeleteItem } = require("../services/itensServices");


async function getAllItens(req, res) {
    const result = await getServiceAllItens()
    const data = {
        "resultados": result,
        "total": result.length
    }
    res.json(data);
}
async function getItemId(req, res) {
    const { id } = req.params;
    const result = await getServiceItemId(id);
    const data = {
        "resultados": result,
        "total": result.length
    }
    res.json(data);
}
async function createItem(req, res) {
    const data = req.body;
    const result = await ServiceCreateItem(data);
    if (result.length === 0) {
        res.json("item não cadastrado!");
    } else {
        res.json("item cadastrado com sucesso!")
    }
}
async function deleteItem(req, res){
    const { id } = req.params;
    const result = await ServiceDeleteItem(id);
   if (result===null) {
        res.json({ resposta: "Não existe esse Id!" });
    } else {

        res.json({ resposta: "Item excluido com sucesso!" })
    }
   
}
module.exports = { getAllItens, getItemId, createItem, deleteItem }