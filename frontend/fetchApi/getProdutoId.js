import axios from "axios";

export async function getProdutoId(id) {
    const url = `http://localhost:3000/produtos/${id}`
    const res = await axios.get(url, id);
    console.log(res)
    return res;
}