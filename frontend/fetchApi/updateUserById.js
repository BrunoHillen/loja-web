import axios from "axios";

export async function updateUserById(url, user) {
    //const url = `http://localhost:3000/usuarios/endereco/${id}`
    const res = await axios.put(url, user);

    return res;
};