import axios from "axios";
import { getUserId } from "../../fetchApi/getUserId.js";
import { updateUserById } from "../../fetchApi/updateUserById.js";

const editarendereco = document.getElementById("alterarEndereco");
const divUsuarios = document.getElementById("lista");
const inputNovoEndereco = document.getElementById("input-endereco");
const inputNovoBairro = document.getElementById("input-bairro");
const inputNovoCidade = document.getElementById("input-cidade");
const inputNome = document.getElementById("input-nomeUsuario");

let dataValues = {};

async function createValueInputs(usuario) {
    inputNome.value = usuario.nomeUsuario;
    inputNovoEndereco.value = usuario.endereco;
    inputNovoBairro.value = usuario.bairro;
    inputNovoCidade.value = usuario.cidade;
};

editarendereco.addEventListener("input", ({ target }) => {
    dataValues = {
        ...dataValues,
        [target.name]: target.value
    }
    console.log(data);
})

editarendereco.addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = window.location.href.split("?")[1];
    const url = `http://localhost:3000/usuarios/endereco/${id}`
    const res = await updateUserById(url, dataValues);
    alert(res.data.resposta);
    window.location.reload();
})

window.addEventListener('load', async () => {
    const id = window.location.href.split("?")[1];
    const usuario = await getUserId(id);
    
    const { data: { resultados } } = usuario;

    createValueInputs(resultados[0]);
    dataValues = {
        "nomeUsuario": inputNome.value,
        "endereco": inputNovoEndereco.value,
        "bairro": inputNovoBairro.value,
        "cidade": inputNovoCidade.value
    };
});
