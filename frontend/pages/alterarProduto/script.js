import { getProdutoId } from "../../fetchApi/getProdutoId.js";
import { updateProdutoById } from "../../fetchApi/updateProdutoById.js";

const inputNome = document.getElementById("input-nome");
const inputPreco = document.getElementById("input-preco");
const inputPrecoAtacado = document.getElementById("input-precoAtacado")
const inputQuantidadeAtacado = document.getElementById("input-quantidadeAtacado");
const inputCodigoBarra = document.getElementById("input-codigoBarra");
const inputEstoqueMinimo = document.getElementById("input-estoqueMinimo");
const inputEscaninho = document.getElementById("input-escaninho");
const inputUrl = document.getElementById("input-url");
const inputIdTipo = document.getElementById("input-idTipo");
const formEditarProduto = document.getElementById("form-editarProduto")
let dataValues = {};

async function createValueInputs(produto) {
    inputNome.value = produto.nomeProduto;
    inputPreco.value = produto.preco;
    inputPrecoAtacado.value = produto.precoAtacado;
    inputQuantidadeAtacado.value = produto.quantidadeAtacado;
    inputCodigoBarra.value = produto.codigoBarra;
    inputEstoqueMinimo.value = produto.estoqueMinimo;
    inputEscaninho.value = produto.escaninho;
    inputUrl.value = produto.url;
    inputIdTipo.value = produto.idTipo;

   
};

formEditarProduto.addEventListener("input", ({target}) =>{
    dataValues = {
        ...dataValues,
        [target.name]: target.value
    }
} )

formEditarProduto.addEventListener("submit", async(event) =>{
    event.preventDefault();
    const id = window.location.href.split("?")[1];
    const res = await updateProdutoById(id, dataValues);
    console.log(dataValues)
    alert(res.data.resposta);
    window.location.reload();
})

window.addEventListener('load', async () => {
    const id = window.location.href.split("?")[1];
    const produto = await getProdutoId(id);
    
    const { data: { resultados } } = produto;
        
    createValueInputs(resultados[0]);
    dataValues = {
        "nomeProduto": inputNome.value,
        "preco": inputPreco.value,
        "precoAtacado":inputPrecoAtacado.value,
        "quantidadeAtacado":inputQuantidadeAtacado.value,
        "codigoBarra": inputCodigoBarra.value,
        "estoqueMinimo":inputEstoqueMinimo.value,
        "escaninho":inputEscaninho.value,
        "idTipo": inputIdTipo.value,
        "url": inputUrl.value
        
    };
});