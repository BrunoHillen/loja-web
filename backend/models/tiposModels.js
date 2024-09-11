const connection = require("../connection");

async function getAllModels() {
    const [result] = await connection.execute("SELECT * FROM tiposproduto");
    return result;
}

async function getTipoIdModel(id) {
    const [result] = await connection.execute("SELECT * FROM tiposproduto WHERE idTipo = ?",
        [id]);
    return result;
}
async function modelCreateTipo(data) {
    const { nomeTipo } = data;
    const result = await connection.execute(
        "INSERT INTO tiposproduto (nomeTipo) VALUES (?)",
        [nomeTipo]);
    return result;
}

async function modelUpdateTipo(data, id) {
    const { nomeTipo } = data;
    const result = await connection.execute(
        "UPDATE tiposproduto SET nomeTipo = ? WHERE idTipo = ?",
        [nomeTipo, id]);
    return result;
}

async function modeDeleteTipo(id) {
    const result = await connection.execute(
        "Delete FROM tiposproduto WHERE idTipo = ?",
        [id])
    return result;
}
module.exports = { getAllModels, getTipoIdModel, modelCreateTipo, modelUpdateTipo, modeDeleteTipo };

