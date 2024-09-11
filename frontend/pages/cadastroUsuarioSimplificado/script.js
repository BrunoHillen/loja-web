import axios from "axios";

const buscar = document.getElementById("buscar");

const formCadastro = document.getElementById("form-cadastro");




let data = {}

async function postUser() {
    const url = "http://localhost:3000/usuarios"

    const res = await axios.post(url, data);
    console.log(res);
    console.log(res.data.resposta);
    alert(res.data.resposta)  
    window.location.reload();
}

formCadastro.addEventListener("input", ({ target }) => {
    data = {
        ...data,
        [target.name]: target.value
    }

    console.log(data);
})
formCadastro.addEventListener("submit", async (event) => {
    event.preventDefault();
     postUser();

})



