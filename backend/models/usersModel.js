const connection = require("../connection");

async function getModelAllUsers() {
    const [data] = await connection.execute("SELECT * FROM usuarios")
    return data;
}
async function getModelUserId(id) {
    const [data] = await connection.execute("SELECT * FROM usuarios WHERE idUsuario = ?",
        [id]);
    return data;
}

async function getModelUsersName(nome){
    
    const [data] = await connection.execute("SELECT idUsuario, nomeUsuario FROM usuarios WHERE nomeUsuario like ? ",
       [`%${nome}%`] );
    return data;
}

async function modelUpdateUser(req, id) {

    const { nomeUsuario, endereco, bairro, cidade, telefone, whatsap, celular, contato } = req;
    const [result] = await connection.execute(
        "UPDATE usuarios SET nomeUsuario = ?, endereco = ?, bairro = ?, cidade = ?, telefone = ?, whatsap = ?, celular = ?, contato = ? where idUsuario = ?",
        [nomeUsuario, endereco, bairro, cidade, telefone, whatsap, celular, contato, id]);
    return result;
}

async function modelUpdateUserEndereco(req, id){

    const {nomeUsuario, endereco, bairro, cidade} = req;
    const [result] = await connection.execute(
        "UPDATE usuarios SET  nomeUsuario = ?, endereco = ?, bairro = ?, cidade = ? where idUsuario = ?",
        [nomeUsuario, endereco, bairro, cidade, id]);
    return result;

}
async function modelUpdateUserTelefone(req, id){

    const {telefone, celular, whatsap} = req;
    const [result] = await connection.execute(
        "UPDATE usuarios SET  telefone = ?, celular = ?, whatsap = ? where idUsuario = ?",
        [telefone, celular, whatsap, id]);
    return result;

}
async function modelCreateUser(data) {
    const { nomeUsuario, endereco, bairro, cidade, telefone, whatsap, celular, contato } = data;
    const [result] = await connection.execute(
    "INSERT INTO usuarios (nomeUsuario, endereco, bairro, cidade, telefone, whatsap, celular, contato) VALUES (?,?,?,?,?,?,?,?)",
        [nomeUsuario, endereco, bairro, cidade, telefone, whatsap, celular, contato]);
    return result;        
}

async function modelDeleteUser(id,res){
    const[result] = await connection.execute("DELETE FROM usuarios WHERE idUsuario = ?",
    [id]);
    //res.json(result);
    return result;
}
module.exports = { getModelUserId, getModelAllUsers, modelUpdateUser, modelCreateUser,modelDeleteUser, modelUpdateUserEndereco,modelUpdateUserTelefone, getModelUsersName}