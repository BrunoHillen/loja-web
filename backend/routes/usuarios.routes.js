const express = require("express");
const { getAllUsers, getAllUsersId, updateUser,  createUser, deleteUser, updateUserEndereco, updateUserTelefone, getUsersName } = require("../controllers/usuariosController");


const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id",getAllUsersId);
router.get("/nome/:nome", getUsersName);
router.put("/telefones/:id", updateUserTelefone);
router.put("/endereco/:id", updateUserEndereco);
router.put("/:id",  updateUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router

