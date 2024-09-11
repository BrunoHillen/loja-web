import axios from "axios";

export async function deleteProduto(id) {
    const url = `http://localhost:3000/produtos/${id}`
    const res = await axios.delete(url, id);
    return res;

    //    window.location.reload();
 }