import axios from "axios";

export async function updateTipoById(url, tipo) {
    //const url = `http://localhost:3000/usuarios/endereco/${id}`
    const res = await axios.put(url, tipo);

    return res;
};