const { getModelAllProdutos } = require("../models/produtosModels");
const { getAllModels, getTipoIdModel, modelCreateTipo, modelUpdateTipo, modeDeleteTipo } = require("../models/tiposModels");

async function getAllServices() {
    const data = await getAllModels();
    if (data.length === 0) {
        return ({ Erro: "Não existe dados" })
    } else {
        return data;
    }
}
async function getTipoIdServices(id) {
    const data = await getTipoIdModel(id);
    if (data.length === 0) {
        return ({ Erro: "Não existe Tipo de produto com esse ID" })
    } else {
        return data;
    }

}

async function serviceCreateTipo(data) {

    const result = await modelCreateTipo(data);
    return result;
}

async function serviceUpdateTipo(data, id) {
    const result = await modelUpdateTipo(data, id);
    return result;
}

async function serviceDeleteTipo(id) {
    const data = await getModelAllProdutos();
    const result = data.find((element) => element.idTipo === id)
    if (!result) {
        await modeDeleteTipo(id);
        return true;
    }
    return false;
}

module.exports = { getAllServices, getTipoIdServices, serviceCreateTipo, serviceUpdateTipo, serviceDeleteTipo }

