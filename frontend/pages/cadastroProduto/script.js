import { createProduto } from "../../fetchApi/cadastrarProduto.js";
import { fetchTipos } from "../../fetchApi/fetchTipos.js";


const formCadastro = document.getElementById("form-cadastro");
const selectTipoProduto = document.getElementById("select-tipoProduto")
const inputNome = document.getElementById("input-nome");
const inputPreco = document.getElementById("input-preco");
const inputPrecoAtacado = document.getElementById("input-precoAtacado");
const inputQuantidadeAtacado = document.getElementById("input-quantidadeAtacado");
const inputCodigoBarra = document.getElementById("input-codigoBarra");
const inputEstoqueMinimo = document.getElementById("input-estoqueMinimo");
const inputEscaninho = document.getElementById("input-escaninho");
const inputUrl = document.getElementById("input-url");


const tiposProdutos = await fetchTipos();

async function createOptionTiposProdutos() {

    tiposProdutos.resultados.map((e) => {
        selectTipoProduto.innerHTML += `
        <option value="${e.idTipo}">${e.nomeTipo}</option>
        `

    })
}

createOptionTiposProdutos();

formCadastro.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("url", inputUrl.files[0]);
    formData.append("nomeProduto", inputNome.value);
    formData.append("preco",inputPreco.value);
    formData.append("precoAtacado", inputPrecoAtacado.value);
    formData.append("quantidadeAtacado", inputQuantidadeAtacado.value);
    formData.append("codigoBarra", inputCodigoBarra.value);
    formData.append("estoqueMinimo", parseInt(inputEstoqueMinimo.value));
    formData.append("escaninho", inputEscaninho.value);
    formData.append("idTipo", selectTipoProduto.value);

    
    console.log(formData);
    console.log(formData.get("url"));
    console.log(formData.get("nomeProduto"));

     const req = await createProduto(formData);
    console.log(req.data.resposta);
    alert(req.data.resposta)
    window.location.reload();
})