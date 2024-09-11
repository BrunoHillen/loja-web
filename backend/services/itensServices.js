const { getModelAllItens, getModelItemId, ModelCreateItem, ModelDeleteItem } = require("../models/itensModels");

async function getServiceAllItens() {
    const result = await getModelAllItens();
    return result;
}

async function getServiceItemId(id) {
    const result = await getModelItemId(id);
    return result;
}
async function ServiceCreateItem(data) {
    const result = await ModelCreateItem(data);
    return result;
}

async function ServiceDeleteItem(id) {
    const data = await getModelItemId(id);
    if (data.length === 0) {
        return null;
    } else {
        const result = await ModelDeleteItem(id);
        return result;
    }
}
module.exports = { getServiceAllItens, getServiceItemId, ServiceCreateItem, ServiceDeleteItem }