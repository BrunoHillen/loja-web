import { getAllCompras } from "../../fetchApi/getAllCompras.js";

const inputOperacao = document.getElementById("dataPedido");
const tabelaCompra = document.getElementById("tabelaCompra")
const spanAlert = document.getElementById("spanAlert")
let tituloTabela = document.getElementById('tituloTabela');
const tabelaCompras = document.getElementById('tabelaCompras')
const cadastrarCompra = document.getElementById("cadastrarCompra");


let globalCompras = null;
let btnDelete = null;
let btnEdit = null;



function createElements(array) {
   tabelaCompra.innerHTML = " ";
   array.map((e) => tabelaCompra.innerHTML += `
   <tr>
      <td>
         <h5>${e.idPedido}</h5>
      </td>
      <td>
         <h5>${e.dataPedido}</h5>
      </td>
       <td>
         <h5>${e.horaPedido}</h5>
      </td>
      <td>
         <h5>${e.operacao}</h5>
      </td>
      <td>
         <button class="btnDelete btn btn-danger btn-xs"
         name="btn-${e.idPedido}">Remover</button>
      </td>
      <td>
         <a class="btnEdit btn btn-dark btn-xs" name="${e.idPedido}">Editar</a>
      </td>
   </tr>
  
      `
   );
}

inputOperacao.addEventListener("input", async ({ target }) => {
   console.log(globalCompras)
   const buscar = globalCompras.filter(e => e.dataPedido.toLowerCase().includes(target.value));


   if (buscar.length > 0) {
      spanAlert.innerHTML = "";
      tabelaCompras.style.display = "";
      tituloTabela.display = "";
      return createElements(buscar);
   }
   tabelaCompras.style.display = 'none';
   tituloTabela.style.display = 'none';
   spanAlert.innerHTML = "<p class='alert alert-warning'>Usuario não encotrado!</p>"
})

cadastrarCompra.addEventListener("click", async (event) => {
   event.preventDefault();

    window.location.href = `../cadastrarCompra/index.html`
    //window.location.href = `../teste/index.html` 
})

async function deletetUser(id) {
   const url = `http://localhost:3000/usuarios/${id}`
   const res = await axios.delete(url, id);
   alert(res.data.resposta);
   window.location.reload();
}

window.addEventListener("load", async (event) => {
   event.preventDefault();

   const compras = await getAllCompras();
   console.log(compras)
   globalCompras = compras.resultados;
   console.log(globalCompras)

   createElements(compras.resultados);


   btnDelete = document.querySelectorAll(".btnDelete");
   btnEdit = document.querySelectorAll(".btnEdit");

   let id = null;
   btnDelete.forEach(element => {
      element.addEventListener("click", async (event) => {
         event.preventDefault();
         id = element.name.slice("4");
         const idDelete = await deletetUser(id);

      })

      btnEdit.forEach(element => {
         element.addEventListener("click", async (event) => {
            event.preventDefault();
            id = element.name;
            window.location.href = `../painelEditarUsuario/index.html?${id}`

         })
      })
   });

})
