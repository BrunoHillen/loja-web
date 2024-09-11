import axios from "axios";

export async function getProdutoNome(nome) {
    const url = `http://localhost:3000/produtos/nomeProduto/${nome}`
    const res = await axios.get(url, nome);
    console.log(res)
    return res;
}  

