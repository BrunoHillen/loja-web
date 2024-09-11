
import { getTipoId } from "../../fetchApi/getTipoId.js";
import { updateTipoById } from "../../fetchApi/updateTipoById.js";




const editarTipo = document.getElementById("alterarTipo");

const inputNovoTipo = document.getElementById('input-tipo');

let dataValues = {};


async function createValueInputs(tipo) {
    inputNovoTipo.value = tipo.nomeTipo;
};

editarTipo.addEventListener("input", ({ target }) => {
    dataValues = {
        ...dataValues,
        [target.name]: target.value
    };
});

editarTipo.addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = window.location.href.split("?")[1];
    // console.log('click', data);
    const url = `http://localhost:3000/tipos/${id}`
    const res = await updateTipoById(url, dataValues);
    alert(res.data.resposta);
    window.location.reload();
});

window.addEventListener('load', async () => {
    const id = window.location.href.split("?")[1];
    const tipo = await getTipoId(id);
    
    const { data: { resultados } } = tipo;
    console.log(tipo)
    createValueInputs(resultados[0]);
    dataValues = {
        "nomeTipo": inputNovoTipo.value,
        
    };
});