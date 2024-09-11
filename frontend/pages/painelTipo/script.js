import axios from "axios";

const inputNomeTipo = document.getElementById("nomeTipo");
//const btnBuscarUsuarios = document.getElementById("buscarUsuarios");
//const divUsuarios = document.getElementById("lista");
const tabelaTipo = document.getElementById("tabelaTipo")
const spanAlert = document.getElementById("spanAlert")
//let tabelaTitulo = document.getElementById('tabelaTitulo');
let tituloTabela = document.getElementById('tituloTabela');
const tabelaTipos = document.getElementById('tabelaTipos')


let globalTipos = null;
let btnDelete = null;
let btnEdit = null;



function createElements(array) {
   tabelaTipo.innerHTML = " ";
   array.map((e) => tabelaTipo.innerHTML += `
   <tr>
      <td>
         <h5>${e.idTipo}</h5>
      </td>
      <td>
         <h5>${e.nomeTipo}</h5>
      </td>
      <td>
         <button class="btnDelete btn btn-danger btn-xs"
         name="btn-${e.idTipo}">Remover</button>
      </td>
      <td>
         <a class="btnEdit btn btn-dark btn-xs" name="${e.idTipo}">Editar</a>
      </td>
   </tr>
  
      `
   );
}

async function getAlltiposproduto() {
   const url = `http://localhost:3000/tipos`
   const res = await axios.get(url)
   return res;
}

async function findElements() {
   const nomeTipo = inputNomeTipo.value.toLowerCase();
   const { data: { resultados } } = tipos;
   const buscarTipoNome = resultados.filter(
      e => e.nomeTipo.toLowerCase().includes(nomeTipo))

   if (buscarTipoNome.length === 0) {
      return alert("tipo não encontrado!");
   }

   return createElements(buscarTipoNome);

}


inputNomeTipo.addEventListener("input", async ({ target }) => {
   const buscar = globalTipos.filter(e => e.nomeTipo.toLowerCase().includes(target.value));

   if (buscar.length > 0) {
      spanAlert.innerHTML = "";
      tabelaTipos.style.display = "";
      tituloTabela.display = "";
      return createElements(buscar);
   }
   tabelaTipos.style.display = 'none';
   tituloTabela.style.display = 'none';
   spanAlert.innerHTML = "<p class='alert alert-warning'>Usuario não encotrado!</p>"
})

async function deletetUser(id) {
   const url = `http://localhost:3000/tipos/${id}`
   const res = await axios.delete(url, id);
   alert(res.data.resposta);
   window.location.reload();
}

window.addEventListener("load", async (event) => {
   event.preventDefault();

   const tipos = await  getAlltiposproduto();
   globalTipos = tipos.data.resultados;
   createElements(tipos.data.resultados);

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
             window.location.href = `../alterarTipo/index.html?${id}`

         })
      })
   });

})