import axios from "axios";

export async function getTipoId(id) {
    const url = `http://localhost:3000/tipos/${id}`
    const res = await axios.get(url, id);
    console.log(res)
    return res;
}

