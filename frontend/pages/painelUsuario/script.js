import axios from "axios";

const inputNomeUsuario = document.getElementById("nomeUsuario");
const btnBuscarUsuarios = document.getElementById("buscarUsuarios");
const divUsuarios = document.getElementById("lista");
const tabelaUsuario = document.getElementById("tabelaUsuario")
const spanAlert = document.getElementById("spanAlert")
let tabelaTitulo = document.getElementById('tabelaTitulo');
let tituloTabela = document.getElementById('tituloTabela');
const tabelaUsuarios = document.getElementById('tabelaUsuarios')


let globalUsuarios = null;
let btnDelete = null;
let btnEdit = null;



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
         <button class="btnDelete btn btn-danger btn-xs"
         name="btn-${e.idUsuario}">Remover</button>
      </td>
      <td>
         <a class="btnEdit btn btn-dark btn-xs" name="${e.idUsuario}">Editar</a>
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

/*async function findElements() {
   const nomeUsuario = inputNomeUsuario.value.toLowerCase();
   const { data: { resultados } } = usuarios;
   const buscarUsuarioNome = resultados.filter(
      e => e.nomeUsuario.toLowerCase().includes(nomeUsuario))

   if (buscarUsuarioNome.length === 0) {
      return alert("usuario não encontrado!");
   }

   return createElements(buscarUsuarioNome);

}*/


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

async function deletetUser(id) {
   const url = `http://localhost:3000/usuarios/${id}`
   const res = await axios.delete(url, id);
   alert(res.data.resposta);
   window.location.reload();
}

window.addEventListener("load", async (event) => {
   event.preventDefault();

   const usuarios = await getAllUsers();
   console.log(usuarios)
   globalUsuarios = usuarios.data.resultados;
   console.log(globalUsuarios)
    createElements(usuarios.data.resultados);

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

//strip ou slice
//