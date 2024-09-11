import axios from "axios";

const inputNomeUsuario = document.getElementById("nomeUsuario");
const btnBuscarUsuarios = document.getElementById("buscarUsuarios");
const divUsuarios = document.getElementById("lista");
const tabelaUsuario = document.getElementById("tabelaUsuario")
const spanAlert = document.getElementById("spanAlert")
let tabelaTitulo = document.getElementById('tabelaTitulo');
let tituloTabela = document.getElementById('tituloTabela');
const tabelaUsuarios = document.getElementById('tabelaUsuarios')
const nomeUsuario = document.getElementById("nomeFornecedor");
const idUsuario = document.getElementById("idUsuario");


let globalUsuarios = null;
let btnEdit= null;



function createElements(array) {
   tabelaUsuario.innerHTML = " ";
   console.log(array);
   array.map((e) => tabelaUsuario.innerHTML += `
   <tr>
      <td>
         <h5>${e.idUsuario}</h5>
      </td>
      <td>
         <h5>${e.nomeUsuario}</h5>
      </td>
      <td>
         <button class="btnEdit btn btn-danger btn-xs"
         name="${e.idUsuario}">escolher</button>
      </td>
      
   </tr>
  
      `
   );
}

async function getAllUsers() {
   const url = `http://localhost:3000/usuarios`
   const res = await axios.get(url)
   return res;
}


inputNomeUsuario.addEventListener("input", async ({ target }) => {
   console.log(globalUsuarios)
   const buscar = globalUsuarios.filter(e => e.nomeUsuario.toLowerCase().includes(target.value));

   if (buscar.length > 0) {
      spanAlert.innerHTML = "";
      tabelaUsuarios.style.display = "";
      tituloTabela.display = "";
      return createElements(buscar);
   }
   tabelaUsuarios.style.display = 'none';
   tituloTabela.style.display = 'none';
   spanAlert.innerHTML = "<p class='alert alert-warning'>Usuario não encotrado!</p>"
})



window.addEventListener("load", async (event) => {
   event.preventDefault();

   const usuarios = await getAllUsers();
   console.log(usuarios)
   globalUsuarios = usuarios.data.resultados;
   console.log(globalUsuarios)
    createElements(usuarios.data.resultados);

    btnEdit = document.querySelectorAll(".btnEdit");

    let id = null;

    btnEdit.forEach(element => {
      
      element.addEventListener("click", async (event) => {
         event.preventDefault();
         id = element.name;
         idUsuario.value = id;
         console.log(id);

         //window.location.href = `../painelEditarUsuario/index.html?${id}`

      })

    })
      
   });



//strip ou slice
//