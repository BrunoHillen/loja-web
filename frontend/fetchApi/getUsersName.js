import axios from "axios";

export async function getUsersName(nome) {
    const url = `http://localhost:3000/usuarios/nome/${nome}`
    const res = await axios.get(url, nome);
    console.log(res)
    return res;
}