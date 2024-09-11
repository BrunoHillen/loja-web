import { createItens } from "../../fetchApi/cadastrarItens.js";
import { createPedido } from "../../fetchApi/cadastrarPedido.js";
import { getLastPedido } from "../../fetchApi/getLastPedido.js";
import { getProdutoCodBarra } from "../../fetchApi/getProdutoCodBarra.js";
import { getProdutoId } from "../../fetchApi/getProdutoId.js";
import { getUsersName } from "../../fetchApi/getUsersName.js";




const btnLocalizarFornecedor = document.getElementById("localizar");
const inputNomeFornecedor = document.getElementById("fornecedor");
const divResultado = document.getElementById("resultado");
const divResultadoFornecedor = document.getElementById("resultado-fornecedor");
//const listaUsuarios = document.getElementById("listaUsuarios");
const btnAdicionarPedido = document.getElementById("btnAdicionarCompra");
const inputNotaFiscal = document.getElementById("notaFiscal");
const inputIdProduto = document.getElementById("idProduto");
const inputCodigoBarra = document.getElementById("codigoBarra");
const inputPreco = document.getElementById("preco");
const divResultadoProduto = document.getElementById("resultadoProduto");
const inputQuantidade = document.getElementById("quantidadeCompra");
//const divResultadoItens = document.getElementById("resultadoItens");
const tabelaItem = document.getElementById("tabelaItem");
//const tabelaItens = document.getElementById("tabelaItens");
const buscarProduto = document.getElementById("buscarProduto");
const totalPedido = document.getElementById("totalPedido");
const modalPagamento = document.getElementById("modalPagamento");
const btnGerarParcelas = document.getElementById("btnGerarParcelas");
const container = document.getElementById("container-inputs");
const parcelas = document.getElementById("parcelas");
const btnSalvarParcelas = document.getElementById("btnSalvarParcelas")
let contador = 1;


let idProduto = null
let btnEdit = null;
let idUsuarioFk = null;
let idCompra = null;
let nomeProduto = null;
let total = 0;

async function createElements(data) {
    console.log("tabela", data);
    tabelaItem.innerHTML += `
    <tr>
        <td>
          <p class="p-text" >${nomeProduto}</p>
       </td>
      
       <td>
          <p class="p-text">${data.quantidadeCompra}<p>
       </td>
       <td>
          <p class="p-text">${data.preco}</p>
       </td>
       <td>
          <p class="p-text">${data.preco * data.quantidadeCompra}<p>
       </td>
       <td>
         <button class="btnDelete btn btn-danger btn-xs"
         name="btn-">Remover</button>
      </td>    
    </tr>
   
       `
    total = total + (data.preco * data.quantidadeCompra);
    totalPedido.textContent = `Total: ${total}`;
    return;
}


async function inserirItens() {

    const data = {

        "quantidadeVenda": "0",
        "preco": inputPreco.value,
        "quantidadeCompra": inputQuantidade.value,
        "custoMedio": inputPreco.value,
        "idProdutoFK": idProduto,
        "idPedidoFK": idCompra
    }
    console.log(data)
    createElements(data);
    const req = await createItens(data);
    console.log(req);

}


btnAdicionarPedido.addEventListener("click", async (event) => {
    event.preventDefault();
    if (idCompra == null) {
        const data = {
            "operacao": "Compra",
            "notaFiscal": inputNotaFiscal.value,
            "idUsuarioFK": idUsuarioFk
        }
        const res = await createPedido(data);
        console.log(res);

        const idPedido = await getLastPedido();
        console.log(idPedido);
        idCompra = idPedido.resultado[0].idPedido
        alert(idCompra);
        inputNotaFiscal.disabled = true;
        btnLocalizarFornecedor.disabled = true;
        inputNomeFornecedor.disabled = true;
        inserirItens();



    } else {
        alert(idCompra);
        inserirItens();
        alert("ok");
    }
    inputQuantidade.value = 0;
    inputPreco.value = 0;
})

