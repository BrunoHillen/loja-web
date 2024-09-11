import axios from "axios";

const formCadastroTipo = document.getElementById("form-cadastroTipo")

async function postTipo(data) {

    const url = "http://localhost:3000/tipos";
    const res = await axios.post(url, data);
    console.log(res);
    console.log(res.data.resposta);
}

formCadastroTipo.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, value } = document.getElementById("input-nome");
    postTipo({ [name]: value });

})




