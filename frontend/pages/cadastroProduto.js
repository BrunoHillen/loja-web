console.log(" teste ")
import { produtos } from "../produtos.js";
const divprodutos = document.getElementById("produtos");
const inputNomeProduto = document.getElementById("nomeProduto");
const btnBuscarProdutos = document.getElementById("buscarProdutos");






function createElements(array) {
  divprodutos.innerHTML = "";
  array.map((e, i) => divprodutos.innerHTML += `
   
 
  <div class="col-3">
      <h5>${e.descricao}</h5>
      
     
      <label for="">Quantidade</label>
      <input type="number">
      
      <p>preço do produto: ${e.preco}</p>
      <div>
      <img class="img-fluid" src="${e.url}"> 
      </div>
    
    </div>
    
    `

    
  );

}

function findElements() {
  
  const valueElements = inputNomeProduto.value;
  const filterElement = produtos.filter(e => e.descricao.toLowerCase() === valueElements.toLowerCase())
   
  if (filterElement.length === 0) {

    return alert("produto não encontrado!");

  }
  document.getElementById("nomeProdutohtml").value = filterElement[0].descricao
  document.getElementById("codigoBarra").value = filterElement[0].cd_barra
  document.getElementById("estoqueMinimo").value = filterElement[0].minimo
  document.getElementById("precoVarejo").value = filterElement[0].preco
  document.getElementById("precoAtacado").value = filterElement[0].preco_atacado
  document.getElementById("quantidadeAtacado").value = filterElement[0].quantidade_atacado
  document.getElementById("comissao").value = filterElement[0].comissao
  document.getElementById("escaninho").value = filterElement[0].escaninho
  document.getElementById("tipoProduto").value = filterElement[0].tipo
  document.getElementById("url").value = filterElement[0].url
   
 return createElements(filterElement);

}


window.addEventListener("load", createElements(produtos))
btnBuscarProdutos.addEventListener("click", (event) => {
  event.preventDefault();
  findElements();
});