btnLocalizarFornecedor.addEventListener("click", async (event) => {
    event.preventDefault();

    const nomeFornecedor = inputNomeFornecedor.value;
    const result = await getUsersName(nomeFornecedor);
    const resultados = result.data.resultados;
    console.log(resultados);
    divResultado.innerHTML = "";
    resultados.map((element, index) => (
        divResultado.innerHTML += `
            <div class="col-12 ">
                    <div class="d-flex justify-content-between">
                        <p class=" p-1 p-text">${element.nomeUsuario}</p>                                      
                        <button class="btnEdit btn btn-primary btn-xs m-2" data-bs-dismiss="modal"   name="${element.idUsuario}, ${element.nomeUsuario}">Selecionar</button>       
                    </div>         
            </div> 
        `
    ))
    console.log(result.data.resultados);

    btnEdit = document.querySelectorAll(".btnEdit");
    let id = null;
    let nome = null;
    btnEdit.forEach(element => {
        element.addEventListener("click", async (event) => {
            event.preventDefault();
            id = element.name;
            divResultado.innerHTML = "";
            nome = id.split(",")[1];
            divResultadoFornecedor.innerHTML = `<p >${nome}</p>`;

            idUsuarioFk = id.split(",")[0];
            console.log(idUsuarioFk);
            console.log(id)


            //window.location.href = `../painelEditarUsuario/index.html?${id}`

        })
    })

})

async function createElementsProduto(result) {
    let idProdutoStr = null;
    const resultados = result.data.resultados;
    console.log("resultados", resultados);
    inputPreco.value = result.data.resultados[0].preco
    idProdutoStr = result.data.resultados[0].idProduto
    nomeProduto = result.data.resultados[0].nomeProduto
    idProduto = parseInt(idProdutoStr);
    console.log(idProduto);

    divResultadoProduto.innerHTML = " ";
    resultados.map((element, index) => (
        divResultadoProduto.innerHTML += `<p>${nomeProduto}</p>`
    ))
}
function limpandoInputs() {
    inputIdProduto.value = ""
    inputCodigoBarra.value = ""
    return null;
}

function adicionarInput() {
    container.innerHTML = "";
    for (contador = 1; contador <= parcelas.value; contador++) {

        const novaLabel = document.createElement("label");
        novaLabel.htmlFor = "input" + contador;
        novaLabel.textContent = "parcela" + contador + ":";

        const novoInput = document.createElement("input");
        novoInput.type = "date";
        novoInput.name = "inputs[]"; // Define o nome do input como um array para envio
        novoInput.id = "input" + contador;
        novoInput.placeholder = "Digite algo";
        console.log(novoInput.id)
        const novoInputB = document.createElement("input");
        novoInputB.type = "number";
        novoInputB.name = "inputs[]"; // Define o nome do input como um array para envio
        novoInputB.id = "inputB" + contador;
        novoInputB.placeholder = "Digite algo";
        console.log(novoInputB.id)
        const container = document.getElementById("container-inputs");

        // Adiciona o novo input ao container
        container.appendChild(novaLabel);
        container.appendChild(novoInput);
        container.appendChild(novoInputB);
        container.appendChild(document.createElement("br"));
      
    }
}
buscarProduto.addEventListener('click', async (event) => {
    event.preventDefault();

    if (inputCodigoBarra.value) {
        const result = await getProdutoCodBarra(inputCodigoBarra.value);
        limpandoInputs();
        return await createElementsProduto(result);

    }

    if (inputIdProduto.value) {
        const result = await getProdutoId(inputIdProduto.value);
        limpandoInputs();
        return await createElementsProduto(result);
    }
})



btnGerarParcelas.addEventListener('click', async (event) => {

    adicionarInput();
})

btnSalvarParcelas.addEventListener('click', async (event) =>{
    event.preventDefault();
    
         
    console.log(inputB1);

})