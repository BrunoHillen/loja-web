import axios from "axios";

export async function updateProdutoById(id, data) {
    const url = `http://localhost:3000/produtos/${id}`              
    const res = await axios.put(url, data);

    return res;
};


