import axios from "axios";
import { fetchProduto } from "../../fetchApi/fetchProdutos.js";
import { deleteProduto } from "../../fetchApi/deleteProduto.js";

const inputNomeProduto = document.getElementById("nomeProduto");
const tabelaProduto = document.getElementById("tabelaProduto")
const spanAlert = document.getElementById("spanAlert")
let globalProdutos = null;
let btnDelete = null;
let btnEdit = null;

function createElements(array) {
     console.log(array);
   
   tabelaProduto.innerHTML = " ";
   array.map((e) => tabelaProduto.innerHTML += `
   <tr>
      <td>
        <img src="data:image/jpeg;base64,${e.image}" style="width:40px;" alt="sem image">
      </td>
        <td>
         <h5>${e.id}</h5>
      </td>
      <td>
         <h5>${e.nome}</h5>
      </td>
      <td>
         <h5>${e.preco}</h5>
      </td>
       <td>
         <h5>${e.precoAtacado}</h5>
      </td>
      <td>
         <button class="btnDelete btn btn-danger btn-xs"
         name="btn-${e.id}">Remover</button>
      </td>
      <td>
         <a class="btnEdit btn btn-dark btn-xs" name="${e.id}">Editar</a>
      </td>
   </tr>
  
      `
   );
}

inputNomeProduto.addEventListener("input", async ({ target }) => {

   const buscar = globalProdutos.filter(e => e.nome.toLowerCase().includes(target.value));
   let tabelaTitulo = document.getElementById('tabelaTitulo');
   let titulo = document.getElementById('titulo');

   if (buscar.length > 0) {
      spanAlert.innerHTML = "";
      tabelaTitulo.style.display = "";
      titulo.display = "";
      return createElements(buscar);
   }
   tabelaTitulo.style.display = 'none';
   titulo.style.display = 'none';
   spanAlert.innerHTML = "<p class='alert alert-warning'>Usuario não encotrado!</p>"
})

window.addEventListener("load", async (event) => {
   event.preventDefault();
   const produtos = await fetchProduto();
   globalProdutos = produtos.resultados;
   createElements(produtos.resultados);
   btnDelete = document.querySelectorAll(".btnDelete");
   btnEdit = document.querySelectorAll(".btnEdit");

   let id = null;

   btnDelete.forEach(element => {
      element.addEventListener("click", async (event) => {
         event.preventDefault();
         id = element.name.slice("4");
         const res = await deleteProduto(id);
         alert(res.data.resposta);

         window.location.reload();

      })

      btnEdit.forEach(element => {
         element.addEventListener("click", async (event) => {
            event.preventDefault();
            id = element.name;
            console.log(id)
            window.location.href = `../alterarProduto/index.html?${id}`

         })
      })
   });

})