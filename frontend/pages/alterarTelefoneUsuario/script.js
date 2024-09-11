import { getUserId } from "../../fetchApi/getUserId.js";
import { updateUserById } from "../../fetchApi/updateUserById.js";

const editarTelefone = document.getElementById("alterarTelefone");
const divUsuarios = document.getElementById("lista");
const inputNovoTelefone = document.getElementById('input-telefone');
const inputNovoCelular = document.getElementById('input-celular');
const inputNovoWhatsap = document.getElementById('input-whatsap');
let dataValues = {};
//const formCadastro = document.getElementById("form-cadastro");

async function createValueInputs(usuario) {
    inputNovoTelefone.value = usuario.telefone;
    inputNovoCelular.value = usuario.celular;
    inputNovoWhatsap.value = usuario.whatsap;
};

editarTelefone.addEventListener("input", ({ target }) => {
    dataValues = {
        ...dataValues,
        [target.name]: target.value
    };
});

editarTelefone.addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = window.location.href.split("?")[1];
    // console.log('click', data);
    const url = `http://localhost:3000/usuarios/telefones/${id}`
    const res = await updateUserById(url, dataValues);
    alert(res.data.resposta);
    window.location.reload();
});

window.addEventListener('load', async () => {
    const id = window.location.href.split("?")[1];
    const usuario = await getUserId(id);
    
    const { data: { resultados } } = usuario;

    createValueInputs(resultados[0]);
    dataValues = {
        "telefone": inputNovoTelefone.value,
        "celular": inputNovoCelular.value,
        "whatsap": inputNovoWhatsap.value
    };
});