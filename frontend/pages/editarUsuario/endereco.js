import axios from "axios";
const editarendereco = document.getElementById("alterarEndereco");
const divUsuarios = document.getElementById("lista");
//const formCadastro = document.getElementById("form-cadastro");


let data = {}

function createElements(array) {
   console.log(array) 
    divUsuarios.innerHTML = "";
    array.map((e) => divUsuarios.innerHTML += `
    <div class="col-4" >
       <h5>Nome:${e.nomeUsuario}</h5> 
       <h5>Endereço:${e.endereco}</h5>
       <h5>Bairro:${e.bairro}</h5>
       <h5>Cidade:${e.cidade}</h5>
     </div>        
    `
)}

async function getId(){
    const id = window.location.href.split("?")[1];
    const url = `http://localhost:3000/usuarios/${id}`
    const res = await axios.get(url, id);
    createElements(res.data.resultados);
   }

   async function alterar(id) {
    const url = `http://localhost:3000/usuarios/endereco/${id}`
    const res = await axios.put(url, data);
    console.log(res);
    alert(res.data.resposta)
    window.location.reload();
}

editarendereco.addEventListener("input", ({ target }) => {
    data = {
        ...data,
        [target.name]: target.value
    }
    console.log(data);
})

editarendereco.addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = window.location.href.split("?")[1];
    alterar(id);

})

getId()
   


