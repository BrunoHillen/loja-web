import axios from "axios";

export async function getUserId(id) {
    const url = `http://localhost:3000/usuarios/${id}`
    const res = await axios.get(url, id);
    console.log(res)
    return res;
}