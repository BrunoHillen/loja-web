const { parse } = require("path");
const { getModelAllPedidos, getModelPedidoIdUsuario } = require("../models/pedidosModels");
const { getModelUserId, getModelAllUsers, modelUpdateUser, modelCreateUser, modelDeleteUser,modelUpdateUserEndereco,modelUpdateUserTelefone, getModelUsersName } = require("../models/usersModel");


async function getServicesAllUsers() {
  const data = await getModelAllUsers();
  if (data.length === 0) {
    return null;
  } else {
    return data;
  }
}

async function getServicesUserId(id) {
  const data = await getModelUserId(id)

  if (data.length === 0) {
    return null;
  } else {
    return data;
  }
}

async  function getServicesUsersName(nome){
  const data = await getModelUsersName(nome);
  if (data.length === 0) {
    return null;
  } else {
    return data;
  }

}

async function serviceUpdateUser(data, id) {

  const result = await modelUpdateUser(data, id);
  return result;
}

async function serviceUpdateUserEndereco(data, id) {

  const result = await modelUpdateUserEndereco(data, id);
  return result;
}
async function serviceUpdateUserTelefone(data, id) {

  const result = await modelUpdateUserTelefone(data, id);
  return result;
}

async function serviceCreateUser(data) {
  
  const result = await modelCreateUser(data);
  return result;

}
async function serviceDeleteUser(id, res) {

  //const data = await getModelPedidoIdUsuario(id);
  const data = await getModelAllPedidos();
  const result = data.find((element) => element.idUsuarioFK === id)
  if (!result) {
    await modelDeleteUser(id);
    return true
  } 
  return false


}

module.exports = { getServicesUserId, getServicesAllUsers, serviceUpdateUser, serviceCreateUser, serviceDeleteUser, serviceUpdateUserEndereco, serviceUpdateUserTelefone, getServicesUsersName }